import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ScrollToTop } from './components/UI'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Research from './pages/Research'
import Events from './pages/Events'
import Join from './pages/Join'
import Leadership from './pages/Leadership'
import Alumni from './pages/Alumni'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<Join />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
