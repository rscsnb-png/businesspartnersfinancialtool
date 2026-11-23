import { motion } from 'framer-motion'
import { useState } from 'react'

// ── SVG Icons for the plaques ────────────────────────────────────────────────

function BookSunIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 mx-auto mb-1" fill="none">
      {/* Sun rays */}
      <circle cx="24" cy="16" r="5" fill="#F2C418" />
      {[0,45,90,135,180,225,270,315].map(deg => {
        const rad = (deg * Math.PI) / 180
        const x1 = 24 + 7 * Math.cos(rad), y1 = 16 + 7 * Math.sin(rad)
        const x2 = 24 + 10 * Math.cos(rad), y2 = 16 + 10 * Math.sin(rad)
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F2C418" strokeWidth="2" strokeLinecap="round" />
      })}
      {/* Book */}
      <path d="M10 26 Q10 24 12 24 L23 24 L23 40 Q12 40 10 38 Z" fill="#0D3A91" />
      <path d="M38 26 Q38 24 36 24 L25 24 L25 40 Q36 40 38 38 Z" fill="#006CC0" />
      <line x1="24" y1="24" x2="24" y2="40" stroke="#F2C418" strokeWidth="1.5" />
    </svg>
  )
}

function HouseHeartIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 mx-auto mb-1" fill="none">
      {/* House */}
      <polygon points="24,8 6,24 42,24" fill="#006CC0" />
      <rect x="10" y="24" width="28" height="18" fill="#0D3A91" />
      {/* Heart */}
      <path d="M24 36 C24 36 15 29 15 24 C15 21 17.5 19 20 20.5 C21.2 21.3 22.3 22.3 24 24 C25.7 22.3 26.8 21.3 28 20.5 C30.5 19 33 21 33 24 C33 29 24 36 24 36 Z" fill="#C8363F" />
    </svg>
  )
}

// ── Wooden door component ────────────────────────────────────────────────────

function Door({ side, label, icon: Icon, onClick, hovered, onHover, onLeave }) {
  const isHov = hovered === side
  const plaqueAccent = side === 'therapeutic' ? '#237BB7' : '#7BA93A'
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-end pb-6 md:pb-10 cursor-pointer relative overflow-hidden"
      onClick={onClick}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      {/* Subtle wall texture gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: side === 'therapeutic'
          ? 'radial-gradient(ellipse at 30% 60%, rgba(255,255,255,0.04) 0%, transparent 70%)'
          : 'radial-gradient(ellipse at 70% 60%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

      {/* Decorative wall items — very subtle */}
      {side === 'therapeutic' ? (
        <>
          <div className="absolute left-4 bottom-20 opacity-[0.12] text-7xl pointer-events-none select-none">🌿</div>
          <div className="absolute left-8 bottom-8 opacity-[0.10] text-5xl pointer-events-none select-none">📚</div>
          <div className="absolute right-4 top-10 opacity-[0.08] text-6xl pointer-events-none select-none">🌿</div>
        </>
      ) : (
        <>
          <div className="absolute right-4 bottom-20 opacity-[0.12] text-7xl pointer-events-none select-none">🌻</div>
          <div className="absolute right-8 bottom-8 opacity-[0.10] text-5xl pointer-events-none select-none">🪨</div>
          <div className="absolute left-4 top-10 opacity-[0.08] text-6xl pointer-events-none select-none">🌿</div>
        </>
      )}

      {/* Door + plaque wrapper */}
      <motion.div
        animate={{ y: isHov ? -6 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center"
      >
        {/* Golden plaque */}
        <div className="relative z-10 mb-[-8px] w-[160px] sm:w-[175px]"
          style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}>
          <div className="relative rounded-[14px] p-4 text-center"
            style={{
              background: 'linear-gradient(160deg, #f7e28a 0%, #e0b82a 40%, #c99a18 65%, #b8902a 100%)',
              border: '2px solid #a07820',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4), inset 0 -1px 2px rgba(0,0,0,0.2)',
            }}>
            {/* Corner bolts */}
            {['top-1.5 left-1.5','top-1.5 right-1.5','bottom-1.5 left-1.5','bottom-1.5 right-1.5'].map(pos => (
              <div key={pos} className={`absolute ${pos} w-2 h-2 rounded-full border`}
                style={{ background: 'radial-gradient(circle at 35% 35%, #d4a030, #8a6010)', borderColor: '#7a5008' }} />
            ))}
            <Icon />
            <p className="font-serif font-bold text-[#0D3A91] text-[0.95rem] leading-tight">{label}</p>
            {/* Accent bar */}
            <div className="h-[3px] rounded-full mt-2 mx-auto w-12"
              style={{ background: plaqueAccent }} />
          </div>
        </div>

        {/* Door body */}
        <div className="relative w-[160px] h-[220px] sm:w-[180px] sm:h-[250px] lg:w-[200px] lg:h-[280px]"
          style={{
            background: 'linear-gradient(170deg, #c47845 5%, #8B4513 25%, #74380e 55%, #8B4513 80%, #c47845 100%)',
            borderRadius: '6px 6px 0 0',
            boxShadow: isHov
              ? '6px 6px 28px rgba(0,0,0,0.65), -2px 0 8px rgba(0,0,0,0.2)'
              : '4px 4px 18px rgba(0,0,0,0.55), -2px 0 6px rgba(0,0,0,0.15)',
            transition: 'box-shadow 0.25s ease',
          }}>
          {/* Outer door frame */}
          <div className="absolute inset-[6px] rounded-t-[3px] pointer-events-none"
            style={{ border: '3px solid rgba(0,0,0,0.22)', boxShadow: 'inset 1px 1px 3px rgba(255,255,255,0.08)' }} />

          {/* Recessed panels */}
          <div className="absolute inset-[14px] flex flex-col gap-2.5">
            <div className="flex-[0.85] rounded-[3px]"
              style={{ background: 'rgba(0,0,0,0.18)', border: '1.5px solid rgba(0,0,0,0.28)', boxShadow: 'inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 2px rgba(255,255,255,0.05)' }} />
            <div className="flex-[1.4] rounded-[3px]"
              style={{ background: 'rgba(0,0,0,0.18)', border: '1.5px solid rgba(0,0,0,0.28)', boxShadow: 'inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 2px rgba(255,255,255,0.05)' }} />
          </div>

          {/* Door knob */}
          <div className="absolute right-4 top-[52%] -translate-y-1/2">
            <div className="w-5 h-5 rounded-full"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #f7d55a, #b8902a)',
                boxShadow: '1px 2px 4px rgba(0,0,0,0.6)',
              }} />
          </div>

          {/* Hover shimmer */}
          {isHov && (
            <div className="absolute inset-0 rounded-t-[6px] pointer-events-none"
              style={{ background: 'linear-gradient(140deg, rgba(255,255,255,0.08) 0%, transparent 60%)' }} />
          )}
        </div>

        {/* Door frame sill */}
        <div className="w-[180px] sm:w-[200px] lg:w-[220px] h-3 rounded-b-[3px]"
          style={{
            background: 'linear-gradient(90deg, #4a2208, #8B4513 30%, #9B5020 50%, #8B4513 70%, #4a2208)',
            boxShadow: '0 3px 10px rgba(0,0,0,0.6)',
          }} />
      </motion.div>

      {/* Click hint */}
      <motion.p
        animate={{ opacity: isHov ? 1 : 0.5 }}
        className="mt-4 text-xs font-bold tracking-[0.2em] uppercase text-white/60"
      >
        Enter →
      </motion.p>
    </motion.div>
  )
}

// ── Main Landing ──────────────────────────────────────────────────────────────

export default function Landing({ onTherapeutic, onWellness }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden select-none">

      {/* ── TOP BANNER ── */}
      <div className="relative bg-white flex-none" style={{ height: '42%', minHeight: 180 }}>

        {/* Right: brand image blending in */}
        <div className="absolute top-0 right-0 bottom-0 w-[55%] overflow-hidden pointer-events-none">
          <img
            src="/images/hero-therapeutic.webp"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: '70% center' }}
            draggable={false}
          />
          {/* Fade to white from left */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, white 0%, white 15%, rgba(255,255,255,0.5) 40%, transparent 70%)' }} />
          {/* Fade bottom into the wave */}
          <div className="absolute bottom-0 left-0 right-0 h-20"
            style={{ background: 'linear-gradient(to top, rgba(92,45,10,0.6), transparent)' }} />
        </div>

        {/* Left: text */}
        <div className="relative z-10 h-full flex flex-col justify-center pl-8 md:pl-14 lg:pl-20 pr-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-full border border-stone/30 flex items-center justify-center overflow-hidden bg-white shadow-sm flex-shrink-0">
              <img src="/images/logo.png" alt="Aldeia" className="w-7 h-7 object-contain"
                onError={e => { e.target.style.display = 'none' }} />
            </div>
            <span className="font-serif font-bold text-navy text-sm hidden sm:block tracking-wide">Aldeia</span>
          </div>

          <h1 className="font-serif font-extrabold leading-[1.08] text-navy mb-2"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 3rem)' }}>
            Strengthening Families.
            <br />
            <span style={{ color: '#237BB7' }}>Empowering Children.</span>
          </h1>

          {/* Yellow underline accent */}
          <div className="h-[5px] rounded-full mb-3" style={{ width: 110, background: '#F2C418' }} />

          <p className="font-serif italic text-warm-gray leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}>
            Every child. Every family. Every step of the way.
          </p>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-20" style={{ height: 54 }}>
          <svg viewBox="0 0 1440 54" preserveAspectRatio="none" className="w-full h-full block">
            <path d="M0,20 C180,54 360,0 540,28 C720,54 900,4 1080,30 C1260,54 1380,10 1440,22 L1440,54 L0,54 Z"
              fill="#5a2d0a" />
          </svg>
        </div>
      </div>

      {/* ── HALLWAY + TWO DOORS ── */}
      <div className="flex-1 flex relative overflow-hidden"
        style={{ background: 'linear-gradient(175deg, #5a2d0a 0%, #7a3f1a 15%, #6b3515 55%, #4a2208 100%)' }}>

        {/* Ceiling shadow */}
        <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)' }} />
        {/* Floor shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
        {/* Centre wall strip */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.3), rgba(0,0,0,0.05), rgba(0,0,0,0.3))' }} />

        <Door
          side="therapeutic"
          label={<>Therapeutic<br />Learning</>}
          icon={BookSunIcon}
          hovered={hovered}
          onHover={() => setHovered('therapeutic')}
          onLeave={() => setHovered(null)}
          onClick={onTherapeutic}
        />

        <Door
          side="wellness"
          label={<>Wellness<br />House</>}
          icon={HouseHeartIcon}
          hovered={hovered}
          onHover={() => setHovered('wellness')}
          onLeave={() => setHovered(null)}
          onClick={onWellness}
        />
      </div>
    </div>
  )
}
