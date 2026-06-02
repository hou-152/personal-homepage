# WeChat Object Pipeline Eval Summary

Source date: 2026-06-02

Public version: redacted evidence summary. Full `raw.json` and full object set remain local.

## Local Pipeline Result

- Raw source: local WeChat JSON, not public.
- Object layer: `objects.json`
- Knowledge version: `objects.md`
- Share version: `fusion.html`
- Evaluation version: `eval.md`

## Current Eval Snapshot

- Verified objects: 14
- Sampled fact statements: 30
- Fully matched statements: 24
- Partial / inferred statements: 3
- Removed unsupported statements: 3

## Public Boundary

This public file is not the fact source. It only documents the quality gate.

Fact source remains local:

- `raw.json`
- `source_local_ids`
- `evidence_quotes`
- manual review of `eval.md`

## RAG Use

The RAG layer should index `objects.json` and `objects.md`, not the HTML share page.

Recommended retrieval unit:

- one object = one chunk
- object id as stable key
- source local ids as citation anchors
- fact level and confidence as filters
