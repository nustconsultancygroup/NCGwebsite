import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './UI.css'

/* Scroll to top whenever the route changes */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [pathname])
  return null
}

/* Fade + rise in when scrolled into view */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.unobserve(el) }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/* Standard interior page hero band */
export function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container page-hero__inner">
        {eyebrow && <span className="eyebrow eyebrow--on-red page-hero__eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {children && <p className="page-hero__sub">{children}</p>}
      </div>
    </section>
  )
}
