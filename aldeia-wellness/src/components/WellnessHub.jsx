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
      <PhilosophySection />
      <WhoWeSupport />
      <ServicesSection />
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
          <div className="w-[52px] h-[52px] rounded-full bg-white border flex items-center justify-center overflow-hidden flex-shrink-0" style={{ borderColor: BORDER }}>
            <img src="/images/logo.png" alt="Aldeia" className="w-10 h-10 object-contain"
              onError={(e) => { e.target.style.display = 'none' }} />
          </div>
          <span className="hidden sm:block">Aldeia</span>
          <span className="text-sm font-normal hidden md:block" style={{ color: TWIG }}>· Wellness House</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 ml-auto list-none p-0 m-0">
          {[['About','#about'],['Services','#services'],['Practitioners','#services'],['Join Us','#join']].map(([label, href]) => (
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
              {[['About','#about'],['Services','#services'],['Practitioners','#services'],['Join Us','#join']].map(([label, href]) => (
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

            <p className="leading-[1.9] mb-4" style={{ fontSize: '1.05rem', color: TWIG, maxWidth: '52ch' }}>
              Life can feel overwhelming. Whether you&apos;re navigating family challenges,
              supporting someone you love, or simply needing space for yourself, you don&apos;t
              have to figure everything out alone.
            </p>
            <p className="leading-[1.9] mb-4" style={{ fontSize: '1.05rem', color: TWIG, maxWidth: '52ch' }}>
              At Aldeia Wellness House, we offer a warm, welcoming space for individuals,
              parents and families to find practical support for their wellbeing.
            </p>
            <p className="font-semibold mb-4" style={{ fontSize: '1.05rem', color: BARK, maxWidth: '52ch' }}>
              No diagnosis. No referral. Just a place to begin.
            </p>
            <p className="italic mb-10" style={{ fontSize: '1rem', color: TWIG, maxWidth: '52ch' }}>
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
            <div className="rounded-[28px] overflow-hidden shadow-lg" style={{ aspectRatio: '4/3' }}>
              <img src="/images/wellness-hero.webp" alt="A warm welcome at Aldeia Wellness House" className="w-full h-full object-cover" />
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
          <img src="/images/wellness-hero.webp" alt="A warm welcome at Aldeia Wellness House" className="w-full h-auto block" />
        </motion.div>
      </div>
    </section>
  )
}

// ── Philosophy ────────────────────────────────────────────────────────────────

function PhilosophySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} style={{ background: LINEN, paddingTop: '0', paddingBottom: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-[28px] overflow-hidden p-10 md:p-14"
          style={{ background: BARK }}
        >
          {/* Label row */}
          <div className="flex items-center gap-4 mb-7">
            <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase" style={{ color: SAGE }}>
              Our Philosophy
            </span>
            <div className="flex-1 h-px max-w-[120px]" style={{ background: 'rgba(78,124,95,0.4)' }} />
          </div>

          {/* Heading + body */}
          <h2 className="font-serif font-bold text-white leading-[1.1] mb-7"
            style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', maxWidth: '18ch' }}>
            Wellness looks different for everyone.
          </h2>
          <div className="mb-10 space-y-3" style={{ maxWidth: '70ch' }}>
            <p className="leading-[1.9] text-[1.05rem]" style={{ color: 'rgba(249,246,241,0.75)' }}>
              For some, it&apos;s finding someone who listens. For others, it&apos;s building
              healthier routines, understanding their child, or finding a moment to reconnect
              with themselves.
            </p>
            <p className="leading-[1.9] text-[1.05rem]" style={{ color: 'rgba(249,246,241,0.75)' }}>
              At Wellness House, we believe support should meet you where you are.
            </p>
          </div>

          {/* Photo */}
          <div className="rounded-[18px] overflow-hidden w-full" style={{ maxHeight: '480px' }}>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop"
              alt="A diverse group of women together"
              className="w-full object-cover"
              style={{ maxHeight: '480px', objectPosition: 'center 30%' }}
              loading="lazy"
            />
          </div>
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

const DISCIPLINES = [
  {
    title: 'Family Wellness & Development',
    desc: 'Family relationships, parenting, development and everyday challenges.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop',
    accent: SAGE,
  },
  {
    title: 'Counselling & Emotional Wellbeing',
    desc: 'Support for emotional wellbeing, coping, stress and life transitions.',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop',
    accent: SAGE,
  },
  {
    title: 'Allied Health & Therapies',
    desc: 'Occupational therapy, speech therapy and other registered professional services.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop',
    accent: SAGE,
  },
  {
    title: 'Nutrition & Lifestyle',
    desc: 'Nutrition, sustainable habits and healthier everyday routines.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format&fit=crop',
    accent: SAGE,
  },
  {
    title: 'Body & Restorative Wellness',
    desc: 'Massage, bodywork and restorative wellness practices.',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop',
    accent: '#7A5E8A',
  },
  {
    title: 'Movement & Mindfulness',
    desc: 'Yoga, Pilates, movement and relaxation-based practices.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&auto=format&fit=crop',
    accent: '#8B6355',
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
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase" style={{ color: SAGE }}>
              Practitioners Under One Roof
            </span>
            <div className="flex-1 h-px" style={{ background: BORDER }} />
          </div>
          <h2 className="font-serif font-bold leading-[1.1] mb-4" style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', color: BARK }}>
            Different paths. One place for{' '}
            <em className="not-italic" style={{ color: SAGE }}>wellbeing.</em>
          </h2>
          <p className="leading-[1.8]" style={{ fontSize: '1.05rem', color: TWIG, maxWidth: '58ch' }}>
            Discover a community of independent practitioners, each bringing their own expertise
            and approach to supporting your wellbeing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {DISCIPLINES.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-[20px] overflow-hidden bg-white flex flex-col"
              style={{
                borderTop: `4px solid ${d.accent}`,
                boxShadow: '0 2px 16px rgba(44,36,32,0.07), 0 1px 3px rgba(44,36,32,0.04)',
              }}
            >
              <div className="w-full overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-[1.1rem] mb-2 leading-snug" style={{ color: BARK }}>{d.title}</h3>
                <p className="text-sm leading-[1.8]" style={{ color: TWIG }}>{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="rounded-[20px] p-7 flex flex-col md:flex-row md:items-start gap-6"
          style={{ background: LINEN2, border: `1px solid ${BORDER}` }}
        >
          <div className="flex items-center gap-3 md:flex-shrink-0 md:w-64">
            <Leaf className="w-5 h-5 flex-shrink-0" style={{ color: SAGE }} />
            <div className="h-8 w-px flex-shrink-0" style={{ background: BORDER }} />
            <span className="font-serif font-bold text-[1.05rem] leading-snug" style={{ color: BARK }}>
              Independent practitioners. Shared values.
            </span>
          </div>
          <div className="text-sm leading-[1.8] space-y-2" style={{ color: TWIG }}>
            <p>
              Wellness House brings together practitioners from different disciplines, creating
              opportunities for individuals and families to find support that suits their needs.
            </p>
            <p>
              Each practitioner operates independently, with their own professional qualifications,
              services and approach.
            </p>
          </div>
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
            <div className="w-10 h-10 rounded-full border flex items-center justify-center overflow-hidden" style={{ borderColor: BORDER }}>
              <img src="/images/logo.png" alt="Aldeia" className="w-7 h-7 object-contain"
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
