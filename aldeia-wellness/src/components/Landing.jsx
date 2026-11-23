import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Landing({ onTherapeutic, onWellness }) {
  const [hovered, setHovered] = useState(null)

  const zones = [
    {
      id: 'therapeutic',
      label: 'Therapeutic Learning',
      color: '#006CC0',
      style: { left: 0, top: '40%', width: '50%', bottom: 0 },
      onClick: onTherapeutic,
    },
    {
      id: 'wellness',
      label: 'Wellness House',
      color: '#7BA93A',
      style: { right: 0, top: '40%', width: '50%', bottom: 0 },
      onClick: onWellness,
    },
  ]

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Full-screen background image */}
      <img
        src="/images/landing-bg.webp"
        alt="Aldeia Wellness — choose your door"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        style={{ objectPosition: '50% 0%' }}
        draggable={false}
      />

      {/* Transparent click zones over left and right doors */}
      {zones.map(zone => (
        <motion.div
          key={zone.id}
          className="absolute cursor-pointer"
          style={zone.style}
          onHoverStart={() => setHovered(zone.id)}
          onHoverEnd={() => setHovered(null)}
          onClick={zone.onClick}
        >
          {/* Subtle glow on hover */}
          <AnimatePresence>
            {hovered === zone.id && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ background: `${zone.color}22` }}
              />
            )}
          </AnimatePresence>

          {/* Floating label pill on hover */}
          <AnimatePresence>
            {hovered === zone.id && (
              <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="text-white text-xs font-bold tracking-[0.18em] uppercase px-5 py-2.5 rounded-full shadow-2xl whitespace-nowrap"
                  style={{
                    background: zone.color,
                    boxShadow: `0 6px 24px ${zone.color}88`,
                  }}
                >
                  {zone.label} →
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  )
}
