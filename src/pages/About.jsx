import { PageHero, Reveal } from '../components/UI'
import { coreValues, messages } from '../data/content'
import './pages.css'

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="The premier student run consulting society at NUST.">
        NCG exists to turn NUST&rsquo;s most analytical students into the country&rsquo;s
        next generation of strategists and business leaders.
      </PageHero>

      {/* Story + campus image */}
      <section className="section section--cream">
        <div className="container">
          <Reveal className="feature">
            <div className="feature__text">
              <span className="eyebrow">Our story</span>
              <h2>Rigor rather than routine.</h2>
              <div className="prose">
                <p>
                  We do this through structured training, live client engagements, and a
                  culture built on discipline. In doing so, NCG positions NUST as a credible
                  hub of consulting talent in Pakistan, equipping members to compete, and win,
                  on a national and global stage.
                </p>
                <p>
                  We bridge the gap between academic theory and boardroom execution, delivering
                  immediate value to clients while our consultants master the realities of
                  business strategy.
                </p>
              </div>
            </div>
            <div className="feature__media">
              <img src="/images/about-campus.jpg" alt="NUST campus, Islamabad" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission split */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Direction</span>
            <h2>Vision &amp; Mission</h2>
          </div>
          <Reveal className="split">
            <div className="split__pane split__pane--a">
              <h3>Vision</h3>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.5 }}>
                To be the most impactful, rewarding, and transformative student run
                consulting society in Pakistan.
              </p>
            </div>
            <div className="split__pane split__pane--b">
              <h3>Mission</h3>
              <p style={{ marginBottom: '16px' }}>To lead the advancement of consulting in Pakistan by:</p>
              <ul className="tick-list">
                <li>Building strategic partnerships across the corporate landscape.</li>
                <li>Delivering real value to the organizations we serve.</li>
                <li>Sharpening the capabilities of our selective student members.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="section section--red">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--on-red">What we stand for</span>
            <h2>Core values</h2>
          </div>
          <div className="info-grid info-grid--2">
            {coreValues.map((v, i) => (
              <Reveal className="info-card" delay={(i % 2) * 80} key={v.title}>
                <span className="info-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                {v.lines.map((l) => <p key={l}>{l}</p>)}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why we exist</span>
            <h2>Founded to close a real gap.</h2>
            <p>
              NUST students have always had the analytical talent to compete with the best.
              What campus lacked was a dedicated platform to channel that talent into strategic
              management consulting.
            </p>
          </div>
          <div className="info-grid info-grid--3">
            {[
              'Building structured pathways into a high reward strategy profession.',
              'Cultivating core competencies in structured communication and analytical rigor.',
              'Positioning NUST as a serious, high priority target in Pakistan\u2019s consulting talent pipeline.',
            ].map((t, i) => (
              <Reveal className="info-card" delay={i * 80} key={i}>
                <span className="info-card__index">{String(i + 1).padStart(2, '0')}</span>
                <p style={{ marginTop: '10px', fontSize: '1.05rem', color: 'var(--text)' }}>{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Messages */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">In their words</span>
            <h2>Messages from our leadership</h2>
          </div>
          <div className="info-grid info-grid--2" style={{ alignItems: 'start' }}>
            <Reveal className="msg-block">
              <div className="msg-block__avatar">FA</div>
              <div>
                <p className="msg-block__quote">&ldquo;{messages.faculty}&rdquo;</p>
                <p className="msg-block__by">Faculty Advisor, NCG</p>
              </div>
            </Reveal>
            <Reveal className="msg-block" delay={100}>
              <div className="msg-block__avatar">P</div>
              <div>
                <p className="msg-block__quote">&ldquo;{messages.president}&rdquo;</p>
                <p className="msg-block__by">President, NCG</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
