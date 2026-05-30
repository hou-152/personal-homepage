# 个人主页 · CONTENT · v1-launch

> 文件位置：`iterations/v1-launch/CONTENT.md`。这是 v1 首版内容索引，只服务首次发布。
> 配合 [PRD.md](./PRD.md)、[BRIEF.md](../../BRIEF.md)、[DESIGN.md](../../DESIGN.md)、[ARCHITECTURE.md](../../ARCHITECTURE.md) 阅读。

## 模式说明

- 直接文案：已经写进代码或数据文件，后续修改时优先改对应数据源。
- AI 生成需求：可以由 AI 根据 BRIEF、DESIGN 和本文件生成，但生成后要给用户确认。
- 数据源：内容来自 `src/data/*.ts` 或页面组件。

## 全局内容资源

- 网站标题：数据源 `src/data/profile.ts`
- Hero 和个人定位：数据源 `src/data/profile.ts`
- 成长线路：数据源 `src/data/growth.ts`
- 项目列表：数据源 `src/data/projects.ts`
- 能力地图：数据源 `src/data/abilities.ts`
- Build Log：数据源 `src/data/build-log.ts`
- 联系入口：数据源 `src/data/links.ts`

## 页面：首页 `/`

### 顶部导航

- 导航项：直接文案
  - 我是谁
  - 成长线
  - 项目
  - 能力
  - Build Log
- 实现位置：`src/App.tsx` 的 `navItems`

### Hero 首屏

- eyebrow：直接文案，来自 `profile.eyebrow`
- 主标题：直接文案，来自 `profile.headline`
- 副文案：直接文案，来自 `profile.subtitle`
- 主按钮：直接文案，“看项目证据”
- 次按钮：直接文案，“看构建轨迹”
- 主视觉：直接文案和组件结构，展示 Brief、PRD、DESIGN、Build 四步推进
- 内容原则：必须体现“网站本身就是作品”和“成长轨迹可被看见”

### 我是谁

- 身份短句：直接文案，来自 `profile.identity`
- 关注方向：数据源 `profile.focus`
- 状态数字：数据源 `profile.stats`
- 内容原则：不写成长篇自我介绍，用短句快速建立个人定位

### 成长线路

- 数据源：`src/data/growth.ts`
- 每条结构：
  - phase
  - title
  - description
  - ability
- 内容原则：展示从模糊想法到产品需求、设计、构建的上升过程

### 项目展示

- 数据源：`src/data/projects.ts`
- 每个项目结构：
  - title
  - summary
  - role
  - proves
  - demoUrl
  - githubUrl
  - status
- 内容原则：项目卡片不是陈列链接，而是证明能力的证据单元
- 当前规则：关键项目卡片可连接到真实 GitHub 账号主页；没有具体仓库时不显示空占位

### 能力地图

- 数据源：`src/data/abilities.ts`
- 每项结构：
  - name
  - description
  - evidence
- 内容原则：能力不写百分比，用项目和文档证据表达

### Build Log / 成长热力图

- 数据源：`src/data/build-log.ts`
- 每条结构：
  - date
  - type
  - title
  - description
- 内容原则：只记录有效构建行为，不写普通日记或流水账

### 联系与入口

- 数据源：`src/data/links.ts`
- 当前状态：
  - GitHub 已连接到真实账号主页
  - Gmail：`sibohou792@gmail.com`
  - 电话：`13922889914`
  - 微信号：`sibozsibo`
  - 回到首页和成长线为站内入口
- 内容原则：只展示用户确认过的真实联系方式；微信号直接展示，不做不可靠跳转

## 后续内容维护规则

1. v1 之后不再新增新的 `CONTENT.md`。
2. 小内容更新直接改 `src/data/*.ts`。
3. 新功能或新增页面先写 `iterations/vN-{slug}/PRD.md`，再实施。
4. 如果内容变化影响长期定位，先回到 `BRIEF.md` 讨论，不直接改代码。
