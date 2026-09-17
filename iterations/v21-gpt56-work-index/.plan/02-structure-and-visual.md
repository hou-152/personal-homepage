# Phase 02 Structure and Visual

Status: completed

## Goal

把首页重构为 4 段编辑式工作索引，并实现 V21 暖白 + 橙红视觉系统。

## Preconditions

- 用户验收 Phase 1。
- 不在本 phase 回填尚未确认的个人贡献文案。

## Planned Scope

- 重构首页为 Hero、Selected Work、More Work + Build、Contact。
- 删除首页重复的 AI 内参案例表达。
- 将右侧 Hero Canvas 改为 4 行 Project Index。
- 合并 Growth、Thinking、Delivery Proof 和 Build Heatmap 的首页职责。
- 建立 V21 视觉 tokens 和响应式规则。
- 保持 AI 内参 case 页可访问。
- 保持现有技术栈和静态部署方式。

## Implementation Boundary

- 允许修改：首页相关 React 结构和样式。
- 不允许修改：私有数据、部署配置、Git 历史。
- 不新增第三方设计或动画依赖。
- 不把 V21 实现成 V19 / V20 之上的第三层大规模覆盖；优先删除或替换首页冲突规则。

## Acceptance Criteria

- 首页只剩 4 个主要叙事区段。
- 桌面 Hero 首屏先讲人，右侧只显示项目索引。
- 手机 Hero 目标高度不超过 900px。
- 同一项目事实不在多个区段完整重复。
- 视觉使用暖白、近黑和单一橙红信号色。
- 不依赖 hover 才能理解内容。

## Tasks

- [x] 用户验收 Phase 1。
- [x] 更新首页结构。
- [x] 实现 V21 视觉系统。
- [x] 完成桌面和手机初步结构检查。
- [x] 停止并等待用户验收。

## Phase 2 Result

- 首页入口已收束为 Hero、Selected Work、More Work + Build、Contact 4 个组件。
- V20 首页专属 React 结构已移除。
- V20 `.v20-swiss` 首页样式块已被 V21 样式替换，没有继续叠加。
- Hero 右侧改为 4 行 Project Index。
- 《serious AI 内参》只在 Selected Work 中完整表达一次。
- 其余 3 个精选项目使用真源审计允许的中性结构占位。
- AI 视频流水线没有公开证据入口，当前保持非点击状态。
- 首页没有链接 `public/wechat-rag`。
- Case 路由继续支持 `#/ai-neican-case`，同时兼容 `#/ai-neican` 前缀。
- `1440 × 1000` 实测：首页 4 个 section，Hero 高 `936px`，总高 `3535px`，无横向溢出。
- `390 × 844` 实测：Hero 高 `753px`，总高 `4162px`，无横向溢出，首页点击目标均不小于 `44px`。
- 首页主内容链接为 10 个，未发现失效 hash 或缺少安全 `rel` 的新标签页外链。
- AI 内参 case 回归通过：6 个 Demo 步骤、6 个证据卡、10 秒视频和返回首页入口均存在。
- `npx vite build` 已通过；`tsc --noEmit` 两次超过 30 秒无输出并被终止，因此完整 `npm run build` 仍不能标记为通过。
- production bundle 仍会复制 `public/wechat-rag`，已登记为 Phase 3 发布 blocker。
- 本 phase 未冻结最终外链、提交或部署。
