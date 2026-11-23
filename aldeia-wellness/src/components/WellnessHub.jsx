import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// ── Design tokens ─────────────────────────────────────────────────────────────

const SAGE       = '#4E7C5F'
const SAGE_DARK  = '#365644'
const NAVY       = '#0D3A91'
const GOLD       = '#B89040'
const CLAY       = '#8B6355'
const MUTED_BLUE = '#2A5A8F'
const MAUVE      = '#7A5E8A'
const CREAM      = '#F7F4EF'
const CREAM2     = '#EFF0EB'

const SAGE_LINE  = `linear-gradient(90deg, ${SAGE} 0%, ${MUTED_BLUE} 100%)`

function SageLine({ className = 'w-32 my-4' }) {
  return <div className={`h-[6px] rounded-full ${className}`} style={{ background: SAGE_LINE }} />
}

function ArrowRight({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

// ── Marquee ticker ────────────────────────────────────────────────────────────

const TICKER = [
  'Wellness Counselling',
  'Family Wellness Plan',
  'Parent Support',
  'Adult Wellbeing',
  'Life Coaching',
  'Mindfulness & Resilience',
  'Workshops & Parent Evenings',
  'Durbanville, Cape Town',
  'IPHM Accredited Provider',
]

function MarqueeTicker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="overflow-hidden border-b" style={{ background: CREAM2, borderColor: '#D8D4CC' }}>
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
      <div className="flex whitespace-nowrap" style={{ animation: 'ticker 32s linear infinite' }}>
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 py-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase" style={{ color: i % 3 === 0 ? SAGE : i % 3 === 1 ? NAVY : GOLD }}>
            {item}
            <span className="opacity-30" style={{ color: NAVY }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function WellnessHub({ onClose }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
    >
      <StickyNav onClose={onClose} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <WhoWeSupport />
      <ServicesSection />
      <FamilyPlanSection />
      <PractitionersSection />
      <AccreditationSection />
      <InterestSection submitted={submitted} setSubmitted={setSubmitted} />
      <FooterSection onClose={onClose} />
    </motion.div>
  )
}

// ── Navigation ────────────────────────────────────────────────────────────────

function StickyNav({ onClose, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-40" style={{ background: '#fff', borderBottom: '1px solid #DDD9D0' }}>
      <div className="max-w-[1160px] mx-auto px-4 h-[72px] flex items-center gap-5">
        <a onClick={onClose} href="#" className="flex items-center gap-2.5 no-underline flex-shrink-0 font-serif font-bold text-[1.2rem]" style={{ color: NAVY }}>
          <div className="w-[54px] h-[54px] rounded-full bg-white border flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm" style={{ borderColor: '#DDD9D0' }}>
            <img src="/images/logo.png" alt="Aldeia" className="w-9 h-9 object-contain"
              onError={(e) => { e.target.style.display = 'none' }} />
          </div>
          <span className="hidden sm:block">Aldeia</span>
          <span className="text-sm font-normal hidden md:block" style={{ color: '#9A9080' }}>· Wellness House</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 ml-auto list-none p-0 m-0">
          {[['About','#about'],['Services','#services'],['Family Plan','#family-plan'],['Join Us','#join']].map(([label, href]) => (
            <a key={label} href={href} className="block px-3 py-2 rounded-[10px] no-underline font-semibold text-[0.95rem] hover:bg-opacity-80 transition-colors" style={{ color: NAVY }}>
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#join"
          className="ml-auto md:ml-4 flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold rounded-full no-underline transition-all duration-150 hover:-translate-y-0.5"
          style={{ background: SAGE, boxShadow: `0 6px 0 ${SAGE_DARK}` }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 0 ${SAGE_DARK}`}
          onMouseLeave={e => e.currentTarget.style.boxShadow = `0 6px 0 ${SAGE_DARK}`}
        >
          Join Interest List
        </a>

        <button
          className="md:hidden ml-2 bg-transparent border-2 rounded-xl px-3 py-2 font-bold text-[0.9rem] cursor-pointer"
          style={{ borderColor: NAVY, color: NAVY }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18 18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <MarqueeTicker />

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t bg-white overflow-hidden"
            style={{ borderColor: '#DDD9D0' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {[['About','#about'],['Services','#services'],['Family Plan','#family-plan'],['Join Us','#join']].map(([label, href]) => (
                <a key={label} href={href}
                  className="block px-3 py-2 rounded-[10px] no-underline font-semibold hover:bg-opacity-5 transition-colors"
                  style={{ color: NAVY }}
                  onClick={() => setMobileMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="about" ref={ref} className="pt-14 pb-0 bg-white">
      <div className="max-w-[1160px] mx-auto px-4">
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SageLine className="w-32 mb-5" />
            <h1 className="font-serif font-extrabold leading-[1.08] tracking-tight mb-5 [overflow-wrap:normal] [word-break:normal]"
              style={{ fontSize: 'clamp(2.6rem,5.5vw,4.4rem)', color: NAVY }}>
              Individual &amp; Family{' '}
              <span style={{ color: SAGE }}>Wellbeing.</span>
            </h1>
            <p className="text-[1.15rem] mb-8 max-w-[70ch] leading-relaxed" style={{ color: '#6B6358' }}>
              A village of practitioners under one welcoming roof in Durbanville — bringing
              practical wellness support to individuals, parents and families.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#join"
                className="inline-flex items-center gap-2 px-6 py-4 text-white font-bold text-[1rem] rounded-full no-underline transition-all duration-150 hover:-translate-y-0.5"
                style={{ background: SAGE, boxShadow: `0 6px 0 ${SAGE_DARK}` }}
              >
                Join the Interest List <ArrowRight />
              </a>
              <a
                href="mailto:info@aldeiawellness.com?subject=Wellness%20House%20Enquiry"
                className="inline-flex items-center gap-2 px-6 py-4 bg-white font-bold text-[1rem] rounded-full no-underline hover:bg-opacity-80 transition-colors border-2"
                style={{ color: NAVY, borderColor: NAVY }}
              >
                Send us a message
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-[22px] overflow-hidden"
        >
          <div className="rounded-[22px] overflow-hidden">
            <img
              src="/images/stats-banner.webp"
              alt="Aldeia — Our Power in Numbers"
              className="w-full h-auto block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── Who we support ────────────────────────────────────────────────────────────

const SUPPORT_CARDS = [
  { icon: '👨‍👩‍👧', title: 'Families with additional needs', desc: 'Raising a child with learning differences, behavioural challenges or developmental needs — we walk the whole journey with you.', colour: MUTED_BLUE },
  { icon: '🤲', title: 'Parents & caregivers', desc: 'You hold everything together. We support your wellbeing too — coping, balance and emotional resilience.', colour: SAGE },
  { icon: '🌿', title: 'Adults & life transitions', desc: 'Personal wellbeing, life changes, new seasons — practical support for adults who want to look after themselves.', colour: MAUVE },
  { icon: '🏡', title: 'Families navigating change', desc: 'New schools, adolescence, a move, a loss — we help families find their footing during uncertain times.', colour: CLAY },
]

function WhoWeSupport() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="py-[88px]" ref={ref} style={{ background: CREAM }}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase block mb-2" style={{ color: '#9A9080' }}>Who we support</span>
          <SageLine className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold leading-tight max-w-lg" style={{ fontSize: 'clamp(2rem,4.2vw,3rem)', color: NAVY }}>
            You don&apos;t need a diagnosis or a referral
          </h2>
          <p className="text-lg mt-4 max-w-2xl leading-relaxed" style={{ color: '#6B6358' }}>
            Some of our visitors are parents carrying a lot. Others are adults who simply want
            to look after their own wellbeing. All are welcome.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-[18px]">
          {SUPPORT_CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-[22px] p-7 flex gap-5 overflow-hidden"
              style={{ borderTop: `6px solid ${c.colour}`, border: '1px solid #E0DCD4', borderTopWidth: '6px', borderTopColor: c.colour }}
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{c.icon}</span>
              <div>
                <h3 className="font-serif font-bold text-[1.2rem] mb-2 leading-snug" style={{ color: NAVY }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6358' }}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────

const SERVICES = [
  { title: 'Family Wellness Plan', desc: 'A 12-week programme giving your family a clear, written plan — 3–5 realistic goals, routines, roles and review dates. Support while you put it into practice.', colour: SAGE },
  { title: 'Wellness Counselling', desc: 'For parents and caregivers: coping, balance and emotional wellbeing. Individual sessions tailored to your season of life.', colour: MUTED_BLUE },
  { title: 'Behaviour Therapy', desc: 'Support for children and teenagers with behaviour, routines, emotional regulation and social skills.', colour: CLAY },
  { title: 'Educational Psychology, OT, Arts Therapies & More', desc: 'Independent practitioners offering complementary services — occupational therapy, arts therapies, counselling, yoga and more.', colour: MAUVE },
]

function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="services" className="py-[88px] bg-white" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase block mb-2" style={{ color: '#9A9080' }}>What you&apos;ll find here</span>
          <SageLine className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold leading-tight max-w-lg" style={{ fontSize: 'clamp(2rem,4.2vw,3rem)', color: NAVY }}>
            Practitioners under one roof
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-[18px] mb-10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-[22px] p-7 flex flex-col gap-3 overflow-hidden"
              style={{ border: '1px solid #E0DCD4', borderTopWidth: '6px', borderTopColor: s.colour }}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-serif font-bold text-[1.2rem] leading-snug" style={{ color: NAVY }}>{s.title}</h3>
                {s.badge && (
                  <span className="text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wide"
                    style={{ background: s.colour + '18', color: s.colour }}>
                    {s.badge}
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6358' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-[22px] p-7"
          style={{ background: CREAM, border: '1px solid #E0DCD4' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: '#6B6358' }}>
            <strong style={{ color: NAVY }}>Independent practitioners:</strong> Each practitioner at Aldeia Wellness House runs their own independent
            practice. They hold their own professional registration and insurance, and manage
            their own bookings, fees and client records. You choose who you see, and nothing is
            shared between practitioners without your consent.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ── Family Wellness Plan ──────────────────────────────────────────────────────

const PLAN_STEPS = [
  { n: 1, title: 'Getting to know your family', duration: '90 min', desc: 'Your priorities, routines, strengths, pressures and the professionals already involved.', colour: SAGE },
  { n: 2, title: 'Seeing daily life', duration: '60 min', desc: 'A visit at home, or at a time of day that is hard for your family.', colour: GOLD },
  { n: 3, title: 'Your Family Wellness Plan', duration: '60–90 min', desc: 'A written plan with 3–5 realistic goals, routines, who does what, and review dates.', colour: MUTED_BLUE },
  { n: 4, title: 'Three follow-up sessions', duration: '60 min · every 3–4 weeks', desc: "Review what's working, adjust the plan, and ongoing parent support.", colour: MAUVE },
]

function FamilyPlanSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="family-plan" className="py-[88px]" ref={ref} style={{ background: NAVY }}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase block mb-2" style={{ color: GOLD }}>The 12-week programme</span>
          <SageLine className="w-32 mt-1 mb-4" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif font-extrabold text-white leading-tight max-w-xl" style={{ fontSize: 'clamp(2rem,4.2vw,3rem)' }}>
              The Family Wellness Plan
            </h2>
            <p className="max-w-sm leading-relaxed text-sm text-white/50">
              When one person in a family needs more, everyone feels it. We help families step
              back, see the whole picture, and agree on a plan that fits real life.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PLAN_STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-[22px] p-6 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)', borderTopWidth: '6px', borderTopColor: s.colour }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4 font-serif flex-shrink-0"
                style={{ background: s.colour }}>
                {s.n}
              </div>
              <h3 className="font-serif font-bold text-[1.1rem] text-white mb-1 leading-snug">{s.title}</h3>
              <p className="text-xs mb-3 font-medium text-white/40">{s.duration}</p>
              <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-[22px] p-6 text-sm text-white/40"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          Investment details will be confirmed soon. This service is not claimable from medical aid. ·
          Plan only (steps 1–3) also available as a standalone option.
        </motion.div>
      </div>
    </section>
  )
}

// ── Practitioners ─────────────────────────────────────────────────────────────

function PractitionersSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="py-[88px]" ref={ref} style={{ background: CREAM }}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase block mb-2" style={{ color: '#9A9080' }}>Join us</span>
          <SageLine className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold leading-tight max-w-lg" style={{ fontSize: 'clamp(2rem,4.2vw,3rem)', color: NAVY }}>
            Are you a health, wellness or holistic practitioner?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="leading-relaxed mb-4" style={{ color: '#6B6358' }}>
              Looking for a warm, welcoming space to see clients in Durbanville? Aldeia
              Wellness House offers consultation rooms on fixed sessional days, with a
              shared reception and waiting area.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#6B6358' }}>
              We welcome all health, wellness and holistic practitioners — whether you work
              with the mind, body or spirit. From counsellors and therapists to beauty
              practitioners, yoga teachers and energy healers, all are welcome.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: '#6B6358' }}>
              You keep your own practice, clients and fees. We simply ask for proof of
              relevant training or registration and professional indemnity insurance where applicable.
            </p>
            <a
              href="mailto:info@aldeiawellness.com?subject=Room%20Availability%20Enquiry%20%E2%80%94%20Aldeia%20Wellness%20House"
              className="inline-flex items-center gap-2 px-7 py-4 text-white font-bold rounded-full no-underline transition-all duration-150 hover:-translate-y-0.5"
              style={{ background: NAVY, boxShadow: '0 6px 0 #071f52' }}
            >
              Ask about room availability <ArrowRight />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-bold text-[0.8rem] tracking-[0.14em] uppercase mb-4" style={{ color: '#9A9080' }}>We welcome</p>
            <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
              {[
                { label: 'Counsellors & Psychologists', colour: MUTED_BLUE },
                { label: 'Occupational Therapists', colour: CLAY },
                { label: 'Arts & Play Therapists', colour: MAUVE },
                { label: 'Speech Therapists', colour: SAGE },
                { label: 'Yoga & Pilates Teachers', colour: SAGE_DARK },
                { label: 'Dietitians & Nutritionists', colour: GOLD },
                { label: 'Beauty & Skin Practitioners', colour: MAUVE },
                { label: 'Massage Therapists', colour: CLAY },
                { label: 'Energy & Holistic Healers', colour: SAGE },
                { label: 'Life & Wellness Coaches', colour: MUTED_BLUE },
              ].map(p => (
                <li key={p.label}
                  className="px-4 py-2 rounded-full font-semibold text-[0.95rem] border-2"
                  style={{ color: p.colour, borderColor: p.colour, background: p.colour + '12' }}>
                  {p.label}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Accreditation ─────────────────────────────────────────────────────────────

function AccreditationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="font-bold text-[0.78rem] tracking-[0.18em] uppercase" style={{ color: '#9A9080' }}>
            Professional Accreditation
          </span>
          <div className="mx-auto mt-3 mb-0 h-[5px] rounded-full w-20" style={{ background: SAGE_LINE }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16"
        >
          <div className="flex flex-col items-center gap-3">
            <img
              src="/images/accreditation-iphm.png"
              alt="IPHM — International Practitioners of Holistic Medicine, Accredited Training Provider"
              className="h-32 w-auto object-contain"
            />
            <p className="text-xs text-center max-w-[180px] leading-relaxed" style={{ color: '#9A9080' }}>
              Accredited Training Provider
            </p>
          </div>

          <div className="hidden sm:block w-px h-24" style={{ background: '#E0DCD4' }} />

          <div className="flex flex-col items-center gap-3">
            <img
              src="/images/accreditation-iaot.webp"
              alt="International Association of Therapists"
              className="h-24 w-auto object-contain"
            />
            <p className="text-xs text-center max-w-[180px] leading-relaxed" style={{ color: '#9A9080' }}>
              Member Organisation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── Interest List ─────────────────────────────────────────────────────────────

function InterestSection({ submitted, setSubmitted }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({
    name: '', email: '', phone: '', interests: [], message: '', consent: false,
  })

  const interestOptions = [
    'Family Wellness Plan',
    'Support for myself as a parent or caregiver',
    'Adult wellbeing',
    'Workshops and parent evenings',
    "I'm a health, wellness or holistic practitioner looking for a room",
  ]

  const toggle = (val) => setForm(f => ({
    ...f,
    interests: f.interests.includes(val) ? f.interests.filter(i => i !== val) : [...f.interests, val],
  }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Wellness House Interest List')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\n\nInterested in:\n${form.interests.map(i => `- ${i}`).join('\n')}\n\nMessage: ${form.message || 'None'}`
    )
    window.location.href = `mailto:info@aldeiawellness.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="join" className="py-[88px]" ref={ref} style={{ background: CREAM }}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 font-bold text-[0.8rem] tracking-[0.14em] uppercase block mb-2" style={{ color: SAGE }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: SAGE }} />
            Durbanville, Cape Town
          </span>
          <SageLine className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold leading-tight max-w-xl" style={{ fontSize: 'clamp(2rem,4.2vw,3rem)', color: NAVY }}>
            Be the first to know
          </h2>
          <p className="text-lg mt-4 max-w-xl leading-relaxed" style={{ color: '#6B6358' }}>
            Leave your details and we&apos;ll let you know when bookings open, and invite
            you to our first workshops.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 rounded-[22px]"
            style={{ background: '#EFF6F1', border: '1px solid #C0D9C8' }}
          >
            <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center mx-auto mb-6"
              style={{ borderColor: SAGE }}>
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ color: SAGE }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl mb-3" style={{ color: NAVY }}>You&apos;re on the list.</h3>
            <p style={{ color: '#6B6358' }}>We&apos;ll be in touch as soon as bookings open.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
              <form onSubmit={handleSubmit} className="bg-white rounded-[22px] p-7 flex flex-col gap-5" style={{ border: '1px solid #E0DCD4' }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="font-semibold text-[0.92rem] flex flex-col gap-1.5" style={{ color: NAVY }}>
                    <span>Name <span style={{ color: '#B85050' }}>*</span></span>
                    <input type="text" required value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="font-normal text-[1rem] px-3.5 py-3 rounded-xl bg-white transition-colors placeholder:opacity-30"
                      style={{ border: '2px solid #D8D4CC', color: NAVY, outlineColor: SAGE }}
                      placeholder="Your name" />
                  </label>
                  <label className="font-semibold text-[0.92rem] flex flex-col gap-1.5" style={{ color: NAVY }}>
                    <span>Email <span style={{ color: '#B85050' }}>*</span></span>
                    <input type="email" required value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="font-normal text-[1rem] px-3.5 py-3 rounded-xl bg-white transition-colors placeholder:opacity-30"
                      style={{ border: '2px solid #D8D4CC', color: NAVY, outlineColor: SAGE }}
                      placeholder="your@email.com" />
                  </label>
                </div>

                <label className="font-semibold text-[0.92rem] flex flex-col gap-1.5" style={{ color: NAVY }}>
                  Phone
                  <input type="tel" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="font-normal text-[1rem] px-3.5 py-3 rounded-xl bg-white transition-colors placeholder:opacity-30"
                    style={{ border: '2px solid #D8D4CC', color: NAVY, outlineColor: SAGE }}
                    placeholder="+27 ..." />
                </label>

                <div>
                  <p className="font-semibold text-[0.92rem] mb-3" style={{ color: NAVY }}>
                    I&apos;m interested in <span style={{ color: '#B85050' }}>*</span>
                  </p>
                  <div className="space-y-2">
                    {interestOptions.map(opt => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          className="w-5 h-5 rounded flex items-center justify-center border-2 flex-shrink-0 transition-all duration-150"
                          style={form.interests.includes(opt)
                            ? { background: SAGE, borderColor: SAGE }
                            : { background: '#fff', borderColor: '#D8D4CC' }}
                          onClick={() => toggle(opt)}
                        >
                          {form.interests.includes(opt) && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm" style={{ color: '#6B6358' }} onClick={() => toggle(opt)}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <label className="font-semibold text-[0.92rem] flex flex-col gap-1.5" style={{ color: NAVY }}>
                  Anything you&apos;d like us to know?
                  <textarea rows={3} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="font-normal text-[1rem] px-3.5 py-3 rounded-xl bg-white resize-none transition-colors placeholder:opacity-30"
                    style={{ border: '2px solid #D8D4CC', color: NAVY, outlineColor: SAGE }}
                    placeholder="Optional" />
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center border-2 flex-shrink-0 mt-0.5 transition-all duration-150"
                    style={form.consent
                      ? { background: SAGE, borderColor: SAGE }
                      : { background: '#fff', borderColor: '#D8D4CC' }}
                    onClick={() => setForm(f => ({ ...f, consent: !f.consent }))}
                  >
                    {form.consent && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs leading-relaxed" style={{ color: '#6B6358' }} onClick={() => setForm(f => ({ ...f, consent: !f.consent }))}>
                    I agree that Aldeia may contact me about Aldeia Wellness House and can ask to be removed at any time. <span style={{ color: '#B85050' }}>*</span>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!form.consent || form.interests.length === 0}
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-full transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed self-start hover:-translate-y-0.5"
                  style={{
                    background: SAGE,
                    boxShadow: `0 6px 0 ${SAGE_DARK}`,
                  }}
                >
                  Join the Interest List <ArrowRight />
                </button>
              </form>

              <div className="space-y-5">
                <div className="bg-white rounded-[22px] p-6" style={{ border: '1px solid #E0DCD4', borderTopWidth: '6px', borderTopColor: SAGE }}>
                  <h3 className="font-serif font-bold text-lg mb-2" style={{ color: NAVY }}>What happens next?</h3>
                  <div className="space-y-3">
                    {[
                      'We confirm we received your details',
                      'You get an invite to our first workshop in 2026',
                      'When bookings open, you hear first',
                    ].map((s, i) => (
                      <div key={s} className="flex items-start gap-3 text-sm" style={{ color: '#6B6358' }}>
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                          style={{ background: SAGE }}>{i + 1}</div>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[22px] p-6" style={{ border: '1px solid #E0DCD4', borderTopWidth: '6px', borderTopColor: MUTED_BLUE }}>
                  <h3 className="font-serif font-bold text-lg mb-2" style={{ color: NAVY }}>Get in touch directly</h3>
                  <div className="space-y-2">
                    <a href="mailto:info@aldeiawellness.com" className="flex items-center gap-2 text-sm no-underline hover:underline" style={{ color: MUTED_BLUE }}>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      info@aldeiawellness.com
                    </a>
                    <a href="https://wa.me/27795423701" className="flex items-center gap-2 text-sm no-underline hover:underline" style={{ color: SAGE }}>
                      <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M11.998 0C5.372 0 0 5.373 0 12c0 2.117.555 4.112 1.527 5.843L.057 23.927l6.293-1.651C8.047 23.312 9.98 24 11.998 24 18.627 24 24 18.627 24 12S18.627 0 11.998 0zm0 21.818a9.78 9.78 0 01-4.991-1.371l-.358-.213-3.712.974.99-3.624-.234-.375A9.773 9.773 0 012.182 12c0-5.414 4.401-9.818 9.816-9.818 5.414 0 9.816 4.404 9.816 9.818 0 5.414-4.402 9.818-9.816 9.818z" />
                      </svg>
                      +27 79 542 3701
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function FooterSection({ onClose }) {
  return (
    <footer className="bg-white py-10" style={{ borderTop: '1px solid #E0DCD4' }}>
      <div className="max-w-[1160px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border flex items-center justify-center overflow-hidden" style={{ borderColor: '#E0DCD4' }}>
              <img src="/images/logo.png" alt="Aldeia" className="w-6 h-6 object-contain"
                onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <span className="font-serif font-bold text-sm" style={{ color: NAVY }}>Aldeia Wellness House</span>
          </div>
          <div className="flex flex-wrap gap-3 text-xs items-center" style={{ color: '#9A9080' }}>
            <span>© 2025 Aldeia</span>
            <span>·</span>
            <span>Durbanville, Cape Town</span>
            <span>·</span>
            <a href="mailto:info@aldeiawellness.com" className="hover:text-navy transition-colors no-underline" style={{ color: '#9A9080' }}>info@aldeiawellness.com</a>
            <span>·</span>
            <button onClick={onClose} className="hover:text-navy transition-colors bg-transparent border-0 cursor-pointer text-xs p-0" style={{ color: '#9A9080' }}>
              ← Back to home
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
