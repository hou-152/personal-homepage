# v1-launch · Plan

## 背景

这个个人主页已经有 BRIEF、PRD、DESIGN、ARCHITECTURE 和 React/Vite 实现，但目录还不是 First Flight 标准结构。

本次工作不是重做网站，也不是新增功能，而是把现有 v1 整理成可持续迭代的 First Flight 基线：长期文档留在根目录，v1 迭代产物进入 `iterations/v1-launch/`，并补齐 AI 入口和 phase 记录。

基线补齐后，v1 还需要一次验收修整：去掉“待补充”带来的半成品感，强化站内证据入口，并确认构建与移动端展示可用。

## 范围

### 做

- 迁移 v1 PRD 到 `iterations/v1-launch/PRD.md`
- 补齐 `iterations/v1-launch/CONTENT.md`
- 补齐根目录 `AGENTS.md` 和 `CLAUDE.md`
- 创建 `iterations/v1-launch/.plan/`
- 记录当前 v1 实现与已知风险
- 修整 v1 中影响对外展示可信度的内容状态和空链接展示
- 重新构建并更新桌面 / 移动端截图

### 不做

- 不重写已有 BRIEF、DESIGN、ARCHITECTURE
- 不新增页面或功能
- 不深入排查构建性能问题，除非构建复查失败
- 不创建 git 仓库或提交

## 阶段总览

| Phase | 目标 | 状态 |
|---|---|---|
| 01-baseline-reconciliation | 补齐 First Flight v1 基线结构和入口文档 | completed |
| 02-v1-acceptance-polish | 把 v1 从“能看”修整到“敢发” | completed |
| 03-connect-github | 连接真实 GitHub 账号入口 | completed |
| 04-contact-info | 接入 Gmail、电话和微信联系方式 | completed |

## 关键决策

- 当前项目视为 v1 已存在，不重新走 0 到 1 的 BRIEF 交互。
- 根目录只保留长期文档和 AI 入口；首版 PRD 归档到 `iterations/v1-launch/`。
- `CONTENT.md` 作为 v1 内容索引，不复制所有文案，优先指向 `src/data/*.ts`。
- 后续新功能使用 `iterations/v2-{slug}/`，不回头改写 v1 PRD。

## Open Questions

- 暂无。
