# Buda's Pub - Next.js 14

A SEO-friendly website built with Next.js App Router + TypeScript + Tailwind.

## Scripts

- `npm run dev` - Start dev server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server

## Features

- App Router with rich `metadata` for SEO
- `robots.ts` and `sitemap.ts`
- JSON-LD (Restaurant schema) injected in `src/app/layout.tsx`
- Responsive navbar matching provided design/colors
- Pages: Buda's Pub, Events, Menu, Blog, Book, Contact
- Random images via picsum.photos (allowed in `next.config.js`)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

Update `metadataBase` and contact details for your real domain and business info before going live.
