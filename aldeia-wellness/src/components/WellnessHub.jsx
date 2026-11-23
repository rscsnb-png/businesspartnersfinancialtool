import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// ── Design tokens ─────────────────────────────────────────────────────────────

const LINEN      = '#F9F6F1'
const LINEN2     = '#F2EDE4'
const BARK       = '#2C2420'
const TWIG       = '#7A6A5A'
const SAGE       = '#4E7C5F'
const SAGE_DARK  = '#365644'
const SAGE_PALE  = '#EAF0EB'
const BORDER     = '#E5DED4'
const GOLD       = '#B89040'
const NAVY       = '#0D3A91'

// ── Helpers ───────────────────────────────────────────────────────────────────

function Leaf({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-6 4-6 10a6 6 0 0012 0C18 7 12 3 12 3z" />
      <path strokeLinecap="round" d="M12 3v18" />
    </svg>
  )
}

function ArrowRight({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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
    <div className="overflow-hidden border-b" style={{ background: LINEN2, borderColor: BORDER }}>
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
      <div className="flex whitespace-nowrap" style={{ animation: 'ticker 36s linear infinite' }}>
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 py-2 text-[0.72rem] font-semibold tracking-[0.16em] uppercase" style={{ color: TWIG }}>
            {item}
            <span style={{ color: BORDER }}>·</span>
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background: LINEN }}
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
    <header className="sticky top-0 z-40" style={{ background: LINEN, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center gap-5">
        <a onClick={onClose} href="#" className="flex items-center gap-2.5 no-underline flex-shrink-0 font-serif font-bold text-[1.15rem]" style={{ color: BARK }}>
          <div className="w-[48px] h-[48px] rounded-full bg-white border flex items-center justify-center overflow-hidden flex-shrink-0" style={{ borderColor: BORDER }}>
            <img src="/images/logo.png" alt="Aldeia" className="w-8 h-8 object-contain"
              onError={(e) => { e.target.style.display = 'none' }} />
          </div>
          <span className="hidden sm:block">Aldeia</span>
          <span className="text-sm font-normal hidden md:block" style={{ color: TWIG }}>· Wellness House</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 ml-auto list-none p-0 m-0">
          {[['About','#about'],['Services','#services'],['Family Plan','#family-plan'],['Join Us','#join']].map(([label, href]) => (
            <a key={label} href={href} className="block px-4 py-2 rounded-full no-underline text-[0.9rem] font-medium transition-colors" style={{ color: TWIG }}
              onMouseEnter={e => { e.currentTarget.style.color = BARK; e.currentTarget.style.background = LINEN2 }}
              onMouseLeave={e => { e.currentTarget.style.color = TWIG; e.currentTarget.style.background = 'transparent' }}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#join"
          className="ml-auto md:ml-4 flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-full no-underline transition-all duration-200 hover:opacity-90"
          style={{ background: SAGE, letterSpacing: '0.02em' }}>
          Join Interest List
        </a>

        <button
          className="md:hidden ml-2 bg-transparent border rounded-xl px-3 py-2 cursor-pointer"
          style={{ borderColor: BORDER, color: BARK }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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
            className="md:hidden border-t overflow-hidden"
            style={{ background: LINEN, borderColor: BORDER }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {[['About','#about'],['Services','#services'],['Family Plan','#family-plan'],['Join Us','#join']].map(([label, href]) => (
                <a key={label} href={href}
                  className="block px-3 py-2.5 rounded-xl no-underline font-medium transition-colors"
                  style={{ color: BARK }}
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
    <section id="about" ref={ref} style={{ background: LINEN, paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-4 h-4" style={{ color: SAGE }} />
              <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase" style={{ color: SAGE }}>
                Wellness House · Durbanville
              </span>
            </div>

            <h1 className="font-serif font-bold leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.8rem,5.5vw,4.6rem)', color: BARK }}>
              A place to{' '}
              <em className="not-italic" style={{ color: SAGE }}>exhale.</em>
            </h1>

            <p className="leading-[1.9] mb-4" style={{ fontSize: '1.1rem', color: TWIG, maxWidth: '52ch' }}>
              A warm, welcoming space in Durbanville where individuals, parents and families
              find practical wellbeing support — without needing a diagnosis or a referral.
            </p>
            <p className="leading-[1.9] mb-10" style={{ fontSize: '1.05rem', color: TWIG, maxWidth: '52ch' }}>
              You don&apos;t have to have it all figured out. Come as you are.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#join"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-white font-semibold rounded-full no-underline transition-all duration-200 hover:opacity-90"
                style={{ background: SAGE, fontSize: '0.95rem' }}>
                Join the Interest List <ArrowRight />
              </a>
              <a href="mailto:info@aldeiawellness.com?subject=Wellness%20House%20Enquiry"
                className="inline-flex items-center gap-2.5 px-7 py-4 font-semibold rounded-full no-underline transition-all duration-200"
                style={{ background: LINEN2, color: BARK, border: `1px solid ${BORDER}`, fontSize: '0.95rem' }}>
                Send a message
              </a>
            </div>
          </motion.div>

          {/* Right: stats banner image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-[28px] overflow-hidden shadow-lg">
              <img src="/images/stats-banner.webp" alt="Aldeia — Our impact in numbers" className="w-full h-auto block" />
            </div>
          </motion.div>
        </div>

        {/* Mobile stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:hidden mt-12 rounded-[22px] overflow-hidden"
        >
          <img src="/images/stats-banner.webp" alt="Aldeia — Our impact in numbers" className="w-full h-auto block" />
        </motion.div>
      </div>
    </section>
  )
}

// ── Who we support ────────────────────────────────────────────────────────────

const SUPPORT_CARDS = [
  {
    title: 'Families with additional needs',
    desc: 'Raising a child with learning differences, behavioural challenges or developmental needs — we walk the whole journey with you.',
    img: '/images/wellness-families-additional.webp',
  },
  {
    title: 'Parents & caregivers',
    desc: 'You hold everything together. We support your wellbeing too — coping, balance and emotional resilience.',
    img: '/images/wellness-parents-caregivers.webp',
  },
  {
    title: 'Adults & life transitions',
    desc: 'Personal wellbeing, life changes, new seasons — practical support for adults who want to look after themselves.',
    img: '/images/wellness-adults-transitions.webp',
  },
  {
    title: 'Families navigating change',
    desc: 'New schools, adolescence, a move, a loss — we help families find their footing during uncertain times.',
    img: '/images/wellness-families-change.webp',
  },
]

function WhoWeSupport() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} style={{ background: '#fff', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase block mb-4" style={{ color: SAGE }}>
            Who we support
          </span>
          <h2 className="font-serif font-bold leading-[1.15] mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: BARK }}>
            You don&apos;t need a diagnosis or a referral
          </h2>
          <p className="leading-[1.9]" style={{ fontSize: '1.05rem', color: TWIG }}>
            Some of our visitors are parents carrying a lot. Others are adults who simply want
            to look after their own wellbeing. All are welcome.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {SUPPORT_CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-[24px] overflow-hidden bg-white flex flex-col"
              style={{ boxShadow: '0 2px 20px rgba(44,36,32,0.08), 0 1px 4px rgba(44,36,32,0.04)' }}
            >
              <div className="w-full overflow-hidden" style={{ height: '260px' }}>
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
              </div>
              <div className="p-8">
                <h3 className="font-serif font-bold text-[1.25rem] mb-3 leading-snug" style={{ color: BARK }}>{c.title}</h3>
                <p className="leading-[1.8] text-[0.95rem]" style={{ color: TWIG }}>{c.desc}</p>
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
  {
    icon: '◇',
    title: 'Family Wellness Plan',
    desc: 'A 12-week programme giving your family a clear, written plan — 3–5 realistic goals, routines, roles and review dates. Support while you put it into practice.',
  },
  {
    icon: '◇',
    title: 'Wellness Counselling',
    desc: 'For parents and caregivers: coping, balance and emotional wellbeing. Individual sessions tailored to your season of life.',
  },
  {
    icon: '◇',
    title: 'Behaviour Therapy',
    desc: 'Support for children and teenagers with behaviour, routines, emotional regulation and social skills.',
  },
  {
    icon: '◇',
    title: 'Educational Psychology, OT, Arts Therapies & More',
    desc: 'Independent practitioners offering complementary services — occupational therapy, arts therapies, counselling, yoga and more.',
  },
]

function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="services" ref={ref} style={{ background: LINEN, paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase block mb-4" style={{ color: SAGE }}>
            What you&apos;ll find here
          </span>
          <h2 className="font-serif font-bold leading-[1.15] mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: BARK }}>
            Practitioners under one roof
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="rounded-[20px] p-8 flex flex-col gap-3"
              style={{ background: '#fff', border: `1px solid ${BORDER}` }}
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: SAGE_PALE }}>
                <Leaf className="w-4 h-4" style={{ color: SAGE }} />
              </div>
              <h3 className="font-serif font-bold text-[1.15rem] leading-snug" style={{ color: BARK }}>{s.title}</h3>
              <p className="text-sm leading-[1.8]" style={{ color: TWIG }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-[20px] p-7"
          style={{ background: LINEN2, border: `1px solid ${BORDER}` }}
        >
          <p className="text-sm leading-[1.8]" style={{ color: TWIG }}>
            <strong style={{ color: BARK }}>Independent practitioners —</strong> Each practitioner at Aldeia Wellness House runs their own independent
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
  { n: 1, title: 'Getting to know your family', duration: '90 min', desc: 'Your priorities, routines, strengths, pressures and the professionals already involved.' },
  { n: 2, title: 'Seeing daily life', duration: '60 min', desc: 'A visit at home, or at a time of day that is hard for your family.' },
  { n: 3, title: 'Your Family Wellness Plan', duration: '60–90 min', desc: 'A written plan with 3–5 realistic goals, routines, who does what, and review dates.' },
  { n: 4, title: 'Three follow-up sessions', duration: '60 min · every 3–4 weeks', desc: "Review what's working, adjust the plan, and ongoing parent support." },
]

function FamilyPlanSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="family-plan" ref={ref} style={{ background: BARK, paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase block mb-4" style={{ color: SAGE }}>
            The 12-week programme
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif font-bold text-white leading-[1.15]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              The Family Wellness Plan
            </h2>
            <p className="max-w-sm leading-[1.8] text-sm" style={{ color: 'rgba(249,246,241,0.55)', maxWidth: '38ch' }}>
              When one person in a family needs more, everyone feels it. We help families step
              back, see the whole picture, and agree on a plan that fits real life.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-5 mb-10"
        >
          {[['0%', 'A family wellness conversation'], ['100%', 'Creating a personalised family plan']].map(([x, label]) => (
            <div key={x} className="rounded-[20px] overflow-hidden h-60 relative">
              <div className="absolute inset-0"
                style={{
                  backgroundImage: 'url(/images/wellness-family-plan.webp)',
                  backgroundSize: '200% auto',
                  backgroundPositionX: x,
                  backgroundPositionY: '50%',
                }}
              />
              <div className="absolute bottom-0 inset-x-0 p-4"
                style={{ background: 'linear-gradient(to top, rgba(44,36,32,0.65) 0%, transparent 100%)' }}>
                <span className="text-xs font-medium text-white/80 tracking-wide">{label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {PLAN_STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-[20px] p-6"
              style={{ background: 'rgba(249,246,241,0.07)', border: '1px solid rgba(249,246,241,0.12)' }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-5 font-serif flex-shrink-0"
                style={{ background: SAGE }}>
                {s.n}
              </div>
              <h3 className="font-serif font-bold text-[1.05rem] text-white mb-1 leading-snug">{s.title}</h3>
              <p className="text-xs mb-3 font-medium" style={{ color: 'rgba(249,246,241,0.4)' }}>{s.duration}</p>
              <p className="text-sm leading-[1.8]" style={{ color: 'rgba(249,246,241,0.6)' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-[20px] p-6 text-sm"
          style={{ background: 'rgba(249,246,241,0.05)', border: '1px solid rgba(249,246,241,0.08)', color: 'rgba(249,246,241,0.4)' }}
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
    <section ref={ref} style={{ background: '#fff', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase block mb-4" style={{ color: SAGE }}>
            Join us
          </span>
          <h2 className="font-serif font-bold leading-[1.15] max-w-xl" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: BARK }}>
            Are you a health, wellness or holistic practitioner?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="leading-[1.9] mb-5" style={{ color: TWIG, fontSize: '1.05rem' }}>
              Looking for a warm, welcoming space to see clients in Durbanville? Aldeia
              Wellness House offers consultation rooms on fixed sessional days, with a
              shared reception and waiting area.
            </p>
            <p className="leading-[1.9] mb-5" style={{ color: TWIG }}>
              We welcome all health, wellness and holistic practitioners — whether you work
              with the mind, body or spirit. From counsellors and therapists to beauty
              practitioners, yoga teachers and energy healers, all are welcome.
            </p>
            <p className="leading-[1.9] mb-10" style={{ color: TWIG }}>
              You keep your own practice, clients and fees. We simply ask for proof of
              relevant training or registration and professional indemnity insurance where applicable.
            </p>
            <a
              href="mailto:info@aldeiawellness.com?subject=Room%20Availability%20Enquiry%20%E2%80%94%20Aldeia%20Wellness%20House"
              className="inline-flex items-center gap-2.5 px-7 py-4 text-white font-semibold rounded-full no-underline transition-all duration-200 hover:opacity-90"
              style={{ background: BARK, fontSize: '0.95rem' }}>
              Ask about room availability <ArrowRight />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: SAGE }}>We welcome</p>
            <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
              {[
                'Counsellors & Psychologists',
                'Occupational Therapists',
                'Arts & Play Therapists',
                'Speech Therapists',
                'Yoga & Pilates Teachers',
                'Dietitians & Nutritionists',
                'Beauty & Skin Practitioners',
                'Massage Therapists',
                'Energy & Holistic Healers',
                'Life & Wellness Coaches',
              ].map(p => (
                <li key={p}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: LINEN2, color: BARK, border: `1px solid ${BORDER}` }}>
                  {p}
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
    <section ref={ref} style={{ background: LINEN, paddingTop: '72px', paddingBottom: '72px' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase" style={{ color: SAGE }}>
            Professional Accreditation
          </span>
          <div className="mx-auto mt-3 h-px w-16" style={{ background: BORDER }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center gap-5"
        >
          <img
            src="/images/accreditation-iphm.png"
            alt="IPHM — International Practitioners of Holistic Medicine, Accredited Training Provider · Member Organisation"
            className="w-full max-w-2xl h-auto object-contain"
          />
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium tracking-wide" style={{ color: TWIG }}>
            <span>Accredited Training Provider</span>
            <span style={{ color: BORDER }}>·</span>
            <span>Member Organisation</span>
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
    <section id="join" ref={ref} style={{ background: '#fff', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.2em] uppercase block mb-4" style={{ color: SAGE }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ background: SAGE }} />
            Durbanville, Cape Town
          </span>
          <h2 className="font-serif font-bold leading-[1.15] max-w-xl" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: BARK }}>
            Be the first to know
          </h2>
          <p className="mt-5 leading-[1.9]" style={{ fontSize: '1.05rem', color: TWIG, maxWidth: '50ch' }}>
            Leave your details and we&apos;ll let you know when bookings open, and invite
            you to our first workshops.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 rounded-[24px]"
            style={{ background: SAGE_PALE, border: `1px solid #C0D9C8` }}
          >
            <div className="w-14 h-14 rounded-full border flex items-center justify-center mx-auto mb-6"
              style={{ borderColor: SAGE }}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" style={{ color: SAGE }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl mb-3" style={{ color: BARK }}>You&apos;re on the list.</h3>
            <p style={{ color: TWIG }}>We&apos;ll be in touch as soon as bookings open.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
              <form onSubmit={handleSubmit} className="rounded-[24px] p-8 flex flex-col gap-6"
                style={{ background: LINEN, border: `1px solid ${BORDER}` }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[['Name', 'text', 'name', 'Your name', true], ['Email', 'email', 'email', 'your@email.com', true]].map(([label, type, field, ph, req]) => (
                    <label key={field} className="flex flex-col gap-1.5 text-sm font-medium" style={{ color: BARK }}>
                      {label} {req && <span style={{ color: '#B85050' }}>*</span>}
                      <input type={type} required={req} value={form[field]}
                        onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                        className="text-[0.95rem] px-4 py-3 rounded-xl bg-white placeholder:opacity-30 outline-none focus:ring-2"
                        style={{ border: `1.5px solid ${BORDER}`, color: BARK }}
                        placeholder={ph} />
                    </label>
                  ))}
                </div>

                <label className="flex flex-col gap-1.5 text-sm font-medium" style={{ color: BARK }}>
                  Phone
                  <input type="tel" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="text-[0.95rem] px-4 py-3 rounded-xl bg-white placeholder:opacity-30 outline-none"
                    style={{ border: `1.5px solid ${BORDER}`, color: BARK }}
                    placeholder="+27 ..." />
                </label>

                <div>
                  <p className="text-sm font-medium mb-4" style={{ color: BARK }}>
                    I&apos;m interested in <span style={{ color: '#B85050' }}>*</span>
                  </p>
                  <div className="space-y-3">
                    {interestOptions.map(opt => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <div
                          className="w-5 h-5 rounded flex items-center justify-center border flex-shrink-0 transition-all duration-150"
                          style={form.interests.includes(opt)
                            ? { background: SAGE, borderColor: SAGE }
                            : { background: '#fff', borderColor: BORDER }}
                          onClick={() => toggle(opt)}
                        >
                          {form.interests.includes(opt) && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm leading-relaxed" style={{ color: TWIG }} onClick={() => toggle(opt)}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <label className="flex flex-col gap-1.5 text-sm font-medium" style={{ color: BARK }}>
                  Anything you&apos;d like us to know?
                  <textarea rows={3} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="text-[0.95rem] px-4 py-3 rounded-xl bg-white resize-none placeholder:opacity-30 outline-none"
                    style={{ border: `1.5px solid ${BORDER}`, color: BARK }}
                    placeholder="Optional" />
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center border flex-shrink-0 mt-0.5 transition-all duration-150"
                    style={form.consent
                      ? { background: SAGE, borderColor: SAGE }
                      : { background: '#fff', borderColor: BORDER }}
                    onClick={() => setForm(f => ({ ...f, consent: !f.consent }))}
                  >
                    {form.consent && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs leading-relaxed" style={{ color: TWIG }} onClick={() => setForm(f => ({ ...f, consent: !f.consent }))}>
                    I agree that Aldeia may contact me about Aldeia Wellness House and can ask to be removed at any time. <span style={{ color: '#B85050' }}>*</span>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!form.consent || form.interests.length === 0}
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed self-start hover:opacity-90"
                  style={{ background: SAGE, fontSize: '0.95rem' }}
                >
                  Join the Interest List <ArrowRight />
                </button>
              </form>

              <div className="space-y-5">
                <div className="rounded-[20px] p-7" style={{ background: LINEN, border: `1px solid ${BORDER}` }}>
                  <h3 className="font-serif font-bold text-lg mb-4" style={{ color: BARK }}>What happens next?</h3>
                  <div className="space-y-4">
                    {[
                      'We confirm we received your details',
                      'You get an invite to our first workshop in 2026',
                      'When bookings open, you hear first',
                    ].map((s, i) => (
                      <div key={s} className="flex items-start gap-3 text-sm" style={{ color: TWIG }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0 mt-0.5"
                          style={{ background: SAGE }}>{i + 1}</div>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[20px] p-7" style={{ background: LINEN, border: `1px solid ${BORDER}` }}>
                  <h3 className="font-serif font-bold text-lg mb-4" style={{ color: BARK }}>Get in touch directly</h3>
                  <div className="space-y-3">
                    <a href="mailto:info@aldeiawellness.com" className="flex items-center gap-2.5 text-sm no-underline hover:underline" style={{ color: SAGE }}>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      info@aldeiawellness.com
                    </a>
                    <a href="https://wa.me/27795423701" className="flex items-center gap-2.5 text-sm no-underline hover:underline" style={{ color: SAGE }}>
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
    <footer style={{ background: LINEN, borderTop: `1px solid ${BORDER}`, paddingTop: '48px', paddingBottom: '48px' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border flex items-center justify-center overflow-hidden" style={{ borderColor: BORDER }}>
              <img src="/images/logo.png" alt="Aldeia" className="w-6 h-6 object-contain"
                onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <span className="font-serif font-bold text-sm" style={{ color: BARK }}>Aldeia Wellness House</span>
          </div>
          <div className="flex flex-wrap gap-3 text-xs items-center" style={{ color: TWIG }}>
            <span>© 2025 Aldeia</span>
            <span style={{ color: BORDER }}>·</span>
            <span>Durbanville, Cape Town</span>
            <span style={{ color: BORDER }}>·</span>
            <a href="mailto:info@aldeiawellness.com" className="hover:underline no-underline" style={{ color: TWIG }}>info@aldeiawellness.com</a>
            <span style={{ color: BORDER }}>·</span>
            <button onClick={onClose} className="hover:underline bg-transparent border-0 cursor-pointer text-xs p-0" style={{ color: TWIG }}>
              ← Back to home
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
