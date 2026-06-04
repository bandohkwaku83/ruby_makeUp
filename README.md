# Ruby Opoku — Makeup Artist Portfolio

A luxury editorial portfolio site for Ruby Opoku, built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Design inspiration

The layout draws from high-end bridal and beauty portfolios (editorial hero imagery, serif typography, masonry galleries, and clear booking CTAs) — similar to trends seen on award-winning makeup artist sites and luxury beauty brands.

## Sections

- **Hero** — Full-screen imagery with booking CTA
- **About** — Your bio and signature stats
- **Services** — Bridal, soft glam, editorial, everyday glam
- **Portfolio** — Filterable masonry gallery (replace Unsplash placeholders with your work)
- **Testimonials** — Client quotes
- **Contact** — Inquiry form and details

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Copy & content:** Edit `src/lib/content.ts`
- **Images:** Replace URLs in `content.ts` and `Hero.tsx` / `About.tsx`, or add files under `public/`
- **Contact email:** Update `site.email` in `content.ts`
- **Colors & fonts:** Adjust `src/app/globals.css` and `layout.tsx`

## Build

```bash
npm run build
npm start
```

## Deploy

Deploy easily on [Vercel](https://vercel.com) or any Node.js host that supports Next.js.
