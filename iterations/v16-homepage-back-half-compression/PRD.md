# V16 Homepage Back Half Compression PRD

## Goal

V16 compresses the homepage back half so the page reads as a portfolio narrative instead of several large workbench sections stacked together.

## Problem

The previous homepage still felt unchanged because the most visually heavy sections remained:

- The full `AI NEICAN DEMO` interactive workbench still appeared on the homepage.
- `Build Log` still included a long right-side `Now Building` panel.
- The homepage rhythm was interrupted by a large demo section after delivery proof.

## Scope

- Remove the full `AI NEICAN DEMO` section from the homepage.
- Keep the full AI Neican demo inside the AI Neican case page.
- Route homepage demo links to the AI Neican case page.
- Compress `Build Log` into a shorter build snapshot:
  - keep contribution heatmap and stats
  - remove `Now Building`
  - show only the latest three completed build records
- Update site version and build log to V16.

## Out Of Scope

- Redesigning the hero visual system.
- Rewriting project card content.
- Removing the AI Neican case page.
- Changing deployment or committing to git.

## Acceptance Criteria

- Homepage order is:
  - Hero
  - Work Line
  - Projects
  - Thinking
  - Delivery Proof
  - Build Snapshot
  - Contact
- Homepage no longer renders a full `AI NEICAN DEMO` section.
- AI Neican case page still contains the full interactive demo.
- Build section no longer renders `Now Building`.
- Desktop and mobile screenshots show a visibly shorter back half.
