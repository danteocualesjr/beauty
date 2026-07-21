# Beauty

One painting, one photograph, one quote, one book — chosen for today.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.local.example` to `.env.local`:

- `UNSPLASH_ACCESS_KEY` — optional; enables live Unsplash photography
- `MET_API_ENABLED` — set to `false` to use curated paintings only
- `OPEN_LIBRARY_ENABLED` — set to `false` to use curated book metadata only

Without API keys, the app uses curated JSON fallbacks for all categories.

## Deploy

Deploy to [Vercel](https://vercel.com) with the project root set to this directory.

```bash
npm run build
```

## Content

Curated pools live in `data/curated/`. Daily selection is deterministic by UTC date — everyone sees the same four items on the same day.
