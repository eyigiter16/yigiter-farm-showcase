# Decisions (append-only)

Record format — append new entries at the end; never rewrite history. Superseded decisions stay,
marked and linked to their replacement.

---

## D-0001 — Note-only stewardship of this public repository
- Date: 2026-07-18
- Status: accepted
- Decision: this repository is retained unchanged as the public reference/showcase site.
  The 2026-07-18 AI-setup pass deliberately added ONLY the agent entry files and this
  `.ai/` documentation set — no source, README, or metadata edits. Known quality defects
  (missing LICENSE, social-preview image pointing at a dev source path, dual lockfiles)
  were recorded as owner follow-ups instead of being fixed.
- Rationale: the repo is public and serves as read-only reference material for the
  successor site; unsolicited edits here have the highest blast radius in the workspace.
  Defect fixes need an explicit owner request.
- Alternatives considered: fixing the social-image path and adding a LICENSE during the
  pass — declined (out of scope for a documentation-only change to a public repo).
- Independence level: N/A (no council)
