# V21 精选项目真源审计

审计时间：2026-07-20

## 结论

V21 的 4 个精选项目均存在 Codex 当前环境可访问的本地真源，审计结果为 `PASS`。

这里的 `PASS` 只表示项目定义可以追溯到本地文档、代码或运行证据，不表示所有内容都适合公开，也不自动证明用户完成了来源中的全部工作。

## 1. 《serious AI 内参》

状态：`PASS`

真源：

- `/Users/housibo/Documents/ai 内参/`
- `/Users/housibo/Documents/LogseqAll-git/pages/【agent 信息流系统】第4讲 codex 版内参编辑 agent.md`
- `src/data/ai-neican-case.ts`
- `src/data/ai-neican-demo.ts`
- `iterations/v5-ai-neican-demo/PRD.md`
- `iterations/v6-ai-neican-case/PRD.md`
- `public/media/ai-neican-demo-10s.m4v`

可公开表达：

- 存在真实的信息加工产物、站内 case 数据和 10 秒演示素材。
- 项目围绕信息接入、筛选、加工、笔记和判断材料展开。

边界：

- `3775 articles` 当前没有找到对应权威数据文件，V21 不使用。
- 本地导出物存在不等于每个统计数字都已核验。

## 2. 本地提取微信聊天记录

状态：`PASS`

真源：

- `/Users/housibo/Documents/微信聊天记录和思维孵化 agent/README.md`
- `/Users/housibo/Documents/微信聊天记录和思维孵化 agent/scripts/clean_wechat_sample.mjs`
- `/Users/housibo/Documents/微信聊天记录和思维孵化 agent/scripts/topic_slice_research.mjs`
- `/Users/housibo/Documents/微信聊天记录和思维孵化 agent/scripts/build_xiaowangshao_calibration_800.mjs`

可公开表达：

- 在本机以只读方式提取微信聊天记录。
- 当前流程覆盖文字、链接和文章卡片，并支持本地清洗和后续结构化处理。

边界：

- 不公开聊天原文、会话 ID、数据库密钥、身份映射、私有报告和本地导出数据。
- 首页不链接或展示 `jiaoliu` chat export。
- 不把思想孵化、RAG 入库或长期知识库写回描述成已经默认完成。

## 3. 碳水蛋白质配额卡

状态：`PASS`

真源：

- `/Users/housibo/Documents/碳水蛋白质配额卡/AGENTS.md`
- `/Users/housibo/Documents/碳水蛋白质配额卡/iterations/v1-launch/PRD.md`
- `/Users/housibo/Documents/碳水蛋白质配额卡/src/lib/calculateQuota.ts`
- `/Users/housibo/Documents/碳水蛋白质配额卡/src/data/quotaTable.ts`
- `/Users/housibo/Documents/碳水蛋白质配额卡/content/data/quota-table-source.md`
- `/Users/housibo/Documents/碳水蛋白质配额卡/给Codex的主页接入移交单.md`

可公开表达：

- 这是按性别、训练状态、目标、身高和体重查询碳水与蛋白质配额的生活化网页工具。
- 项目存在本地结构化数据、计算逻辑、React 页面和真实部署入口。

边界：

- 不描述为医疗诊断、个体化处方或专业备赛系统。
- 原始配额表需要保留来源说明，不把数据暗示为本项目原创。

## 4. AI 视频流水线

状态：`PASS`

正式真源：

- `/Users/housibo/Documents/工程化 skill/SOURCE_OF_TRUTH.md`
- `/Users/housibo/Documents/工程化 skill/skills/ai-video-pipeline/SKILL.md`
- `/Users/housibo/Documents/工程化 skill/skills/ai-video-pipeline/references/pipeline-contract.md`
- `/Users/housibo/Documents/工程化 skill/skills/ai-video-pipeline/references/capability-boundaries.md`
- `/Users/housibo/Documents/工程化 skill/skills/ai-video-pipeline/scripts/pipeline_controller.py`
- `/Users/housibo/Documents/内容资产/runs/2026-07-19-ai-control-v4-quality-contract-one-click-codex-proof-r1/pipeline-state.json`

可公开表达：

- 这是面向中文 16:9 解释型视频的受控生产线。
- 从 DBS 已确认并冻结的文案开始，接管配音字幕、全时间线视觉、Remotion 迭代、低清 proof 和 QA。
- 存在 Codex 真实运行到 `proof_ready` 的本地证据。

边界：

- 默认交付低清 proof，不能把 pending 的人工验收或正式导出说成已经完成。
- 不声称覆盖事实核查、法律清权、复杂 3D / VFX、目标受众理解或传播效果。
- 当前公开证据入口仍待确认；本地绝对路径不能进入公开页面。

## 执行约束

- Phase 2 可以使用以上 4 个项目名和已核对的一句话定义进行结构设计。
- Phase 3 回填时必须重新读取本文件指向的真源，不从聊天记忆扩写。
- 任何动态数字、用户贡献结论或公开入口都要在上线前单独复核。
- 私有材料和本机绝对路径不得进入网站构建产物。
