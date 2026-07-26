import { Link } from 'react-router-dom'
import { PageHero, Reveal } from '../components/UI'
import './pages.css'

export default function Leadership() {
  return (
    <>
      <PageHero eyebrow="Leadership Team" title="The people driving NCG forward.">
        Meet the executive team and department leads behind NUST Consultancy Group.
      </PageHero>

      <section className="section section--cream">
        <div className="container">
          <Reveal className="placeholder">
            <img src="/logos/ncg-mark.svg" alt="" className="placeholder__mark" />
            <h2>Profiles coming soon</h2>
            <p>
              Our leadership team profiles, with names, roles, and photos, will be published here shortly.
              In the meantime, learn more about how we work or get in touch.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn--primary">About NCG</Link>
              <Link to="/contact" className="btn btn--ghost">Contact us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
