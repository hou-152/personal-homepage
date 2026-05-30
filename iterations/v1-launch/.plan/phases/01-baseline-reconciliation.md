# Phase 01 · baseline-reconciliation

Status: completed

## 目标

把已有个人主页整理成 First Flight 标准 v1 基线，便于后续进入 v2 迭代或普通修复。

## 验收判据

- 根目录包含长期文档和 AI 入口。
- `iterations/v1-launch/` 包含首版 PRD、CONTENT 和 `.plan/`。
- 后续 AI 能从 `AGENTS.md` 知道阅读顺序、代码地图和协作规则。
- 已知风险被明确记录，不被误判为已修复。

## Tasks

- [x] 创建 v1 标准迭代目录。(`iterations/v1-launch/.plan/plan.md:1`)
- [x] 将首版 PRD 迁入 v1 迭代目录。(`iterations/v1-launch/PRD.md:1`)
- [x] 补齐 v1 内容索引。(`iterations/v1-launch/CONTENT.md:1`)
- [x] 补齐 AI 入口文档。(`AGENTS.md:1`, `CLAUDE.md:1`)
- [x] 记录当前页面实现的主要区块。(`src/App.tsx:38`, `src/App.tsx:74`, `src/App.tsx:118`, `src/App.tsx:148`, `src/App.tsx:172`, `src/App.tsx:217`, `src/App.tsx:242`, `src/App.tsx:281`, `src/App.tsx:304`)
- [x] 记录内容数据来源。(`src/data/profile.ts:1`, `src/data/growth.ts:1`, `src/data/projects.ts:1`)
- [x] 复查构建命令。(`AGENTS.md:89`, command: `npm run build`, result: built in 6.58s)

## Notes

- 本 phase 没有改页面代码。
- 当前目录不是 git 仓库，后续执行前要继续避免假设有版本控制保护。
- 构建复查已通过；如后续再次卡住，再作为独立问题排查。
