# Phase 02 · content-data-refactor

Status: completed

## 目标

重写页面数据和关键区块文案，让首页先在内容层面完成“成长证据链”转向。

## 验收判据

- [x] Hero 和身份文案从“AI 工作台”转为“用 AI 把想法变成作品”。(`/Users/housibo/Documents/个人主页/src/data/profile.ts:3`, `/Users/housibo/Documents/个人主页/src/App.tsx:83`)
- [x] 成长线路改成“想法 -> 结构化 -> 作品 -> 公开 -> 迭代”的证据链。(`/Users/housibo/Documents/个人主页/src/data/growth.ts:1`, `/Users/housibo/Documents/个人主页/src/App.tsx:157`)
- [x] 项目卡片显示“问题 / 我做了什么 / 它证明什么”。(`/Users/housibo/Documents/个人主页/src/data/projects.ts:5`, `/Users/housibo/Documents/个人主页/src/App.tsx:193`)
- [x] Workbench 区块改名并改写为“作品背后的方法”。(`/Users/housibo/Documents/个人主页/src/data/workbench.ts:1`, `/Users/housibo/Documents/个人主页/src/App.tsx:237`)
- [x] 能力地图和 Build Log 支撑成长证据链。(`/Users/housibo/Documents/个人主页/src/data/abilities.ts:1`, `/Users/housibo/Documents/个人主页/src/data/build-log.ts:74`)
- [x] 已否定项目和不可公开信息未出现在页面源数据中。(`rg "纵横|中横|LoSquare|Codexbox|Skill 工作栏|蚂蚁学姐|麻衣学姐" src`: no matches)

## Notes

- 本阶段以内容结构为主；复杂视觉和移动端 polish 放到 Phase 03。
- 如果 TypeScript 类型需要配合项目卡片字段调整，可以同步改 `src/App.tsx` 的渲染文案。
- `npm run build` 通过，Vite 构建耗时约 1.90 秒。
- 已刷新本地预览，浏览器检查确认首屏标题、作品背后的方法、问题 / 我做了什么 / 它证明什么均可见。
