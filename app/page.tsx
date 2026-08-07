const CALENDLY_URL = "https://calendly.com/placeholder/restoration-chat";
const LINKEDIN_URL = "https://linkedin.com/in/placeholder";
const EMAIL = "hello@[placeholder-domain].com";

const painPoints = [
  {
    number: "01",
    label: "Scope",
    title: "The scope you started with isn’t the scope you finish with.",
    copy: "Teardown reveals hidden damage. Old repairs appear. Fabrication becomes necessary. Customers change direction.\n\nThe work keeps changing after the estimate was written.",
  },
  {
    number: "02",
    label: "WIP / Billing",
    title: "Work gets ahead of billing.",
    copy: "Technician hours, materials, parts and outside work accumulate every day.\n\nIf everything isn’t captured, approved and billed as the project moves, the shop can end up carrying work that has already been performed.",
  },
  {
    number: "03",
    label: "Blockers",
    title: "Projects get stuck.",
    copy: "A build can sit waiting for a part, a customer decision, an outside vendor, fabrication or the right technician.\n\nAcross multiple long-running projects, it becomes difficult to see what is waiting, why it is waiting and what needs to happen next.",
  },
  {
    number: "04",
    label: "Information",
    title: "The real state of the project gets scattered.",
    copy: "Hours are in one system. Photos are on someone’s phone. Customer approval is buried in a text. Parts are somewhere else.\n\nThe owner often ends up carrying the complete picture in their head.",
  },
];

const workflow = [
  "Work happens",
  "A change is discovered",
  "Scope / labor / material impact is captured",
  "Customer sees what changed",
  "Approval recorded",
  "Project and billing stay current",
];

const restorationFlow = [
  "Estimate",
  "Teardown",
  "Discovery",
  "New scope",
  "Work",
  "Parts / outside vendor",
  "Customer decision",
  "More work",
  "Billing",
  "Continue",
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

      <section className="statement-hero" id="top">
        <div className="hero-frame">
          <div className="hero-ruler" aria-hidden="true">
            <span /><span /><span /><span /><span /><span /><span /><span /><span />
          </div>

          <div className="hero-topline">
            <p>The Long Build</p>
            <p>Built for the long build</p>
          </div>

          <div className="hero-statement">
            <h1>Restoration<br />isn’t a repair order.</h1>
            <span className="statement-rule" aria-hidden="true" />
          </div>

          <div className="scope-route" aria-label="A visual representation of project scope changing over time">
            <span className="route-origin" aria-hidden="true" />
            <span className="route-solid route-a" aria-hidden="true" />
            <span className="route-rise" aria-hidden="true" />
            <span className="route-solid route-b" aria-hidden="true" />
            <span className="route-dash route-c" aria-hidden="true" />
            <span className="route-drop" aria-hidden="true" />
            <span className="route-dash route-d" aria-hidden="true" />
            <span className="route-rise route-rise-end" aria-hidden="true" />
            <span className="route-solid route-e" aria-hidden="true" />
            <span className="route-arrow" aria-hidden="true" />
          </div>

          <div className="hero-bottomline">
            <div>
              <p className="hero-descriptor">Software for restoration &amp; custom shops</p>
              <p className="hero-shop-fit">Restoration · restomod · hot rod · custom fabrication</p>
            </div>
            <div className="hero-cta-group">
              <span className="hero-prelaunch"><i aria-hidden="true" /> Building with shop owners</span>
              <a className="button button-primary" href="#early-access">Join early access <ArrowIcon /></a>
              <a className="text-link" href={CALENDLY_URL} target="_blank" rel="noreferrer">Talk to us <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="pain-section" id="problem">
        <div className="container">
          <div className="pain-heading">
            <p className="section-kicker section-kicker-light">The problem</p>
            <div>
              <h2>Where long builds start to break.</h2>
              <p className="pain-intro">
                The work itself isn’t the problem. It’s keeping scope, progress, customers and money aligned while the project keeps changing.
              </p>
            </div>
          </div>

          <div className="pain-grid">
            {painPoints.map((pain) => (
              <article className="pain-card" key={pain.number}>
                <div className="pain-meta"><span>{pain.number}</span><span>{pain.label}</span></div>
                <h3>{pain.title}</h3>
                <p>{pain.copy.split("\n\n").map((paragraph) => <span key={paragraph}>{paragraph}</span>)}</p>
              </article>
            ))}
          </div>

          <blockquote className="pain-conclusion">
            By the time a long project looks behind, underbilled or unprofitable, much of the work has already happened.
          </blockquote>
        </div>
      </section>

      <section className="why-section" id="why">
        <div className="container why-grid">
          <div>
            <p className="section-kicker">Why it happens</p>
            <h2>Why long builds are difficult to manage.</h2>
            <p className="why-copy">
              Most shop workflows assume a job moves from estimate to work to invoice.
            </p>
            <p className="why-copy">
              A restoration keeps looping through discovery, new scope, parts, fabrication, customer decisions and billing.
            </p>
          </div>
          <div>
            <p className="flow-label">A long-build workflow</p>
            <div className="restoration-flow">
              {restorationFlow.map((step, index) => (
                <span key={step}>{step}{index < restorationFlow.length - 1 && <i aria-hidden="true">→</i>}</span>
              ))}
            </div>
            <blockquote className="why-thesis">In restoration, the work continuously changes the estimate.</blockquote>
          </div>
        </div>
      </section>

      <section className="view-section" id="view">
        <div className="container view-grid">
          <div className="view-copy">
            <p className="section-kicker">What we believe should change</p>
            <h2>A long build needs one living project record.</h2>
            <p className="view-lede">
              Our belief is that every hour, part, photo, discovery, customer decision and dollar should stay connected to the project it belongs to.
            </p>
            <p className="builder-statement">Technicians should spend their time building cars, not maintaining software.</p>
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
              We’re speaking with restoration and custom-shop owners who manage multi-week and multi-month projects.
            </p>
            <p>If these problems sound familiar, we’d love to compare notes.</p>
            <div className="access-actions">
              <a className="button button-light" href={CALENDLY_URL} target="_blank" rel="noreferrer">Compare notes <ArrowIcon /></a>
              <a className="text-link text-link-light" href="#access-form">Join early access <ArrowIcon /></a>
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
