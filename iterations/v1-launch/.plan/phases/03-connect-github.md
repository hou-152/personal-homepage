# Phase 03 · connect-github

Status: completed

## 目标

把 v1 页面连接到真实 GitHub 账号入口，避免继续使用空链接或占位状态。

## 验收判据

- 联系区显示真实 GitHub 入口。
- 关键项目卡片有 GitHub 入口。
- 页面不出现“待补充”。
- `npm run build` 通过。
- 桌面和移动端截图已更新。

## Tasks

- [x] 确认本机 GitHub 登录账号。(`gh auth status`, result: account `hou-152`)
- [x] 确认公开 GitHub 账号主页。(`gh api user`, result: `https://github.com/hou-152`)
- [x] 连接全局 GitHub 入口。(`src/data/links.ts:1`)
- [x] 连接关键项目卡片 GitHub 入口。(`src/data/projects.ts:1`)
- [x] 增加 GitHub 接入 Build Log。(`src/data/build-log.ts:51`)
- [x] 同步内容索引和 AI 入口状态。(`iterations/v1-launch/CONTENT.md:73`, `AGENTS.md:89`)
- [x] 构建并浏览器检查。(`npm run build`, result: built in 1.23s; browser check: 3 GitHub links, no "待补充")
- [x] 更新截图。(`screenshots/home-desktop.png`, `screenshots/home-mobile.png`)

## Notes

- 没有创建 GitHub 仓库，也没有把本地项目上传到 GitHub。
- 发现 `hou-152/hou-152` 是私有仓库，因此没有把访客链接导向该仓库。
- 当前链接目标是公开账号主页 `https://github.com/hou-152`。
