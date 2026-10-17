import { useState } from 'react'
import { PageHero, Reveal } from '../components/UI'
import { contact } from '../data/content'
import './pages.css'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '2527e3e2-e673-4111-8bd2-d241cc1c2be0'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.target)
    formData.append('access_key', WEB3FORMS_KEY)
    formData.append('from_name', 'NCG Website — Contact Form')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()
      if (result.success) {
        setSent(true)
      } else {
        setError(result.message || 'Unable to submit your message. Please try again or email us directly.')
      }
    } catch (err) {
      setError('A network error occurred. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's build something with impact.">
        Whether you&rsquo;re a student, a partner, or an organization with a challenge worth
        solving, we&rsquo;d love to hear from you.
      </PageHero>

      <section className="section section--cream">
        <div className="container contact-grid">
          <Reveal>
            <span className="eyebrow">Reach us</span>
            <h2 style={{ fontSize: 'clamp(1.7rem,3.4vw,2.4rem)', margin: '14px 0 32px' }}>
              Get in touch
            </h2>

            <div className="contact-detail">
              <span>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="contact-detail">
              <span>Office</span>
              <p>{contact.location}</p>
            </div>
            <div className="contact-detail">
              <span>Instagram</span>
              <a href={contact.instagram} target="_blank" rel="noreferrer">@nust.consultancygroup</a>
            </div>
            <div className="contact-detail">
              <span>LinkedIn</span>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">NUST Consultancy Group</a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="form__success">
                Thank you for reaching out! Your message has been received and our team will
                respond to your inquiry soon.
              </div>
            ) : (
              <form className="form" onSubmit={submit}>
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                {error && <div className="form__error">{error}</div>}
                <div className="field">
                  <label htmlFor="c-name">Name</label>
                  <input id="c-name" name="name" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" name="email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label htmlFor="c-subject">Subject</label>
                  <input id="c-subject" name="subject" placeholder="How can we help?" />
                </div>
                <div className="field">
                  <label htmlFor="c-message">Message</label>
                  <textarea id="c-message" name="message" required placeholder="Write your message..." />
                </div>
                <button type="submit" className="btn btn--primary" style={{ justifySelf: 'start' }} disabled={loading}>
                  {loading ? 'Sending message...' : <>Send message <span className="arrow">→</span></>}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
