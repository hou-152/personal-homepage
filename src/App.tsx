import { useEffect, useState } from "react";
import ArrowDown from "lucide-react/dist/esm/icons/arrow-down";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Blocks from "lucide-react/dist/esm/icons/blocks";
import Flame from "lucide-react/dist/esm/icons/flame";
import Github from "lucide-react/dist/esm/icons/github";
import Globe from "lucide-react/dist/esm/icons/globe";
import Mail from "lucide-react/dist/esm/icons/mail";
import MapIcon from "lucide-react/dist/esm/icons/map";
import MessageCircle from "lucide-react/dist/esm/icons/message-circle";
import Pause from "lucide-react/dist/esm/icons/pause";
import Phone from "lucide-react/dist/esm/icons/phone";
import Play from "lucide-react/dist/esm/icons/play";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import Send from "lucide-react/dist/esm/icons/send";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import { profile } from "./data/profile";
import { growth } from "./data/growth";
import { featuredProject, projects } from "./data/projects";
import { buildLog } from "./data/build-log";
import { links } from "./data/links";
import { aiNeicanDemoSteps } from "./data/ai-neican-demo";
import { aiNeicanCaseEvidence } from "./data/ai-neican-case";
import { agentEvidence, agentEvidenceLinks } from "./data/agent-evidence";

const navItems = [
  { label: "首页", href: "#top" },
  { label: "代表作品", href: "#featured-work" },
  { label: "交付证据", href: "#delivery-proof" },
  { label: "联系", href: "#contact" },
];

const thinkingNotes = [
  {
    index: "01",
    title: "先做判断系统，不做 AI 新闻页",
    body: "AI 信息不缺转述，缺的是能被继续使用的判断材料。《serious AI 内参》先解决信息筛选、复盘和行动线索的问题。",
  },
  {
    index: "02",
    title: "Agent 负责加工，人负责判断",
    body: "我让 Agent 接住整理、排版、提取和写回，但保留人工筛选、取舍、验收和下一步判断，避免把责任外包给流程。",
  },
  {
    index: "03",
    title: "用证据替代自我解释",
    body: "README、Agent Instructions、屏录、构建记录和公开 Demo 共同说明我做过什么；能力不需要单独打分，作品会自己说明。",
  },
];

const typeClass: Record<string, string> = {
  brief: "heat-brief",
  prd: "heat-prd",
  design: "heat-design",
  code: "heat-code",
  deploy: "heat-deploy",
  update: "heat-update",
};

type BuildLogItem = (typeof buildLog)[number];

type BuildActivityCell = {
  date: string;
  count: number;
  level: number;
  titles: string[];
};

type Page = "home" | "ai-neican-case";

const getCurrentPage = (): Page =>
  window.location.hash.startsWith("#/ai-neican-case") ? "ai-neican-case" : "home";

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getBuildActivityCells = (items: BuildLogItem[]) => {
  const grouped = new Map<string, BuildLogItem[]>();

  items.forEach((item) => {
    grouped.set(item.date, [...(grouped.get(item.date) ?? []), item]);
  });

  const latestDate = items.reduce((latest, item) => {
    const current = new Date(`${item.date}T00:00:00`);
    return current > latest ? current : latest;
  }, new Date(`${items[0]?.date ?? "2026-05-30"}T00:00:00`));

  const startDate = new Date(latestDate);
  startDate.setDate(latestDate.getDate() - 7 * 18 + 1);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  return Array.from({ length: 7 * 18 }, (_, index): BuildActivityCell => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    const key = formatDate(date);
    const dayItems = grouped.get(key) ?? [];
    const count = dayItems.length;

    return {
      date: key,
      count,
      level: Math.min(count, 4),
      titles: dayItems.map((item) => item.title),
    };
  });
};

function App() {
  const [page, setPage] = useState<Page>(getCurrentPage);

  useEffect(() => {
    const scrollToHash = (behavior: ScrollBehavior) => {
      const id = window.location.hash.slice(1);

      if (!id || id.startsWith("/")) {
        return;
      }

      document.getElementById(decodeURIComponent(id))?.scrollIntoView({
        behavior,
        block: "start",
      });
    };

    const syncLocation = (behavior: ScrollBehavior) => {
      const nextPage = getCurrentPage();
      setPage(nextPage);

      window.setTimeout(() => {
        if (nextPage === "home") {
          scrollToHash(behavior);
          return;
        }

        window.scrollTo({ top: 0, behavior });
      }, 0);
    };

    const timer = window.setTimeout(() => syncLocation("auto"), 80);
    const handleHashChange = () => syncLocation("smooth");

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="site-shell" id="top">
      <Header />
      <main>{page === "ai-neican-case" ? <AiNeicanCasePage /> : <HomePage />}</main>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <GrowthTimeline />
      <Projects />
      <WorkThinking />
      <DeliveryProof />
      <BuildHeatmap />
      <Contact />
    </>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="主导航">
      <a className="brand" href="#top" aria-label="回到首页">
        <img className="brand-avatar" src={profile.avatar} alt="Da Capo 头像" />
        <span className="brand-copy">
          <strong>{profile.brand}</strong>
          <small>个人主页 · {profile.versionLabel}</small>
        </span>
        <span className="version-badge">{profile.siteVersion}</span>
      </a>
      <nav>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-band">
      <div className="hero-copy">
        <p className="eyebrow">{profile.eyebrow}</p>
        <h1>
          {profile.headlineLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero-subtitle">{profile.subtitle}</p>
        <div className="hero-person-note" aria-label="Da Capo 名字说明">
          <span>{profile.heroNote}</span>
        </div>
        <div className="hero-actions">
          <a className="primary-action" href="#featured-work">
            看代表作品
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a className="secondary-action" href="#contact">
            联系我
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-work-preview" aria-label="《serious AI 内参》代表作品预览">
        <div className="hero-work-head">
          <div>
            <p className="eyebrow">{featuredProject.eyebrow}</p>
            <h2>
              当前代表作品：
              <span>{featuredProject.title}</span>
            </h2>
          </div>
          <span className="hero-work-status">ready</span>
        </div>
        <p className="hero-work-statement">{profile.workStatement}</p>
        <p className="hero-work-summary">
          从每日信息涌入，到人工筛选、Agent 日报、三级笔记和概念网络，最后沉淀成下一步判断。
        </p>
        <div className="workstation-preview">
          <div className="workstation-bar">
            <span />
            <span />
            <span />
            <strong>260531 期 · AI 内参工作台预览</strong>
          </div>
          <div className="workstation-body">
            <div className="insight-card">
              <strong>今日洞察</strong>
              <div>
                <span>Inbox 30</span>
                <span>入库 20</span>
                <span>主题 Top 3</span>
                <span>判断线索</span>
              </div>
            </div>
            <div className="pipeline-preview">
              <span>01 信息进入阅读池</span>
              <span>02 Agent 整理日报</span>
              <span>03 三级笔记 / 概念网络</span>
              <span>04 沉淀为判断材料</span>
            </div>
          </div>
        </div>
        <div className="hero-work-actions">
          <a className="primary-action" href="#/ai-neican-case">
            <Play size={18} aria-hidden="true" />
            播放 10 秒实录
          </a>
          <a className="secondary-action" href="#/ai-neican-case">
            看信息流 Demo
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="tertiary-action" href={featuredProject.readmeUrl} target="_blank" rel="noreferrer">
            工作流 README
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="tertiary-action" href="#/ai-neican-case">
            看完整证据链
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <p className="hero-work-note">
          轻量 Demo 看流程，完整证据链看真实素材、工作台视图和交付痕迹。
        </p>
      </div>
    </section>
  );
}

function GrowthTimeline() {
  return (
    <section className="section-band" id="growth">
      <div className="section-heading">
        <p className="eyebrow">Work Line</p>
        <h2>把知识变成作品</h2>
        <p className="section-intro">
          长期学习只有在变成结果时才真正成立。我把领域里的概念、判断和问题，拆成可执行结构，再通过 Agent 协作推进成作品，让每一次交付都能被看见、被反馈、被继续迭代。
        </p>
      </div>
      <div className="timeline">
        {growth.map((item, index) => (
          <article className="timeline-item" key={item.phase}>
            <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <p className="phase">{item.phase}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.ability}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-band projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>先看一个重点案例，再看其他作品证据</h2>
      </div>
      <article className="featured-project-card" id="featured-work">
        <div className="featured-project-copy">
          <p className="eyebrow">{featuredProject.eyebrow}</p>
          <h3>当前代表作品：{featuredProject.title}</h3>
          <p className="featured-project-summary">{featuredProject.summary}</p>
          <div className="featured-evidence">
            <p>
              <span>它解决什么</span>
              {featuredProject.problem}
            </p>
            <p>
              <span>作品逻辑</span>
              信息进入系统，先变成可筛选材料，再变成判断线索，最后推动下一步行动。
            </p>
            <p>
              <span>我怎么做</span>
              {featuredProject.action}
            </p>
            <p>
              <span>沉淀什么</span>
              {featuredProject.proof}
            </p>
          </div>
          <div className="featured-actions">
            <a href={featuredProject.demoUrl}>
              看信息流 Demo
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={featuredProject.readmeUrl} target="_blank" rel="noreferrer">
              工作流 README
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={featuredProject.instructionsUrl} target="_blank" rel="noreferrer">
              Agent Instructions
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={featuredProject.logUrl}>
              看构建记录
              <Flame size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="featured-project-preview" aria-label="AI 内参信息流缩略图">
          <div className="preview-title">
            <span>serious AI 内参</span>
            <strong>判断链路</strong>
          </div>
          <div className="preview-flow">
            {featuredProject.steps.map((step, index) => (
              <div className={index === 4 ? "preview-node active" : "preview-node"} key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </div>
            ))}
          </div>
          <div className="preview-output">
            <strong>输出</strong>
            <p>当日内参素材 / 文章结构 / 核心概念 / 下一步判断</p>
          </div>
        </div>
      </article>
      <div className="project-grid" id="project-evidence">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span className={`status status-${project.status}`}>{project.status}</span>
              <Blocks size={20} aria-hidden="true" />
            </div>
            <h3>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
            <div className="project-evidence">
              <p>
                <span>问题</span>
                {project.problem}
              </p>
              <p>
                <span>我做了什么</span>
                {project.action}
              </p>
              <p>
                <span>它证明什么</span>
                {project.proof}
              </p>
            </div>
            <div className="proof-list">
              {project.proves.map((proof) => (
                <span key={proof}>{proof}</span>
              ))}
            </div>
            <div className="project-actions">
              {project.demoUrl && (
                <a href={project.demoUrl} target={project.demoUrl.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {project.demoLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
              {project.secondaryDemoUrl && (
                <a href={project.secondaryDemoUrl} target="_blank" rel="noreferrer">
                  {project.secondaryDemoLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                  <Github size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkThinking() {
  return (
    <section className="section-band thinking-section" id="work-thinking">
      <div className="section-heading">
        <p className="eyebrow">Thinking</p>
        <h2>作品背后的思考</h2>
        <p className="section-intro">
          这里不再单独摆方法论卡片，只留下几个真实取舍：我为什么这样做，以及哪些判断不能交给包装来替代。
        </p>
      </div>
      <div className="thinking-grid">
        {thinkingNotes.map((note) => (
          <article className="thinking-card" key={note.index}>
            <span>{note.index}</span>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DeliveryProof() {
  return (
    <section className="section-band evidence-section" id="delivery-proof">
      <div className="section-heading">
        <p className="eyebrow">Delivery Proof</p>
        <h2>我如何交付作品</h2>
        <p className="section-intro">
          能力不单独打分，只看它是否已经落到作品、流程和可点击证据里。这里保留交付链路，也保留还没补齐的缺口。
        </p>
      </div>
      <div className="evidence-matrix">
        {agentEvidence.map((item) => (
          <article className={`evidence-row evidence-${item.status}`} key={item.requirement}>
            <div>
              <span className="evidence-status">{item.status === "ready" ? "ready" : "gap"}</span>
              <h3>{item.requirement}</h3>
            </div>
            <p>{item.evidence}</p>
            <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {item.linkLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function AiNeicanDemo({ showCaseLink = true }: { showCaseLink?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeStep = aiNeicanDemoSteps[activeIndex];

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        if (current >= aiNeicanDemoSteps.length - 1) {
          setIsPlaying(false);
          return current;
        }

        return current + 1;
      });
    }, 1700);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const selectStep = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    if (activeIndex === aiNeicanDemoSteps.length - 1) {
      setActiveIndex(0);
      setIsPlaying(true);
      return;
    }

    setIsPlaying((current) => !current);
  };

  return (
    <section className="section-band neican-demo-section" id="ai-neican-demo">
      <div className="neican-demo-shell">
        <div className="neican-demo-heading">
          <p className="eyebrow">AI Neican Demo</p>
          {showCaseLink && (
            <a className="demo-case-link" href="#/ai-neican-case">
              查看完整证据链
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          <h2>把 AI 信息变成判断，把判断推进成行动</h2>
          <p>
            这是《AI 内参》背后的真实工作流：信息进入、人工筛选、Agent
            生成日报、评论入库、深度拆解，最后沉淀成可以继续使用的判断材料。
          </p>
          <button className="demo-play-button" type="button" onClick={togglePlayback}>
            {isPlaying ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
            {isPlaying ? "暂停演示" : activeIndex === aiNeicanDemoSteps.length - 1 ? "重新播放" : "播放演示"}
          </button>
        </div>

        <div className="neican-demo-stage">
          <div className="demo-step-rail" aria-label="AI 内参信息流步骤">
            {aiNeicanDemoSteps.map((step, index) => (
              <button
                className={index === activeIndex ? "demo-step-tab active" : "demo-step-tab"}
                key={step.id}
                type="button"
                onClick={() => selectStep(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step.label}
              </button>
            ))}
          </div>

          <div className="demo-flow-grid">
            <div className="demo-input-panel">
              <span className="demo-panel-label">当前环节</span>
              <h3>{activeStep.title}</h3>
              <p>{activeStep.summary}</p>
              <div className="demo-chip-list">
                {activeStep.proof.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="demo-agent-panel">
              <span className="demo-panel-label">Agent 做什么</span>
              <div className="demo-agent-avatar">
                <Sparkles size={24} aria-hidden="true" />
                <strong>AI 编辑 Agent</strong>
              </div>
              <p>{activeStep.agentRole}</p>
              <div className="demo-progress-track">
                {aiNeicanDemoSteps.map((step, index) => (
                  <span
                    className={index <= activeIndex ? "filled" : ""}
                    key={step.id}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>

            <div className="demo-human-panel">
              <span className="demo-panel-label">我负责什么</span>
              <h3>判断不外包</h3>
              <p>{activeStep.humanRole}</p>
              <div className="demo-output-card">
                <Send size={18} aria-hidden="true" />
                <span>{activeStep.output}</span>
              </div>
            </div>
          </div>

          <div className="demo-final-proof">
            <strong>本环节之后：</strong>
            <span>{activeStep.next}</span>
          </div>

          <div className="demo-recording" id="demo-recording">
            <div>
              <span className="demo-panel-label">屏录实证</span>
              <h3>10 秒看真实工作台</h3>
              <p>
                原始屏录约 75MB，不进入首屏自动加载。这里保留 10 秒轻量片段，用来证明 Demo 来自真实 Notion / Reader 工作台。
              </p>
            </div>
            <video controls preload="metadata" poster={featuredProject.posterUrl}>
              <source src={featuredProject.recordingUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function AiNeicanCasePage() {
  const scrollToEvidence = (id: string) => {
    document.getElementById(`ai-neican-case-${id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="case-page" id="ai-neican-case">
      <section className="section-band case-page-hero">
        <div>
          <p className="eyebrow">AI Neican Case</p>
          <h1>一条 AI 信息，如何变成判断材料</h1>
          <p>
            这是《AI 内参》的完整证据链：外部信息进入系统，被筛选、整理、入库、拆解，最后变成可以复盘、转发和继续使用的判断材料。
          </p>
        </div>
        <div className="case-page-actions">
          <a className="primary-action" href="#top">
            返回首页
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="secondary-action" href={agentEvidenceLinks.readme} target="_blank" rel="noreferrer">
            工作流 README
          </a>
          <a className="tertiary-action" href={agentEvidenceLinks.instructions} target="_blank" rel="noreferrer">
            Agent Instructions
          </a>
        </div>
      </section>

      <AiNeicanDemo showCaseLink={false} />

      <section className="section-band neican-case-section">
        <div className="case-overview-grid">
          <article>
            <span>01</span>
            <h3>业务问题</h3>
            <p>AI 信息过载，团队需要知道什么值得看、为什么重要、下一步做什么。</p>
          </article>
          <article>
            <span>02</span>
            <h3>工作流设计</h3>
            <p>Reader 输入、人工筛选、Agent 日报、评论入库、笔记概念、判断简报串成一条链。</p>
          </article>
          <article>
            <span>03</span>
            <h3>Agent 分工</h3>
            <p>Agent 负责整理、排版、提取和写回；我负责筛选、判断、验收和行动优先级。</p>
          </article>
          <article>
            <span>04</span>
            <h3>可核验证据</h3>
            <p>README、Instructions、屏录 demo、阅读库、日报和概念网络共同构成证据链。</p>
          </article>
        </div>
        <div className="case-flow-strip" aria-label="AI 内参完整证据链流程">
          {aiNeicanCaseEvidence.map((item) => (
            <button key={item.id} type="button" onClick={() => scrollToEvidence(item.id)}>
              <span>{item.index}</span>
              {item.title}
            </button>
          ))}
        </div>

        <div className="case-evidence-list">
          {aiNeicanCaseEvidence.map((item) => (
            <article className="case-evidence-card" id={`ai-neican-case-${item.id}`} key={item.id}>
              <div className="case-evidence-copy">
                <span className="case-index">{item.index}</span>
                <h3>{item.title}</h3>
                <dl>
                  <div>
                    <dt>材料是什么</dt>
                    <dd>{item.material}</dd>
                  </div>
                  <div>
                    <dt>它证明什么</dt>
                    <dd>{item.proves}</dd>
                  </div>
                  <div>
                    <dt>链路位置</dt>
                    <dd>{item.position}</dd>
                  </div>
                </dl>
              </div>
              <div className={`case-evidence-visual visual-${item.id}`} aria-label={`${item.title} 证据占位图`}>
                <div className="case-window-bar">
                  <span />
                  <span />
                  <span />
                  <strong>{item.visualTitle}</strong>
                </div>
                <div className="case-visual-body">
                  <p>{item.visualMeta}</p>
                  <div className="case-visual-grid">
                    {item.visualItems.map((visualItem) => (
                      <span key={visualItem}>{visualItem}</span>
                    ))}
                  </div>
                </div>
                <small>待替换为脱敏真实截图</small>
              </div>
            </article>
          ))}
        </div>

        <div className="case-boundary-note">
          <strong>边界</strong>
          <p>
            这个页面不是把《AI 内参》包装成独立产品官网，只证明一件事：我已经能把真实信息输入、人工判断、Agent 加工和知识沉淀串成一条可复盘的工作链路。
          </p>
        </div>
      </section>
    </div>
  );
}

function BuildHeatmap() {
  const activityCells = getBuildActivityCells(buildLog);
  const activeDays = new Set(buildLog.map((item) => item.date)).size;
  const recentBuilds = buildLog.slice(-3).reverse();
  const proofStats = [
    { value: buildLog.length, label: "有效构建记录" },
    { value: profile.siteVersion, label: "当前版本" },
    { value: activeDays, label: "活跃构建日" },
  ];

  return (
    <section className="section-band build-section" id="build-log">
      <div className="section-heading">
        <p className="eyebrow">Build Log</p>
        <h2>构建快照</h2>
        <p className="section-intro">
          这里只保留已经完成的推进证据。当前任务和待补缺口不再单独抢占首页空间。
        </p>
      </div>
      <div className="heatmap-wrap">
        <div className="build-proof-panel">
          <div className="build-proof-heading">
            <div>
              <p className="build-proof-kicker">Contribution rhythm</p>
              <h3>GitHub-style 构建热力图</h3>
            </div>
            <a href={links.github} target="_blank" rel="noreferrer">
              View GitHub
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <p>这里不记录生活碎片，只留下能证明推进的动作：写清楚、做出来、上线、复盘、再迭代。</p>
          <div className="contribution-map" aria-label="构建贡献热力图">
            {activityCells.map((cell) => (
              <button
                className={`contribution-cell contribution-level-${cell.level}`}
                key={cell.date}
                title={
                  cell.count > 0
                    ? `${cell.date} · ${cell.count} 次构建：${cell.titles.join(" / ")}`
                    : `${cell.date} · 无构建记录`
                }
                type="button"
              >
                <span className="sr-only">
                  {cell.date}，{cell.count} 次构建
                </span>
              </button>
            ))}
          </div>
          <div className="contribution-legend" aria-hidden="true">
            <span>Less</span>
            <i className="contribution-level-0" />
            <i className="contribution-level-1" />
            <i className="contribution-level-2" />
            <i className="contribution-level-3" />
            <i className="contribution-level-4" />
            <span>More</span>
          </div>
          <div className="build-proof-stats">
            {proofStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="build-log-list">
          <div className="build-snapshot-heading">
            <p className="build-proof-kicker">Recent progress</p>
            <h3>最近推进</h3>
          </div>
          {recentBuilds.map((item) => (
            <article key={`${item.date}-${item.title}`}>
              <span className={typeClass[item.type]}>{item.date}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <p>找 · 我</p>
        <h2>侯斯博</h2>
        <span>其实不难找，下面这些入口都能联系到我。</span>
      </div>
      <div className="contact-right">
        <p className="eyebrow">Contact</p>
        <h3>怎么联系？</h3>
        <p>
          GitHub、邮箱、电话和微信都在这里。如果你想聊项目、合作、学习或只是继续了解我，直接说来意就好。
        </p>
        <div className="contact-actions" aria-label="联系方式">
          <a href={links.demo} aria-label="回到首页" title="回到首页">
            <Rocket size={21} aria-hidden="true" />
          </a>
        {links.github ? (
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <Github size={21} aria-hidden="true" />
          </a>
        ) : (
          <a href="#projects" aria-label="看项目证据" title="看项目证据">
            <Blocks size={21} aria-hidden="true" />
          </a>
        )}
        {links.email ? (
          <a href={`mailto:${links.email}`} aria-label={`邮箱 ${links.email}`} title={links.email}>
            <Mail size={21} aria-hidden="true" />
          </a>
        ) : (
          <a href="#build-log" aria-label="看构建轨迹" title="看构建轨迹">
            <Flame size={21} aria-hidden="true" />
          </a>
        )}
        {links.phone && (
          <a href={`tel:${links.phone}`} aria-label={`电话 ${links.phone}`} title={links.phone}>
            <Phone size={21} aria-hidden="true" />
          </a>
        )}
        {links.wechat && (
          <span className="contact-method" aria-label={`微信号 ${links.wechat}`} title={`微信 ${links.wechat}`}>
            <MessageCircle size={21} aria-hidden="true" />
          </span>
        )}
          <a href="#growth" aria-label="看作品线" title="看作品线">
            <MapIcon size={21} aria-hidden="true" />
          </a>
          <a href="#top" aria-label="个人主页" title="个人主页">
            <Globe size={21} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
