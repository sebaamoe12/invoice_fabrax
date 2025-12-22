# Invoice Generator - Fabrax

A Vite + React + Tailwind (v4 via @tailwindcss/vite) project for generating invoices and exporting to PDF.

## Local Development

```bash
npm install
npm run dev
```

## Type Check and Build

```bash
npm run typecheck
npm run build
npm run preview
```

## Deploy on Render (Static)
- This repo includes `render.yaml` configured for a static site:
  - Build Command: `npm install && npm run build`
  - Publish Directory: `dist`

Once pushed to GitHub, create a new Static Site on Render and point it to this repo.
