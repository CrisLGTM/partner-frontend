# DORA Partner Gateways

Standalone public partner gateway frontend for DORA.

## Routes

- `/` gateway directory
- `/partners/maxos` for `maxos.trade`
- `/partners/polytrade` for `polytrade.capital`
- `/partners/duration` for `duration.io`
- `/partners/africa-trades` for `africa.trades`

## Local Preview

```bash
npm run dev
```

Then open:

- `http://localhost:4173/`
- `http://localhost:4173/partners/maxos`
- `http://localhost:4173/partners/polytrade`
- `http://localhost:4173/partners/duration`
- `http://localhost:4173/partners/africa-trades`

## CTA Target

The current CTA target is configured in `src/main.js`:

```js
const DORA_URL = 'https://dora-prod.vercel.app/auth/sign-in'
```

Replace this with the final production DORA URL if it differs.

## Checks

```bash
npm run check
```

## Deployment

This is a static frontend with client-side route handling.

For direct public links like `/partners/maxos`, the host must rewrite all routes to
`index.html`.

Included:

- `vercel.json` for Vercel rewrites
- `public/_redirects` for Netlify-style rewrites

