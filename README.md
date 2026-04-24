# BASE AI Hub — Prototype

Single-file HTML prototype of a wallet-based multi-model AI platform. Users load prepaid credits and use ChatGPT Pro, Claude Pro, Perplexity Pro, Grok Pro, and Gemini Pro from one balance, paying per request with transparent upfront pricing.

## Run locally

Open `base_ai_hub_prototype_v2.html` in any modern browser. No build step, no dependencies.

## Access

A frontend password gate protects the prototype. Default password: `2026-base`.

## What's inside

- Public landing: hero, tools, discovery use cases, pricing, footer.
- Authenticated app: chat-first dashboard, model selector with Smart Mode, chat history, wallet with session grouping, recurring top-up, discovery grid, tiered token-based pricing.
- i18n (DE default, plus EN and ES) via a globe dropdown.
- Fully responsive — real viewport breakpoints (no simulated device frame).
- Prototype-only: no backend, all state is in-memory.

## Deploy to Vercel

1. Import this repo into Vercel (no framework preset required — static site).
2. `vercel.json` rewrites `/` to `base_ai_hub_prototype_v2.html`, so the root URL serves the prototype directly.
3. Add security headers (`X-Content-Type-Options`, `Referrer-Policy`) and a no-cache policy on the HTML so updates ship immediately.
