# V15 Homepage Flow Reduction PRD

## Goal

V15 reduces homepage friction by removing the repeated `Identity / 我是谁` section and letting the homepage flow from hero directly into the work line.

## Problems

1. The homepage repeats identity information:
   - Hero already says `侯斯博 / Da Capo`.
   - The `Identity / 我是谁` section repeats Da Capo and introduces project state again.
2. The Identity section mixes unrelated semantic levels:
   - identity/person statement
   - Da Capo explanation
   - current focus / project status
3. The section creates a layout problem because the right side becomes a long stack of explanation cards.

## Scope

### In Scope

- Remove the standalone `Identity / 我是谁` section from the homepage.
- Keep identity copy only in the hero.
- Update navigation after removing `#identity`.
- Update version and build log to V15.

### Out of Scope

- Redesigning project cards.
- Moving or removing the full AI Neican Demo.
- Shortening or restructuring Build Log.
- Changing the visual system.
- Rewriting all AI Neican case evidence.
- Adding a new standalone Build Log route.
- Committing or pushing changes.

## Desired Homepage Flow

```text
Hero
侯斯博 / Da Capo
一句定位
代表作品预览

↓

Work Line
把知识变成作品

↓

Projects
重点案例 + 旁证作品

↓

Thinking
作品背后的思考

↓

Delivery Proof
交付证据索引

↓

AI Neican Demo
轻量演示

↓

Build Log
持续建造记录

↓

Contact
```

## Acceptance Criteria

- Homepage no longer renders `Identity / 我是谁`.
- Navigation has no dead `#identity` link.
- Hero remains clear and does not duplicate a second identity explanation below it.
- Homepage now moves from Hero directly into Work Line.
- Build passes.
- Desktop and mobile screenshots confirm the reduced flow.
