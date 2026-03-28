const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Xcccy01",
    short: "GH",
  },
  {
    label: "邮箱",
    href: "mailto:hello@xcccy.site",
    short: "邮箱",
  },
  {
    label: "博客",
    href: "#notes",
    short: "Blog",
  },
  {
    label: "近况",
    href: "#about",
    short: "Now",
  },
];

const sectionLinks = [
  { href: "#projects", label: "项目" },
  { href: "#notes", label: "笔记" },
  { href: "#about", label: "简介" },
  { href: "#contact", label: "联系" },
];

const projectItems = [
  {
    title: "研究项目占位",
    meta: "Project 01",
    text: "这里放你最想被看见的一项工作，可以是论文、系统、实验或开源项目。保持两三句，像参考站那样干净直接。",
  },
  {
    title: "作品集合占位",
    meta: "Project 02",
    text: "这里写另一项代表作，重点说明它解决了什么问题、你负责了什么，以及为什么值得被继续点进去看。",
  },
  {
    title: "视觉实验占位",
    meta: "Project 03",
    text: "这里适合放更轻一点的内容，比如设计、写作、可视化、小工具，和正式研究内容形成节奏上的互补。",
  },
];

const noteItems = [
  {
    title: "最近在写什么",
    text: "这里可以放博客、论文笔记、阅读摘要或阶段性思考，用中文占位保持版式。整块内容应该读起来更像个人主页，而不是产品介绍页。",
  },
  {
    title: "最近在做什么",
    text: "这里可以放近期计划、正在推进的方向、准备补完的页面栏目，或者一句简洁的个人近况说明。",
  },
];

const contactCards = [
  {
    label: "GitHub",
    value: "@Xcccy01",
    href: "https://github.com/Xcccy01",
  },
  {
    label: "邮箱",
    value: "hello@xcccy.site",
    href: "mailto:hello@xcccy.site",
  },
];

export default function Home() {
  return (
    <main className="profile-page">
      <section className="profile-hero" id="top">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

        <div className="profile-shell">
          <div className="profile-card">
            <div className="portrait-wrap" aria-hidden="true">
              <div className="portrait-ring" />
              <div className="portrait-core">
                <span className="portrait-face">☕</span>
              </div>
              <span className="portrait-sticker portrait-cat">🐱</span>
              <span className="portrait-sticker portrait-dog">🐶</span>
              <span className="portrait-sticker portrait-heart">✿</span>
            </div>

            <h1 className="profile-title">Xcccy</h1>
            <p className="profile-subtitle">
              粉色学术风个人主页，占位展示研究、项目、写作与联系方式。
            </p>
            <p className="profile-bio">
              这里先放一段更接近参考站气质的简介文字。它应该简洁、克制、信息清楚，但仍然保留一点猫猫、狗狗和咖啡的轻松细节，让页面像认真工作的个人主页，而不是模板化的简历页。
            </p>

            <div className="social-row" aria-label="个人链接">
              {socialLinks.map((item) => (
                <a
                  className="social-link"
                  href={item.href}
                  key={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="social-short">{item.short}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            <nav className="section-nav" aria-label="主页栏目">
              {sectionLinks.map((item) => (
                <a className="section-pill" href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="content-section" id="projects">
        <div className="content-shell">
          <div className="section-head">
            <p>项目</p>
            <h2>像参考站那样先把最重要的入口摆在前面，但保留一点柔和颜色和宠物细节。</h2>
          </div>

          <div className="list-grid">
            {projectItems.map((item) => (
              <article className="list-card" key={item.title}>
                <span className="list-meta">{item.meta}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="notes">
        <div className="content-shell split-layout">
          <div className="essay-block">
            <p className="section-label">笔记</p>
            <h2>下半部分不需要太吵，只要像一页整理好的个人索引。</h2>
            <p className="essay-text">
              这一块延续参考站的节奏，把内容控制在好扫描的长度里。你之后可以逐步替换成论文列表、博客索引、研究主题、教学内容或者个人说明，不需要一次塞满。
            </p>
          </div>

          <div className="mini-list">
            {noteItems.map((item) => (
              <article className="mini-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="content-shell about-panel">
          <div>
            <p className="section-label">简介</p>
            <h2>把猫狗咖啡留在边缘发光，主体仍然是一位清楚、可信、容易联系到的站点主人。</h2>
          </div>

          <div className="about-notes">
            <span>🐾 正在整理研究与项目页面</span>
            <span>☕ 页面视觉改成更克制的粉色 Paper 风格</span>
            <span>🌸 中文占位后续可直接替换成真实简介</span>
          </div>
        </div>
      </section>

      <section className="content-section" id="contact">
        <div className="content-shell">
          <div className="section-head compact">
            <p>联系</p>
            <h2>联系方式保持简单，像参考站一样明确，不需要额外装饰。</h2>
          </div>

          <div className="contact-grid">
            {contactCards.map((item) => (
              <a
                className="contact-card"
                href={item.href}
                key={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
