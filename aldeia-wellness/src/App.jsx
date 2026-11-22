import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Landing from './components/Landing'
import TherapeuticHub from './components/TherapeuticHub'
import WellnessHub from './components/WellnessHub'

export default function App() {
  const [view, setView] = useState('landing') // 'landing' | 'therapeutic' | 'wellness'

  return (
    <AnimatePresence mode="wait">
      {view === 'landing' && (
        <Landing
          key="landing"
          onTherapeutic={() => setView('therapeutic')}
          onWellness={() => setView('wellness')}
        />
      )}
      {view === 'therapeutic' && (
        <TherapeuticHub
          key="therapeutic"
          onClose={() => setView('landing')}
        />
      )}
      {view === 'wellness' && (
        <WellnessHub
          key="wellness"
          initialPage="house"
          onClose={() => setView('landing')}
        />
      )}
    </AnimatePresence>
  )
}
