import { useEffect, useState } from "react";
import ArrowDown from "lucide-react/dist/esm/icons/arrow-down";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Blocks from "lucide-react/dist/esm/icons/blocks";
import BrainCircuit from "lucide-react/dist/esm/icons/brain-circuit";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
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
import { abilities } from "./data/abilities";
import { buildLog } from "./data/build-log";
import { links } from "./data/links";
import { workbenchGroups } from "./data/workbench";
import { aiNeicanDemoSteps } from "./data/ai-neican-demo";
import { aiNeicanCaseEvidence } from "./data/ai-neican-case";

const navItems = [
  { label: "我是谁", href: "#identity" },
  { label: "作品线", href: "#growth" },
  { label: "项目", href: "#projects" },
  { label: "AI 内参", href: "#/ai-neican-case" },
  { label: "方法", href: "#workbench" },
  { label: "能力", href: "#abilities" },
  { label: "Build Log", href: "#build-log" },
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
      <Identity />
      <GrowthTimeline />
      <Projects />
      <AiNeicanDemo />
      <Workbench />
      <AbilityMap />
      <BuildHeatmap />
      <Changelog />
      <Contact />
    </>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="主导航">
      <a className="brand" href="#top" aria-label="回到首页">
        <span className="brand-mark">{profile.brandMark}</span>
        <span>{profile.brand}</span>
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
        <div className="hero-actions">
          <a className="primary-action" href="#ai-neican-demo">
            看 AI 内参 Demo
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a className="secondary-action" href="#/ai-neican-case">
            看完整证据链
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-label="AI 内参信息流视觉图">
        <div className="flow-card active">
          <span>01</span>
          RSS
        </div>
        <div className="flow-card">
          <span>02</span>
          Reader
        </div>
        <div className="flow-card">
          <span>03</span>
          Daily
        </div>
        <div className="flow-card strong">
          <span>04</span>
          Agent
        </div>
        <div className="trajectory-line" />
        <div className="signal-panel">
          <Sparkles size={20} aria-hidden="true" />
          <p>把 RSS、阅读库、日报、笔记和 Agent 串成一个信息流 Demo</p>
        </div>
      </div>
    </section>
  );
}

function Identity() {
  return (
    <section className="section-band identity-section" id="identity">
      <div className="section-heading">
        <p className="eyebrow">Identity</p>
        <h2>我是谁</h2>
      </div>
      <div className="identity-grid">
        <div className="identity-statement">
          <BrainCircuit size={28} aria-hidden="true" />
          <p>{profile.identity}</p>
        </div>
        <div className="identity-aside">
          <div className="intro-card">
            {profile.intro.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="focus-list">
            {profile.focus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="stat-row">
          {profile.stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
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
      <article className="featured-project-card">
        <div className="featured-project-copy">
          <p className="eyebrow">{featuredProject.eyebrow}</p>
          <h3>{featuredProject.title}</h3>
          <p className="featured-project-summary">{featuredProject.summary}</p>
          <div className="featured-evidence">
            <p>
              <span>它解决什么</span>
              {featuredProject.problem}
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
      <div className="project-grid">
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
                <a href={project.demoUrl}>
                  Demo
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

function AiNeicanDemo() {
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
          <a className="demo-case-link" href="#/ai-neican-case">
            查看完整证据链
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
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
          <a className="secondary-action" href="#ai-neican-demo">
            看轻量 Demo
          </a>
        </div>
      </section>

      <section className="section-band neican-case-section">
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

function Workbench() {
  return (
    <section className="section-band workbench-section" id="workbench">
      <div className="section-heading">
        <p className="eyebrow">Method</p>
        <h2>作品背后的方法</h2>
      </div>
      <div className="workbench-grid">
        {workbenchGroups.map((group, index) => (
          <article className="workbench-card" key={group.name}>
            <div className="workbench-index">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <MapIcon size={20} aria-hidden="true" />
            </div>
            <h3>{group.name}</h3>
            <p>{group.summary}</p>
            <div className="workbench-projects">
              {group.projects.map((project) => (
                <span key={project}>{project}</span>
              ))}
            </div>
            <strong>{group.proof}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function AbilityMap() {
  return (
    <section className="section-band" id="abilities">
      <div className="section-heading">
        <p className="eyebrow">Ability Map</p>
        <h2>能力不是百分比，而是能被项目证明的结果</h2>
      </div>
      <div className="ability-grid">
        {abilities.map((ability) => (
          <article className="ability-card" key={ability.name}>
            <CheckCircle2 size={22} aria-hidden="true" />
            <h3>{ability.name}</h3>
            <p>{ability.description}</p>
            <div>
              {ability.evidence.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BuildHeatmap() {
  const activityCells = getBuildActivityCells(buildLog);
  const activeDays = new Set(buildLog.map((item) => item.date)).size;
  const proofStats = [
    { value: buildLog.length, label: "有效构建记录" },
    { value: "5", label: "迭代阶段" },
    { value: activeDays, label: "活跃构建日" },
  ];

  return (
    <section className="section-band build-section" id="build-log">
      <div className="section-heading">
        <p className="eyebrow">Build Log</p>
        <h2>构建节奏：不是日记，是推进证据</h2>
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
          <p>
            这里不记录生活碎片，只留下能证明推进的动作：写清楚、做出来、上线、复盘、再迭代。
          </p>
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
          {buildLog.slice(-5).reverse().map((item) => (
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

function Changelog() {
  return (
    <section className="section-band changelog-section">
      <div className="section-heading">
        <p className="eyebrow">Now Building</p>
        <h2>最近更新让证据链继续生长</h2>
      </div>
      <div className="changelog">
        {buildLog.slice(2, 6).map((item) => (
          <article key={`${item.date}-${item.title}`}>
            <Flame size={18} aria-hidden="true" />
            <div>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
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
