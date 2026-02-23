#!/usr/bin/env python3
import csv
import hashlib
import os
import re
import threading
import time
import xml.etree.ElementTree as ET
from collections import deque
from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from urllib.parse import urljoin, urlparse

import requests

SITE_URL = os.environ.get("SITE_URL", "https://buffalocannabisnetwork.com").rstrip("/")
OUTPUT_DIR = "/migration-data"
SITEMAP_CANDIDATES = ["/sitemap.xml", "/wp-sitemap.xml", "/sitemap_index.xml"]
USER_AGENT = "MigrationDataCollector/1.0 (+https://buffalocannabisnetwork.com)"


class GlobalRateLimiter:
    def __init__(self, requests_per_second: float = 2.0, crawl_delay: float = 0.0):
        self.min_interval = max(1.0 / requests_per_second, crawl_delay)
        self._lock = threading.Lock()
        self._last = 0.0

    def wait(self):
        with self._lock:
            now = time.monotonic()
            elapsed = now - self._last
            if elapsed < self.min_interval:
                time.sleep(self.min_interval - elapsed)
            self._last = time.monotonic()


def safe_filename(url: str) -> str:
    digest = hashlib.md5(url.encode("utf-8")).hexdigest()[:10]
    parsed = urlparse(url)
    stem = f"{parsed.netloc}{parsed.path}".strip("/").replace("/", "_")
    stem = re.sub(r"[^A-Za-z0-9._-]", "_", stem)[:80] or "sitemap"
    return f"{stem}_{digest}.xml"


def fetch_text(url: str, session: requests.Session, limiter: GlobalRateLimiter, timeout=30):
    limiter.wait()
    try:
        resp = session.get(url, timeout=timeout, allow_redirects=True)
        return resp
    except requests.RequestException:
        return None


def parse_robots(robots_text: str):
    sitemaps = []
    crawl_delay = 0.0
    active_for_us = False

    for raw_line in robots_text.splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#"):
            continue
        if "#" in line:
            line = line.split("#", 1)[0].strip()
        if ":" not in line:
            continue
        key, val = line.split(":", 1)
        key = key.strip().lower()
        val = val.strip()

        if key == "sitemap" and val:
            sitemaps.append(val)
        elif key == "user-agent":
            ua = val.lower()
            active_for_us = ua == "*"
        elif key == "crawl-delay" and active_for_us:
            try:
                crawl_delay = max(crawl_delay, float(val))
            except ValueError:
                pass

    return sitemaps, crawl_delay


def parse_sitemap_xml(xml_bytes: bytes):
    urls = []
    child_sitemaps = []
    try:
        root = ET.fromstring(xml_bytes)
    except ET.ParseError:
        return urls, child_sitemaps

    def local_name(tag: str):
        return tag.rsplit("}", 1)[-1]

    root_name = local_name(root.tag)

    if root_name == "urlset":
        for url_elem in root:
            if local_name(url_elem.tag) != "url":
                continue
            for child in url_elem:
                if local_name(child.tag) == "loc" and child.text:
                    urls.append(child.text.strip())
    elif root_name == "sitemapindex":
        for sm_elem in root:
            if local_name(sm_elem.tag) != "sitemap":
                continue
            for child in sm_elem:
                if local_name(child.tag) == "loc" and child.text:
                    child_sitemaps.append(child.text.strip())
    return urls, child_sitemaps


def extract_meta(html: str):
    def find_first(pattern, flags=re.IGNORECASE | re.DOTALL):
        m = re.search(pattern, html, flags)
        return unescape(re.sub(r"\s+", " ", m.group(1)).strip()) if m else ""

    title = find_first(r"<title[^>]*>(.*?)</title>")
    canonical = find_first(r'<link[^>]+rel=["\"][^"\"]*canonical[^"\"]*["\"][^>]*href=["\"]([^"\"]+)["\"][^>]*>')
    if not canonical:
        canonical = find_first(r'<link[^>]+href=["\"]([^"\"]+)["\"][^>]*rel=["\"][^"\"]*canonical[^"\"]*["\"][^>]*>')
    meta_desc = find_first(r'<meta[^>]+name=["\"]description["\"][^>]*content=["\"]([^"\"]*)["\"][^>]*>')
    if not meta_desc:
        meta_desc = find_first(r'<meta[^>]+content=["\"]([^"\"]*)["\"][^>]*name=["\"]description["\"][^>]*>')
    h1 = find_first(r"<h1[^>]*>(.*?)</h1>")
    h1 = re.sub(r"<[^>]+>", "", h1).strip()
    return canonical, title, meta_desc, h1


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    headers = {"User-Agent": USER_AGENT}
    session = requests.Session()
    session.headers.update(headers)

    robots_url = urljoin(SITE_URL + "/", "robots.txt")
    bootstrap_limiter = GlobalRateLimiter(requests_per_second=2.0, crawl_delay=0.0)
    robots_resp = fetch_text(robots_url, session, bootstrap_limiter)
    robots_text = robots_resp.text if robots_resp is not None and robots_resp.ok else ""

    with open(os.path.join(OUTPUT_DIR, "robots.txt"), "w", encoding="utf-8") as f:
        f.write(robots_text)

    robot_sitemaps, crawl_delay = parse_robots(robots_text)

    limiter = GlobalRateLimiter(requests_per_second=2.0, crawl_delay=crawl_delay)

    discovered_sitemaps = set(robot_sitemaps)
    for path in SITEMAP_CANDIDATES:
        discovered_sitemaps.add(urljoin(SITE_URL + "/", path.lstrip("/")))

    queue = deque(discovered_sitemaps)
    seen_sitemaps = set()
    all_urls = set()

    while queue:
        sitemap_url = queue.popleft()
        if sitemap_url in seen_sitemaps:
            continue
        seen_sitemaps.add(sitemap_url)

        resp = fetch_text(sitemap_url, session, limiter)
        if resp is None or resp.status_code >= 400:
            continue

        content_type = resp.headers.get("Content-Type", "")
        text = resp.content

        if b"<" not in text:
            continue

        filename = safe_filename(sitemap_url)
        with open(os.path.join(OUTPUT_DIR, filename), "wb") as f:
            f.write(text)

        urls, child_sitemaps = parse_sitemap_xml(text)
        for u in urls:
            all_urls.add(u)
        for child in child_sitemaps:
            if child not in seen_sitemaps:
                queue.append(child)

        # Some sites return sitemap on text/xml or application/xml, this variable retained for readability.
        _ = content_type

    sorted_urls = sorted(all_urls)

    with open(os.path.join(OUTPUT_DIR, "urls.csv"), "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        for u in sorted_urls:
            writer.writerow([u])

    def crawl_url(url: str):
        resp = fetch_text(url, session, limiter, timeout=25)
        if resp is None:
            return [url, "request_error", "", "", "", ""]
        status = resp.status_code
        canonical = title = meta_desc = h1 = ""
        ct = resp.headers.get("Content-Type", "")
        if "text/html" in ct or "application/xhtml+xml" in ct or "text/plain" in ct:
            html = resp.text[:2_000_000]
            canonical, title, meta_desc, h1 = extract_meta(html)
        return [url, status, canonical, title, meta_desc, h1]

    rows = []
    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = {executor.submit(crawl_url, u): u for u in sorted_urls}
        for future in as_completed(futures):
            rows.append(future.result())

    rows.sort(key=lambda x: x[0])

    with open(os.path.join(OUTPUT_DIR, "urls_with_meta.csv"), "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["URL", "status", "canonical", "title", "meta_description", "h1"])
        writer.writerows(rows)

    sitemap_saved = [f for f in os.listdir(OUTPUT_DIR) if f.endswith(".xml")]
    statuses = {}
    for row in rows:
        statuses[row[1]] = statuses.get(row[1], 0) + 1

    with open(os.path.join(OUTPUT_DIR, "report.md"), "w", encoding="utf-8") as f:
        f.write("# Migration Data Report\n\n")
        f.write(f"- Site: `{SITE_URL}`\n")
        f.write(f"- Crawl delay respected: `{crawl_delay}` seconds\n")
        f.write(f"- Sitemaps discovered: `{len(seen_sitemaps)}`\n")
        f.write(f"- Sitemap files saved: `{len(sitemap_saved)}`\n")
        f.write(f"- Unique URLs discovered: `{len(sorted_urls)}`\n\n")
        f.write("## HTTP Status Summary\n\n")
        for code, count in sorted(statuses.items(), key=lambda x: str(x[0])):
            f.write(f"- `{code}`: {count}\n")

    files = sorted(os.listdir(OUTPUT_DIR))
    print("Created files in /migration-data:")
    for name in files:
        print(name)


if __name__ == "__main__":
    main()
