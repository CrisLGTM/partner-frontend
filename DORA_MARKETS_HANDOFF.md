# DORA Markets Prototype Handoff

This branch is a frontend-only visual prototype for the DORA Markets / Markets Overview experience.

## Preview Route

- `/partners/bonddesk`

## Important Notes

- Do not treat this as production landing-page work.
- Do not merge this directly into the static landing pages project without product/FE review.
- Market values, table rows, activity metrics, ticker data, and yield curves are static frontend mock data.
- The Multi-Asset Yield Curves chart uses inline SVG paths as a visual reference only.
- The intended destination is the real DORA app Markets page, where these modules should be wired to supported data sources.

## Prototype Modules

- DORA Markets header and macro strip
- Live DORA Markets table
- Rates Snapshot
- Watchlist
- Latest Market Activity
- Markets Overview cards
- Multi-Asset Yield Curves
- Compact Market Briefs

## Product Guardrails

- Avoid unsupported credit-market sections such as Tokenized Credit, IG Credit, HY Credit, and USDC Yield unless backed by real product data.
- Keep Launch App as the only external CTA unless real routes exist.
- Keep the page data-first and aligned with the dark institutional DORA app direction.
