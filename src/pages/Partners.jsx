import { useState } from 'react'
import { PageHero, Reveal } from '../components/UI'
import './pages.css'

export default function Partners() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <>
      <PageHero eyebrow="Partners & Sponsors" title="Partner with Pakistan's next generation of strategists.">
        NCG collaborates with corporate partners, startups, non profits, and universities on
        consulting projects, workshops, research, and events.
      </PageHero>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why partner with NCG</span>
            <h2>Access driven talent and fresh strategic thinking.</h2>
          </div>
          <div className="info-grid info-grid--3">
            {[
              { t: 'Consulting Projects', d: 'Put a trained student team on a real business challenge and receive structured, research backed recommendations.' },
              { t: 'Talent Pipeline', d: 'Connect early with NUST\u2019s most analytical students for internships and recruitment.' },
              { t: 'Brand Presence', d: 'Sponsor workshops, competitions, and events that reach an ambitious student audience.' },
            ].map((c, i) => (
              <Reveal className="info-card" delay={i * 80} key={c.t}>
                <span className="info-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--red">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--on-red">Partnership inquiry</span>
            <h2>Start a partnership</h2>
            <p>Tell us about your organization and what you&rsquo;d like to explore. Our External
              Relations team will follow up.</p>
          </div>
          {sent ? (
            <div className="form__success" style={{ background: 'rgba(251,239,220,0.95)' }}>
              Thank you! Your partnership inquiry has been received. Our team will reach out to
              discuss how we can work together.
            </div>
          ) : (
            <form className="form" onSubmit={submit}>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="p-org">Organization</label>
                  <input id="p-org" required placeholder="Company / organization name" />
                </div>
                <div className="field">
                  <label htmlFor="p-name">Contact person</label>
                  <input id="p-name" required placeholder="Your name" />
                </div>
              </div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="p-email">Email</label>
                  <input id="p-email" type="email" required placeholder="you@company.com" />
                </div>
                <div className="field">
                  <label htmlFor="p-type">Interested in</label>
                  <select id="p-type" defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option>Consulting Project</option>
                    <option>Talent / Recruitment</option>
                    <option>Event Sponsorship</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="p-msg">Message</label>
                <textarea id="p-msg" placeholder="Tell us more about what you have in mind..." />
              </div>
              <button type="submit" className="btn btn--cream" style={{ justifySelf: 'start' }}>
                Submit inquiry <span className="arrow">→</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
