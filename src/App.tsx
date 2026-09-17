import { useEffect, useState } from "react";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Github from "lucide-react/dist/esm/icons/github";
import Mail from "lucide-react/dist/esm/icons/mail";
import MessageCircle from "lucide-react/dist/esm/icons/message-circle";
import Pause from "lucide-react/dist/esm/icons/pause";
import Play from "lucide-react/dist/esm/icons/play";
import Send from "lucide-react/dist/esm/icons/send";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import { profile } from "./data/profile";
import {
  featuredProject,
  projectIndex,
  primaryWorkflow,
  supportingWorks,
  moreWorks,
} from "./data/projects";
import { buildLog } from "./data/build-log";
import { links } from "./data/links";
import { aiNeicanDemoSteps } from "./data/ai-neican-demo";
import { aiNeicanCaseEvidence } from "./data/ai-neican-case";

const navItems = [
  { label: "首页", href: "#top" },
  { label: "精选作品", href: "#selected-work" },
  { label: "更多工作", href: "#more-work" },
  { label: "联系", href: "#contact" },
];

type Page = "home" | "ai-neican-case";

const getCurrentPage = (): Page =>
  window.location.hash.startsWith("#/ai-neican") ? "ai-neican-case" : "home";

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
    <div className={page === "home" ? "site-shell v21-work-index" : "site-shell"} id="top">
      <Header />
      <main>{page === "ai-neican-case" ? <AiNeicanCasePage /> : <HomePage />}</main>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <MoreWorkBuild />
      <Contact />
    </>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="主导航">
      <a className="brand" href="#top" aria-label="回到首页">
        <img className="brand-avatar" src={profile.avatar} alt="侯斯博头像" />
        <span className="brand-copy">
          <strong>{profile.brand}</strong>
          <small>个人主页 · 编辑式工作索引</small>
        </span>
        <span className="version-badge">V21</span>
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
    <section className="section-band v21-hero" aria-labelledby="v21-hero-title">
      <div className="v21-hero-copy">
        <div>
          <p className="v21-kicker">侯斯博 · Work Index 2026</p>
          <h1 id="v21-hero-title">
            <span>我把散落的信息，</span>
            <span>做成可以工作的系统。</span>
          </h1>
        </div>
        <div className="v21-hero-bottom">
          <p>
            从 AI 信息流、知识加工到内容工程，我把模糊问题拆成流程，再推进成 Skill、Demo 和公开作品。
          </p>
          <div className="v21-actions">
            <a className="v21-button v21-button-primary" href="#selected-work">
              看精选作品
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="v21-button" href={links.github} target="_blank" rel="noreferrer">
              GitHub
              <Github size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <aside className="v21-project-index" aria-label="精选项目索引">
        <div className="v21-index-heading">
          <span>Selected / 04</span>
          <span>Index</span>
        </div>
        {projectIndex.map((project) => (
          <a className="v21-index-row" href={project.href} key={project.index}>
            <span className="v21-index-number">{project.index}</span>
            <span>
              <strong>{project.title}</strong>
              <small>{project.meta}</small>
            </span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        ))}
      </aside>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="section-band v21-selected-work" id="selected-work" aria-labelledby="selected-work-title">
      <header className="v21-section-heading">
        <p className="v21-kicker">Selected Work / 01–04</p>
        <h2 id="selected-work-title">只讲最值得验证的工作。</h2>
        <p>一个主案例完整表达，三个支持项目只保留定义、当前证据和边界。</p>
      </header>

      <article className="v21-featured-work" id="selected-primary">
        <div className="v21-featured-copy">
          <div className="v21-work-meta">
            <span>01</span>
            <span>Featured case</span>
          </div>
          <p className="v21-kicker">wechat ai digest pipeline</p>
          <h3>微信群聊 AI 日报管线</h3>
          <p className="v21-featured-summary">
            把 2 个群共 47,582 条源聊天消息，加工成 1,528 条精华块与 69 份可回溯的 HTML 日报。
          </p>
          <div className="v21-workflow-line" aria-label="微信群聊 AI 日报管线核心流程">
            {primaryWorkflow.map((step, index) => (
              <span key={step}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {step}
              </span>
            ))}
          </div>
          <a className="v21-button v21-button-primary" href="#selected-neican">
            看信息日报管线
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="v21-button v21-button-secondary" href="#/ai-neican-case">
            信息日报完整 case
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <figure className="v21-featured-visual">
          <img src={featuredProject.posterUrl} alt="AI 信息日报真实工作台演示封面" />
          <figcaption>
            <span>Evidence surface</span>
            <strong>站内 case + 10 秒演示素材</strong>
          </figcaption>
        </figure>
      </article>

      <div className="v21-supporting-grid">
        {supportingWorks.map((project) => (
          <article className="v21-supporting-work" id={project.id} key={project.id}>
            <div className="v21-work-meta">
              <span>{project.index}</span>
              <span>{project.label}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.body}</p>
            <strong>{project.proof}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function MoreWorkBuild() {
  const recentBuilds = buildLog.slice(-3).reverse();

  return (
    <section className="section-band v21-more-build" id="more-work" aria-labelledby="more-work-title">
      <header className="v21-section-heading">
        <p className="v21-kicker">More Work + Build</p>
        <h2 id="more-work-title">其余工作，留在索引里。</h2>
        <p>没有足够公开证据的项目不做长卡片；构建记录只保留最近完成的推进。</p>
      </header>

      <div className="v21-more-build-grid">
        <div className="v21-more-index" aria-label="更多项目索引">
          <div className="v21-list-heading">
            <span>More Work</span>
            <span>Phase 3 再冻结公开口径</span>
          </div>
          {moreWorks.map((project) => (
            <div className="v21-more-row" key={project.index}>
              <span>{project.index}</span>
              <strong>{project.title}</strong>
              <small>{project.status}</small>
            </div>
          ))}
        </div>

        <aside className="v21-build-snapshot" aria-label="最近构建">
          <div className="v21-build-heading">
            <div>
              <p className="v21-kicker">Build snapshot</p>
              <h3>先判断，再结构，再交付，再复盘。</h3>
            </div>
            <span>V21</span>
          </div>
          <div className="v21-recent-builds">
            {recentBuilds.map((item) => (
              <div key={`${item.date}-${item.title}`}>
                <time dateTime={item.date}>{item.date}</time>
                <strong>{item.title}</strong>
              </div>
            ))}
          </div>
          <a href={links.github} target="_blank" rel="noreferrer">
            查看 GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-band v21-contact" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="v21-kicker">Contact / 侯斯博</p>
        <h2 id="contact-title">有具体问题，就从这里开始。</h2>
      </div>
      <div className="v21-contact-copy">
        <p>
          如果你想聊项目、学习、AI 工作流或继续了解这些作品，可以通过 GitHub、邮箱或微信联系我。
        </p>
        <div className="v21-contact-actions" aria-label="联系方式">
          <a href={links.github} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a href={`mailto:${links.email}`}>
            <Mail size={18} aria-hidden="true" />
            Gmail
          </a>
          <span>
            <MessageCircle size={18} aria-hidden="true" />
            微信：{links.wechat}
          </span>
        </div>
        <p className="v21-built-note">Built from Brief → PRD → Design → V21 Work Index.</p>
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
            这是 AI 信息日报背后的真实工作流：信息进入、人工筛选、Agent
            生成日报、评论入库、深度拆解，最后沉淀成可以继续使用的判断材料。
          </p>
          <button className="demo-play-button" type="button" onClick={togglePlayback}>
            {isPlaying ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
            {isPlaying ? "暂停演示" : activeIndex === aiNeicanDemoSteps.length - 1 ? "重新播放" : "播放演示"}
          </button>
        </div>

        <div className="neican-demo-stage">
          <div className="demo-step-rail" aria-label="AI 信息日报步骤">
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
                原始屏录不进入首屏自动加载。这里保留 10 秒轻量片段，用来证明 Demo 来自真实工作台。
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
            这是 AI 信息日报的完整证据链：外部信息进入系统，被筛选、整理、入库、拆解，最后变成可以复盘、转发和继续使用的判断材料。
          </p>
        </div>
        <div className="case-page-actions">
          <a className="primary-action" href="#top">
            返回首页
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="secondary-action" href="#ai-neican-case-structure">
            六步链路
          </a>
          <a className="tertiary-action" href="#ai-neican-case-daily">
            日报产出
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

        <div className="case-flow-strip" aria-label="AI 信息日报完整证据链流程">
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
            这个页面不是把 AI 信息日报包装成独立产品官网，只证明一件事：我已经能把真实信息输入、人工判断、Agent 加工和知识沉淀串成一条可复盘的工作链路。
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
