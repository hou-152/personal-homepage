# PRD：v12 国内访问速度与 Agent 证据直观化

## 背景

个人主页已经完成 v11 首屏版本化，当前代表作品聚焦《serious AI 内参》。现在的主要问题不是页面是否好看，而是：

1. 国内访问需要保持轻量、稳定，不应因为 demo 视频或外链素材拖慢首屏。
2. 面向 AI Agent 求职时，作品证据需要更直观地对应岗位要求，而不是让访问者自行推理。

## 本轮目标

本轮迭代把首页从“个人展示页”进一步推进成“AI Agent 求职作品集入口”。

核心目标：

- 保留 GitHub Pages 静态部署，不引入后台或重依赖。
- demo 视频只做轻量、延迟加载入口，不能进入首屏自动下载。
- 在首页新增 Agent 证据矩阵，把岗位要求、已有证据、链接和状态直接对应起来。
- 在《serious AI 内参》case 页增加 README、Agent Instructions、屏录 demo 等真实证据入口。

## 范围

### 本轮会做

- 新增 `v12-china-speed-evidence-clarity` 迭代文档和 phase。
- 把桌面 `.mov` demo 转成站内 10 秒轻量片段和 poster。
- 首页代表作品区新增：
  - 工作流 README
  - Agent Instructions
  - 10 秒实录 demo
  - 证据矩阵入口
- 首页新增 AI Agent 证据矩阵区块。
- case 页顶部新增更直观的链路说明和外部证据按钮。
- 构建验证，检查产物大小。

### 本轮不做

- 不把 75MB 原视频直接放进首屏或自动加载。
- 不立刻迁移到国内 CDN。
- 不改长期 BRIEF / DESIGN / ARCHITECTURE。
- 不声明已经完成 RAG、测试集、bad case、后端部署等尚未成型的证据。

## 成功标准

- 首屏仍然轻量，不自动加载大视频。
- 访问者能在首页看到“岗位要求 -> 我的证据 -> 链接 -> 状态”的矩阵。
- README 是主证据入口，Agent Instructions 是技术附录入口。
- demo 实录可以播放，但只在用户主动进入 demo 区后加载。
- `npm run build` 通过。

