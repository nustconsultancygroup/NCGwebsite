# Project Status & Architectural Overview: NCG Website

> **Living Document**: This file serves as the single source of truth for the project's technical architecture, component structure, stack, hooks, data flow, and ongoing changes. It will be updated as modifications and enhancements are made.

**Current Version:** `1.0.1`  
**Last Updated:** 2026-10-17  
**Dev Server:** Vite running locally (`http://localhost:5173/`)  
**Repository Branch:** `main`  
**Codebase State:** Active development; homepage hero copy updated.

---

## 1. Project Overview & Brand Identity

The **NUST Consultancy Group (NCG)** website is the official front-end portal for the premier student-run management consulting organization based at the National University of Sciences and Technology (NUST) in Islamabad, Pakistan.

* **Tagline:** *"Bridging strategy. Driving impact."*
* **Primary Mission:** Bridging academic theory with corporate boardroom execution through structured consulting engagements, case competitions, research publications, and professional talent cultivation.
* **Design Philosophy:** Editorial, prestige-institutional layout inspired by top collegiate consulting groups (Oxford, Yale, Wharton), rendered in NCG's branded crimson and cream visual identity.

---

## 2. Technology Stack & Tooling

| Layer | Technology | Version | Purpose / Role |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React | `^18.3.1` | Component-based UI rendering with Virtual DOM & hooks |
| **DOM Renderer** | React DOM | `^18.3.1` | Client-side DOM mounting and reconciliation |
| **Routing** | React Router DOM | `^6.26.2` | Single Page Application (SPA) client-side routing & navigation |
| **Build & Dev Tool** | Vite | `^5.4.21` | High-speed ESM development server and Rollup production bundler |
| **Compiler Plugin** | `@vitejs/plugin-react` | `^4.3.2` | Fast Refresh and JSX transformation via Babel |
| **Styling** | Vanilla CSS (Modular) | Modern CSS3 | Custom Properties (variables), CSS Grid, Flexbox, Fluid Clamping |
| **Typography** | Google Fonts | Webfonts | `Fraunces` (Editorial Display Serif) & `Inter` (Body Sans-serif) |
| **Module System** | ECMAScript Modules (ESM) | ES6+ | Native `import`/`export` (`"type": "module"` in `package.json`) |

### Dependency Footprint
The project maintains a zero-bloat, lightweight dependency tree with only **two runtime production dependencies** (`react`, `react-router-dom`) and **two dev dependencies** (`vite`, `@vitejs/plugin-react`). There are no heavy external UI libraries (Tailwind, MUI, Bootstrap, Lucide, Framer Motion), ensuring minimal bundle size and maximal performance.

---

## 3. Directory & File Structure

```text
c:\Users\yaaas\Desktop\NCG Website\NCGwebsite\
├── index.html                  # HTML entry point (meta tags, font links, #root div)
├── package.json                # Project manifest, scripts, and dependencies
├── package-lock.json           # Locked dependency resolution tree
├── vite.config.js              # Vite config with React plugin
├── README.md                   # Initial setup and developer instructions
├── STATUS.md                   # [This file] Architectural documentation & status report
│
├── public/                     # Static assets served at web root
│   ├── favicon.svg             # Website favicon
│   ├── images/                 # High-resolution campus photography
│   │   ├── hero-campus.jpg     # Home page hero background
│   │   ├── about-campus.jpg    # About page story image
│   │   └── cta-campus.jpg      # Home page bottom CTA background
│   └── logos/                  # Brand vectors and crest
│       ├── ncg-mark.svg        # Deep crimson NCG brand mark
│       ├── ncg-mark-cream.svg  # Cream monochrome NCG brand mark
│       └── nust-seal.jpeg      # Official NUST institutional seal
│
└── src/                        # Application source code
    ├── main.jsx                # React root mount (StrictMode + BrowserRouter)
    ├── App.jsx                 # Master application layout, route definitions
    │
    ├── data/
    │   └── content.js          # Centralized data store & copy text
    │
    ├── components/             # Reusable UI & Layout components
    │   ├── Navbar.jsx          # Responsive fixed header with mobile drawer
    │   ├── Navbar.css          # Header styles, blur effects, responsive collapse
    │   ├── Footer.jsx          # Multi-column footer with brand, links, socials
    │   ├── Footer.css          # Footer layout and dark red styling
    │   ├── UI.jsx              # Shared primitives: ScrollToTop, Reveal, PageHero
    │   └── UI.css              # PageHero banner styles & glow effect
    │
    ├── pages/                  # Page route views
    │   ├── Home.jsx            # Landing page (Hero, Intro, Stats, Services, Values, Why Join, CTA)
    │   ├── Home.css            # Styles specific to Home page sections
    │   ├── About.jsx           # Story, Vision & Mission, Core Values, Leadership quotes
    │   ├── Services.jsx        # Complete 8 service lines breakdown + CTA
    │   ├── Projects.jsx        # Project summaries, client industry sectors, impact metrics
    │   ├── Research.jsx        # 6 research publication categories
    │   ├── Events.jsx          # 4 event types + photo gallery grid
    │   ├── Join.jsx            # Benefits, departments, recruitment steps, application form, FAQ
    │   ├── Leadership.jsx      # Placeholder for executive leadership profiles
    │   ├── Alumni.jsx          # Placeholder for alumni network directory
    │   ├── Partners.jsx        # Value propositions + partnership inquiry form
    │   ├── Contact.jsx         # Contact channels + interactive contact form
    │   ├── NotFound.jsx        # 404 error page with navigation back to Home
    │   └── pages.css           # Shared styles for interior pages & forms
    │
    └── styles/
        └── global.css          # Global design system, color palette, typography, utilities
```

---

## 4. Architectural Patterns & Data Flow

```
                      +-------------------+
                      |    index.html     |
                      +---------+---------+
                                |
                      +---------v---------+
                      |   src/main.jsx    |
                      |  (BrowserRouter)  |
                      +---------+---------+
                                |
                      +---------v---------+
                      |    src/App.jsx    |
                      +---------+---------+
                                |
         +----------------------+----------------------+
         |                      |                      |
+--------v---------+   +--------v---------+   +--------v---------+
|   ScrollToTop    |   |      Navbar      |   |      Footer      |
| (auto scroll-to) |   | (fixed / mobile) |   | (branding/links) |
+------------------+   +------------------+   +------------------+
                                |
                       +--------v---------+
                       |  <main><Routes>  |
                       +--------+---------+
                                |
      +-------------------------+-------------------------+
      |                         |                         |
+-----v---------------+   +-----v---------------+   +-----v---------------+
|    Home (`/`)       |   |   About (`/about`)  |   | Services (`/services`)
+---------------------+   +---------------------+   +---------------------+
| Projects (`/projects`)| | Research (`/research`)| | Events (`/events`)  |
+---------------------+   +---------------------+   +---------------------+
|   Join (`/join`)    |   |Leadership (`/lead.`)|   | Alumni (`/alumni`)  |
+---------------------+   +---------------------+   +---------------------+
| Partners (`/partners`)| | Contact (`/contact`)|   | 404 (`*`)           |
+---------------------+   +---------------------+   +---------------------+
                                ^
                                | (Consumes data)
                      +---------+---------+
                      |src/data/content.js|
                      +-------------------+
```

### Architectural Principles Observed
1. **Decoupled Content Layer (`src/data/content.js`)**:
   Site copy, FAQ items, service definitions, recruitment details, and contact information are isolated from JSX presentation. Non-technical collaborators can modify content in one place without touching component markup.
2. **Component Composition**:
   Interior pages share consistent structural elements such as `PageHero` and `Reveal`, ensuring unified typography, spacing, and scroll animation mechanics.
3. **Progressive Disclosure & Micro-Interactions**:
   Scroll-triggered reveals use browser-native `IntersectionObserver` via the `<Reveal>` wrapper rather than heavy external libraries.
4. **Client-Side SPA Architecture**:
   Zero full-page reloads. All navigation uses `Link` or `NavLink` with programmatic scroll restoration to top of page via `<ScrollToTop />`.

---

## 5. Comprehensive React Hooks Analysis

The application utilizes standard React hooks and React Router DOM hooks. Below is the full updated inventory and breakdown of their implementations:

### Summary Table

| Hook | File | Location / Function | Purpose / Behavior |
| :--- | :--- | :--- | :--- |
| `useState` | [Navbar.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/Navbar.jsx) | `Navbar()` | `mobileOpen`: Toggles mobile hamburger overlay navigation drawer. |
| `useState` | [Navbar.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/Navbar.jsx) | `Navbar()` | `scrolled`: Boolean flag if window scrolled past 20px (triggers frosted glass effect). |
| `useState` | [Navbar.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/Navbar.jsx) | `Navbar()` | `activeDropdown`: Stores ID (`'about'` or `'services'`) of currently open desktop dropdown menu. |
| `useState` | [Navbar.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/Navbar.jsx) | `Navbar()` | `mobileExpanded`: Tracks expanded/collapsed state for mobile accordion groups (`about`, `services`). |
| `useState` | [UI.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/UI.jsx#L15) | `Reveal()` | `visible`: Boolean flag when component enters viewport to trigger CSS transition. |
| `useState` | [Join.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/pages/Join.jsx#L14) | `Join()` | `sent`: Toggles between registration form and success confirmation banner. |
| `useState` | [Join.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/pages/Join.jsx#L15) | `Join()` | `openFaq`: Index of active accordion item in FAQ section (`-1` indicates all closed). |
| `useState` | [Partners.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/pages/Partners.jsx#L6) | `Partners()` | `sent`: Toggles between partnership inquiry form and confirmation message. |
| `useState` | [Contact.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/pages/Contact.jsx#L7) | `Contact()` | `sent`: Toggles between contact submission form and feedback banner. |
| `useEffect` | [Navbar.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/Navbar.jsx) | `Navbar()` | Auto-closes mobile drawer and resets active dropdowns on route change (`[location]`). |
| `useEffect` | [Navbar.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/Navbar.jsx) | `Navbar()` | Attaches and detaches window `scroll` listener with cleanup. |
| `useEffect` | [Navbar.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/Navbar.jsx) | `Navbar()` | Locks body scrolling (`overflow: hidden`) when mobile menu is active; restores on close/unmount. |
| `useEffect` | [UI.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/UI.jsx#L7-L9) | `ScrollToTop()` | Scrolls window to `(0, 0)` synchronously whenever `pathname` changes (`[pathname]`). |
| `useEffect` | [UI.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/UI.jsx#L17-L28) | `Reveal()` | Creates and registers an `IntersectionObserver` on the target DOM element; disconnects on unmount. |
| `useRef` | [Navbar.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/Navbar.jsx) | `Navbar()` | Holds debounce timeout ID for smooth mouse enter/leave dropdown transitions. |
| `useRef` | [UI.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/UI.jsx#L14) | `Reveal()` | Holds direct DOM reference to the target wrapper node observed by `IntersectionObserver`. |
| `useLocation` | [Navbar.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/Navbar.jsx) | `Navbar()` | Provides current route object to trigger menu resets and highlight parent dropdown items. |
| `useLocation` | [UI.jsx](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/components/UI.jsx#L7) | `ScrollToTop()` | Extracts `{ pathname }` to detect route changes and reset page scroll. |

---

## 6. Routes & Page Inventory

| Route Path | Page Component | Key Sections / Features | Current Status |
| :--- | :--- | :--- | :--- |
| `/` | `Home.jsx` | Full-screen Hero + campus visual/scrim (eyebrow removed), Who We Are, Stats grid, Services preview, Core values, Why Join NCG, CTA section | Complete |
| `/about` | `About.jsx` | Story with campus media, Vision & Mission split block, Core values cards, Founding purpose, Leadership messages | Complete |
| `/services` | `Services.jsx` | All 8 core service lines with indexed cards + inquiry CTA section | Complete |
| `/projects` | `Projects.jsx` | Project summaries, 6 client industry pills, impact metrics | Complete |
| `/research` | `Research.jsx` | 6 research publication types (insights, opinion, market analysis, white papers, etc.) | Complete |
| `/events` | `Events.jsx` | 4 event pillars (Workshops, Competitions, Networking, Speakers) + 6-item photo gallery | Complete (Gallery has placeholders) |
| `/join` | `Join.jsx` | Member benefits, 10 department tags, 4-step recruitment process, application form, 8-item FAQ accordion | Complete (Form frontend-only) |
| `/leadership` | `Leadership.jsx` | Executive team and department head directory | Placeholder state ("Profiles coming soon") |
| `/alumni` | `Alumni.jsx` | Alumni network and mentorship directory | Placeholder state ("Alumni network coming soon") |
| `/partners` | `Partners.jsx` | Corporate value proposition, partner inquiry form with category selector | Complete (Form frontend-only) |
| `/contact` | `Contact.jsx` | Email, office, Instagram, LinkedIn links + full contact form | Complete (Form frontend-only) |
| `*` | `NotFound.jsx` | Custom 404 message with button to return to `/` | Complete |

---

## 7. Design System & Styling Architecture

The design system is defined in [global.css](file:///c:/Users/yaaas/Desktop/NCG%20Website/NCGwebsite/src/styles/global.css):

### Color Tokens
* `--red`: `#C0142B` (Primary brand deep crimson)
* `--red-deep`: `#8C0E20` (Secondary deep crimson for cards and hover states)
* `--red-darker`: `#5A0814` (Dark crimson used for footer and heavy contrast sections)
* `--red-light`: `#D83C52` (Accent bright crimson for outlines and glows)
* `--cream`: `#FBEFDC` (Signature parchment background & contrast text)
* `--cream-dim`: `#F0D9C4` (Secondary muted cream)
* `--pink`: `#F0A8B0` (Accent rose pink for numbers, tags, and eyebrow text on red)
* `--ink`: `#2A0A0E` (Primary dark body text color)

### Typography Tokens
* `--font-display`: `'Fraunces', Georgia, 'Times New Roman', serif`
* `--font-body`: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Fluid Metrics & Tokens
* Maximum content width: `1200px` (`--maxw`)
* Responsive gutter: `clamp(20px, 5vw, 64px)` (`--gutter`)
* Border radii: `14px` (`--radius`) and `24px` (`--radius-lg`)
* Fluid Display font: `clamp(2.6rem, 6vw, 5rem)`
* Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`

---

## 8. Current Observations, Known Gaps & Future Enhancements

1. **Forms Backend Integration**:
   - The forms on `/join`, `/partners`, and `/contact` currently update local React state (`setSent(true)`) upon submission without transmitting data to an external service or API.
   - Recommended next step: Connect to Formspree, Resend, Getform, or a custom backend API.
2. **Content Placeholders**:
   - `/leadership` is awaiting executive board and director names, titles, and photos.
   - `/alumni` is awaiting alumni profiles and placement records.
   - `/events` gallery currently displays 6 placeholder gradient containers rather than live event photography.
3. **Asset Verification**:
   - High-resolution SVG logos (`ncg-mark.svg`, `ncg-mark-cream.svg`) are currently minimal SVG place-holders. If official vector assets are provided, they can be swapped in directly.
4. **SEO & Head Management**:
   - `index.html` has baseline meta tags, but dynamic title/meta tag updates per route (e.g., using `react-helmet-async` or native document.title updates) can be implemented if required.

---

## 9. Changelog & Modification Log

| Date | Author / Agent | Changes Made | Files Affected | Status |
| :--- | :--- | :--- | :--- | :--- |
| **2026-10-15** | Antigravity AI | Initial codebase audit & creation of `STATUS.md` report | `STATUS.md` | Initialized |
| **2026-10-15** | Antigravity AI | **Navbar Refactoring & Overlap Fix:**<br>1. Fixed logo text overlap and 3-line wrapping via `flex-shrink: 0`, `white-space: nowrap`, and adjusted flex vertical spacing.<br>2. Restructured desktop navbar into balanced 3-column layout (Brand, Menu, Actions) with grouped dropdowns (`About ▾`, `Services & Insights ▾`).<br>3. Gave contents proper equal spacing, uniform padding, and active indicator bars.<br>4. Added glassmorphic dropdown cards with card titles + descriptions and smooth chevron rotation.<br>5. Upgraded mobile navigation drawer with expandable accordion groups, contact footer, and body scroll lock. | `src/components/Navbar.jsx`, `src/components/Navbar.css`, `STATUS.md` | Complete & Verified |
| **2026-10-17** | Antigravity AI | **Homepage Hero Section Text Update:**<br>Removed the `"NUST · Islamabad"` eyebrow element from the top of the hero container in `Home.jsx`. Validated visual hierarchy, responsive padding, and headline alignment on live Vite dev server. | `src/pages/Home.jsx`, `STATUS.md` | Complete & Verified |
