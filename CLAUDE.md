# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)

There is no test runner configured.

## Stack

- **Next.js 16.2.6** (App Router) with **React 19.2** and **TypeScript** (strict).
- **Tailwind CSS v4** via `@tailwindcss/postcss` — v4 uses CSS-first config in [app/globals.css](app/globals.css); there is no `tailwind.config.*`.
- Path alias `@/*` → repo root (see [tsconfig.json](tsconfig.json)).

## Architecture

App Router only. Routes live under [app/](app/): [app/layout.tsx](app/layout.tsx) is the root layout (loads Geist fonts via `next/font`), [app/page.tsx](app/page.tsx) is the root route. There is no `pages/` directory and no API routes yet.

## Critical: Next.js version

This project pins **Next.js 16.2.6**. Per [AGENTS.md](AGENTS.md), APIs and conventions in this version may differ from older Next.js knowledge. Before writing Next.js code, consult the local docs at [node_modules/next/dist/docs/](node_modules/next/dist/docs/) (sections `01-app`, `02-pages`, `03-architecture`) rather than relying on memory. The App Router in v16 uses React canary builtins, not the React version listed in `package.json`.
