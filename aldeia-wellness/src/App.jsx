import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Landing from './components/Landing'
import TherapeuticHub from './components/TherapeuticHub'
import WellnessHub from './components/WellnessHub'

function pathToView(pathname) {
  if (pathname === '/learning') return 'therapeutic'
  if (pathname === '/wellness') return 'wellness'
  return 'landing'
}

export default function App() {
  const [view, setView] = useState(() => pathToView(window.location.pathname))

  function navigate(newView) {
    const path = newView === 'therapeutic' ? '/learning' : newView === 'wellness' ? '/wellness' : '/'
    window.history.pushState({}, '', path)
    setView(newView)
  }

  useEffect(() => {
    const onPop = () => setView(pathToView(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {view === 'landing' && (
        <Landing
          key="landing"
          onTherapeutic={() => navigate('therapeutic')}
          onWellness={() => navigate('wellness')}
        />
      )}
      {view === 'therapeutic' && (
        <TherapeuticHub
          key="therapeutic"
          onClose={() => navigate('landing')}
        />
      )}
      {view === 'wellness' && (
        <WellnessHub
          key="wellness"
          initialPage="house"
          onClose={() => navigate('landing')}
        />
      )}
    </AnimatePresence>
  )
}
