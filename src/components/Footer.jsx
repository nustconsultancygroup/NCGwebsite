import { Link } from 'react-router-dom'
import { contact } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/logos/ncg-mark-cream.svg" alt="" width="44" height="44" />
            <span>NUST Consultancy Group</span>
          </div>
          <p className="footer__tag">Bridging strategy. Driving impact.</p>
          <p className="footer__desc">
            The premier student run management consulting organization at the
            National University of Sciences and Technology.
          </p>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/projects">Projects & Case Studies</Link>
          <Link to="/research">Research & Insights</Link>
          <Link to="/events">Events</Link>
        </div>

        <div className="footer__col">
          <h4>Get Involved</h4>
          <Link to="/join">Join NCG</Link>
          <Link to="/leadership">Leadership Team</Link>
          <Link to="/alumni">Alumni Network</Link>
          <Link to="/partners">Partners & Sponsors</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer__col">
          <h4>Connect</h4>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="footer__loc">{contact.location}</span>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© {new Date().getFullYear()} NUST Consultancy Group. All rights reserved.</span>
          <span className="footer__bar-tag">Strategy · Research · Impact</span>
        </div>
      </div>
    </footer>
  )
}
