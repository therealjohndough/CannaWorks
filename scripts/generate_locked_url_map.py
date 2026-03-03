#!/usr/bin/env python3
"""Generate migration-data/locked-url-map.csv from Search Console export CSV."""

import csv
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse

INPUT = Path('bcn-top-pages-3mo.csv')
OUTPUT = Path('migration-data/locked-url-map.csv')


def normalize_path(url: str) -> str:
    path = urlparse(url).path or '/'
    if not path.endswith('/'):
        path += '/'
    return path


def parse_int(value: str) -> int:
    value = (value or '').strip()
    return int(value) if value.isdigit() else 0


def main() -> None:
    totals = defaultdict(lambda: {'clicks': 0, 'impressions': 0})

    with INPUT.open(newline='', encoding='utf-8') as handle:
        reader = csv.DictReader(handle)
        for row in reader:
            path = normalize_path(row.get('Top pages', ''))
            totals[path]['clicks'] += parse_int(row.get('Clicks', '0'))
            totals[path]['impressions'] += parse_int(row.get('Impressions', '0'))

    ordered = sorted(
        totals.items(),
        key=lambda item: (-item[1]['clicks'], -item[1]['impressions'], item[0]),
    )

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open('w', newline='', encoding='utf-8') as handle:
        writer = csv.writer(handle)
        writer.writerow(['path', 'clicks_3mo', 'impressions_3mo', 'migration_action', 'notes'])
        for path, metrics in ordered:
            writer.writerow([
                path,
                metrics['clicks'],
                metrics['impressions'],
                'KEEP',
                'Preserve exact slug for SEO continuity',
            ])


if __name__ == '__main__':
    main()
