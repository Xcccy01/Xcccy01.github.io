import { AmbientResearchField } from "@/components/ambient-research-field";

export default function Home() {
  const focusAreas = [
    "Multimodal reasoning systems",
    "Agentic workflows for research",
    "Evaluation, interpretability, and alignment",
  ];

  const researchLanes = [
    {
      index: "01",
      title: "Reasoning under ambiguity",
      description:
        "I study what happens when models leave clean benchmark conditions and have to preserve structure under uncertainty.",
    },
    {
      index: "02",
      title: "Agents with useful discipline",
      description:
        "I care about memory, task decomposition, and the operational limits of agentic systems in real workflows.",
    },
    {
      index: "03",
      title: "Interfaces for complex systems",
      description:
        "Research gets more useful when the surface is legible. I design interfaces that clarify behavior without flattening it.",
    },
  ];

  const selectedWorks = [
    {
      label: "Research Practice",
      title: "Building experiments that produce decisions, not just artifacts.",
      description:
        "My workflow links papers, evals, and implementation tightly enough that each prototype sharpens the next question.",
    },
    {
      label: "Writing and Notes",
      title: "Keeping a running record of what works, fails, and changes my view.",
      description:
        "I like compact explanations, field notes, and writing that preserves the shape of an idea without dressing it up.",
    },
    {
      label: "Open Source",
      title: "Shipping tools in public with enough polish to be used.",
      description:
        "GitHub is where exploratory systems become reusable code, with practical defaults and clear surfaces.",
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
              I build AI research into systems that feel rigorous, useful, and
              alive.
            </h1>
            <p className="lede">
              A personal site for experiments, notes, and open-source work.
              Warm editorial composition outside, hard technical questions
              underneath.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://github.com/Xcccy01">
                Visit GitHub
              </a>
              <a className="button button-secondary" href="#research">
                Explore research
              </a>
            </div>
            <div className="hero-footnotes">
              <span>Based in China</span>
              <span>Open to research collaboration</span>
              <span>Custom-built for GitHub Pages</span>
            </div>
          </div>

          <div className="hero-scene">
            <AmbientResearchField labels={focusAreas} />
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Site intent">
        {signals.map((signal) => (
          <p key={signal}>{signal}</p>
        ))}
      </section>

      <section className="section trajectory" id="research">
        <div className="trajectory-grid">
          <div className="trajectory-copy">
            <p className="section-label">Research</p>
            <h2>A personal site shaped like a working research surface.</h2>
            <p className="statement-copy">
              My work sits between frontier model capabilities and practical
              systems design. I am interested in reasoning quality, agent
              behavior, and interfaces that make complex systems easier to read.
            </p>
          </div>

          <div className="trajectory-list">
            {researchLanes.map((lane) => (
              <article className="trajectory-item" key={lane.title}>
                <span className="trajectory-index">{lane.index}</span>
                <div>
                  <h3>{lane.title}</h3>
                  <p>{lane.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section journal" id="writing">
        <div className="journal-grid">
          <div className="journal-intro">
            <p className="section-label">Selected Tracks</p>
            <h2>Three channels, one body of work.</h2>
            <p className="statement-copy">
              Research, writing, and open source are treated here as connected
              outputs rather than separate tabs in a portfolio.
            </p>
          </div>

          <div className="journal-rows">
            {selectedWorks.map((item, index) => (
              <article className="journal-row" key={item.title}>
                <span className="journal-index">0{index + 1}</span>
                <div className="journal-body">
                  <p className="journal-kicker">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section manifesto">
        <div className="manifesto-pane">
          <p className="section-label">Visual Thesis</p>
          <h2>
            A warmer, quieter alternative to glossy AI branding, with motion
            that explains the mood instead of interrupting it.
          </h2>
        </div>
        <div className="manifesto-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-panel">
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
        </div>
      </section>
    </main>
  );
}
