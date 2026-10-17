import { useState } from 'react'
import { PageHero, Reveal } from '../components/UI'
import { whyJoin, joinInfo, faqs } from '../data/content'
import './pages.css'

const steps = [
  { t: 'Online Application', d: 'Submit your application at the start of the semester.' },
  { t: 'CV & Screening', d: 'Share your CV and complete screening assessments.' },
  { t: 'Interview', d: 'Selected applicants move to the interview phase.' },
  { t: 'Selection', d: 'Final selection based on skills, potential, and value fit.' },
]

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '2527e3e2-e673-4111-8bd2-d241cc1c2be0'

export default function Join() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.target)
    formData.append('access_key', WEB3FORMS_KEY)
    formData.append('from_name', 'NCG Website — Recruitment Application')
    const applicantName = formData.get('name') || 'Applicant'
    formData.append('subject', `New NCG Member Application: ${applicantName}`)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()
      if (result.success) {
        setSent(true)
      } else {
        setError(result.message || 'Unable to submit your application. Please try again.')
      }
    } catch (err) {
      setError('A network error occurred. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero eyebrow="Join NCG" title="Consulting skills are built, not assumed.">
        NCG is open to all NUST students who show a willingness to learn. No prior consulting
        experience required, we&rsquo;ll build it with you.
      </PageHero>

      {/* Why join */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The opportunity</span>
            <h2>What membership gives you</h2>
            <p>{joinInfo.benefits}</p>
          </div>
          <div className="info-grid info-grid--3">
            {whyJoin.map((w, i) => (
              <Reveal className="info-card" delay={(i % 3) * 70} key={w.title}>
                <span className="info-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section section--red">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--on-red">Where you fit</span>
            <h2>Departments</h2>
            <p>Functional areas you can contribute to and grow within.</p>
          </div>
          <Reveal className="dept-grid">
            {joinInfo.departments.map((d) => <span className="pill" key={d}>{d}</span>)}
          </Reveal>
        </div>
      </section>

      {/* Recruitment process */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>The recruitment process</h2>
            <p>{joinInfo.timeline}</p>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal className="step" delay={i * 80} key={s.t}>
                <div className="step__num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Apply now</span>
            <h2>Register your interest</h2>
            <p>Fill in your details and our team will reach out with recruitment updates.</p>
          </div>
          {sent ? (
            <div className="form__success">
              Thanks for your interest! We&rsquo;ve received your details and will be in touch
              with the next recruitment cycle. Follow us on Instagram and LinkedIn for updates.
            </div>
          ) : (
            <form className="form" onSubmit={submit}>
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {error && <div className="form__error">{error}</div>}
              <div className="form__row">
                <div className="field">
                  <label htmlFor="j-name">Full name</label>
                  <input id="j-name" name="name" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="j-email">Email</label>
                  <input id="j-email" name="email" type="email" required placeholder="you@nust.edu.pk" />
                </div>
              </div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="j-school">School / Department</label>
                  <input id="j-school" name="school" placeholder="e.g. NBS, SEECS" />
                </div>
                <div className="field">
                  <label htmlFor="j-interest">Area of interest</label>
                  <select id="j-interest" name="interest" defaultValue="">
                    <option value="" disabled>Choose a department</option>
                    {joinInfo.departments.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="j-why">Why do you want to join NCG?</label>
                <textarea id="j-why" name="why" placeholder="Tell us a little about yourself..." />
              </div>
              <p className="form__note">Eligibility: {joinInfo.eligibility}</p>
              <button type="submit" className="btn btn--primary" style={{ justifySelf: 'start' }} disabled={loading}>
                {loading ? 'Submitting application...' : <>Submit application <span className="arrow">→</span></>}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head text-center mx-auto">
            <span className="eyebrow">Good to know</span>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq">
            {faqs.map((f, i) => (
              <div className={`faq__item ${openFaq === i ? 'is-open' : ''}`} key={i}>
                <button className="faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  {f.q}
                  <span className="faq__icon" aria-hidden="true" />
                </button>
                <div className="faq__a" style={{ maxHeight: openFaq === i ? '400px' : '0' }}>
                  <div className="faq__a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
