# V16 Homepage Back Half Compression Plan

## Phase 01 - Spec

Status: completed

- Define homepage compression scope.
- Confirm full demo moves out of homepage and stays in case page.

## Phase 02 - Implement

Status: completed

- Remove homepage `AiNeicanDemo`.
- Add full `AiNeicanDemo` to the case page.
- Route homepage demo links to the case page.
- Compress Build Log into a short build snapshot.
- Update version and build log.

## Phase 03 - Verify

Status: partial

- Blocked: Vite production build hangs locally; needs follow-up.
- Completed: serve static esbuild preview on `http://127.0.0.1:4173/`.
- Completed: capture desktop homepage screenshot.
- Completed: capture mobile homepage screenshot.
- Completed: verify homepage has no `AI NEICAN DEMO`.
- Completed: verify case page still has `AI NEICAN DEMO`.
