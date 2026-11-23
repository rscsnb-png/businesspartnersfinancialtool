import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// ── Helpers ──────────────────────────────────────────────────────────────────

const RAINBOW = 'linear-gradient(90deg,#C8363F,#F2C418,#7BA93A,#7E479A,#237BB7,#006CC0)'

function RainbowStroke({ className = 'w-32 my-4' }) {
  return <div className={`h-[7px] rounded-full ${className}`} style={{ background: RAINBOW }} />
}

function ArrowRight({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
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
      <InterestSection submitted={submitted} setSubmitted={setSubmitted} />
      <FooterSection onClose={onClose} />
    </motion.div>
  )
}

// ── Navigation ────────────────────────────────────────────────────────────────

function StickyNav({ onClose, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-40 bg-white/94 backdrop-blur-sm border-b border-stone/40">
      <div className="max-w-[1160px] mx-auto px-4 h-[72px] flex items-center gap-5">
        <a onClick={onClose} href="#" className="flex items-center gap-2.5 text-navy no-underline flex-shrink-0 font-serif font-bold text-[1.2rem]">
          <div className="w-[54px] h-[54px] rounded-full bg-white border border-stone/40 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
            <img src="/images/logo.png" alt="Aldeia" className="w-9 h-9 object-contain"
              onError={(e) => { e.target.style.display = 'none' }} />
          </div>
          <span className="hidden sm:block">Aldeia</span>
          <span className="text-sm text-warm-gray/60 font-normal hidden md:block">· Wellness House</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 ml-auto list-none p-0 m-0">
          {[['About','#about'],['Services','#services'],['Family Plan','#family-plan'],['Join Us','#join']].map(([label, href]) => (
            <a key={label} href={href} className="block px-3 py-2 rounded-[10px] text-navy no-underline font-semibold text-[0.95rem] hover:bg-cream transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#join"
          className="ml-auto md:ml-4 flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-green text-white text-sm font-bold rounded-full no-underline shadow-[0_6px_0_#4a7a1e] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#4a7a1e] transition-all duration-150"
        >
          Join Interest List
        </a>

        <button
          className="md:hidden ml-2 bg-transparent border-2 border-navy rounded-xl px-3 py-2 font-bold text-[0.9rem] cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18 18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-stone/40 bg-white overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {[['About','#about'],['Services','#services'],['Family Plan','#family-plan'],['Join Us','#join']].map(([label, href]) => (
                <a key={label} href={href} className="block px-3 py-2 rounded-[10px] text-navy no-underline font-semibold hover:bg-cream transition-colors"
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
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center mb-14">

          {/* Left: heading + lede + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 font-bold text-[0.8rem] tracking-[0.14em] uppercase text-green mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              Opening 2027 · Durbanville, Cape Town
            </span>
            <RainbowStroke className="w-32 mt-1 mb-5" />
            <h1 className="font-serif font-extrabold text-[clamp(2.6rem,5.5vw,4.4rem)] leading-[1.08] tracking-tight mb-5">
              <span className="inline-block" style={{ color: '#7BA93A' }}>Individual</span>{' '}
              <span className="inline-block text-navy">&amp;</span>{' '}
              <br className="hidden sm:block" />
              <span className="inline-block" style={{ color: '#7E479A' }}>Family</span>{' '}
              <span className="inline-block" style={{ color: '#006CC0' }}>Wellbeing.</span>
            </h1>
            <p className="text-[1.15rem] text-warm-gray mb-8 max-w-[44ch] leading-relaxed">
              A village of practitioners under one welcoming roof in Durbanville — bringing
              practical wellness support to individuals, parents and families.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#join"
                className="inline-flex items-center gap-2 px-6 py-4 bg-green text-white font-bold text-[1rem] rounded-full no-underline shadow-[0_6px_0_#4a7a1e] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#4a7a1e] transition-all duration-150"
              >
                Join the Interest List <ArrowRight />
              </a>
              <a
                href="mailto:info@aldeiawellness.com?subject=Wellness%20House%20Enquiry"
                className="inline-flex items-center gap-2 px-6 py-4 bg-white text-navy border-2 border-navy font-bold text-[1rem] rounded-full no-underline hover:bg-cream transition-colors"
              >
                Send us a message
              </a>
            </div>
          </motion.div>

          {/* Right: dark card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-navy text-white rounded-[22px] p-7 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-[8px]" style={{ background: RAINBOW }} />
            <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-yellow block mt-2 mb-2">
              Aldeia Wellness House
            </span>
            <h2 className="font-serif text-[1.9rem] mb-2 leading-tight">
              A village of professionals
            </h2>
            <p className="text-[1.1rem] font-serif text-[#d4f4c4] mb-6">
              under one welcoming roof.
            </p>
            <div className="space-y-3">
              {[
                { icon: '🌿', text: 'Holistic family wellness support' },
                { icon: '👨‍👩‍👧', text: 'Support for parents & caregivers' },
                { icon: '🏡', text: 'Life transitions & adult wellbeing' },
                { icon: '🤝', text: 'Workshops & parent evenings' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="text-base flex-shrink-0">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Full-width wellness banner image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-[22px] overflow-hidden"
        >
          <img
            src="/images/stats-bg.jpg"
            alt="Aldeia Wellness — practitioners and families"
            className="w-full h-auto block max-h-[480px] object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

// ── Who we support ────────────────────────────────────────────────────────────

const SUPPORT_CARDS = [
  { icon: '👨‍👩‍👧', title: 'Families with additional needs', desc: 'Raising a child with learning differences, behavioural challenges or developmental needs — we walk the whole journey with you.', colour: '#006CC0' },
  { icon: '🤲', title: 'Parents & caregivers', desc: 'You hold everything together. We support your wellbeing too — coping, balance and emotional resilience.', colour: '#7BA93A' },
  { icon: '🌿', title: 'Adults & life transitions', desc: 'Personal wellbeing, life changes, new seasons — practical support for adults who want to look after themselves.', colour: '#7E479A' },
  { icon: '🏡', title: 'Families navigating change', desc: 'New schools, adolescence, a move, a loss — we help families find their footing during uncertain times.', colour: '#C8363F' },
]

function WhoWeSupport() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="py-[88px] bg-cream" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-warm-gray block mb-2">Who we support</span>
          <RainbowStroke className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-navy max-w-lg leading-tight">
            You don&apos;t need a diagnosis or a referral
          </h2>
          <p className="text-warm-gray text-lg mt-4 max-w-2xl leading-relaxed">
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
              className="bg-white rounded-[22px] p-7 border border-stone/50 flex gap-5 overflow-hidden"
              style={{ borderTop: `7px solid ${c.colour}` }}
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{c.icon}</span>
              <div>
                <h3 className="font-serif font-bold text-[1.2rem] text-navy mb-2 leading-snug">{c.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{c.desc}</p>
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
  { title: 'Family Wellness Plan', desc: 'A 12-week programme giving your family a clear, written plan — 3–5 realistic goals, routines, roles and review dates. Support while you put it into practice.', colour: '#7BA93A', badge: null },
  { title: 'Wellness Counselling', desc: 'For parents and caregivers: coping, balance and emotional wellbeing. Individual sessions tailored to your season of life.', colour: '#006CC0', badge: null },
  { title: 'Behaviour Therapy', desc: 'Support for children and teenagers with behaviour, routines, emotional regulation and social skills.', colour: '#C8363F', badge: null },
  { title: 'Educational Psychology, OT, Arts Therapies & More', desc: 'Independent practitioners offering complementary services — occupational therapy, arts therapies, counselling, yoga and more.', colour: '#7E479A', badge: 'Opening 2027' },
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
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-warm-gray block mb-2">What you&apos;ll find here</span>
          <RainbowStroke className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-navy max-w-lg leading-tight">
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
              className="bg-white rounded-[22px] p-7 border border-stone/50 flex flex-col gap-3 overflow-hidden"
              style={{ borderTop: `7px solid ${s.colour}` }}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-serif font-bold text-[1.2rem] text-navy leading-snug">{s.title}</h3>
                {s.badge && (
                  <span className="text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wide"
                    style={{ background: s.colour + '18', color: s.colour }}>
                    {s.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-warm-gray leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Independent practitioners note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-cream rounded-[22px] p-7 border border-stone/40"
        >
          <p className="text-sm text-warm-gray leading-relaxed">
            <strong className="text-navy">Independent practitioners:</strong> Each practitioner at Aldeia Wellness House runs their own independent
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
  { n: 1, title: 'Getting to know your family', duration: '90 min', desc: 'Your priorities, routines, strengths, pressures and the professionals already involved.', colour: '#C8363F' },
  { n: 2, title: 'Seeing daily life', duration: '60 min', desc: 'A visit at home, or at a time of day that is hard for your family.', colour: '#F2C418' },
  { n: 3, title: 'Your Family Wellness Plan', duration: '60–90 min', desc: 'A written plan with 3–5 realistic goals, routines, who does what, and review dates.', colour: '#7BA93A' },
  { n: 4, title: 'Three follow-up sessions', duration: '60 min · every 3–4 weeks', desc: "Review what's working, adjust the plan, and ongoing parent support.", colour: '#006CC0' },
]

function FamilyPlanSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="family-plan" className="py-[88px] bg-navy" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-yellow block mb-2">The 12-week programme</span>
          <RainbowStroke className="w-32 mt-1 mb-4" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-white max-w-xl leading-tight">
              The Family Wellness Plan
            </h2>
            <p className="text-white/60 max-w-sm leading-relaxed text-sm">
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
              className="bg-white/8 rounded-[22px] p-6 border border-white/10 overflow-hidden"
              style={{ borderTop: `7px solid ${s.colour}` }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4 font-serif flex-shrink-0"
                style={{ background: s.colour }}>
                {s.n}
              </div>
              <h3 className="font-serif font-bold text-[1.1rem] text-white mb-1 leading-snug">{s.title}</h3>
              <p className="text-xs text-white/40 mb-3 font-medium">{s.duration}</p>
              <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/6 border border-white/10 rounded-[22px] p-6 text-sm text-white/50"
        >
          Investment will be confirmed closer to opening. This service is not claimable from medical aid. ·
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
    <section className="py-[88px] bg-cream" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-warm-gray block mb-2">Join us</span>
          <RainbowStroke className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-navy max-w-lg leading-tight">
            Are you a registered professional?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-warm-gray leading-relaxed mb-4">
              Looking for a warm, welcoming place to see clients in Durbanville? Aldeia
              Wellness House offers consultation rooms on fixed sessional days, with a
              shared reception and waiting area.
            </p>
            <p className="text-warm-gray leading-relaxed mb-4">
              We&apos;re especially interested in practitioners working with children, families
              or adults — educational psychologists, occupational therapists, arts therapists,
              counsellors and yoga teachers.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              You keep your own practice, clients and fees. We ask for proof of current
              registration with your professional body and professional indemnity insurance.
            </p>
            <a
              href="mailto:info@aldeiawellness.com?subject=Room%20Availability%20Enquiry%20%E2%80%94%20Aldeia%20Wellness%20House"
              className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white font-bold rounded-full no-underline shadow-[0_6px_0_#071f52] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#071f52] transition-all duration-150"
            >
              Ask about room availability <ArrowRight />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-warm-gray/60 mb-4">We&apos;re looking for</p>
            <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
              {[
                { label: 'Educational Psychologists', colour: '#006CC0' },
                { label: 'Occupational Therapists', colour: '#C8363F' },
                { label: 'Arts Therapists', colour: '#7E479A' },
                { label: 'Counsellors', colour: '#7BA93A' },
                { label: 'Yoga Teachers', colour: '#237BB7' },
                { label: 'Speech Therapists', colour: '#F2C418' },
                { label: 'Dietitians', colour: '#006CC0' },
                { label: 'Life Coaches', colour: '#7BA93A' },
              ].map(p => (
                <li key={p.label}
                  className="px-4 py-2 rounded-full font-semibold text-[0.95rem] border-2"
                  style={{ color: p.colour, borderColor: p.colour, background: p.colour + '0d' }}>
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
    "I'm a practitioner looking for a room",
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
    <section id="join" className="py-[88px] bg-white" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 font-bold text-[0.8rem] tracking-[0.14em] uppercase text-green block mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Opening 2027 · Durbanville
          </span>
          <RainbowStroke className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-navy leading-tight max-w-xl">
            Be the first to know
          </h2>
          <p className="text-warm-gray text-lg mt-4 max-w-xl leading-relaxed">
            Leave your details and we&apos;ll let you know when bookings open, and invite
            you to our first workshops.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-cream rounded-[22px] border border-stone/40"
          >
            <div className="w-14 h-14 rounded-full border-2 border-green flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-navy mb-3">You&apos;re on the list.</h3>
            <p className="text-warm-gray">We&apos;ll be in touch as soon as bookings open.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
              {/* Form */}
              <form onSubmit={handleSubmit} className="bg-white rounded-[22px] p-7 border border-stone/50 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="font-semibold text-[0.92rem] flex flex-col gap-1.5">
                    <span>Name <span className="text-red">*</span></span>
                    <input type="text" required value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="font-normal text-[1rem] px-3.5 py-3 border-2 border-stone/60 rounded-xl bg-white text-navy focus:border-green focus:outline-none transition-colors placeholder:text-warm-gray/40"
                      placeholder="Your name" />
                  </label>
                  <label className="font-semibold text-[0.92rem] flex flex-col gap-1.5">
                    <span>Email <span className="text-red">*</span></span>
                    <input type="email" required value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="font-normal text-[1rem] px-3.5 py-3 border-2 border-stone/60 rounded-xl bg-white text-navy focus:border-green focus:outline-none transition-colors placeholder:text-warm-gray/40"
                      placeholder="your@email.com" />
                  </label>
                </div>

                <label className="font-semibold text-[0.92rem] flex flex-col gap-1.5">
                  Phone
                  <input type="tel" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="font-normal text-[1rem] px-3.5 py-3 border-2 border-stone/60 rounded-xl bg-white text-navy focus:border-green focus:outline-none transition-colors placeholder:text-warm-gray/40"
                    placeholder="+27 ..." />
                </label>

                <div>
                  <p className="font-semibold text-[0.92rem] mb-3">I&apos;m interested in <span className="text-red">*</span></p>
                  <div className="space-y-2">
                    {interestOptions.map(opt => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          className="w-5 h-5 rounded flex items-center justify-center border-2 flex-shrink-0 transition-all duration-150"
                          style={form.interests.includes(opt)
                            ? { background: '#7BA93A', borderColor: '#7BA93A' }
                            : { background: '#fff', borderColor: '#d4cfc8' }}
                          onClick={() => toggle(opt)}
                        >
                          {form.interests.includes(opt) && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-warm-gray" onClick={() => toggle(opt)}>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <label className="font-semibold text-[0.92rem] flex flex-col gap-1.5">
                  Anything you&apos;d like us to know?
                  <textarea rows={3} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="font-normal text-[1rem] px-3.5 py-3 border-2 border-stone/60 rounded-xl bg-white text-navy focus:border-green focus:outline-none transition-colors resize-none placeholder:text-warm-gray/40"
                    placeholder="Optional" />
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center border-2 flex-shrink-0 mt-0.5 transition-all duration-150"
                    style={form.consent
                      ? { background: '#7BA93A', borderColor: '#7BA93A' }
                      : { background: '#fff', borderColor: '#d4cfc8' }}
                    onClick={() => setForm(f => ({ ...f, consent: !f.consent }))}
                  >
                    {form.consent && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-warm-gray leading-relaxed" onClick={() => setForm(f => ({ ...f, consent: !f.consent }))}>
                    I agree that Aldeia may contact me about Aldeia Wellness House and can ask to be removed at any time. <span className="text-red">*</span>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!form.consent || form.interests.length === 0}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green text-white font-bold rounded-full shadow-[0_6px_0_#4a7a1e] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#4a7a1e] transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0 self-start"
                >
                  Join the Interest List <ArrowRight />
                </button>
              </form>

              {/* Side info */}
              <div className="space-y-5">
                <div className="bg-cream rounded-[22px] p-6 border border-stone/40" style={{ borderTop: '7px solid #7BA93A' }}>
                  <h3 className="font-serif font-bold text-lg text-navy mb-2">What happens next?</h3>
                  <div className="space-y-3">
                    {[
                      'We confirm we received your details',
                      'You get an invite to our first workshop in 2026',
                      'When bookings open, you hear first',
                    ].map((s, i) => (
                      <div key={s} className="flex items-start gap-3 text-sm text-warm-gray">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                          style={{ background: '#7BA93A' }}>{i + 1}</div>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-cream rounded-[22px] p-6 border border-stone/40" style={{ borderTop: '7px solid #006CC0' }}>
                  <h3 className="font-serif font-bold text-lg text-navy mb-2">Get in touch directly</h3>
                  <div className="space-y-2">
                    <a href="mailto:info@aldeiawellness.com" className="flex items-center gap-2 text-sm text-blue no-underline hover:underline">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      info@aldeiawellness.com
                    </a>
                    <a href="https://wa.me/27795423701" className="flex items-center gap-2 text-sm text-green no-underline hover:underline">
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
    <footer className="bg-white border-t border-stone/40 py-10">
      <div className="max-w-[1160px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border border-stone/40 flex items-center justify-center overflow-hidden">
              <img src="/images/logo.png" alt="Aldeia" className="w-6 h-6 object-contain"
                onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <span className="font-serif font-bold text-navy text-sm">Aldeia Wellness House</span>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-warm-gray/60 items-center">
            <span>© 2025 Aldeia</span>
            <span>·</span>
            <span>Durbanville, Cape Town · Opening 2027</span>
            <span>·</span>
            <a href="mailto:info@aldeiawellness.com" className="hover:text-navy transition-colors no-underline">info@aldeiawellness.com</a>
            <span>·</span>
            <button onClick={onClose} className="hover:text-navy transition-colors bg-transparent border-0 cursor-pointer text-xs text-warm-gray/60 p-0">
              ← Back to home
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
