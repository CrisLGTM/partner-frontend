# Partner Frontend

Standalone public partner gateway frontend for DORA.

## Routes

- `/partners/maxos` for `maxos.trade`
- `/partners/polytrade` for `polytrade.capital`

## Local Preview

```bash
npm run dev
```

Then open:

- `http://localhost:4173/partners/maxos`
- `http://localhost:4173/partners/polytrade`

## CTA Target

The current CTA target is configured in `src/main.js`:

```js
const DORA_URL = 'https://dora.tech'
```

Replace this with the final production DORA URL if it differs.

## Deployment

This is a static frontend with client-side route handling.

For direct public links like `/partners/maxos`, the host must rewrite all routes to
`index.html`.

Included:

- `vercel.json` for Vercel rewrites
- `public/_redirects` for Netlify-style rewrites

