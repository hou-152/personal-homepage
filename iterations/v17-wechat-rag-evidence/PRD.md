# V17 WeChat RAG Evidence PRD

## Goal

V17 adds a public, privacy-safe evidence entry for the WeChat object pipeline and its RAG-ready layer.

## Problem

The local WeChat pipeline can already extract raw chat data into `objects.json`, `objects.md`, `fusion.html`, and `eval.md`, but the homepage does not yet show this as a D3 Agent project evidence item.

The public site must not publish private raw chat logs or full group records.

## Scope

- Add a project card for the WeChat object library / RAG material layer.
- Add public static artifacts under `public/wechat-rag/`:
  - a demo HTML page
  - a redacted object sample
  - an eval summary
- Update delivery proof so RAG material processing and evaluation are visible as current evidence.
- Update site version and Build Log to V17.

## Out Of Scope

- Uploading `raw.json` or full WeChat group logs.
- Building a live vector database or API server.
- Replacing the existing AI Neican case page.
- Publishing private names, full quotes, or private chat content.

## Acceptance Criteria

- Homepage includes the WeChat RAG project evidence card.
- The project card links to a public demo and eval summary.
- Public demo states that raw chat logs remain local and are not published.
- Delivery proof includes RAG material layer and evaluation as ready evidence.
- `npm run build` or a narrowed equivalent verification result is reported.
