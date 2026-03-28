const focusAreas = [
  "Multimodal reasoning",
  "Agent evaluation",
  "Human-readable interfaces",
];

const researchRows = [
  {
    index: "01",
    title: "Reasoning beyond benchmark comfort zones",
    description:
      "I am interested in how models behave once the task is underspecified, the evidence is messy, and reliability matters more than a leaderboard win.",
  },
  {
    index: "02",
    title: "Agents that stay useful under pressure",
    description:
      "I study planning, memory, and operational discipline in agentic workflows, especially where systems have to act over time instead of answering once.",
  },
  {
    index: "03",
    title: "Interfaces that explain complex model behavior",
    description:
      "Research gets more valuable when the surrounding interface preserves nuance. I care about surfaces that clarify instead of decorate.",
  },
];

const outputRows = [
  {
    label: "Research",
    title: "Experiments shaped by practical systems questions.",
    description:
      "I use implementation as part of the inquiry, not just a way to package the result.",
  },
  {
    label: "Writing",
    title: "Notes that compress ideas without flattening them.",
    description:
      "Field notes, essays, and compact explanations are part of how I keep the work legible.",
  },
  {
    label: "Code",
    title: "Open-source work with usable defaults and clean edges.",
    description:
      "GitHub is where rough prototypes become tools someone else can actually run.",
  },
];

const principles = [
  "Calm visual systems over AI-branding clichés.",
  "Strong typography before decorative UI.",
  "Motion that supports hierarchy, never competes with it.",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" id="top">
        <div className="hero-aura hero-aura-left" aria-hidden="true" />
        <div className="hero-aura hero-aura-right" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="#top">
            Xcccy
          </a>
          <nav className="nav">
            <a href="#research">Research</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">AI Researcher</p>
            <h1>
              Building AI systems with a research mindset and an editorial eye.
            </h1>
            <p className="lede">
              I work on reasoning, agents, and the interfaces around them. This
              site is designed as a quiet research studio rather than a crowded
              portfolio.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/Xcccy01"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a className="button button-secondary" href="#research">
                Explore work
              </a>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="hero-note">
              <p className="section-label">Current focus</p>
              <ul className="focus-list">
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero-quote">
              <p>
                Research becomes more useful when the system, the explanation,
                and the interface reinforce each other.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="signal-strip" aria-label="Design principles">
        {principles.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section className="section research" id="research">
        <div className="section-intro">
          <p className="section-label">Research</p>
          <h2>Three threads define the way I work.</h2>
        </div>

        <div className="research-list">
          {researchRows.map((item) => (
            <article className="research-row" key={item.title}>
              <span className="row-index">{item.index}</span>
              <div className="row-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section outputs" id="work">
        <div className="section-intro">
          <p className="section-label">Outputs</p>
          <h2>Research, writing, and code are treated as one practice.</h2>
        </div>

        <div className="output-list">
          {outputRows.map((item) => (
            <article className="output-row" key={item.label}>
              <p className="output-label">{item.label}</p>
              <div className="output-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-block">
          <div className="section-intro">
            <p className="section-label">Contact</p>
            <h2>For research collaboration, thoughtful prototypes, or writing.</h2>
          </div>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://github.com/Xcccy01"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
            <a
              className="button button-secondary"
              href="mailto:hello@xcccy.site"
            >
              hello@xcccy.site
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
