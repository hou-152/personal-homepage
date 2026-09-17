# Phase 03 Project Backfill

Status: pending

## Goal

把已确认的公开项目、真实入口和用户贡献口径回填到 V21 首页。

## Preconditions

- 用户验收 Phase 2。
- 用户确认新增仓库的个人贡献表述。
- 用户确认 AI 视频流水线的公开 Demo、案例页或可分享 proof 入口。
- 用户确认电话入口处理方式。

## Publication Blockers

- `public/wechat-rag` 是历史资产，Phase 2 不删除，但 V21 首页不得链接；Phase 3 必须决定它是否继续进入公开构建产物。
- AI 视频流水线当前没有已确认的公开 Demo、案例页或 proof 入口；确认前必须保持非点击状态。
- 本地提取微信聊天记录只允许公开工作流和隐私边界，不得链接聊天导出或展示原始数据。

## Selected Work

1. 《serious AI 内参》。
2. 本地提取微信聊天记录。
3. 碳水蛋白质配额卡。
4. AI 视频流水线。

## More Work

- Publication Engineering Workflow。
- Content Engine。
- WeChat Relationship Corpus Skill，默认只进入 Lab。

## Content Contract

每个精选项目最多包含：

- 一句话定义。
- 一句用户动作。
- 一条可核验证据。
- 一个主入口。
- 必要时一个次级入口。

More Work 每项只包含：

- 项目名。
- 一句话定义。
- 一个公开入口。

## Privacy Boundary

- 不读取或公开私有仓库 README 细节。
- 不公开微信原始聊天、身份映射、解密数据库和本机路径。
- 本地提取微信聊天记录只展示流程与隐私边界，不展示任何真实会话内容或私有运行数据。
- 不展示 `jiaoliu` chat export。
- 不把第三方评价直接搬到首页。
- 不把公开仓库的全部产出自动归因给用户。

## Acceptance Criteria

- 所有项目链接真实可打开。
- 无 `#workbench` 失效链接。
- 未核实数字不出现。
- 私有项目不出现在公开构建内容中。
- 项目文案明确区分项目事实和用户贡献。

## Tasks

- [ ] 用户确认贡献和数字口径。
- [ ] 处理 `public/wechat-rag` 发布 blocker。
- [ ] 确认 AI 视频流水线公开证据入口，或保持非点击状态。
- [ ] 回填 Selected Work。
- [ ] 回填 More Work。
- [ ] 处理 Lab / Now 降权项目。
- [ ] 检查所有公开链接。
- [ ] 停止并等待用户验收。
