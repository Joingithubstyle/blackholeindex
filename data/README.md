# Data

- `platforms-q3-2026.csv` — current release: all 184 platforms across 18 sectors with
  V3.1 parameter scores and computed B-index (Q3-2026). Matches the live rankings at
  https://blackholeindex.com/rankings and the API at https://blackholeindex.com/api/bhi
- `categories-q3-2026.csv` — the 18 sector definitions for Q3-2026
- `platforms-q1-2026.csv`, `categories.csv` — historical Q1-2026 snapshot (100 platforms,
  12 sectors), kept for reference

The live PostgreSQL database is the source of truth; these CSVs are exports.
