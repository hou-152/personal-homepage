import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  CheckCircle2,
  Flame,
  Github,
  Mail,
  Map,
  MessageCircle,
  Phone,
  Rocket,
  Sparkles,
} from "lucide-react";
import { profile } from "./data/profile";
import { growth } from "./data/growth";
import { projects } from "./data/projects";
import { abilities } from "./data/abilities";
import { buildLog } from "./data/build-log";
import { links } from "./data/links";

const navItems = [
  { label: "我是谁", href: "#identity" },
  { label: "成长线", href: "#growth" },
  { label: "项目", href: "#projects" },
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
        <h1>{profile.headline}</h1>
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
          Brief
        </div>
        <div className="flow-card">
          <span>02</span>
          PRD
        </div>
        <div className="flow-card">
          <span>03</span>
          DESIGN
        </div>
        <div className="flow-card strong">
          <span>04</span>
          Build
        </div>
        <div className="trajectory-line" />
        <div className="signal-panel">
          <Sparkles size={20} aria-hidden="true" />
          <p>把模糊想法推进成可展示作品</p>
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
        <div className="focus-list">
          {profile.focus.map((item) => (
            <span key={item}>{item}</span>
          ))}
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
        <p className="eyebrow">Growth Line</p>
        <h2>不是罗列经历，而是展示上升斜率</h2>
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
        <h2>项目卡片是作品证据</h2>
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
            <p className="project-role">{project.role}</p>
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
  const weeks = Array.from({ length: 24 }, (_, index) => index);

  return (
    <section className="section-band build-section" id="build-log">
      <div className="section-heading">
        <p className="eyebrow">Build Log</p>
        <h2>成长热力图：只记录有效构建行为</h2>
      </div>
      <div className="heatmap-wrap">
        <div className="heatmap" aria-label="成长热力图">
          {weeks.map((week) => {
            const item = buildLog[week % buildLog.length];
            return (
              <button
                className={`heat-cell ${typeClass[item.type]}`}
                key={`${item.date}-${week}`}
                title={`${item.date} ${item.title}`}
                type="button"
              >
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
        <div className="build-log-list">
          {buildLog.slice(0, 4).map((item) => (
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
        <h2>最近更新让页面保持活着</h2>
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
      <div>
        <p className="eyebrow">Contact</p>
        <h2>如果你想继续了解我，可以从这里开始。</h2>
      </div>
      <div className="contact-actions">
        <a href={links.demo}>
          <Rocket size={18} aria-hidden="true" />
          回到首页
        </a>
        {links.github ? (
          <a href={links.github} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
        ) : (
          <a href="#projects">
            <Blocks size={18} aria-hidden="true" />
            看项目证据
          </a>
        )}
        {links.email ? (
          <a href={`mailto:${links.email}`}>
            <Mail size={18} aria-hidden="true" />
            Gmail
          </a>
        ) : (
          <a href="#build-log">
            <Flame size={18} aria-hidden="true" />
            看构建轨迹
          </a>
        )}
        {links.phone && (
          <a href={`tel:${links.phone}`}>
            <Phone size={18} aria-hidden="true" />
            电话
          </a>
        )}
        {links.wechat && (
          <span className="contact-method" aria-label={`微信号 ${links.wechat}`}>
            <MessageCircle size={18} aria-hidden="true" />
            微信 {links.wechat}
          </span>
        )}
        <a href="#growth">
          <Map size={18} aria-hidden="true" />
          看成长线
        </a>
      </div>
    </section>
  );
}

export default App;
