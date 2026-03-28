const navLinks = [
  { href: "#top", label: "回到封面" },
  { href: "#showcase", label: "猫狗橱窗" },
  { href: "#diary", label: "今日值班" },
  { href: "#contact", label: "联系我" },
];

const floatingBadges = [
  {
    emoji: "🐱",
    title: "奶油猫巡游",
    text: "这里放一句首页气质描述占位，像一张会眨眼的粉色海报。",
    className: "badge-cat",
  },
  {
    emoji: "🐶",
    title: "狗狗摇尾巴",
    text: "这里放作品栏目占位，主打热闹、柔软、亲近感和一点夸张。",
    className: "badge-dog",
  },
  {
    emoji: "☕",
    title: "咖啡冒泡泡",
    text: "这里放近期更新占位，让整个页面像甜品柜台一样一眼就记住。",
    className: "badge-coffee",
  },
];

const featureNotes = [
  {
    icon: "🎀",
    title: "封面像海报",
    text: "这里可以写站点主人是谁、在做什么、为什么这个主页不想长得像模板站。文字先保留中文占位，后续再替换真实内容。",
  },
  {
    icon: "🐾",
    title: "栏目像贴纸墙",
    text: "这里适合放项目、研究、博客或随笔。每一块内容都像被糖果胶带贴上去，强调鲜明个性，而不是中规中矩的信息栈。",
  },
  {
    icon: "🌈",
    title: "动效像游乐场",
    text: "这里放一句风格说明占位。猫咪在漂、狗狗在晃、咖啡在冒热气，整个页面保持连续的轻盈动势。",
  },
];

const shiftCards = [
  {
    time: "09:00",
    title: "猫咪压住键盘",
    text: "这里写今天的研究、开发、发呆、看资料或整理灵感的内容占位。",
  },
  {
    time: "14:00",
    title: "狗狗叼来新点子",
    text: "这里写代表项目、开源尝试、视觉实验或者最近最想分享的一件作品。",
  },
  {
    time: "21:00",
    title: "咖啡泡泡继续发光",
    text: "这里写博客、笔记、近况、联络方式或任何更轻一点的个人表达。",
  },
];

const candyTags = [
  "猫猫巡游",
  "狗狗摆尾",
  "莓果奶霜",
  "粉色云朵",
  "彩虹糖纸",
  "奶泡星光",
  "中文占位",
];

const contactLinks = [
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
    <main className="candy-page">
      <section className="hero-band" id="top">
        <div className="hero-sugar hero-sugar-one" aria-hidden="true" />
        <div className="hero-sugar hero-sugar-two" aria-hidden="true" />
        <div className="hero-sugar hero-sugar-three" aria-hidden="true" />

        <header className="site-header">
          <a className="site-mark" href="#top">
            xcccy sweet house
          </a>

          <nav className="site-nav" aria-label="页面导航">
            {navLinks.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker">粉色为主 · 猫狗咖啡动效主页 · 中文占位</p>
            <h1 className="hero-title">
              让个人主页
              <br />
              变成一座
              <br />
              <span>会冒泡泡的宠物咖啡乐园</span>
            </h1>
            <p className="hero-lede">
              这里先放中文占位文案，模拟正式首页内容。整体不走克制理性路线，而是把猫猫、狗狗、咖啡、糖果色和轻快动效全部堆到第一屏，做成一张可以直接当封面的动态海报。
            </p>

            <div className="hero-actions">
              <a
                className="hero-button hero-button-primary"
                href="https://github.com/Xcccy01"
                target="_blank"
                rel="noopener noreferrer"
              >
                进入 GitHub
              </a>
              <a className="hero-button hero-button-secondary" href="#showcase">
                看橱窗内容
              </a>
            </div>

            <div className="hero-chip-row" aria-label="风格标签">
              {candyTags.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="hero-stage" aria-label="猫狗和咖啡的动态主视觉">
            <div className="star-spark star-spark-one" aria-hidden="true">
              ✦
            </div>
            <div className="star-spark star-spark-two" aria-hidden="true">
              ♡
            </div>
            <div className="star-spark star-spark-three" aria-hidden="true">
              ✿
            </div>

            <div className="paw-trail" aria-hidden="true">
              {Array.from({ length: 6 }).map((_, index) => (
                <span
                  key={`paw-${index}`}
                  style={{ animationDelay: `${index * 160}ms` }}
                />
              ))}
            </div>

            <div className="sticker sticker-cat" aria-hidden="true">
              <span>🐱</span>
              <em>喵</em>
            </div>

            <div className="sticker sticker-dog" aria-hidden="true">
              <span>🐶</span>
              <em>汪</em>
            </div>

            <div className="sticker sticker-heart" aria-hidden="true">
              <span>💗</span>
            </div>

            <div className="coffee-float" aria-hidden="true">
              <div className="steam steam-left" />
              <div className="steam steam-right" />
              <div className="coffee-foam">♡</div>
            </div>

            {floatingBadges.map((item, index) => (
              <article
                className={`floating-badge ${item.className}`}
                key={item.title}
                style={{ animationDelay: `${index * 0.8}s` }}
              >
                <span className="badge-emoji" aria-hidden="true">
                  {item.emoji}
                </span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="marquee" aria-label="循环装饰条">
          <div className="marquee-track">
            {candyTags.concat(candyTags).map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase-section" id="showcase">
        <div className="section-shell">
          <div className="section-heading">
            <p>猫狗橱窗</p>
            <h2>让每一块信息都像被糖果胶带贴在玻璃上，热闹、可爱、带一点夸张。</h2>
          </div>

          <div className="feature-grid">
            {featureNotes.map((item, index) => (
              <article className={`feature-note feature-note-${index + 1}`} key={item.title}>
                <span className="feature-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="diary-section" id="diary">
        <div className="section-shell diary-layout">
          <div className="diary-poster">
            <p className="poster-kicker">今日值班表</p>
            <h2>研究、作品、写作、近况，都先藏在一张猫狗咖啡轮班单里。</h2>

            <div className="shift-list">
              {shiftCards.map((item) => (
                <article className="shift-card" key={item.time}>
                  <span className="shift-time">{item.time}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="diary-copy">
            <p className="poster-kicker">手账贴纸页</p>
            <h2>这里放更轻的自我介绍，占位文字也要保留一点软绵绵的空气感。</h2>
            <p className="diary-text">
              可以在这里写个人简介、兴趣、研究方向、做站原因，或者一句会让访客记住你的自我描述。现在先用中文占位，把节奏、留白和情绪做出来，之后再逐段替换真实内容。
            </p>

            <div className="mini-stickers" aria-label="装饰贴纸">
              <span>🐾 小猫监督中</span>
              <span>🎀 小狗开心转圈</span>
              <span>☕ 奶泡持续上升</span>
              <span>🌈 页面保持高饱和</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-panel">
          <div className="contact-copy">
            <p>联系窗口</p>
            <h2>最后留一个像甜品收银台一样醒目的出口，用来放联系方式和邀请。</h2>
          </div>

          <div className="contact-links">
            {contactLinks.map((item) => (
              <a
                className="contact-link"
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
