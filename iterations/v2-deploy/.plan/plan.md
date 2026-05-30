# v2-deploy · Plan

## 背景

v1 已经完成本地页面和联系方式接入，但仍然只能在本地访问。本轮迭代要把它发布到 GitHub Pages，形成可分享链接。

## 范围

### 做

- 初始化 Git 仓库
- 创建公开 GitHub 仓库
- 配置 GitHub Pages 自动部署
- 推送代码
- 验证线上页面
- 同步 AGENTS / phase 记录

### 不做

- 不改页面叙事和视觉方向
- 不购买域名
- 不新增博客、后台或 CMS

## 阶段总览

| Phase | 目标 | 状态 |
|---|---|---|
| 01-github-pages-deploy | 创建仓库并部署到 GitHub Pages | completed |

## 关键决策

- 使用 GitHub Pages 托管静态站。
- 仓库名使用 `personal-homepage`。
- 线上路径使用 `/personal-homepage/`，Vite 只在 GitHub Pages 构建时启用该 base。
- 使用 GitHub Actions 自动部署，避免手动维护 `gh-pages` 分支。
- 线上地址是 `https://hou-152.github.io/personal-homepage/`。

## Open Questions

- 暂无。
