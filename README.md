# VELVE — Intimate Wellness, Quietly Luxurious

A premium, conversion-focused storefront for a modern intimate wellness brand,
built as a UI/UX showcase. Editorial design system, dark/light theme,
twelve products, full subscription flow, and a magazine-style journal.

> **Status:** UI/UX demo — no database, no payments, no auth. All product
> data lives in `src/lib/mock-data.ts` so the site can be deployed anywhere
> as a static-ish Next.js app.

---

## Live demo

**[velve-wellness.vercel.app](https://velve-wellness.vercel.app)**

---

## Tech stack

| Concern        | Choice                                                            |
| -------------- | ----------------------------------------------------------------- |
| Framework      | Next.js 14 (App Router, Server Components)                        |
| Language       | TypeScript (strict)                                               |
| Styling        | Tailwind CSS · ShadCN-style primitives · CSS custom properties    |
| Animation      | Framer Motion                                                     |
| State          | Zustand (cart + UI), persisted to localStorage                    |
| Theming        | `next-themes` (light-first, dark mode toggle)                     |
| Typography     | Fraunces (display, with italics) + Inter (body)                   |
| Hosting        | Vercel                                                            |

No backend dependencies — Stripe, NextAuth, Prisma, and Postgres were
intentionally removed for the demo.

---

## What's included

### Pages

- `/` — editorial landing page (hero, trust strip, featured grid, manifesto, ritual CTA, testimonials, FAQ)
- `/products` — full collection with category, type, and sort filters
- `/products/[slug]` — product detail page with multi-image gallery, variants, certifications, safety info
- `/cart` — full cart page
- `/checkout` — multi-section checkout form (UI only, posts to a confirmation page)
- `/order-confirmation/[orderNumber]` — thank-you screen
- `/subscribe` — interactive Ritual subscription builder (3 plans × 3 cadences, live total)
- `/journal` — magazine index with featured article + 5 entries
- `/journal/[slug]` — long-form article with drop cap, hero image, "continue reading" grid

### Features

- **Editorial design system** — bone + deep aubergine palette, oversized serif headlines with italic accents, magazine-style numbered sections, marquee announcement bar
- **Aesthetic dark mode** — midnight aubergine, champagne text, dusty rose accent (theme-aware via CSS variables)
- **Cart drawer** — Zustand-backed, persists across reloads
- **Coupon engine** — try `WELCOME10` at checkout for 10% off
- **WhatsApp floating support button**
- **12 mock products** — 6 condoms, 4 lubricants, 2 sets — each with 2–4 verified Unsplash product images
- **6 sample journal articles** across categories (Studio, Ingredients, Field notes, Conversations)

---

## Getting started

```bash
git clone https://github.com/Huzaifa2/Safety-Website.git
cd Safety-Website
npm install
npm run dev
# open http://localhost:3000
```

That's it. There are no environment variables required to run the demo.

### Optional environment

```bash
cp .env.example .env
# NEXT_PUBLIC_WHATSAPP_NUMBER=+10000000000
```

---

## Folder structure

```
src/
  app/
    (shop)/
      products/                  Catalog + PDP
      cart/                      Cart page
      checkout/                  Checkout
      order-confirmation/        Thank-you
      subscribe/                 Ritual subscription builder
      journal/                   Magazine index + [slug]
    layout.tsx                   Root layout, fonts, providers
    page.tsx                     Landing page
    globals.css                  Theme tokens + utilities
  components/
    ui/                          ShadCN-style primitives
    layout/                      Header, Footer, Theme, BrandMark
    landing/                     Hero, TrustStrip, Featured, Manifesto, FAQ, ...
    product/                     Card, Filters, Gallery, AddToCart
    cart/                        CartDrawer
    checkout/                    CheckoutForm
  lib/
    mock-data.ts                 12 products + selectors
    journal-data.ts              6 articles + selectors
    utils.ts                     cn, formatPrice
  store/                         Zustand stores (cart, ui)
  types/
public/
  favicon.svg                    VELVE brand mark
```

---

## Theming

Light and dark themes are driven by CSS custom properties in
`src/app/globals.css`. Section-level surfaces are exposed as theme-aware
utility classes so any block can flip cleanly:

| Class               | Use                                                    |
| ------------------- | ------------------------------------------------------ |
| `.surface-elevated` | Hero / soft elevated panels                            |
| `.surface-feature`  | Manifesto / brand-feel callouts (deep aubergine)       |
| `.surface-inverse`  | Footer / inverse blocks (flips foreground/background)  |

This is the mechanism that fixed the footer's unreadable dark-mode text:
`surface-inverse` carries its own foreground, so it always reads correctly.

---

## Deploy on Vercel

The simplest path:

1. Push this repo to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects as Next.js — accept defaults.
4. No environment variables required for the demo.
5. Click **Deploy**.

The first deploy completes in ~1 minute.

For production with payments / auth / DB, see the original commit history
for a full Stripe + NextAuth + Prisma scaffold that can be reintroduced.

---

## Scripts

```bash
npm run dev         # Start dev server on http://localhost:3000
npm run build       # Production build
npm run start       # Run production build
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
```

---

## Roadmap (if you want to take it further)

- Reintroduce Stripe Checkout for a real payment flow
- Replace mock data with a CMS (Sanity, Payload) or Prisma + Postgres
- Add product reviews UI (model is already designed)
- Wishlist
- Multi-currency switcher
- Resend transactional emails (order placed, shipped, delivered)
- Algolia / Meilisearch for catalog search

---

## License

MIT — feel free to use the design system, components, and patterns in your
own projects.
