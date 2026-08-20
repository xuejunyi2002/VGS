# VGS Studio Website

The public marketing site for VGS Studio, an independent game studio based in
Vancouver. Built with [Next.js](https://nextjs.org) (App Router), TypeScript,
and Tailwind CSS.

## Pages

- `/` — Homepage: hero, studio intro, featured game (Kaiju Corp.), community CTA.
- `/about` — Studio intro and the four-person core team.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Structure

- `src/app` — routes (`page.tsx`, `about/page.tsx`), global styles, fonts.
- `src/components` — reusable UI (Navbar, Hero, FeaturedGame, TeamMember, etc.).
- `src/lib/data.ts` — content data: nav links, socials, team roster, game info.
  Edit this file to update copy, links, or team members without touching
  component code.

## Placeholder assets

The site currently ships with no real artwork or photography. Game art,
character art, and team photos are represented by labeled placeholder blocks
(`src/components/PlaceholderArt.tsx`, `src/components/TeamMember.tsx`) so the
layout is easy to verify. Swap in real assets under `public/` and wire them
into those components when available. Social links in `src/lib/data.ts` are
also placeholders (`#`) until the studio's real Discord/Instagram/YouTube
accounts are ready to link.

## Scripts

- `npm run dev` — start the dev server.
- `npm run build` — production build.
- `npm run lint` — run ESLint.
