# Invoice Generator - Fabrax

A Vite + React + Tailwind (v4 via @tailwindcss/vite) project for generating invoices and exporting to PDF.

## Local Development

```bash
npm install
npm run dev
```

Note: This project is set up to use npm. Using Yarn may work locally, but our Render deploy is configured to use npm. Stick to npm for installs and builds.

## Type Check and Build

```bash
npm run typecheck
npm run build
npm run preview
```

If you encounter a missing `vite` command, ensure dependencies are installed with `npm install`. `vite` is a devDependency and will be available via npm scripts.

## Deploy on Render (Static)
- This repo includes `render.yaml` configured for a static site:
  - Build Command: `npm install && npm run build`
  - Publish Directory: `dist`

Once pushed to GitHub, create a new Static Site on Render and point it to this repo.

### Fonts
We include [src/styles/fonts.css](src/styles/fonts.css), which imports Inter from Google Fonts and sets a sensible `--font-sans` stack.
