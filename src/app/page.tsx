const tastingNotes = [
  {
    label: "House Notes",
    title: "Research that reads softly, even when the ideas are difficult.",
    text: "I like work on reasoning, agents, and system behavior that stays readable from benchmark to interface.",
  },
  {
    label: "Journal",
    title: "Writing with the pace of a quiet cafe afternoon.",
    text: "Notes, essays, and technical fragments live here with enough room for ambiguity, texture, and unfinished thinking.",
  },
  {
    label: "Open Source",
    title: "Tools with clean surfaces and a warm aftertaste.",
    text: "I ship code that tries to stay practical, legible, and pleasant to return to after the novelty is gone.",
  },
];

const houseMenu = [
  "Vanilla oat latte",
  "Reasoning systems",
  "Gentle interfaces",
  "Notebook essays",
];

const signaturePour = [
  {
    label: "Blend",
    value: "Reasoning, agents, and systems design",
  },
  {
    label: "Milk",
    value: "Soft editorial rhythm with a feminine finish",
  },
  {
    label: "Finish",
    value: "Readable code, calm pages, and coffee warmth",
  },
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
            <a href="#notes">Menu</a>
            <a href="#brew">Signature</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Boutique Coffeehouse for AI Research</p>
            <h1>
              Creamy light,
              <br />
              espresso warmth,
              <br />
              <span>and thoughtful systems.</span>
            </h1>
            <p className="lede">
              A personal studio for research, writing, and open-source work,
              shaped like a favorite coffee shop menu: soft edges, delicate
              detail, and a clear latte heart at the center.
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
                Explore the menu
              </a>
            </div>

            <div className="menu-row">
              {houseMenu.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className="hero-art" aria-label="Latte illustration">
            <div className="latte-card">
              <div className="bean bean-one" aria-hidden="true" />
              <div className="bean bean-two" aria-hidden="true" />
              <div className="bean bean-three" aria-hidden="true" />
              <div className="ribbon ribbon-left" aria-hidden="true" />
              <div className="ribbon ribbon-right" aria-hidden="true" />
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
                <p>House Blend</p>
                <strong>Rose Latte No. 01</strong>
              </div>

              <div className="art-note art-note-middle">
                <span>soft roast</span>
                <strong>notes of vanilla, paper, and code</strong>
              </div>

              <div className="art-note art-note-bottom">
                <span>oat milk</span>
                <span>cinnamon dust</span>
                <span>double shot</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="notes-section" id="notes">
        <div className="section-heading">
          <p className="section-kicker">Tasting Menu</p>
          <h2>A softer, prettier coffeehouse frame for serious technical work.</h2>
        </div>

        <div className="card-grid">
          {tastingNotes.map((note) => (
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
            <p className="section-kicker">Signature Pour</p>
            <h2>A boutique cafe mood, with more coffee and a gentler feminine touch.</h2>
            <p>
              This version leans into what was missing before: more visible
              coffee cues, softer cream-and-rose tones, menu language, rounded
              forms, and enough quiet luxury to feel like a small specialty
              cafe instead of a generic portfolio.
            </p>
          </div>

          <div className="brew-list">
            {signaturePour.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-panel">
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h2>For collaboration, writing, or a conversation over a good latte.</h2>
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
