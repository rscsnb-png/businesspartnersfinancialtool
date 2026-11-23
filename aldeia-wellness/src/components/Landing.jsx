import { motion } from 'framer-motion'
import { useState } from 'react'

// PLACEHOLDER images — replace these with real Aldeia photos:
// - THERAPEUTIC_IMG: A warm, genuine photo of a child and adult working together (learning/therapy setting)
// - WELLNESS_IMG: A calm, welcoming image — the Durbanville space, a family in a garden, or a natural interior
const THERAPEUTIC_IMG = '/images/hero-therapeutic.webp'
const WELLNESS_IMG = '/images/stats-bg.jpg'

export default function Landing({ onTherapeutic, onWellness }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="fixed inset-0 flex flex-col md:flex-row overflow-hidden select-none">

      {/* ── LEFT / TOP: Therapeutic Learning ── */}
      <motion.div
        className="relative cursor-pointer overflow-hidden min-h-[50vh] md:min-h-0"
        initial={{ flexGrow: 1 }}
        animate={{ flexGrow: hovered === 'therapeutic' ? 1.1 : hovered === 'wellness' ? 0.9 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onClick={onTherapeutic}
        onHoverStart={() => setHovered('therapeutic')}
        onHoverEnd={() => setHovered(null)}
      >
        {/* Photo — offset right to show the children, not the logo text area */}
        <img
          src={THERAPEUTIC_IMG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '72% center' }}
          draggable={false}
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-navy/82" />
        {/* Colour blobs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-green/15 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-10 lg:p-14">
          {/* Top label */}
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">
            Aldeia · Therapeutic Learning
          </div>

          {/* Bottom content */}
          <div>
            {/* Rainbow stripe */}
            <div className="flex gap-1 mb-7 w-32">
              {['#C8363F','#F2C418','#7BA93A','#7E479A','#237BB7','#006CC0'].map(c => (
                <div key={c} className="h-[3px] flex-1 rounded-full" style={{ background: c }} />
              ))}
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-white leading-[1.15] mb-4">
              Educational &amp;<br />Therapeutic<br />Support
            </h2>

            <p className="text-white/55 text-sm leading-relaxed mb-10 max-w-xs">
              Integrated support for homeschool and mainstream learners across South Africa, Namibia and the Netherlands.
            </p>

            {/* Minimal stats */}
            <div className="flex gap-6 mb-10 text-white/50 text-xs">
              <span>12 branches</span>
              <span className="text-white/20">·</span>
              <span>1,556 families</span>
              <span className="text-white/20">·</span>
              <span>14 awards</span>
            </div>

            {/* Enter CTA */}
            <motion.div
              className="inline-flex items-center gap-4"
              animate={{ x: hovered === 'therapeutic' ? 6 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-sm font-medium tracking-wide">Enter</span>
              <div className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── LOGO — centred at the divide ── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <div className="bg-white rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.18)] flex items-center justify-center w-[72px] h-[72px] lg:w-[88px] lg:h-[88px]">
          <img
            src="/images/logo.png"
            alt="Aldeia"
            className="w-11 h-11 lg:w-14 lg:h-14 object-contain"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'block'
            }}
          />
          <span className="font-serif text-sm text-navy font-bold hidden">A</span>
        </div>
        <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mt-2 drop-shadow-sm">
          since 2013
        </p>
      </div>

      {/* ── RIGHT / BOTTOM: Wellness House ── */}
      <motion.div
        className="relative cursor-pointer overflow-hidden min-h-[50vh] md:min-h-0 bg-cream"
        initial={{ flexGrow: 1 }}
        animate={{ flexGrow: hovered === 'wellness' ? 1.1 : hovered === 'therapeutic' ? 0.9 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onClick={onWellness}
        onHoverStart={() => setHovered('wellness')}
        onHoverEnd={() => setHovered(null)}
      >
        {/* Photo */}
        <img
          src={WELLNESS_IMG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          draggable={false}
        />
        {/* Soft green gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green/8 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-10 lg:p-14">
          {/* Top label */}
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-warm-gray/40">
            Aldeia · Wellness House
          </div>

          {/* Bottom content */}
          <div>
            {/* Opening badge */}
            <div className="inline-flex items-center gap-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-green">
                Opening 2027 · Durbanville
              </span>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-navy leading-[1.15] mb-4">
              Individual &amp;<br />Family<br />Wellbeing
            </h2>

            <p className="text-warm-gray text-sm leading-relaxed mb-10 max-w-xs">
              A village of practitioners under one welcoming roof in Durbanville, Cape Town.
            </p>

            {/* Enter CTA */}
            <motion.div
              className="inline-flex items-center gap-4"
              animate={{ x: hovered === 'wellness' ? 6 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-navy text-sm font-medium tracking-wide">Enter</span>
              <div className="w-11 h-11 rounded-full border border-navy/20 flex items-center justify-center hover:bg-navy/5 transition-colors">
                <svg className="w-4 h-4 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
