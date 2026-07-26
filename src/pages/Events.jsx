import { PageHero, Reveal } from '../components/UI'
import { events } from '../data/content'
import './pages.css'

export default function Events() {
  return (
    <>
      <PageHero eyebrow="Events" title="Where consulting skills meet real world exposure.">
        Workshops, case competitions, networking sessions, and guest speakers, the moments
        that turn training into practice.
      </PageHero>

      <section className="section section--cream">
        <div className="container">
          <div className="info-grid info-grid--2">
            {events.map((e, i) => (
              <Reveal className="info-card" delay={(i % 2) * 80} key={e.title}>
                <span className="info-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery placeholder */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Event photo gallery</span>
            <h2>Moments from NCG</h2>
            <p>Photos from our workshops, competitions, and sessions will appear here.</p>
          </div>
          <div className="gallery">
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal className="gallery__item" delay={(i % 3) * 70} key={i}>
                <span>Photo {i + 1}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
