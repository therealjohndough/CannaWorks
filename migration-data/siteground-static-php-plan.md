# SiteGround Deployment Plan (Static Next.js + PHP Control Room)

## 1) SEO route lock
- Source of truth: `bcn-top-pages-3mo.csv`.
- Locked migration route list: `migration-data/locked-url-map.csv`.
- Rule: preserve slugs exactly where possible (especially `/`, `/events/`, `/news/...`, `/members/...`, `/membership/`, `/about/`, `/contact...`).

## 2) Next.js static export configuration
This repository now uses static export-compatible settings:
- `output: 'export'`
- `trailingSlash: true`
- `images.unoptimized: true`

Build output is generated in `/out` and can be uploaded directly to `public_html`.

## 3) Content source strategy
- CMS seed content is versioned in JSON: `migration-data/content/cms-data.json`.
- The CMS storage layer now reads from JSON seed data (`lib/cms/storage.ts`) to avoid server-only runtime dependencies.
- This enables fast, deterministic static builds while the PHP control room is developed.

## 4) SiteGround redirect policy
- `.htaccess` template added at `public/.htaccess` (copied into export output) with:
  - trailing slash canonicalization
  - starter 301 redirects for known legacy slugs
- Add additional 301 rules from `locked-url-map.csv` if any slug changes are unavoidable.

## 5) PHP control room (separate app)
Recommended structure (same domain under `/control-room/` or subdomain):
- `/api/auth`
- `/api/assets`
- `/api/requests`

MVP roles:
- Super Admin: users/roles + final approvals
- Marketing Admin: manage tickets + upload assets
- Retail Partner: download assets + submit requests

Public site can consume these endpoints client-side for dynamic portal/ticket operations while preserving static SEO pages.
