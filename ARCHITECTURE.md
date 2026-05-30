# ARCHITECTURE：个人主页

## 1. 架构目标
本项目要做一个稳定、好打开、方便迭代的个人主页，而不是复杂系统。

核心要求：
- 朋友圈打开要快。
- 手机端体验优先。
- 页面稳定，不依赖复杂服务。
- 内容后续方便更新。
- 项目本身体现 SpecDrivenCoding 流程。

## 2. 技术选型
采用静态单页网站架构。

推荐技术：
- 前端：Vite + React
- 样式：CSS Modules 或普通 CSS
- 数据：本地结构化数据文件
- 动效：CSS 动效 + 少量前端交互
- 部署：静态托管
- 后台：本期不需要
- 数据库：本期不需要
- 登录注册：本期不需要

选择 Vite + React 的原因：
- 足够轻量，适合个人主页。
- 开发体验简单，适合快速迭代。
- 构建后是静态文件，部署稳定。
- 不需要服务端，打开失败风险更低。

## 3. 不做复杂架构的原因
这个网站的主要任务是展示，不是业务系统。

不引入后台、数据库、登录系统，因为它们会增加维护成本、部署复杂度和出错概率，但对当前展示目标没有直接帮助。

如果后续需要博客、后台管理、动态评论，再单独扩展。MVP 阶段优先保证稳定和完成度。

## 4. 页面结构
采用单页滚动式结构。

页面顺序：
1. Hero 首屏
2. 我是谁
3. 成长线路
4. 项目展示
5. 能力地图
6. 成长热力图 / Build Log
7. 最近更新 / 正在构建
8. 联系与入口

导航形式：
- 桌面端：顶部轻量导航
- 移动端：简化导航或折叠菜单
- 点击导航后滚动到对应区域

## 5. 目录结构
建议目录：
```text
personal-homepage/
├── public/images/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Identity.tsx
│   │   ├── GrowthTimeline.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── AbilityMap.tsx
│   │   ├── BuildHeatmap.tsx
│   │   ├── Changelog.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── growth.ts
│   │   ├── projects.ts
│   │   ├── abilities.ts
│   │   ├── build-log.ts
│   │   └── links.ts
│   ├── styles/global.css
│   ├── App.tsx
│   └── main.tsx
├── PRD.md
├── DESIGN.md
├── ARCHITECTURE.md
└── package.json
```

设计原则：
- `components/` 放页面模块。
- `data/` 放可更新内容。
- 页面结构和内容数据分离，方便后续迭代。

## 6. 数据设计
所有展示内容先用本地数据文件维护。

### 6.1 项目数据
```ts
type Project = {
  title: string;
  summary: string;
  role: string;
  proves: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: "done" | "building" | "planned";
};
```
项目卡片展示：项目名称、一句话介绍、我做了什么、证明了什么能力、Demo、GitHub。

### 6.2 成长线路数据
```ts
type GrowthNode = {
  phase: string;
  title: string;
  description: string;
  ability: string;
};
```
成长线路重点展示变化，不做流水账。

### 6.3 能力地图数据
```ts
type Ability = {
  name: string;
  description: string;
  evidence: string[];
};
```
能力不用饼状图，不写虚假百分比。每个能力都要有项目或行为作为证据。

### 6.4 Build Log 数据
```ts
type BuildLogItem = {
  date: string;
  type: "brief" | "prd" | "design" | "code" | "deploy" | "update";
  title: string;
  description: string;
};
```
Build Log 只记录有效构建行为，不记录日记和情绪。

## 7. 组件职责
### 7.1 Hero
负责首屏冲击，包含主标题、副标题、SpecDrivenCoding 标签、视觉主元素和向下浏览入口。

### 7.2 GrowthTimeline
负责展示成长线路。要求强调阶段变化，不做普通时间流水账，每个节点都要体现能力或转折。

### 7.3 Projects / ProjectCard
负责展示项目证据。ProjectCard 必须有项目说明、我的贡献、证明的能力、Demo 按钮、GitHub 按钮。

如果没有 Demo 或 GitHub，就隐藏对应按钮，不显示空链接。

### 7.4 AbilityMap
负责展示能力结构。采用能力卡片或能力网格，不使用饼状图。

每项能力必须回答：这是什么能力、它如何被证明、它和项目有什么关系。

### 7.5 BuildHeatmap
负责展示成长热力图。

要求：
- 视觉上类似 contribution heatmap。
- 每个格子代表一次有效构建行为。
- 悬停或点击显示简短说明。
- 移动端不能依赖 hover 才能读懂。

### 7.6 Changelog
负责展示最近更新。内容短，3-5 条即可。它不是日记，而是说明网站和个人项目仍在迭代。

## 8. 响应式策略
采用移动端优先的样式策略。

断点建议：
- 小屏：默认样式
- 平板：768px 以上
- 桌面：1024px 以上

移动端原则：
- 单列布局
- 字体清楚
- 按钮容易点击
- 项目卡片纵向排列
- 成长线简化为纵向路径
- 热力图可以横向滚动或压缩显示

桌面端原则：
- 内容区域限制最大宽度
- 项目卡片可多列展示
- 成长线可以更有空间感
- Hero 可以加入更强视觉元素

## 9. 动效策略
动效只服务内容，不做无意义炫技。

允许：
- 首屏轻微动态
- 滚动出现
- 项目卡片 hover
- 成长线节点渐入
- 热力图悬停反馈

禁止：
- 大量 3D
- 重型动画库
- 影响加载的背景视频
- 移动端卡顿效果
- 盖过内容的转场

## 10. 性能要求
性能优先级高于炫技。

要求：
- 首屏资源尽量少
- 图片使用压缩版本
- 避免不必要的大依赖
- 不加载无用字体
- 静态资源可缓存
- 移动端打开不能明显卡顿

## 11. 部署方案
采用静态部署。

可选平台：
- Vercel
- Cloudflare Pages
- GitHub Pages

推荐优先级：
1. Vercel：部署简单，适合前端项目。
2. Cloudflare Pages：访问稳定，静态站友好。
3. GitHub Pages：和 GitHub 展示关联强，但配置略受限。

MVP 阶段只需要一个公开 URL。

## 12. 可迭代性
后续新增内容时，优先改 `src/data/`。

常见更新：
- 新增项目：改 `projects.ts`
- 新增成长节点：改 `growth.ts`
- 新增能力证据：改 `abilities.ts`
- 新增构建记录：改 `build-log.ts`
- 更新联系方式：改 `links.ts`

这样可以避免每次更新都改页面结构。

## 13. 未来扩展
本期不做，但可以预留：
- 独立项目详情页
- 博客或文章页
- 自动读取 GitHub 提交记录
- Build Log 后台管理
- 多语言版本
- 访问统计

这些功能只有在主页 MVP 稳定后再做。

## 14. 开发顺序
建议开发顺序：
1. 搭建静态项目。
2. 建立基础页面结构。
3. 完成 Hero 和整体视觉基调。
4. 完成数据文件。
5. 完成成长线路。
6. 完成项目卡片。
7. 完成能力地图。
8. 完成 Build Heatmap。
9. 完成最近更新和联系入口。
10. 做移动端适配。
11. 做性能检查。
12. 部署上线。

## 15. 验收标准
完成后需要检查：
- 手机端能正常浏览。
- 桌面端视觉完整。
- 首屏 3 秒内能理解主题。
- 项目卡片有 Demo / GitHub 入口。
- Build Log 不像日记。
- 页面没有明显卡顿。
- 外部链接可正常打开。
- 内容后续可以通过数据文件更新。

## 16. 架构总结
本项目采用轻量静态单页架构。

这样选是因为个人主页最重要的是稳定、快速、可展示、可迭代。复杂后台和数据库不会提升当前价值，反而会增加失败概率。

技术架构服务的核心目标是：让别人快速打开、快速理解、快速感受到我在持续成长，并能通过项目、GitHub 和 Build Log 验证这一点。
