# V20 Guizang Swiss Redesign PRD

## Goal

把个人主页从 V19 的 Claude 暖色工作台，推进到更强的「Swiss Style 作品证据系统」。

这次不是换一个皮肤，而是借 guizang-ppt-skill 的瑞士国际主义视觉方法，把首页重新组织成更像 AI 产品经理作品集的界面：高对比标题、严格网格、单一锚点色、证据块、流程图和可扫读项目案例。

## Source Reference

- guizang-ppt-skill: Style B Swiss International
- 关键原则：16 列网格、1px hairline、极大字号对比、直角色块、单一高饱和锚点色、无渐变、无圆角卡片堆砌、图片和截图作为证据块而不是装饰。
- 主题推荐：IKB 克莱因蓝。理由：适合 AI、科技、产品、设计领域，冷静、理性、有作品集气质。

## Problem

当前 V19 已经完成一次 Claude Design 方向的软化，但还有几个问题：

- CSS 是旧视觉规则加 V19 覆盖，视觉系统不够干净。
- 首屏仍然像「个人介绍 + 代表作品卡片」，不够像可交付的产品作品集。
- 项目卡片信息多，但视觉层级接近，访问者不容易快速判断最强代表作品。
- 首页和简历的代表作品叙事还没有完全同步。
- guizang Swiss 的强网格、强证据、强标题优势还没有被迁移到主页。

## Product Position

V20 首页不是普通个人主页，也不是 Claude 仿站。

它应该像一个可以公开发送的 AI 产品作品证据页：

- 第一眼：这个人有明确的 AI 产品方向和设计判断。
- 第二眼：代表作品不是口头描述，而是一个可验证的工作流系统。
- 继续看：每个项目都有问题、动作、证据和可迁移场景。
- 看完后：老师、老板或面试官能快速理解这个人适合 AI Agent / AI 产品经理实习岗位。

## Scope

### In Scope

- 新增 V20 视觉系统，优先清理旧 CSS 覆盖关系。
- 首页首屏改成 Swiss-style portfolio canvas。
- 代表作品区重构为 1 个主案例 + 2 个辅助案例的证据墙。
- 项目卡片从普通卡片改为产品案例格式。
- Build Log 只保留为持续构建证据，不再抢主叙事。
- 同步简历里的代表作品表达，使网站和简历互相证明。
- 更新 `DESIGN.md` 的 V20 设计方向。
- 更新 `profile.siteVersion` 和 Build Log。
- 桌面与移动端截图验证。

### Out Of Scope

- 不重写全部项目事实。
- 不引入后台、数据库、登录系统。
- 不把主页做成横向翻页 PPT。
- 不照搬 guizang-ppt-skill 的模板代码。
- 不虚构实习、商业合作、企业数据或不可验证指标。
- 不替用户 commit。

## Information Architecture

### 1. Hero: Swiss Portfolio Canvas

目标：第一屏让访问者知道这是一个 AI 产品方向的作品证据页。

结构：

- 左侧：姓名、岗位目标、核心判断。
- 右侧：代表作品证据 canvas。
- 底部：3 个关键指标或证据入口。

建议主标题：

> 我把 AI 信息流，做成可验证的 Agent 工作流作品。

副标题：

> 面向 AI Agent / AI 产品经理实习岗位，我用真实信息流、对象库、工作台 Demo 和构建记录证明：我能把模糊问题拆成产品流程，并推进成可打开的作品。

### 2. Featured Work: Serious AI Neican

目标：把《serious AI 内参》定义为当前最强代表作品。

展示结构：

- Problem：AI 信息过载，管理者需要判断材料，不只是摘要。
- Workflow：RSS / Reader -> 人工筛选 -> Agent 日报 -> 评论入库 -> 三级笔记 / 概念网络 -> 判断行动。
- Proof：README、Agent Instructions、屏录、Notion / Reader 工作台、个人主页 case 页。
- Transfer：企业管理层信息输入、行业情报日报、团队知识简报、AI 技术侦察。

视觉形式：

- 使用 16 列网格。
- 一条横向流程轴。
- 一个深色反转证据块。
- 只用 IKB 作为唯一强强调色。

### 3. Evidence Wall: 2 Supporting Works

保留两个辅助代表作品：

1. 微信对象库 / RAG 原料层
   - 证明非结构化群聊信息可以变成可检索、可评测、可追溯的数据资产。
   - 本批次证据：69 个 HTML 报告、45,908 条源聊天消息、1,528 条精华块。
2. 个人主页 / 作品证据系统
   - 证明可以用 SpecDrivenCoding 把定位、文档、设计、开发和部署串成公开作品。

如果页面空间允许，第三个辅助项目可保留「公众号内容资产工程」，但它的权重低于前两个。

### 4. Delivery Proof

目标：让能力不靠自夸，而靠可点击证据。

建议证据分类：

- 产品文档：PRD、README、Agent Instructions。
- 数据资产：JSON、对象库、校验结果、评测摘要。
- 可视化交付：HTML Demo、case page、工作台截图或录屏。
- 构建过程：Build Log、GitHub、部署链接。

### 5. Build Rhythm

目标：保留持续构建感，但降低首页权重。

形式：

- 小型 GitHub-style heatmap。
- 3 条最近关键构建。
- 不展开长日志。

### 6. Contact

目标：让老师、老板、面试官能继续看证据或联系。

保留：

- GitHub
- 个人主页
- Gmail
- 微信号

## Visual Direction

采用 guizang-ppt-skill Style B 的迁移版，而不是完整 PPT 模板：

- 主底色：`#fafaf8`
- 主文字：`#0a0a0a`
- 灰阶：`#f0f0ee` / `#d4d4d2` / `#737373`
- 锚点色：IKB `#002FA7`
- 形状：直角、细线、纯色块
- 禁止：大面积渐变、圆角卡片堆叠、厚边框、硬阴影、装饰性图片

## Resume Sync

简历代表作品应与 V20 首页同步：

1. 《serious AI 内参》Agent 信息流系统
2. 微信对象库 / RAG 原料层
3. 个人主页 / 作品证据系统

每个项目用同一套结构：

- 问题
- 我的动作
- 结果 / 证据
- 可迁移场景

## Acceptance Criteria

- 首页第一屏从个人介绍感转为 AI 产品作品集感。
- 代表作品在 10 秒内可被理解。
- 项目区能清楚展示问题、动作、证据、迁移场景。
- 视觉系统不再依赖旧 CSS 大量覆盖。
- 桌面和手机端无明显文字溢出、遮挡或按钮挤压。
- `npm run build` 通过，或构建 blocker 被明确诊断。
- 重新生成桌面和移动端截图。
