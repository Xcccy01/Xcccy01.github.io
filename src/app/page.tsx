const menuTags = ["燕麦拿铁", "实验笔记", "多模态推理", "温柔界面"];

const menuItems = [
  {
    label: "今日特调",
    title: "研究介绍占位",
    text: "这里放站点主人的核心研究方向介绍。建议写成两三句话，像咖啡馆菜单里的招牌描述，简短但有记忆点。",
  },
  {
    label: "本周豆单",
    title: "项目展示占位",
    text: "这里放代表项目、正在做的实验、或者想重点展示的开源工作。文字先用中文占位，后面再替换成真实内容。",
  },
  {
    label: "限定甜点",
    title: "写作栏目占位",
    text: "这一栏可以用来放随笔、博客、论文笔记或者学习札记，让页面像一本小册子，而不是普通的个人简历。",
  },
];

const noteColumns = [
  {
    title: "店内便笺",
    text: "这里适合放一句更柔和的自我介绍，比如你如何看待研究、如何写代码、或者为什么喜欢在温暖的视觉里讲严肃的问题。",
  },
  {
    title: "橱窗公告",
    text: "这里可以放近期更新、想做的主题、正在搭建的作品，保持一点手写便签的感觉，不要太像企业网站公告栏。",
  },
];

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Xcccy01",
  },
  {
    label: "邮箱",
    href: "mailto:hello@xcccy.site",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" id="top">
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />
        <div className="coffee-stain coffee-stain-one" aria-hidden="true" />
        <div className="coffee-stain coffee-stain-two" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="#top">
            xcccy
          </a>
          <nav className="nav">
            <a href="#menu">菜单</a>
            <a href="#notes">便笺</a>
            <a href="#contact">联系</a>
          </nav>
        </header>

        <div className="hero-grid">
          <aside className="hero-rail">
            <p className="rail-kicker">今日菜单</p>
            <div className="rail-special">
              <span>店长推荐</span>
              <strong>燕麦云朵拿铁</strong>
              <p>适合把研究、写作与代码一起放在温柔光线里展示。</p>
            </div>

            <div className="rail-tags">
              {menuTags.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>

          <div className="hero-copy">
            <p className="eyebrow">中文占位 · 精品咖啡馆风格主页</p>
            <h1>
              把个人主页
              <br />
              做成一间
              <br />
              <span>奶咖色的小咖啡馆</span>
            </h1>
            <p className="lede">
              这里先用中文占位排版，模拟首页首屏的正式内容。整体方向不再是常规卡片站，而是一张像精品咖啡店海报与菜单册页混合起来的首页。
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/Xcccy01"
                target="_blank"
                rel="noopener noreferrer"
              >
                查看 GitHub
              </a>
              <a className="button button-secondary" href="#menu">
                看首页结构
              </a>
            </div>
          </div>

          <aside className="menu-board" aria-label="咖啡馆海报样式展示">
            <div className="board-card">
              <p className="board-kicker">店内海报</p>
              <h2>拿铁 01</h2>
              <p className="board-copy">
                奶泡、纸张、木色与柔和留白，作为整个首页的主视觉基调。
              </p>

              <div className="latte-stage" aria-hidden="true">
                <div className="steam steam-one" />
                <div className="steam steam-two" />
                <div className="latte-cup">
                  <div className="latte-foam">
                    <div className="foam-heart foam-heart-left" />
                    <div className="foam-heart foam-heart-right" />
                    <div className="foam-leaf foam-leaf-top" />
                    <div className="foam-leaf foam-leaf-bottom" />
                  </div>
                  <div className="cup-handle" />
                </div>
              </div>

              <div className="board-meta">
                <span>燕麦奶</span>
                <span>双份浓缩</span>
                <span>肉桂粉</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="ticker" aria-label="首页标签">
          {menuTags.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <p className="section-kicker">首页结构</p>
          <h2>彻底换成海报式布局，而不是一排排普通模块。</h2>
        </div>

        <div className="menu-layout">
          <div className="menu-lead">
            <p>
              这一块是首页第二屏的大段中文占位。它不再像产品官网那样先堆三张卡，而是像菜单内页，先给出一个气质明确的引导段，再展开几个重点栏目。
            </p>
          </div>

          <div className="menu-list">
            {menuItems.map((item) => (
              <article className="menu-entry" key={item.label}>
                <p className="entry-kicker">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="notes-section" id="notes">
        <div className="notes-paper">
          <div className="section-heading">
            <p className="section-kicker">手写便笺</p>
            <h2>给严肃内容留一点软边、留白和纸张感。</h2>
          </div>

          <div className="notes-columns">
            {noteColumns.map((item) => (
              <article className="note-strip" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="section-kicker">联系窗口</p>
            <h2>这里放联系方式、合作邀请，或者一句适合写在店门口的小招呼。</h2>
          </div>

          <div className="contact-links">
            {footerLinks.map((item) => (
              <a
                className="contact-link"
                href={item.href}
                key={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <span>{item.label}</span>
                <strong>{item.label === "邮箱" ? "hello@xcccy.site" : "@Xcccy01"}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
