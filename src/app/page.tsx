const highlights = [
  {
    tag: "Research Diary",
    title: "Thinking about agents, reasoning, and what makes systems feel trustworthy.",
    tone: "rose",
  },
  {
    tag: "Open Source",
    title: "Small tools, careful defaults, and code that stays readable after the demo.",
    tone: "cream",
  },
  {
    tag: "Writing",
    title: "Lab notes, essays, and soft but sharp explanations of difficult ideas.",
    tone: "mint",
  },
];

const snippets = [
  "Multimodal reasoning",
  "Agent evaluation",
  "Interface design",
  "Research notes",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" id="top">
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="#top">
            xcccy
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#notes">Notes</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">AI Researcher · Cute Lab Edition</p>
            <h1>
              Building thoughtful
              <br />
              <span>AI things</span>
              <br />
              with a soft edge.
            </h1>
            <p className="lede">
              I work on reasoning, agents, and human-readable systems. This
              site is designed like a gentle research notebook: warm, clear,
              and a little dreamy.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/Xcccy01"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub
              </a>
              <a className="button button-secondary" href="#notes">
                Read notes
              </a>
            </div>

            <div className="snippet-row">
              {snippets.map((snippet) => (
                <span key={snippet}>{snippet}</span>
              ))}
            </div>
          </div>

          <aside className="hero-art" aria-hidden="true">
            <div className="art-card art-card-back" />
            <div className="art-card art-card-middle" />
            <div className="art-card art-card-front">
              <div className="art-sticker">lab memo</div>
              <div className="art-orbit art-orbit-one" />
              <div className="art-orbit art-orbit-two" />
              <div className="art-core" />
              <div className="art-footer">
                <span>gentle systems</span>
                <span>spring archive</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="notes-section" id="about">
        <div className="section-heading">
          <p className="section-kicker">About</p>
          <h2>A personal research site, but softer and prettier.</h2>
        </div>

        <div className="card-grid" id="notes">
          {highlights.map((item) => (
            <article className={`note-card note-card-${item.tone}`} key={item.title}>
              <p className="card-kicker">{item.tag}</p>
              <h3>{item.title}</h3>
            </article>
          ))}

          <article className="note-card note-card-wide">
            <p className="card-kicker">Approach</p>
            <h3>
              I like interfaces that feel calm even when the ideas behind them
              are difficult.
            </h3>
            <p>
              My work lives between research, implementation, and explanation.
              The goal is never just to make a system function, but to make its
              behavior understandable and worth returning to.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-panel">
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h2>For collaboration, writing, or quietly ambitious projects.</h2>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="mailto:hello@xcccy.site">
              hello@xcccy.site
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/Xcccy01"
              target="_blank"
              rel="noopener noreferrer"
            >
              View repository
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
