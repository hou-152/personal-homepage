# Phase 02 · v1-acceptance-polish

Status: completed

## 目标

把 v1 从“能看”修整到“敢发”：去掉空链接和半成品提示，强化真实站内证据，并完成构建和视觉检查。

## 验收判据

- 页面不再展示“GitHub 待补充 / 邮箱待补充”。
- 项目卡片不再因为空 GitHub 字段显示半成品占位。
- 项目状态表达更接近可发布 v1，而不是未完成草稿。
- `npm run build` 通过。
- 桌面和移动端截图已更新。

## Tasks

- [x] 调整项目卡片数据状态。(`src/data/projects.ts:1`, `src/styles/global.css:437`)
- [x] 移除空 GitHub 项目的“待补充”占位展示。(`src/App.tsx:194`)
- [x] 调整联系区空链接逻辑，改为站内证据入口。(`src/App.tsx:309`)
- [x] 增加 v1 验收相关 Build Log。(`src/data/build-log.ts:38`)
- [x] 修复移动端首屏横向裁切。(`src/styles/global.css:24`, `src/styles/global.css:669`)
- [x] 构建项目并检查页面。(`npm run build`, result: built in 4.51s; browser check: no "待补充", project/build proof links visible)
- [x] 更新桌面和移动端截图。(`screenshots/home-desktop.png`, `screenshots/home-mobile.png`)

## Notes

- 不虚构 GitHub、邮箱或外部项目链接。
- 本 phase 不引入新依赖，不改变技术栈。
- 本 phase 使用预览服务 `http://localhost:4174/` 做了浏览器验收。
