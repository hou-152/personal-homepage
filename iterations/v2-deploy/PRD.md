# PRD：v2-deploy

## 1. 背景

v1 已经完成本地页面、First Flight 基线、GitHub 账号入口和真实联系方式。下一步要把个人主页变成可对外访问的链接，让它能真正发给家人、老师、朋友和老板。

## 2. 本次目标

把当前 Vite + React 静态站发布到 GitHub Pages，并把 GitHub 仓库、部署配置和线上链接纳入项目工作流。

成功后应得到：

- 一个公开 GitHub 仓库
- 一个可访问的 GitHub Pages 链接
- 自动部署流程：推送 `main` 后自动构建并发布
- 本地文档记录部署入口和验证结果

## 3. 范围

### 本次做

- 初始化本地 Git 仓库
- 创建 GitHub 仓库 `hou-152/personal-homepage`
- 推送当前项目到 GitHub
- 配置 GitHub Actions + Pages 部署
- 配置 Vite 的 GitHub Pages base path
- 验证本地构建和线上访问
- 更新 First Flight 迭代记录

### 本次不做

- 不改视觉风格
- 不新增页面功能
- 不购买或绑定自定义域名
- 不接入复杂 CMS / 后台 / 评论系统

## 4. 验收标准

- `npm run build` 本地通过
- GitHub 仓库可访问
- GitHub Actions 部署成功
- 线上页面可打开
- 线上页面能正确加载 CSS / JS，不出现空白页
- 联系区仍显示 GitHub、Gmail、电话和微信号

## 5. 预计线上地址

`https://hou-152.github.io/personal-homepage/`
