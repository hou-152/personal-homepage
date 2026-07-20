# V19 Claude Design Refresh Plan

## Background

The user goal is to find Claude Design and change the personal homepage UI accordingly. Research confirmed Claude Design is a chat-and-canvas design tool, not a reusable fixed theme, so V19 translates the Claude / Anthropic visual language into this homepage.

## Scope

Do:

- create V19 iteration spec
- update long-term visual guidance in `DESIGN.md`
- refresh CSS visual system and major homepage surfaces
- update version/build log
- verify build and rendered desktop/mobile behavior

Do not:

- integrate Claude Design as a product
- invent new project content
- alter contact data
- commit changes

## Phase Overview

| Phase | Goal | Status |
|---|---|---|
| 01-spec | Capture V19 scope and Claude-style visual direction | completed |
| 02-visual-refresh | Apply the UI refresh in CSS and version data | completed |
| 03-verify | Build and inspect desktop/mobile preview | completed |

## Key Decisions

- Treat Claude Design as inspiration and source workflow, not as a runtime dependency.
- Preserve existing homepage section order to avoid mixing UI refresh with information-architecture changes.
- Prefer CSS-only component refresh unless markup changes become necessary for visual correctness.
- Keep all changes incremental because the worktree already contains user/history changes.

## Open Questions

- Whether the user later wants the public GitHub Pages deployment updated after local verification.
