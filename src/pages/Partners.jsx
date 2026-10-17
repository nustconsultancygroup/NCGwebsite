import { useState } from 'react'
import { PageHero, Reveal } from '../components/UI'
import './pages.css'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '2527e3e2-e673-4111-8bd2-d241cc1c2be0'

export default function Partners() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.target)
    formData.append('access_key', WEB3FORMS_KEY)
    formData.append('from_name', 'NCG Website — Partnership Inquiry')
    const orgName = formData.get('organization') || 'Corporate Partner'
    formData.append('subject', `New Partnership Inquiry: ${orgName}`)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()
      if (result.success) {
        setSent(true)
      } else {
        setError(result.message || 'Unable to submit your partnership inquiry. Please try again.')
      }
    } catch (err) {
      setError('A network error occurred. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

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
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {error && <div className="form__error">{error}</div>}
              <div className="form__row">
                <div className="field">
                  <label htmlFor="p-org">Organization</label>
                  <input id="p-org" name="organization" required placeholder="Company / organization name" />
                </div>
                <div className="field">
                  <label htmlFor="p-name">Contact person</label>
                  <input id="p-name" name="name" required placeholder="Your name" />
                </div>
              </div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="p-email">Email</label>
                  <input id="p-email" name="email" type="email" required placeholder="you@company.com" />
                </div>
                <div className="field">
                  <label htmlFor="p-type">Interested in</label>
                  <select id="p-type" name="partnership_type" defaultValue="">
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
                <textarea id="p-msg" name="message" placeholder="Tell us more about what you have in mind..." />
              </div>
              <button type="submit" className="btn btn--cream" style={{ justifySelf: 'start' }} disabled={loading}>
                {loading ? 'Submitting inquiry...' : <>Submit inquiry <span className="arrow">→</span></>}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
