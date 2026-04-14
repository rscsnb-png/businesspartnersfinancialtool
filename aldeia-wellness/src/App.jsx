import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Solution from './components/Solution'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Process />
        <Testimonials />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
