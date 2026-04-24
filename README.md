# BASE AI Hub — Prototype

Single-file HTML prototype of a wallet-based multi-model AI platform. Users load prepaid credits and use ChatGPT Pro, Claude Pro, Perplexity Pro, Grok Pro, and Gemini Pro from one balance, paying per request with transparent upfront pricing.

## Run locally

Open `base_ai_hub_prototype_v2.html` in any modern browser. No build step, no dependencies.

## What's inside

- Public landing: hero, tools, discovery use cases, pricing, footer.
- Authenticated app: chat-first dashboard, model selector with Smart Mode, chat history, wallet with session grouping, recurring top-up, discovery grid, tiered token-based pricing.
- i18n (DE default, plus EN and ES) via a globe dropdown.
- Fully responsive — real viewport breakpoints (no simulated device frame).
- Prototype-only: no backend, all state is in-memory.

## Deploy to Vercel

1. Import this repo into Vercel (Framework preset: **Other**, no build).
2. `vercel.json` rewrites `/` → `base_ai_hub_prototype_v2.html`.
3. Protect the preview with **Vercel Deployment Protection**:
   - Project Settings → **Deployment Protection** → **Password Protection** → set a password.
   - Visitors will see Vercel's own password prompt before the page loads. The password is stored server-side and never reaches the browser.
   - Note: Password Protection requires a **Pro** plan. On the Hobby plan, use Vercel Edge Middleware (server-side Basic Auth with a password stored in an env var) as a free alternative.
