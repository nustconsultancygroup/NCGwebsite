import { PageHero, Reveal } from '../components/UI'
import { researchTypes } from '../data/content'
import './pages.css'

export default function Research() {
  return (
    <>
      <PageHero eyebrow="Research & Insights" title="Sharpening perspectives on Pakistan's business landscape.">
        From our newsletter to structured white papers, NCG publishes research that helps readers
        navigate ever evolving business environments.
      </PageHero>

      <section className="section section--cream">
        <div className="container">
          <div className="info-grid info-grid--3">
            {researchTypes.map((r, i) => (
              <Reveal className="info-card" delay={(i % 3) * 70} key={r.title}>
                <span className="info-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
