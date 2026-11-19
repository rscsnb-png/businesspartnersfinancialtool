import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Solution from './components/Solution'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Centres from './components/Centres'
import FinalCTA from './components/FinalCTA'
import Blog from './components/Blog'
import Footer from './components/Footer'
import TwoDoors from './components/TwoDoors'
import WellnessHub from './components/WellnessHub'

export default function App() {
  const [wellnessPage, setWellnessPage] = useState(null)

  return (
    <div className="overflow-x-hidden">
      <Navigation onOpenWellness={setWellnessPage} />
      <main>
        <Hero />
        <TwoDoors onOpenWellness={setWellnessPage} />
        <PainPoints />
        <Solution />
        <Process />
        <Testimonials />
        <About />
        <Centres />
        <FinalCTA />
        <Blog />
      </main>
      <Footer />
      <AnimatePresence>
        {wellnessPage && (
          <WellnessHub
            initialPage={wellnessPage}
            onClose={() => setWellnessPage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
