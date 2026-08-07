const CALENDLY_URL = "https://calendly.com/placeholder/restoration-chat";
const LINKEDIN_URL = "https://linkedin.com/in/placeholder";
const EMAIL = "hello@[placeholder-domain].com";

const challenges = [
  {
    number: "01",
    title: "Long-running projects",
    copy: "Work that unfolds over months—not hours—needs a different kind of project record.",
  },
  {
    number: "02",
    title: "Changing scope",
    copy: "Teardown reveals the real job. Estimates, approvals, and plans have to evolve with it.",
  },
  {
    number: "03",
    title: "Labor & parts tracking",
    copy: "Hundreds of hours and parts from many sources need to stay tied to the right build.",
  },
  {
    number: "04",
    title: "Progress billing & approvals",
    copy: "Customers need a clear view of progress, decisions, added work, and what comes next.",
  },
];

const questions = [
  "How do you track technician time across long projects?",
  "How do you manage parts ordered, received and installed?",
  "What happens when new work is discovered after teardown?",
  "How do you keep customers updated and approve additional work?",
  "How do you know whether a project is still profitable?",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="wordmark" href="#top" aria-label="RestorationOS home">
            <BrandMark />
            <span>RestorationOS</span>
          </a>
          <nav aria-label="Primary navigation">
            <a className="nav-link" href="#research">
              Why this matters
            </a>
            <a className="button button-small" href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Talk to us <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Researching better software for restoration shops</p>
            <h1>Built around the way restoration shops actually work.</h1>
            <p className="hero-lede">
              We’re speaking with restoration and custom-build shop owners to understand how they manage long-running
              projects, technician time, parts, changing scope, customer updates and billing.
            </p>
            <div className="hero-action">
              <a className="button button-primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Talk to us <ArrowIcon />
              </a>
              <p>10–15 minute conversation. No sales pitch.</p>
            </div>
          </div>

          <aside className="field-note" aria-label="Research focus">
            <div className="field-note-top">
              <span>Field note / 001</span>
              <span>US shops</span>
            </div>
            <p className="field-note-label">Current research focus</p>
            <p className="field-note-title">The complete life of a build</p>
            <div className="build-track" aria-hidden="true">
              <div><span>01</span><i /></div>
              <div><span>02</span><i /></div>
              <div><span>03</span><i /></div>
              <div><span>04</span><i /></div>
            </div>
            <div className="build-labels">
              <span>Estimate</span>
              <span>Teardown</span>
              <span>Build</span>
              <span>Delivery</span>
            </div>
            <p className="field-note-copy">
              How information, decisions, work and money move through a project—from first inspection to final handover.
            </p>
          </aside>
        </div>
        <div className="container specialty-line">
          <span aria-hidden="true" />
          <p>For classic restoration, restomod, hot rod and custom fabrication shops.</p>
        </div>
      </section>

      <section className="section" id="research">
        <div className="container">
          <div className="section-intro split-intro">
            <p className="section-kicker">Why we’re researching this</p>
            <div>
              <h2>Restoration isn’t a normal repair job.</h2>
              <p>
                A repair order might stay open for a day. A restoration can stay open for months or years. Scope changes
                after teardown, parts come from multiple sources, technicians accumulate hundreds of hours, and customers
                need regular updates and billing.
              </p>
            </div>
          </div>

          <div className="challenge-grid">
            {challenges.map((challenge) => (
              <article className="challenge-card" key={challenge.number}>
                <span className="card-number">{challenge.number}</span>
                <h3>{challenge.title}</h3>
                <p>{challenge.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section questions-section" id="questions">
        <div className="container questions-grid">
          <div className="questions-heading">
            <p className="section-kicker">What we want to learn</p>
            <h2>We’d love to learn how your shop handles this today.</h2>
            <p>No right answers. We’re interested in the real process—including the workarounds.</p>
          </div>
          <ol className="question-list">
            {questions.map((question, index) => (
              <li key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{question}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div>
            <p className="section-kicker">Who we are</p>
            <h2>About us</h2>
          </div>
          <div className="about-copy">
            <p>
              We’re a small product team based in India with experience building software and AI workflows for businesses.
              We’re currently researching the auto restoration industry before deciding what, if anything, should be built.
            </p>
            <p className="about-note">
              Right now, our job is to listen carefully, understand the work, and avoid jumping to conclusions.
            </p>
            <div className="founder-block">
              <div className="founder-monogram" aria-hidden="true">SB</div>
              <div className="founder-details">
                <strong>Saksham Bhutani</strong>
                <span>Founder / Product Builder</span>
              </div>
              <div className="founder-links">
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
                <a href={`mailto:${EMAIL}`}>Email <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section" id="contact">
        <div className="container closing-inner">
          <p className="section-kicker section-kicker-light">A shop-owner conversation</p>
          <h2>Run a restoration or custom shop?</h2>
          <p>
            If you’re open to sharing how your shop works today, we’d really value 10–15 minutes of your time.
          </p>
          <a className="button button-light" href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Schedule a quick conversation <ArrowIcon />
          </a>
          <p className="email-line">Or email us at: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <p>RestorationOS — Industry research project</p>
          <p>© 2026</p>
        </div>
      </footer>
    </main>
  );
}
