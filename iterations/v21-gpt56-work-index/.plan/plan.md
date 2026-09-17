# V21 GPT-5.6 Work Index Plan

## Background

用户已经确认 V21 采用「编辑式工作索引」方向，并接受暖白 + 近黑 + 橙红的视觉系统和推荐精选项目组合。

本轮不是为 V20 再叠加一层视觉皮肤，而是同时收束信息架构、项目权重和首页长度。

## Phase Overview

| Phase | 目标 | 状态 |
|---|---|---|
| 01-spec-and-content | 冻结 V21 范围、内容权重、证据和隐私边界 | completed |
| 02-structure-and-visual | 重构首页结构并实现编辑式视觉系统 | completed |
| 03-project-backfill | 回填已确认项目、真实链接和贡献口径 | pending |
| 04-verify | 构建、桌面 / 手机截图和链接验收 | pending |

## Key Decisions

- Hero 先讲侯斯博本人，不再讲完整 AI 内参案例。
- 首页收束为 Hero、Selected Work、More Work + Build、Contact 4 个主要区段。
- 精选项目固定为 1 主 + 3 辅。
- 《serious AI 内参》只完整讲一次。
- 个人主页不再给自己做项目卡，只在页脚保留构建证据。
- 未完成或无独立公开证据的项目降权到 Lab / Now。
- 不在 V21 中继续使用大面积 Build Heatmap。
- V21 不新增运行时依赖，不改变静态部署架构。
- V21 实现时优先清理首页样式关系，不再简单追加第三层覆盖。

## Selected Work Freeze

1. 《serious AI 内参》。
2. 本地提取微信聊天记录。
3. 碳水蛋白质配额卡。
4. AI 视频流水线。

## More Work Candidates

- Publication Engineering Workflow。
- Content Engine。
- WeChat Relationship Corpus Skill，默认只进入 Lab。

## Stop Rule

每个 phase 完成后必须停止，等待用户验收。

当前已完成 Phase 2，等待用户验收。未经下一次确认，不进入 Phase 3 内容回填、构建、截图、提交或部署。

## Worktree Boundary

当前工作树已有与 V21 无关的删除文件、截图、预览和输出目录。

V21 不恢复、不删除、不移动、不提交这些现有改动。
