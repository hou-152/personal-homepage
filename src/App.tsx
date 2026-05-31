import ArrowDown from "lucide-react/dist/esm/icons/arrow-down";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Blocks from "lucide-react/dist/esm/icons/blocks";
import BrainCircuit from "lucide-react/dist/esm/icons/brain-circuit";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import Flame from "lucide-react/dist/esm/icons/flame";
import Github from "lucide-react/dist/esm/icons/github";
import Globe from "lucide-react/dist/esm/icons/globe";
import Mail from "lucide-react/dist/esm/icons/mail";
import Map from "lucide-react/dist/esm/icons/map";
import MessageCircle from "lucide-react/dist/esm/icons/message-circle";
import Phone from "lucide-react/dist/esm/icons/phone";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import { profile } from "./data/profile";
import { growth } from "./data/growth";
import { projects } from "./data/projects";
import { abilities } from "./data/abilities";
import { buildLog } from "./data/build-log";
import { links } from "./data/links";
import { workbenchGroups } from "./data/workbench";

const navItems = [
  { label: "我是谁", href: "#identity" },
  { label: "作品线", href: "#growth" },
  { label: "项目", href: "#projects" },
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

function App() {
  return (
    <div className="site-shell" id="top">
      <Header />
      <main>
        <Hero />
        <Identity />
        <GrowthTimeline />
        <Projects />
        <Workbench />
        <AbilityMap />
        <BuildHeatmap />
        <Changelog />
        <Contact />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="主导航">
      <a className="brand" href="#top" aria-label="回到首页">
        <span className="brand-mark">S</span>
        <span>SpecDriven</span>
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
          <a className="primary-action" href="#projects">
            看项目证据
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a className="secondary-action" href="#build-log">
            看构建轨迹
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-label="SpecDrivenCoding 流程视觉图">
        <div className="flow-card active">
          <span>01</span>
          Notice
        </div>
        <div className="flow-card">
          <span>02</span>
          Structure
        </div>
        <div className="flow-card">
          <span>03</span>
          Build
        </div>
        <div className="flow-card strong">
          <span>04</span>
          Show
        </div>
        <div className="trajectory-line" />
        <div className="signal-panel">
          <Sparkles size={20} aria-hidden="true" />
          <p>把想法、结构、行动和结果连成一条成长证据链</p>
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
        <h2>项目不是主角，它们负责证明我做成了什么</h2>
      </div>
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
              <Map size={20} aria-hidden="true" />
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
  const proofStats = [
    { value: buildLog.length, label: "有效构建记录" },
    { value: "4", label: "迭代阶段" },
    { value: "2", label: "已上线证据" },
  ];

  return (
    <section className="section-band build-section" id="build-log">
      <div className="section-heading">
        <p className="eyebrow">Build Log</p>
        <h2>构建节奏：证明我在持续推进</h2>
      </div>
      <div className="heatmap-wrap">
        <div className="build-proof-panel">
          <p>
            这里不放日记，只留下能证明推进的动作：写清楚、做出来、上线、复盘、再迭代。
          </p>
          <div className="build-proof-stats">
            {proofStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="heatmap" aria-label="构建节奏图">
            {buildLog.map((item, index) => (
              <button
                className={`heat-cell ${typeClass[item.type]}`}
                key={`${item.date}-${item.title}`}
                title={`${item.date} ${item.title}`}
                type="button"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="build-log-list">
          {buildLog.slice(-5).reverse().map((item) => (
            <article key={`${item.date}-${item.title}`}>
              <span>{item.date}</span>
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
            <Map size={21} aria-hidden="true" />
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
