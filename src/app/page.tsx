const brewNotes = [
  {
    label: "Research",
    title: "Slow, careful work on reasoning, agents, and systems that stay legible.",
    text: "I like research that can survive contact with implementation. Benchmarks matter, but so do interfaces, workflows, and how people actually use the system.",
  },
  {
    label: "Writing",
    title: "Notes with the texture of a lab diary, not a marketing page.",
    text: "I write compact essays, field notes, and technical observations that keep nuance intact instead of polishing it away.",
  },
  {
    label: "Code",
    title: "Open-source tools with warm edges and practical defaults.",
    text: "GitHub is where experiments become reusable. I prefer clear surfaces, light abstractions, and systems that remain pleasant to revisit.",
  },
];

const menu = [
  "Latte-fueled research",
  "Multimodal reasoning",
  "Agent evaluation",
  "Readable interfaces",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" id="top">
        <div className="hero-halo hero-halo-left" aria-hidden="true" />
        <div className="hero-halo hero-halo-right" aria-hidden="true" />
        <div className="coffee-ring coffee-ring-one" aria-hidden="true" />
        <div className="coffee-ring coffee-ring-two" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="#top">
            xcccy
          </a>
          <nav className="nav">
            <a href="#notes">Notes</a>
            <a href="#brew">Brew</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Latte Lab for AI Research</p>
            <h1>
              Soft milk,
              <br />
              dark espresso,
              <br />
              <span>serious ideas.</span>
            </h1>
            <p className="lede">
              A personal site for research, writing, and open-source work,
              styled like a favorite cafe table: warm, composed, and quietly
              caffeinated.
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

            <div className="menu-row">
              {menu.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className="hero-art" aria-label="Latte illustration">
            <div className="latte-card">
              <div className="steam steam-one" aria-hidden="true" />
              <div className="steam steam-two" aria-hidden="true" />
              <div className="latte-cup" aria-hidden="true">
                <div className="latte-foam">
                  <div className="foam-heart foam-heart-left" />
                  <div className="foam-heart foam-heart-right" />
                  <div className="foam-leaf foam-leaf-top" />
                  <div className="foam-leaf foam-leaf-bottom" />
                </div>
                <div className="cup-handle" />
              </div>

              <div className="art-note art-note-top">
                <p>House Special</p>
                <strong>Research Latte</strong>
              </div>

              <div className="art-note art-note-bottom">
                <span>oat milk</span>
                <span>double shot</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="notes-section" id="notes">
        <div className="section-heading">
          <p className="section-kicker">Brew Notes</p>
          <h2>Technical work served with a little warmth.</h2>
        </div>

        <div className="card-grid">
          {brewNotes.map((note) => (
            <article className="note-card" key={note.label}>
              <p className="card-kicker">{note.label}</p>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brew-section" id="brew">
        <div className="brew-panel">
          <div className="brew-copy">
            <p className="section-kicker">Current Pour</p>
            <h2>Research that feels calm on the page, even when the problem is not.</h2>
            <p>
              The owner of this site likes lattes, so the design should carry a
              little of that mood: soft foam, dark roast contrast, rounded cups,
              and enough air between things to think clearly.
            </p>
          </div>

          <div className="brew-list">
            <div>
              <span>Blend</span>
              <strong>Reasoning + systems design</strong>
            </div>
            <div>
              <span>Flavor</span>
              <strong>Warm, precise, quietly feminine</strong>
            </div>
            <div>
              <span>Aftertaste</span>
              <strong>Readable interfaces and usable code</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-panel">
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h2>For collaboration, writing, or a good research conversation.</h2>
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
