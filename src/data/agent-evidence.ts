export const agentEvidenceLinks = {
  readme: "https://howieserious.notion.site/README-md-2ec679b108ff83d9b05901e0811ddb15",
  instructions:
    "https://howieserious.notion.site/agent-instructions-646679b108ff8230a08801187b036445",
};

export const agentEvidence = [
  {
    requirement: "工作流设计",
    evidence: "《serious AI 内参》从信息输入到判断材料的六步链路",
    linkLabel: "工作流 README",
    href: agentEvidenceLinks.readme,
    status: "ready",
  },
  {
    requirement: "Agent 指令设计",
    evidence: "内参编辑 agent 的触发规则、skill 分工、Readwise MCP 约束",
    linkLabel: "Agent Instructions",
    href: agentEvidenceLinks.instructions,
    status: "ready",
  },
  {
    requirement: "工具 / API 接入",
    evidence: "Reader / Readwise / Notion 页面、日报、阅读库和概念库串联",
    linkLabel: "完整证据链",
    href: "#/ai-neican-case",
    status: "ready",
  },
  {
    requirement: "知识库与知识加工",
    evidence: "阅读库、三级笔记、概念提取和概念网络写回流程",
    linkLabel: "看 case",
    href: "#/ai-neican-case",
    status: "ready",
  },
  {
    requirement: "RAG 原料层",
    evidence: "微信 raw.json 只留本地；objects.json / objects.md 作为可检索对象层，保留 local_id 和事实等级",
    linkLabel: "看 Demo",
    href: `${import.meta.env.BASE_URL}wechat-rag/index.html`,
    status: "ready",
  },
  {
    requirement: "可演示 Demo",
    evidence: "10 秒屏录片段 + 轻量信息流交互 Demo",
    linkLabel: "播放 Demo",
    href: "#/ai-neican-case",
    status: "ready",
  },
  {
    requirement: "评测 / bad case",
    evidence: "微信对象库已接入 30 条事实抽样、引用链检查、推断标记和剔除记录",
    linkLabel: "评测摘要",
    href: `${import.meta.env.BASE_URL}wechat-rag/eval-summary.md`,
    status: "ready",
  },
  {
    requirement: "工程可运行性",
    evidence: "当前主页和碳水配额卡有 GitHub；Agent 主项目仍需独立可运行仓库",
    linkLabel: "待补",
    href: "#delivery-proof",
    status: "gap",
  },
];
