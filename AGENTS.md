# 个人主页 · AGENTS

> 这份文档是 Codex / Claude 进入本项目的入口。拿到项目目录后，请先读完这份文档再开始工作。

## 项目一句话

这是一个面向家人、老师、朋友和老板的个人主页，用来展示我用 SpecDrivenCoding 做出的一个网站，以及我持续成长、持续探索和持续产出的轨迹。

## 文档地图

本项目已补齐 First Flight v1 基线。长期文档在根目录，首版迭代产物在 `iterations/v1-launch/`。

### 长期文档

| 文档 | 内容 |
|---|---|
| [BRIEF.md](./BRIEF.md) | 项目长期纲领：用户、场景、核心价值、本质边界 |
| [DESIGN.md](./DESIGN.md) | 视觉与 UX：整体气质、页面叙事、组件风格 |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | 技术选型、目录结构、数据管理、部署原则 |
| [AGENTS.md](./AGENTS.md) | 本文件：AI 入口、阅读顺序、协作规则 |
| [CLAUDE.md](./CLAUDE.md) | 指向本文件的一行入口 |

### v1 迭代产物

| 文件 | 内容 |
|---|---|
| [iterations/v1-launch/PRD.md](./iterations/v1-launch/PRD.md) | v1 功能、页面结构、目标衡量 |
| [iterations/v1-launch/CONTENT.md](./iterations/v1-launch/CONTENT.md) | v1 内容槽和数据源索引 |
| [iterations/v1-launch/.plan/](./iterations/v1-launch/.plan/) | v1 phase 记录和后续实施管理入口 |

## 代码地图

| 问题 | 去哪里查 |
|---|---|
| 页面由哪些区块组成 | `src/App.tsx` |
| 首屏、身份、统计文案 | `src/data/profile.ts` |
| 成长线路 | `src/data/growth.ts` |
| 项目卡片 | `src/data/projects.ts` |
| 能力地图 | `src/data/abilities.ts` |
| Build Log 和热力图内容 | `src/data/build-log.ts` |
| 联系入口 | `src/data/links.ts` |
| 全局样式 | `src/styles/global.css` |

## 项目边界

### 永远会做

- 展示高能量、高成长、持续探索和持续产出的一面。
- 用项目、尝试、能力和价值作为证据。
- 保持稳定、好打开、移动端可用。
- 让网站本身成为 SpecDrivenCoding 的作品证明。

### 永远不做

- 不做普通日记、流水账或低价值碎片。
- 不为了炫技牺牲加载速度和访问稳定性。
- 不虚构项目、联系方式、GitHub 或能力证据。
- 不把 v2 的具体页面需求塞回 BRIEF 或 DESIGN。

## 技术栈

- 前端：Vite + React
- 语言：TypeScript
- 样式：普通 CSS
- 图标：lucide-react
- 数据：本地结构化 `src/data/*.ts`
- 部署：静态托管

命令以 `package.json` 为准：

```bash
npm run dev
npm run build
npm run preview
```

## 协作规则

1. 先读本文件，再读 BRIEF、当前迭代 PRD、DESIGN、ARCHITECTURE 和 CONTENT。
2. 小修复可以直接做，但影响页面结构、新功能或跨多文件的改动必须先写清方案。
3. 新功能走新迭代：创建 `iterations/vN-{slug}/PRD.md` 和对应 `.plan/`，不要改写 `iterations/v1-launch/PRD.md`。
4. 影响长期定位的改动先讨论 BRIEF；影响视觉系统的改动同步 DESIGN；影响技术栈或依赖的改动同步 ARCHITECTURE。
5. 复杂任务必须用 phase 管理，每个 phase 完成后停下来让用户验收。
6. 用户已明确偏好：先研究，然后讨论；用户作为决策者确定方案，OK 之后再执行。
7. 不要替用户 commit。本目录当前不是 git 仓库，不能假设有版本控制保护。

## 当前项目状态

- 2026-05-30 已复查 `npm run build`，构建通过，最近一次 Vite 构建耗时约 4.51 秒。
- `src/data/links.ts` 中 GitHub、Gmail、电话和微信号已连接为真实联系方式。
- 现有截图位于 `screenshots/`，最近一次桌面和移动端截图已在 v1 验收修整后更新。

## Spec Sync

判断是否需要同步 spec 时，问一句：下次 AI 看到这个项目时是否必须知道这件事？

- 是长期定位变化：更新 `BRIEF.md`
- 是视觉和体验变化：更新 `DESIGN.md`
- 是技术栈、依赖、目录变化：更新 `ARCHITECTURE.md`
- 是当前迭代范围变化：更新当前迭代的 `PRD.md`
- 是 v1 内容数据变化：更新 `src/data/*.ts`，必要时同步 `iterations/v1-launch/CONTENT.md`
- 是新功能：新建下一轮 `iterations/vN-{slug}/`

## 验证建议

每次代码改动后至少检查：

```bash
npm run build
```

涉及视觉时还要检查：

- 桌面首屏是否仍然有冲击力
- 手机端文字是否溢出或遮挡
- 导航、按钮、项目卡片、Build Log 是否可读
- 页面是否仍符合 BRIEF 的稳定性原则
