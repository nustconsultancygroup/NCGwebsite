# NUST Consultancy Group — Website

The official front-end for **NUST Consultancy Group (NCG)** — the premier
student-run management consulting organization at NUST, Islamabad.

Built with **React + Vite**, fully responsive (desktop, tablet, mobile),
using NCG's brand palette (deep crimson `#C0142B` + cream `#FBEFDC` + accent pink)
and real NUST campus photography.

**Tagline:** *Bridging strategy. Driving impact.*

---

## What's inside

Every page from the content brief is built out:

| Page | Route | Notes |
|------|-------|-------|
| Home | `/` | Hero, intro, stats, services preview, values, why-join, CTA |
| About Us | `/about` | Story, Vision & Mission, Core Values, Purpose, Leadership messages |
| Our Services | `/services` | All 8 service lines |
| Projects & Case Studies | `/projects` | Summaries, client industries, impact metrics |
| Research & Insights | `/research` | All 6 research/publication types |
| Events | `/events` | Workshops, competitions, networking, speakers + gallery |
| Join NCG | `/join` | Benefits, departments, recruitment steps, application form, FAQ |
| Leadership Team | `/leadership` | Placeholder (content to be provided later) |
| Alumni Network | `/alumni` | Placeholder (content to be provided later) |
| Partners & Sponsors | `/partners` | Value props + partnership inquiry form |
| Contact Us | `/contact` | Contact details + contact form |

---

## Requirements

You only need **Node.js** installed (which includes `npm`).

- Node.js **version 18 or higher** — download from <https://nodejs.org> (choose the "LTS" version).

To check if you already have it, open a terminal / command prompt and run:

```bash
node --version
npm --version
```

If both print a version number, you're ready.

---

## How to run it on your laptop

1. **Unzip** this folder somewhere easy to find (e.g. your Desktop).

2. **Open a terminal** in the project folder:
   - **Windows:** open the folder, then type `cmd` in the address bar and press Enter.
   - **Mac:** right-click the folder → *New Terminal at Folder* (or open Terminal and `cd` into it).

3. **Install the dependencies** (only needed once):

   ```bash
   npm install
   ```

   This downloads React, Vite, and the router into a `node_modules` folder.
   It needs an internet connection and takes a minute or two.

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   You'll see a message like:

   ```
   ➜  Local:   http://localhost:5173/
   ```

5. **Open that link** (`http://localhost:5173/`) in your browser. The site is live!
   Any edit you save will refresh the page automatically.

To stop the server, press `Ctrl + C` in the terminal.

---

## Building for production (to host it online)

When you're ready to publish:

```bash
npm run build
```

This creates a `dist/` folder with optimized static files. You can preview it with:

```bash
npm run preview
```

The contents of `dist/` can be uploaded to any static host — **Netlify, Vercel,
GitHub Pages, Cloudflare Pages**, etc. (Most of these let you connect the folder
and deploy in a couple of clicks.)

---

## Project structure

```
ncg-website/
├── index.html               # HTML entry point
├── package.json             # dependencies & scripts
├── vite.config.js           # Vite configuration
├── public/
│   ├── favicon.svg
│   ├── logos/               # NCG logo marks (SVG) + NUST seal
│   └── images/              # NUST campus photography (hero, about, CTA)
└── src/
    ├── main.jsx             # React entry
    ├── App.jsx              # Routes for all pages
    ├── data/
    │   └── content.js       # ALL site text — edit copy here
    ├── components/
    │   ├── Navbar.jsx/.css   # Responsive top nav with mobile menu
    │   ├── Footer.jsx/.css   # Site footer
    │   └── UI.jsx/.css       # Reveal-on-scroll, PageHero, ScrollToTop
    ├── pages/               # One file per page (+ its CSS)
    └── styles/
        └── global.css       # Design system: colors, type, buttons, layout
```

---

## How to edit content

- **Text / copy:** almost everything lives in `src/data/content.js`.
  Change the words there and every page updates automatically.
- **Colors & fonts:** open `src/styles/global.css` — all brand colors are CSS
  variables at the top (`--red`, `--cream`, `--pink`, etc.).
- **Images:** drop new files into `public/images/` and reference them as
  `/images/your-file.jpg`.
- **Logo:** replace the files in `public/logos/`. If you have the official
  NCG logo files, swap them in and update the paths in `Navbar.jsx` / `Footer.jsx`.

### About the forms

The **Join**, **Contact**, and **Partners** forms currently show a success
message on submit (front-end only) — they don't send email yet. To make them
send real submissions, connect them to a form service like **Formspree**,
**Getform**, or your own backend. Look for the `submit` function in
`src/pages/Join.jsx`, `Contact.jsx`, and `Partners.jsx`.

---

## Notes

- The **Leadership**, **Alumni**, and **Partners** pages include tasteful
  placeholders where the brief said content would be provided later.
- Photos used are the NUST campus images you provided. Swap in official or
  higher-resolution shots anytime by replacing files in `public/images/`.
- Design references (Oxford, Yale, Wharton consulting groups) informed the
  editorial, prestige-institutional layout while keeping NCG's own red/cream identity.

---

*Bridging strategy. Driving impact.*
