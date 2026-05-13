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
        <Centres />
        <FinalCTA />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
