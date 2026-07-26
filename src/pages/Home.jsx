import { Link } from 'react-router-dom'
import { Reveal } from '../components/UI'
import { services, coreValues, whyJoin } from '../data/content'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <img src="/images/hero-campus.jpg" alt="" />
          <div className="hero__scrim" />
        </div>
        <div className="container hero__inner">
          <span className="eyebrow eyebrow--on-red hero__eyebrow">NUST · Islamabad</span>
          <h1 className="hero__title">
            Bridging strategy.<br />Driving impact.
          </h1>
          <p className="hero__lead">
            The premier student run management consulting organization at NUST,
            building the next generation of strategic leaders.
          </p>
          <div className="hero__actions">
            <Link to="/join" className="btn btn--cream">Join NCG <span className="arrow">→</span></Link>
            <Link to="/services" className="btn btn--ghost-cream">Our Services</Link>
          </div>
        </div>
        <div className="hero__strip">
          <div className="container hero__strip-inner">
            <span>Strategy</span><i>·</i><span>Research</span><i>·</i><span>Impact</span>
          </div>
        </div>
      </section>

      {/* ---------- INTRO ---------- */}
      <section className="section section--cream">
        <div className="container intro">
          <Reveal className="intro__lead-wrap">
            <span className="eyebrow">Who we are</span>
            <p className="intro__lead">
              NCG selects and trains NUST&rsquo;s most driven students to deliver
              structured, data driven, high impact solutions to real world business challenges.
            </p>
          </Reveal>
          <Reveal className="intro__body" delay={100}>
            <p>
              We bridge the gap between academic theory and boardroom execution.
              Through intensive professional development, live corporate engagements,
              and competitive case competitions, our consultants deliver immediate
              value to clients while mastering the realities of business strategy.
            </p>
            <Link to="/about" className="link-arrow">Read our story <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="section--tight stats">
        <div className="container stats__grid">
          {[
            { n: '8', l: 'Core service lines' },
            { n: '10+', l: 'Functional departments' },
            { n: '100%', l: 'Student run' },
            { n: '∞', l: 'Ambition' },
          ].map((s, i) => (
            <Reveal className="stat" delay={i * 80} key={s.l}>
              <span className="stat__num">{s.n}</span>
              <span className="stat__label">{s.l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES PREVIEW ---------- */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we deliver</span>
            <h2>Consulting built on rigor, not routine.</h2>
            <p>Eight service lines that turn analytical talent into boardroom ready solutions.</p>
          </div>
          <div className="grid grid-4 services-preview">
            {services.slice(0, 8).map((s, i) => (
              <Reveal className="svc-card" delay={(i % 4) * 70} key={s.title}>
                <span className="svc-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/services" className="btn btn--primary">Explore all services <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="section section--red">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--on-red">How we operate</span>
            <h2>Our core values</h2>
          </div>
          <div className="grid grid-4 values">
            {coreValues.map((v, i) => (
              <Reveal className="value-card" delay={i * 80} key={v.title}>
                <h3>{v.title}</h3>
                {v.lines.map((l) => <p key={l}>{l}</p>)}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY JOIN ---------- */}
      <section className="section section--cream">
        <div className="container why">
          <div className="why__head">
            <span className="eyebrow">Why join NCG</span>
            <h2>Consulting skills are built, not assumed.</h2>
            <p className="lead">Five reasons NUST&rsquo;s most driven students choose NCG.</p>
            <Link to="/join" className="btn btn--primary why__cta">Start your application <span className="arrow">→</span></Link>
          </div>
          <div className="why__list">
            {whyJoin.map((w, i) => (
              <Reveal className="why-item" delay={i * 60} key={w.title}>
                <span className="why-item__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="cta">
        <div className="cta__media" aria-hidden="true">
          <img src="/images/cta-campus.jpg" alt="" />
        </div>
        <div className="container cta__inner">
          <Reveal>
            <h2 className="cta__title">Ready to work with Pakistan&rsquo;s leading student consultancy?</h2>
            <div className="cta__actions">
              <Link to="/join" className="btn btn--cream">Join NCG <span className="arrow">→</span></Link>
              <Link to="/contact" className="btn btn--ghost-cream">Partner with us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
