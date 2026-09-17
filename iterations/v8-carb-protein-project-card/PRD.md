# v8 · 碳水蛋白质配额卡接入 PRD

## 背景

用户已经把「碳水蛋白质配额卡」部署到 GitHub Pages，并提供了准确 Demo、源码仓库和接入移交单。本轮只改个人主页，把这个已上线工具纳入项目证据。

## 目标

- 在项目证据区新增「碳水蛋白质配额卡」卡片。
- 卡片必须保留 Demo 和 GitHub 链接。
- 不改动减脂工具项目本身。
- 同步移除不再需要展示的「PPT / PDF 视觉交付」项目卡片。

## 内容

新增项目卡片使用移交单第 2 节提供的字段：

- title: 碳水蛋白质配额卡
- demoUrl: https://hou-152.github.io/carb-protein-quota-card/
- githubUrl: https://github.com/hou-152/carb-protein-quota-card
- status: ready

## 验收

- 项目区能看到「碳水蛋白质配额卡」。
- 卡片 Demo 链接打开 GitHub Pages。
- 卡片 GitHub 链接打开源码仓库。
- 页面不再展示「PPT / PDF 视觉交付」项目卡片。
- `npm run build` 通过。
