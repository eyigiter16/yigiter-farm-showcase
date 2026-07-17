# Quality Gates

Only commands that actually exist in this repository. Never invent a gate; add one only with the
exact command and when it was verified.

## Fast checks (every change)
- `npm run lint` (`eslint .`) — exists but is not documented in the README.
  Current baseline VERIFIED 2026-07-18 at HEAD 5bd3a1e: **10 problems (3 errors,
  7 warnings)** — all pre-existing in the generated template (2× empty-interface,
  1× require-style import in `tailwind.config.ts`, 7× react-refresh warnings).
  Gate = no NEW findings beyond this baseline; do not chase the baseline without an
  explicit owner request (see `.ai/DECISIONS.md` D-0001).

## Build
- `npm run build` (`vite build`) — VERIFIED clean 2026-07-18 at HEAD 5bd3a1e
  (built in ~5.5s). Also available: `npm run build:dev`, `npm run preview`.

## Known unavailable checks
- No test suite of any kind (no runner configured).
- No CI workflows in-repo.
- No type-check script (tsc is not wired into the build for this template).
