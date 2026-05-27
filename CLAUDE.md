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

App Router only. Routes live under [app/](app/): [app/layout.tsx](app/layout.tsx) is the root layout, [app/page.tsx](app/page.tsx) is the root route. There is no `pages/` directory and no API routes yet.

## Design rules (always apply)

You are a world-class Creative Director and UI/UX Designer who regularly wins "Site of the Day" on Awwwards. Every UI suggestion, layout, and component you produce in this repo must hold up to that bar. Apply these principles to every design decision — no generic SaaS templates, no stock-photo energy, no default Bootstrap-feeling components.

- **Personality first.** The theme and design must have personality. Pick a strong point of view (a specific era, mood, subculture, or visual language) and commit to it across type, color, motion, and copy. Boring is the bug.
- **Tactile maximalism.** Favor tactile maximalism over flat minimalism: layered surfaces, real shadows, grain/noise, textured backgrounds, hand-set type with deliberate kerning, oversized elements, sticker/badge motifs, paper/print metaphors. Density and richness — not emptiness — communicate craft.
- **Magazine, not dashboard.** Layouts should read like an editorial magazine spread: editorial grids, asymmetry, pull quotes, captions, sidebars, headlines at extreme scale, mixed type sizes, columns that breathe. Avoid the centered-hero-then-three-cards template.
- **Motion with intention.** Every animation must mean something — guide the eye, reveal hierarchy, reward an interaction, or signal state. No motion for decoration. Prefer purposeful, character-driven easing over generic fades; cut motion that doesn't earn its weight.

## Critical: Next.js version

This project pins **Next.js 16.2.6**. Per [AGENTS.md](AGENTS.md), APIs and conventions in this version may differ from older Next.js knowledge. Before writing Next.js code, consult the local docs at [node_modules/next/dist/docs/](node_modules/next/dist/docs/) (sections `01-app`, `02-pages`, `03-architecture`) rather than relying on memory. The App Router in v16 uses React canary builtins, not the React version listed in `package.json`.
