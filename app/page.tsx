const CALENDLY_URL = "https://calendly.com/placeholder/restoration-chat";
const LINKEDIN_URL = "https://linkedin.com/in/placeholder";
const EMAIL = "hello@[placeholder-domain].com";

const painPoints = [
  {
    number: "01",
    title: "Scope moves after the job starts",
    copy: "Rust appears. Previous repairs are uncovered. Fabrication becomes necessary. Customers change direction. The original estimate quickly stops representing the actual project.",
  },
  {
    number: "02",
    title: "Work becomes WIP before it becomes revenue",
    copy: "Labor, materials, outsourced work and parts accumulate every day. If they aren’t captured and billed continuously, the shop ends up carrying the project.",
  },
  {
    number: "03",
    title: "Information gets scattered",
    copy: "Technician time lives in one place. Photos somewhere else. Customer decisions in texts. Parts in another system. Important context often stays in someone’s head.",
  },
  {
    number: "04",
    title: "Margin problems appear too late",
    copy: "A project can run for hundreds or thousands of hours. Small gaps between work performed, recorded, approved and billed compound quietly over months.",
  },
];

const workflow = [
  "Technician discovers new damage",
  "Photo + note",
  "New scope captured",
  "Labor / material impact understood",
  "Customer sees what changed",
  "Approval recorded",
  "Project economics stay current",
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
          <a className="wordmark" href="#top" aria-label="The Long Build home">
            <BrandMark />
            <span>The Long Build</span>
          </a>
          <nav aria-label="Primary navigation">
            <a className="nav-link" href="#problem">The Problem</a>
            <a className="nav-link" href="#view">Our View</a>
            <a className="nav-link" href="#early-access">Early Access</a>
            <a className="button button-small" href="#early-access">Join early access <ArrowIcon /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-artwork">
            <img
              src="/og.png"
              alt="The Long Build — Restoration isn’t a repair order. Software for restoration and custom shops."
              width="1536"
              height="1024"
            />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Built for the long build</p>
            <h1 className="sr-only">Restoration isn’t a repair order.</h1>
            <div className="hero-lede">
              <p>A repair may stay open for a day.</p>
              <p>A restoration can stay open for a year.</p>
              <p>
                Scope changes after teardown. Hundreds of technician hours accumulate. Parts move between suppliers,
                shelves and vehicles. Customers make decisions throughout the build.
              </p>
              <p>Most shop software was never designed around that reality.</p>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#early-access">Join early access <ArrowIcon /></a>
              <a className="text-link" href={CALENDLY_URL} target="_blank" rel="noreferrer">Talk to us <ArrowIcon /></a>
            </div>
            <p className="hero-status"><i aria-hidden="true" /> Currently building with a small group of shop owners.</p>
          </div>
        </div>
        <div className="container specialty-line">
          <span aria-hidden="true" />
          <p>For restoration · restomod · hot rod · custom fabrication shops</p>
        </div>
      </section>

      <section className="pain-section" id="problem">
        <div className="container">
          <div className="pain-heading">
            <p className="section-kicker section-kicker-light">The problem</p>
            <h2>The job keeps changing. The systems around it don’t.</h2>
          </div>

          <div className="comparison" aria-label="Normal repair compared with restoration and custom builds">
            <article>
              <p className="comparison-label">Normal repair</p>
              <div className="process-line process-short">
                {['Diagnose', 'Estimate', 'Approve', 'Repair', 'Invoice', 'Done'].map((step, index) => (
                  <span key={step}>{step}{index < 5 && <i aria-hidden="true">→</i>}</span>
                ))}
              </div>
            </article>
            <article>
              <p className="comparison-label">Restoration / custom build</p>
              <div className="process-line process-long">
                {['Estimate', 'Teardown', 'Discovery', 'New scope', 'Fabrication', 'Parts', 'Customer decision', 'More discovery', 'Progressive billing', 'Continue'].map((step, index) => (
                  <span key={step}>{step}{index < 9 && <i aria-hidden="true">→</i>}</span>
                ))}
              </div>
            </article>
          </div>

          <blockquote className="thesis">
            <p>In normal repair, the estimate controls the work.</p>
            <p>In restoration, the work continuously changes the estimate.</p>
          </blockquote>

          <div className="pain-grid">
            {painPoints.map((pain) => (
              <article className="pain-card" key={pain.number}>
                <span className="pain-number">Pain {pain.number}</span>
                <h3>{pain.title}</h3>
                <p>{pain.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="view-section" id="view">
        <div className="container view-grid">
          <div className="view-copy">
            <p className="section-kicker">What we believe should change</p>
            <h2>A long build needs a living project record.</h2>
            <p className="view-lede">
              We believe every hour, part, photo, discovery, approval and dollar should stay connected to the project it belongs to.
            </p>
            <p className="builder-statement">Technicians should spend their time building cars, not maintaining software.</p>
            <p className="view-note">
              We’re building toward a system that follows the work as it happens and keeps the commercial state of the project current.
            </p>
          </div>

          <ol className="workflow" aria-label="Example project workflow">
            {workflow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="access-section" id="early-access">
        <div className="container access-grid">
          <div className="access-copy">
            <p className="section-kicker section-kicker-light">Early access</p>
            <h2>We’re building this with restoration shops.</h2>
            <p>
              We’re speaking with owners who manage long-running restoration, restomod and custom projects to shape the first version.
            </p>
            <p>If this sounds familiar, we’d love to compare notes.</p>
            <div className="access-actions">
              <a className="button button-light" href="#access-form">Join early access <ArrowIcon /></a>
              <a className="text-link text-link-light" href={CALENDLY_URL} target="_blank" rel="noreferrer">Talk to the founders <ArrowIcon /></a>
            </div>
            <p className="conversation-note">10–15 minutes · No sales pitch</p>
            <p className="fit-line">Especially interested in shops running multiple multi-week or multi-month projects.</p>
          </div>

          <form className="access-form" id="access-form" action={`mailto:${EMAIL}`} method="post" encType="text/plain">
            <div className="form-heading">
              <span>Early access request</span>
              <span>Prelaunch</span>
            </div>
            <label>
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              <span>Shop name</span>
              <input type="text" name="shop" autoComplete="organization" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              <span>Website <small>(optional)</small></span>
              <input type="url" name="website" autoComplete="url" inputMode="url" />
            </label>
            <button className="button button-form" type="submit">Request early access <ArrowIcon /></button>
            <p>We’ll only contact you about The Long Build.</p>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div>
            <p className="footer-brand">The Long Build</p>
            <p>Software for restoration &amp; custom shops</p>
          </div>
          <div className="footer-links">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a href={`mailto:${EMAIL}`}>Email <ArrowIcon /></a>
          </div>
          <p>© 2026</p>
        </div>
      </footer>
    </main>
  );
}
