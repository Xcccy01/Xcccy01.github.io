export default function Home() {
  const focusAreas = [
    "Multimodal reasoning systems",
    "Agentic workflows for research",
    "Evaluation, interpretability, and alignment",
  ];

  const selectedWorks = [
    {
      title: "Research Practice",
      label: "Method",
      description:
        "I build experimental systems that turn papers, benchmarks, and model behavior into concrete design decisions.",
    },
    {
      title: "Writing and Notes",
      label: "Thinking",
      description:
        "I publish research notes, project retrospectives, and compact explanations of ideas worth keeping.",
    },
    {
      title: "Open Source",
      label: "Code",
      description:
        "My GitHub is where prototypes mature into tools, with clean interfaces and practical defaults.",
    },
  ];

  const signals = [
    "Research direction anchored in useful systems, not just demos.",
    "Dynamic visual language inspired by Claude, adapted for a personal lab presence.",
    "Built for GitHub Pages now, with a clean path to a custom server later.",
  ];

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-noise" aria-hidden="true" />
        <div className="orb orb-left" aria-hidden="true" />
        <div className="orb orb-right" aria-hidden="true" />
        <div className="hero-grid">
          <header className="topbar">
            <a className="brand" href="#top">
              <span className="brand-mark" aria-hidden="true" />
              Xcccy
            </a>
            <nav className="nav">
              <a href="#research">Research</a>
              <a href="#writing">Writing</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="hero-copy" id="top">
            <p className="eyebrow">AI Researcher · Builder · Writer</p>
            <h1>
              Researching intelligent systems with a calm interface and a sharp
              point of view.
            </h1>
            <p className="lede">
              I design experiments, build applied AI systems, and turn research
              into tools that are legible, useful, and alive on the page.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://github.com/Xcccy01">
                Visit GitHub
              </a>
              <a className="button button-secondary" href="#research">
                Explore research
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Research focus">
            <p className="panel-kicker">Current focus</p>
            <ul className="focus-list">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <div className="panel-foot">
              <span>Open to collaboration</span>
              <span>Based in China</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="signal-strip" aria-label="Site intent">
        {signals.map((signal) => (
          <p key={signal}>{signal}</p>
        ))}
      </section>

      <section className="section statement" id="research">
        <div className="section-head">
          <p className="section-label">Research</p>
          <h2>
            A personal site shaped like a research studio, not a resume page.
          </h2>
        </div>
        <div className="statement-layout">
          <p className="statement-copy">
            My work sits between frontier model capabilities and practical
            systems design. I care about how multimodal models reason, how
            agents behave under pressure, and how interfaces can make complex
            behavior feel intelligible.
          </p>
          <div className="stat-block">
            <span>Practice</span>
            <strong>Research, prototypes, field notes</strong>
          </div>
        </div>
      </section>

      <section className="section works" id="writing">
        <div className="section-head">
          <p className="section-label">Selected Tracks</p>
          <h2>Three channels, one coherent body of work.</h2>
        </div>
        <div className="work-grid">
          {selectedWorks.map((item, index) => (
            <article className="work-card" key={item.title}>
              <span className="work-index">0{index + 1}</span>
              <p className="work-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section manifesto">
        <div className="manifesto-pane">
          <p className="section-label">Visual Thesis</p>
          <h2>
            Warm neutrals, generous spacing, and restrained motion that feels
            intentional in a screen recording.
          </h2>
        </div>
        <div className="manifesto-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="section-head">
          <p className="section-label">Contact</p>
          <h2>For research collaboration, thoughtful prototypes, or writing.</h2>
        </div>
        <div className="contact-row">
          <a
            className="button button-primary"
            href="https://github.com/Xcccy01"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="button button-secondary"
            href="mailto:hello@xcccy.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@xcccy.site
          </a>
        </div>
      </section>
    </main>
  );
}
