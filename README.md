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

### Render Node Version
- Render defaults to Node 22.x for recent services. We've pinned Node to 20.17.1 via `.node-version` and `package.json` `engines` (>=20.17.1 <22) to avoid an `npm` resolver bug causing `Invalid Version` during install.
- If you created the service via the dashboard (not blueprints), also set `NODE_VERSION=20.17.1` in the service's Environment tab for immediate effect.
- Alternatively, add `.nvmrc` with `20.17.1` (already included) — Render honors this for builds.

### Troubleshooting
- If a deploy fails with `npm error Invalid Version:`, ensure the Node version is 20.x (check the build logs for "Using Node.js version"), then redeploy.
- If you prefer Yarn or pnpm on Render, enable Corepack and set `YARN_VERSION` or `PNPM_VERSION` as env vars; update the build command accordingly.

### Fonts
We include [src/styles/fonts.css](src/styles/fonts.css), which imports Inter from Google Fonts and sets a sensible `--font-sans` stack.
