# Owner Follow-ups — yigiter-farm-showcase (2026-07-18)

Recorded as notes only; none were fixed (note-only pass, see `.ai/DECISIONS.md` D-0001).

1. **No LICENSE file.** As a public repository this defaults to all-rights-reserved.
   Decide whether that is intended; add a license file if not.
2. **Social-preview/favicon paths.** `index.html` points `favicon`, `og:image` and
   `twitter:image` at `/src/assets/logo-yigiter-single.png` — a dev-server source path
   that crawlers cannot fetch from a production build. Fix = move the asset to `public/`
   (or reference a built asset URL) when the site is next touched.
3. **Dual lockfiles.** `package-lock.json` AND `bun.lockb` are both tracked; README
   documents npm. Pick one toolchain and drop the other lockfile.
4. **Template identity.** `package.json` name is still `vite_react_shadcn_ts`
   (generated-template default; `private: true`). Cosmetic — rename only if the repo
   stays actively maintained.
