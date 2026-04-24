# BASE AI Hub — Prototype

Single-file HTML prototype of a wallet-based multi-model AI platform. Users load prepaid credits and use ChatGPT Pro, Claude Pro, Perplexity Pro, Grok Pro, and Gemini Pro from one balance, paying per request with transparent upfront pricing.

## Run locally

Open `index.html` in any modern browser. No build step, no dependencies.

## What's inside

- Public landing: hero, tools, discovery use cases, pricing, footer.
- Authenticated app: chat-first dashboard, model selector with Smart Mode, chat history, wallet with session grouping, recurring top-up, discovery grid, tiered token-based pricing.
- i18n (DE default, plus EN and ES) via a globe dropdown.
- Fully responsive — real viewport breakpoints.
- Prototype-only: no backend, all state is in-memory.

## Deploy to Vercel (Hobby-plan friendly)

1. Import this repo on [vercel.com/new](https://vercel.com/new). Framework preset: **Other**. No build settings needed.
2. The site is served at `/` from `index.html` automatically.
3. **Password-protect the site** (free, works on Hobby):
   - Project Settings → **Environment Variables** → add
     - **Key**: `SITE_PASSWORD`
     - **Value**: whatever password you want (e.g. `2026-base`)
     - **Environments**: Production, Preview, Development (all 3).
   - **Redeploy** (Deployments → latest → ⋯ → Redeploy). Env vars only take effect after a deploy.
   - Visitors will see the browser's native Basic-Auth prompt. Username can be anything (leave blank or use `base`); password must match `SITE_PASSWORD`.
   - Credentials are cached by the browser for the session — users only enter them once.
   - To remove the protection, delete the env var and redeploy.

The auth is enforced server-side by `middleware.js` (Vercel Edge Middleware). The password never touches the client bundle.
