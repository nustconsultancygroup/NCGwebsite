import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const navItems = [
  {
    type: 'link',
    to: '/',
    label: 'Home',
  },
  {
    type: 'dropdown',
    id: 'about',
    label: 'About',
    rootMatch: ['/about', '/leadership', '/alumni'],
    children: [
      { to: '/about', label: 'About Us', desc: 'Our story, mission & core values' },
      { to: '/leadership', label: 'Leadership', desc: 'The minds driving NCG forward' },
      { to: '/alumni', label: 'Alumni Network', desc: 'Our community across top global firms' },
    ],
  },
  {
    type: 'dropdown',
    id: 'services',
    label: 'Services & Insights',
    rootMatch: ['/services', '/projects', '/research'],
    children: [
      { to: '/services', label: 'Our Services', desc: '8 core structured consulting service lines' },
      { to: '/projects', label: 'Projects & Case Studies', desc: 'Real engagements & measurable impact' },
      { to: '/research', label: 'Research & Insights', desc: 'White papers, analyses & newsletters' },
    ],
  },
  {
    type: 'link',
    to: '/events',
    label: 'Events',
  },
  {
    type: 'link',
    to: '/partners',
    label: 'Partners',
  },
  {
    type: 'link',
    to: '/contact',
    label: 'Contact',
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState({ about: true, services: true })
  const location = useLocation()
  const dropdownTimeoutRef = useRef(null)

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Track scroll for frosted glass appearance
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Desktop dropdown hover handlers with micro-debounce
  const handleMouseEnter = (id) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setActiveDropdown(id)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 120)
  }

  // Toggle mobile accordion section
  const toggleMobileAccordion = (id) => {
    setMobileExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Check if a dropdown category is active based on current path
  const isDropdownActive = (item) => {
    return item.rootMatch?.some((path) => location.pathname === path)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        {/* Brand / Logo */}
        <Link to="/" className="nav__brand" aria-label="NCG Home">
          <img
            src="/logos/ncg-mark.svg"
            alt="NCG"
            className="nav__mark"
            width="42"
            height="42"
          />
          <span className="nav__brand-text">
            <strong>NCG</strong>
            <em>NUST Consultancy Group</em>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav__menu" aria-label="Primary Navigation">
          {navItems.map((item) => {
            if (item.type === 'link') {
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav__item-link ${isActive ? 'is-active' : ''}`}
                >
                  <span>{item.label}</span>
                </NavLink>
              )
            }

            const active = isDropdownActive(item)
            const isOpen = activeDropdown === item.id

            return (
              <div
                key={item.id}
                className={`nav__dropdown ${isOpen ? 'is-open' : ''} ${active ? 'is-active' : ''}`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav__dropdown-trigger ${active ? 'is-active' : ''}`}
                  onClick={() => setActiveDropdown(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  <span>{item.label}</span>
                  <svg
                    className="nav__chevron"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="nav__dropdown-menu" role="menu">
                  <div className="nav__dropdown-inner">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `nav__dropdown-link ${isActive ? 'is-active' : ''}`
                        }
                        role="menuitem"
                      >
                        <span className="nav__dropdown-link-title">{child.label}</span>
                        {child.desc && (
                          <span className="nav__dropdown-link-desc">{child.desc}</span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>

        {/* Action button & Mobile toggle */}
        <div className="nav__actions">
          <Link to="/join" className="btn btn--primary nav__cta">
            <span>Join NCG</span>
            <span className="arrow">→</span>
          </Link>

          <button
            className={`nav__burger ${mobileOpen ? 'is-open' : ''}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`nav__drawer ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="nav__drawer-content">
          <div className="nav__drawer-links">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `nav__drawer-link ${isActive ? 'is-active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              }

              const isExpanded = !!mobileExpanded[item.id]
              const active = isDropdownActive(item)

              return (
                <div key={item.id} className="nav__drawer-group">
                  <button
                    type="button"
                    className={`nav__drawer-group-header ${active ? 'is-active' : ''}`}
                    onClick={() => toggleMobileAccordion(item.id)}
                    aria-expanded={isExpanded}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`nav__chevron ${isExpanded ? 'is-rotated' : ''}`}
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`nav__drawer-sublinks ${isExpanded ? 'is-expanded' : ''}`}
                  >
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `nav__drawer-sublink ${isActive ? 'is-active' : ''}`
                        }
                      >
                        <span className="nav__drawer-sublink-label">{child.label}</span>
                        {child.desc && (
                          <span className="nav__drawer-sublink-desc">{child.desc}</span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="nav__drawer-footer">
            <Link to="/join" className="btn btn--cream nav__drawer-cta">
              Join NCG <span className="arrow">→</span>
            </Link>
            <div className="nav__drawer-meta">
              <span>nustconsultancygroup@gmail.com</span>
              <span>NUST, Islamabad</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
