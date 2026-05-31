# Phase 01 · codex-project-map

Status: completed

## 目标

把 Codex 项目体系放进个人主页，形成公开可读的项目证据和工作台地图。

## 验收判据

- [x] v3 PRD 和 plan 建立完成。(`iterations/v3-codex-project-map/PRD.md`, `.plan/plan.md`)
- [x] 项目卡片升级为 Codex 项目精选集，并按用户筛选移除纵横分析法、LoSquare/Logseq、Codex Skill 工作台，补入个人公众号。(`src/data/projects.ts`)
- [x] 新增 Codex Workbench 页面区块。(`src/data/workbench.ts`, `src/App.tsx`)
- [x] 能力地图、成长线和 Build Log 与本轮内容一致。(`src/data/abilities.ts`, `src/data/growth.ts`, `src/data/build-log.ts`)
- [x] 页面不暴露本机路径、私有 ID 或内部原始数据。(`rg` privacy scan: only matched PRD prohibition text)
- [x] `npm run build` 通过。(`built in 2.26s`)

## Notes

- 本轮是内容和页面结构迭代，不改变部署平台。
- GitHub 链接只使用公开安全入口。
- 用户确认保留：个人主页、个人公众号、微信 ClawBot、AI 内参、思想孵化、桌面助手原型、PPT/PDF 视觉交付。
- 已更新桌面和移动端截图：`screenshots/home-desktop.png`, `screenshots/home-mobile.png`。
