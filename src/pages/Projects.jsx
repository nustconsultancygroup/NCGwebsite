import { PageHero, Reveal } from '../components/UI'
import { projectSections } from '../data/content'
import './pages.css'

const industries = ['Business', 'Technology', 'Education', 'Startups', 'NGOs', 'Public Organizations']

export default function Projects() {
  return (
    <>
      <PageHero eyebrow="Projects & Case Studies" title="Problem solving applied to real business problems.">
        Our members identify issues, conduct research, collect data, spot patterns, and deliver
        apt solutions, through case studies, simulations, and client engagements.
      </PageHero>

      <section className="section section--cream">
        <div className="container">
          <div className="info-grid info-grid--3">
            {projectSections.map((p, i) => (
              <Reveal className="info-card" delay={i * 80} key={p.title}>
                <span className="info-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Where we work</span>
            <h2>Client industries</h2>
            <p>We work across a diverse range of sectors, encouraging members to explore different
              environments and problems.</p>
          </div>
          <Reveal className="pills">
            {industries.map((ind) => <span className="pill" key={ind}>{ind}</span>)}
          </Reveal>
        </div>
      </section>
    </>
  )
}
