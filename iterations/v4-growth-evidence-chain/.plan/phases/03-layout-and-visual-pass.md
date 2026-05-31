# Phase 03 · layout-and-visual-pass

Status: completed

## 目标

根据用户对 Phase 02 的验收反馈，调整首屏标题气质、身份区信息密度、项目卡片简洁度和 Build Log 的表达作用。

## 用户反馈

- 首屏标题太突兀，字体不喜欢。
- “我是谁”右侧有点空，可以放自我介绍。
- “成长不是一句口号”这句可以。
- 项目展示可以更简洁。
- 热力图更新太丑，看不出它有什么作用。

## 验收判据

- [x] 首屏标题更自然，字体层级更稳，不再过度突兀。(`/Users/housibo/Documents/个人主页/src/data/profile.ts:4`, `/Users/housibo/Documents/个人主页/src/App.tsx:84`, `/Users/housibo/Documents/个人主页/src/styles/global.css:134`)
- [x] “我是谁”右侧补充简短自我介绍。(`/Users/housibo/Documents/个人主页/src/data/profile.ts:10`, `/Users/housibo/Documents/个人主页/src/styles/global.css:333`)
- [x] 项目卡片更短、更容易扫读。(`/Users/housibo/Documents/个人主页/src/data/projects.ts:1`, `/Users/housibo/Documents/个人主页/src/App.tsx:204`)
- [x] Build Log / 热力图区块能明确说明它证明什么。(`/Users/housibo/Documents/个人主页/src/App.tsx:309`, `/Users/housibo/Documents/个人主页/src/styles/global.css:597`)
- [x] 桌面和移动端没有明显文字溢出或横向裁切。(`Browser check: 1180px overflow=false; 390px overflow=false`)
- [x] `npm run build` 通过。(`built in 3.48s`)
- [x] 用户选择 C 方案后，将 Growth Line 改为“把知识变成作品 / 作品线”。(`/Users/housibo/Documents/个人主页/src/App.tsx:26`, `/Users/housibo/Documents/个人主页/src/App.tsx:169`, `/Users/housibo/Documents/个人主页/src/data/growth.ts:1`)
- [x] 按用户参考图调整联系方式结构，但保持全站浅色 UI 体系。(`/Users/housibo/Documents/个人主页/src/App.tsx:380`, `/Users/housibo/Documents/个人主页/src/styles/global.css:739`)

## Notes

- 不改 v4 主叙事，只做表达和视觉层级收紧。
- 已更新截图：`/Users/housibo/Documents/个人主页/screenshots/v4-phase03-desktop.png`、`/Users/housibo/Documents/个人主页/screenshots/v4-phase03-mobile.png`、`/Users/housibo/Documents/个人主页/screenshots/v4-phase03-build-log.png`。
- 2026-05-31 追加：用户选择 C 方向，将“成长线”改为“作品线”，核心表达从“成长证明”改为“把知识变成作品”。`npm run build` 通过，Vite 构建耗时约 990ms。
- 2026-05-31 追加：联系方式采用左侧身份、右侧说明和圆形图标入口的结构；用户明确不要黑底，因此颜色保持当前纸色、黑框、绿色强调体系。`npm run build` 通过，Vite 构建耗时约 880ms。
