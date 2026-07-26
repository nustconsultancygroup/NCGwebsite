import { Link } from 'react-router-dom'
import './pages.css'

export default function NotFound() {
  return (
    <section className="section section--red" style={{ minHeight: '80vh', display: 'grid', placeItems: 'center' }}>
      <div className="container text-center">
        <span className="eyebrow eyebrow--on-red">Error 404</span>
        <h1 style={{ color: 'var(--cream)', fontSize: 'clamp(3rem,10vw,6rem)', margin: '16px 0' }}>
          Page not found
        </h1>
        <p style={{ color: 'var(--text-on-red-dim)', fontSize: '1.15rem', marginBottom: '30px' }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link to="/" className="btn btn--cream">Back to home <span className="arrow">→</span></Link>
      </div>
    </section>
  )
}
