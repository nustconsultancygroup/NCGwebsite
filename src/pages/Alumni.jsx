import { Link } from 'react-router-dom'
import { PageHero, Reveal } from '../components/UI'
import './pages.css'

export default function Alumni() {
  return (
    <>
      <PageHero eyebrow="Alumni Network" title="A growing network of consultants, founders, and leaders.">
        NCG alumni carry the discipline of the group into top firms, startups, and organizations
        across Pakistan and beyond.
      </PageHero>

      <section className="section section--cream">
        <div className="container">
          <Reveal className="placeholder">
            <img src="/logos/ncg-mark.svg" alt="" className="placeholder__mark" />
            <h2>Alumni network coming soon</h2>
            <p>
              We&rsquo;re building out our alumni directory and mentorship network. Details on how
              to connect with and tap into the NCG alumni community will be shared here.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/join" className="btn btn--primary">Join NCG</Link>
              <Link to="/contact" className="btn btn--ghost">Get in touch</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
