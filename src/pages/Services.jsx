import { Link } from 'react-router-dom'
import { PageHero, Reveal } from '../components/UI'
import { services } from '../data/content'
import './pages.css'

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Structured solutions to real world business challenges.">
        Eight service lines, each backed by research, analysis, and the discipline of true professionals.
      </PageHero>

      <section className="section section--cream">
        <div className="container">
          <div className="info-grid info-grid--2">
            {services.map((s, i) => (
              <Reveal className="info-card" delay={(i % 2) * 70} key={s.title}>
                <span className="info-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--red">
        <div className="container text-center">
          <Reveal>
            <span className="eyebrow eyebrow--on-red">Work with us</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', margin: '16px auto 26px', maxWidth: '18ch' }}>
              Have a challenge worth solving?
            </h2>
            <Link to="/contact" className="btn btn--cream">Start a conversation <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
