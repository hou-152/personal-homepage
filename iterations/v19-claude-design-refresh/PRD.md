# V19 Claude Design Refresh PRD

## Goal

V19 changes the personal homepage UI into a Claude / Anthropic inspired design direction while preserving the existing portfolio narrative and evidence chain.

## Source Reference

Claude Design is an Anthropic Labs research preview for creating visual work through a chat-and-canvas workflow. It is not a fixed website skin. For this homepage, the practical adaptation is to use Claude-like interface principles:

- warm paper surfaces
- restrained near-black text
- sparse semantic accents
- thin borders and soft depth
- editor / canvas style evidence panels
- clear hierarchy with less visual noise

## Problem

The current homepage UI is energetic but visually heavy:

- thick black borders and hard offset shadows make many sections compete for attention
- saturated green CTAs dominate the page
- cards read like bold showcase blocks rather than a calm evidence workspace
- the page already has strong content, so the visual system can become quieter and more editorial

## Scope

- Update the global visual system in `src/styles/global.css`.
- Move the site from heavy comic-like borders to Claude-style warm surfaces, fine borders, soft shadows, and restrained accent colors.
- Refresh Hero, featured work preview, project cards, Delivery Proof, Build Snapshot, contact, and AI Neican case surfaces through CSS.
- Keep the current page structure and data model.
- Update `DESIGN.md` with the new visual direction.
- Update site version and Build Log to V19.
- Verify with `npm run build` and local desktop/mobile preview.

## Out Of Scope

- Adding a live Claude Design integration.
- Rewriting project facts, links, or contact details.
- Replacing React / Vite / CSS stack.
- Changing deployment target.
- Committing to git.

## Acceptance Criteria

- Homepage visibly shifts from bold hard-shadow UI to warm Claude-like workspace UI.
- CTAs, badges, cards, evidence rows, heatmap, and case page use thin borders, soft radius, and restrained accents.
- Mobile layout remains readable with no obvious text overflow.
- `profile.siteVersion` shows V19.
- Build Log includes the V19 design refresh.
- `npm run build` completes or any blocker is clearly diagnosed.
