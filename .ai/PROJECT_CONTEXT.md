# Project Context — yigiter-farm-showcase

Last reviewed: 2026-07-18

## Purpose & users
Public showcase website for Yiğiter Tarım, an agricultural supplier in Tekirdağ /
Süleymanpaşa (Türkiye). This is the original first-generation site, generated with the
Lovable / GPT-Engineer platform (49 of 50 commits are by `gpt-engineer-app[bot]`; the
template identity survives in the package name `vite_react_shadcn_ts`).

## Role: read-only reference
This repository serves as the REFERENCE for the company's successor website (original
assets and contact content live here). Treat it as read-only reference material:
- Do not delete it, rewrite its history, or restructure it casually.
- Content changes should only happen on an explicit owner request.

## Architecture
- Vite SPA: React 18 + TypeScript + Tailwind CSS v3 + shadcn/radix components.
- No backend, no environment variables, no tests. Static marketing pages.
- Four multi-MB PNG marketing assets under `src/assets/` account for most of the repo
  weight (~12 MB pack).

## Data & security boundaries
- No secrets anywhere (verified over the working tree AND full commit history).
- Business contact/address/phone in page content is intentional public marketing data.

## Constraints
- This repository is PUBLIC. Anything committed here is world-readable — keep all
  content (including docs and AI notes) public-safe.
- Two lockfiles are tracked (`package-lock.json` and `bun.lockb`); README documents the
  npm path — prefer npm unless the owner decides otherwise (open follow-up).

## Common commands
- `npm install` · `npm run dev` · `npm run build` (also: `build:dev`, `preview`).
- Gates: see `.ai/QUALITY_GATES.md`.

## Known open items
See `docs/ai-migration/MIGRATION_UNRESOLVED.md` (license, social-image path, lockfile
choice — all owner follow-ups; none block using the repo as reference material).
