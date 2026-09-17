# v13 Evidence Architecture Cleanup PRD

## 背景

V12 已经把 README、Agent Instructions、屏录 Demo 和岗位证据矩阵接入首页，但后半页出现了新的问题：证据足够了，呈现却开始像说明书。`岗位要求 -> 作品证据`、`作品背后的方法`、`能力地图`、`Build Log`、`Now Building` 在读者眼里有明显重叠，容易显得刻意包装。

本轮迭代目标不是继续增加证据，而是重排证据的信息架构，让读者先看到作品，再看到思考和交付方式。

## 本轮目标

1. 把“信息转化为判断，再将判断转化为行动”下沉到《serious AI 内参》代表作品内部，作为作品逻辑，而不是首页独立口号。
2. 增加“作品背后的思考”，用真实取舍替代四格方法库。
3. 合并 `能力证明 / 作品证据 / 方法论` 的重复表达，改成更自然的“我如何交付作品”。
4. 合并底部重复的 `Build Log / Now Building`，让 Build Log 负责已完成记录，Now Building 只作为当前焦点的小模块。

## 首页结构调整

新顺序：

1. Hero
2. Identity
3. Work Line
4. Projects / 代表作品
5. Thinking / 作品背后的思考
6. Delivery / 我如何交付作品
7. Featured Work Demo / 代表作品 Demo
8. Build Log / 持续建造记录
9. Contact

## 区块定义

### Projects / 代表作品

- 保留《serious AI 内参》为重点案例。
- 在代表作品卡片中明确表达：信息进入系统、形成判断材料、推动下一步行动。
- 其他项目继续作为旁证，但不再承担过多能力解释。

### Thinking / 作品背后的思考

用 3 条真实取舍表达：

- 为什么先做《AI 内参》，不是普通 AI 新闻页。
- 为什么保留人工判断，不把判断全部外包给 Agent。
- 为什么用 README、Instructions、屏录和构建记录证明，而不是只讲流程。

### Delivery / 我如何交付作品

合并原来的岗位证据矩阵、方法论和能力地图，只保留可验证交付能力：

- 工作流设计
- Agent 指令设计
- 工具 / API 接入
- 知识库与知识加工
- 可演示 Demo
- 待补：评测 / bad case、工程可运行性

标题不再使用“岗位要求”，避免显得像 JD 对照表。

### Build Log / 持续建造记录

- Build Log = 已完成构建记录。
- Now Building = 当前 1-3 个交付焦点，放在 Build Log 右侧小模块。
- 删除独立 Changelog / Now Building 大区块，避免重复。

## 非目标

- 不重写 BRIEF / DESIGN / ARCHITECTURE。
- 不新增复杂动效或新依赖。
- 不把《AI 内参》包装成完整产品官网。
- 不补真实 bad case 数据；本轮只保留 gap 状态。

## 验收标准

- 首页不再出现“岗位要求 -> 作品证据”这种过于直接的标题。
- 首页不再同时出现独立 Build Log 和独立 Now Building 大区块。
- “能力不是百分比...”这类宣言式标题被移除或降级。
- 代表作品、思考、交付证据、构建记录之间边界清晰。
- `npm run build` 或等价 Vite build 通过。
- 桌面和移动端无明显溢出、遮挡或空白。
