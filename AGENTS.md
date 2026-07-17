# Project Instructions

Shared entry point for all coding agents working in this repository.

Reading order:
1. `.ai/PROJECT_CONTEXT.md` — purpose, architecture, constraints, common commands.
2. `.ai/CURRENT_TASK.md` if present — active work state.
3. `.ai/QUALITY_GATES.md` — run the listed gates relevant to your change.
4. `.ai/DECISIONS.md` — consult when a change touches a recorded decision.
5. `.ai/HANDOFF.md` if present — previous session's handoff.

Rules:
- Preserve this project's architecture and conventions.
- Change only task-scoped files.
- Run the listed quality gates before claiming completion; never invent gates.
- Update durable docs (`PROJECT_CONTEXT`, `DECISIONS`, `QUALITY_GATES`) only when durable facts change.
- Closer directory instructions take precedence over this file.
