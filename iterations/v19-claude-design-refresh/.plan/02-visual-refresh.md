# Phase 02 Visual Refresh

Status: completed

## Goal

Apply the Claude-style UI refresh to the homepage and case page surfaces.

## Acceptance Criteria

- Global CSS tokens use warm Claude-like palette, thin borders, soft shadows, and restrained accents.
- Hero, cards, buttons, evidence rows, build snapshot, contact, and case surfaces visually match the new direction.
- Version and Build Log show V19.

## Tasks

- [x] Update version and Build Log. (`src/data/profile.ts`, `src/data/build-log.ts`)
- [x] Refresh global CSS tokens and major component styles. (`src/styles/global.css`, `output/playwright/v19-home-desktop.png`, `output/playwright/v19-home-mobile.png`)
- [x] Check source for accidental leftover hard-shadow dominance. (`src/styles/global.css`, mobile hard-shadow override removed)

## Notes

Keep content and contact facts unchanged.
