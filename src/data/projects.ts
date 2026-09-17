/**
 * 项目数据唯一真源（2026-09-17 抽出）。
 *
 * 为什么有这个文件：此前项目清单硬编码在 App.tsx 里，加一个项目要动页面组件；
 * 现在页面只消费本文件的导出，**加项目＝在下面数组里加一条**。
 *
 * 口径纪律（改本文件前先读）：
 * - 名称用「人话标题」，与简历／BOSS 在线简历一致；内部旧叫法（AI 内参工作台／
 *   高活跃社群日报分析器／碳水蛋白质配额卡）不再对外。
 * - 数字只取母题库已定稿口径并带批次标注；不确定的标 status 为「进行中／实验」，
 *   不写未核实的量级。
 * - 不放他人品牌名与人名、不放外部课程链接、不放联系方式（电话已从公开页撤下）。
 * - 项目增减时同步三处：本文件、`03-作业/BOSS在线简历_项目经历逐栏填写版_v1.md`、
 *   `03-作业/母题库/母题库_v2_完整版.md`（冲突以母题库当前版为准）。
 */

/**
 * 主位卡片（首屏 01 位）的媒体与入口。
 *
 * 媒体归属：主位＝**微信群聊 AI 日报管线**，封面截自它自己的公开证据页
 * `public/wechat-rag/index.html`（2026-09-17 用 Chrome headless 截图，1600×1000）。
 * ⚠ 别再把 `ai-neican-demo-*` 放到这里——那是 **AI 信息日报** 的演示，
 * 只属于它的 case 页（`#/ai-neican-case`）；主位与封面必须是同一个项目。
 */
export const featuredProject = {
  demoUrl: "#selected-primary",
  posterUrl: `${import.meta.env.BASE_URL}media/wechat-rag-poster.png`,
};

/**
 * AI 信息日报 case 页（`#/ai-neican-case`）专用媒体。
 * 与主位封面分开，避免再次混用：这份演示只属于 AI 信息日报。
 */
export const neicanCaseMedia = {
  recordingUrl: `${import.meta.env.BASE_URL}media/ai-neican-demo-10s.m4v`,
  posterUrl: `${import.meta.env.BASE_URL}media/ai-neican-demo-poster.jpg`,
};

/** 「精选作品」左侧索引（01–04）。 */
export const projectIndex = [
  {
    index: "01",
    title: "微信群聊 AI 日报管线",
    meta: "AI 数据管线搭建",
    href: "#selected-primary",
  },
  {
    index: "02",
    title: "AI 信息日报与内容策展管线",
    meta: "信息筛选与持续运营",
    href: "#selected-neican",
  },
  {
    index: "03",
    title: "饮食配比计算器",
    meta: "独立前端开发",
    href: "#selected-carb",
  },
  {
    index: "04",
    title: "个人作品主页",
    meta: "独立开发与部署",
    href: "#top",
  },
];

/** 主位卡片的分步流程（微信群聊 AI 日报管线）。 */
export const primaryWorkflow = [
  "消息抓取",
  "清洗",
  "AI 摘要",
  "价值筛选",
  "日报产出",
];

/**
 * 「精选作品」支撑位（02–04）。id 必须是页面上真实存在的锚点。
 * 新增一条＝加一个对象；App.tsx 的支撑位区块是 map 渲染，无需改组件。
 */
export const supportingWorks = [
  {
    id: "selected-neican",
    index: "02",
    label: "Ongoing operation",
    title: "AI 信息日报与内容策展管线",
    body: "按「信息进入→人工筛选→AI 日报→校验」运营个人 AI 信息日报；在 Readwise 中对订阅源文章持续筛选与取舍，产出每日判断材料。",
    proof: "累计处理约 9800 篇订阅源文章；2026.04 起持续发刊，延伸开发的 skill 获社群评比前 5 名",
  },
  {
    id: "selected-carb",
    index: "03",
    label: "Live utility",
    title: "饮食配比计算器",
    body: "将复杂的碳水与蛋白质配额表重构为可便捷访问、计算、截图与记录数据的前端工具；根据身体数据与训练目标动态生成每日摄入建议。",
    proof: "CloudBase 与 GitHub Pages 双通道部署，已集成至个人作品主页",
  },
  {
    id: "selected-homepage",
    index: "04",
    label: "This site",
    title: "个人作品主页",
    body: "按 Brief→PRD→DESIGN→ARCHITECTURE→React 全流程开发的作品证据页，把上述项目组织成可公开查看的入口。",
    proof: "21 版迭代后上线（hou-152.github.io），长期作为简历附件的作品集入口",
  },
];

/**
 * 「更多工作」索引（05+）。只放已有一句话能说清、但证据未完整成页的项目；
 * status 如实写「进行中／实验」，不写未核实的量级。
 */
export const moreWorks = [
  {
    index: "05",
    title: "公众号内容资产工程",
    status: "进行中",
  },
  {
    index: "06",
    title: "内容生产流水线",
    status: "进行中",
  },
  {
    index: "07",
    title: "微信关系语料 skill",
    status: "实验",
  },
];
