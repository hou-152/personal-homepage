# Phase 01 · github-pages-deploy

Status: in progress

## 目标

创建 GitHub 仓库并通过 GitHub Pages 发布个人主页。

## 验收判据

- 本地 Git 仓库初始化完成。
- GitHub 仓库 `hou-152/personal-homepage` 创建完成。
- `main` 分支推送成功。
- GitHub Pages 配置为 GitHub Actions 部署。
- GitHub Actions 成功完成部署。
- 线上页面可访问。

## Tasks

- [x] 配置 Vite GitHub Pages base path。(`vite.config.ts:4`)
- [x] 增加 GitHub Pages Actions workflow。(`.github/workflows/deploy.yml:1`)
- [x] 本地构建通过。(`npm run build`, result: built in 2.11s; `GITHUB_PAGES=true npm run build`, result: built in 2.12s)
- [ ] 初始化 Git 仓库并提交。
- [ ] 创建公开 GitHub 仓库并推送。
- [ ] 启用 GitHub Pages。
- [ ] 验证线上页面。
- [ ] 同步 AGENTS 和部署记录。

## Notes

- 本轮会把当前项目推送到公开 GitHub 仓库。
- 本轮不发送消息，不填写第三方表单，不上传项目之外的本地文件。
