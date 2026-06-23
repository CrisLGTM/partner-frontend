# DORA Partner Gateways

Static partner gateway website for DORA.

## Routes

- `/` gateway directory
- `/partners/maxos` for `maxos.trade`
- `/partners/polytrade` for `polytrade.capital`
- `/partners/duration` for `duration.io`
- `/partners/bonddesk` for `BondDesk`

Each partner page has a focused landing page and a primary CTA into:

```txt
https://dora-prod.vercel.app/auth/sign-in
```

Update `DORA_URL` in `src/main.js` if the production app URL changes.

## Local Preview

```bash
npm run dev
```

Then open:

- `http://localhost:4173/`
- `http://localhost:4173/partners/maxos`
- `http://localhost:4173/partners/polytrade`
- `http://localhost:4173/partners/duration`
- `http://localhost:4173/partners/bonddesk`

## Checks

```bash
npm run check
```

## GitHub Pages

This is a static site. For GitHub Pages, publish the repository root. The included
`404.html` mirrors `index.html` so direct partner URLs can still load the client
router after a GitHub Pages fallback.

## Other Hosts

Included routing support:

- `vercel.json` for Vercel rewrites
- `public/_redirects` for Netlify-style rewrites
