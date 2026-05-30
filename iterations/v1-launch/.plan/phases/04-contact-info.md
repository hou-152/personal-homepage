# Phase 04 · contact-info

Status: completed

## 目标

把用户确认的 Gmail、电话和微信号接入联系区，让页面具备真实联系方式。

## 验收判据

- Gmail 使用 `mailto:` 链接。
- 电话使用 `tel:` 链接。
- 微信号直接展示，不做不可靠跳转。
- `npm run build` 通过。
- 浏览器检查能看到 Gmail、电话、微信号和 GitHub。

## Tasks

- [x] 写入联系方式数据。(`src/data/links.ts:1`)
- [x] 更新联系区渲染逻辑。(`src/App.tsx:1`, `src/App.tsx:309`)
- [x] 补充联系方法样式。(`src/styles/global.css:176`, `src/styles/global.css:616`)
- [x] 同步内容索引和 AI 入口状态。(`iterations/v1-launch/CONTENT.md:96`, `AGENTS.md:89`)
- [x] 构建并浏览器检查。(`npm run build`, result: built in 897ms; browser check: GitHub, Gmail, phone, WeChat visible)
- [x] 更新首页截图。(`screenshots/home-desktop.png`, `screenshots/home-mobile.png`)

## Notes

- 联系方式来自用户本轮明确提供。
- 本 phase 不创建外部账号，不发送消息，不上传任何数据。
