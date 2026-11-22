import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// ── Helpers ──────────────────────────────────────────────────────────────────

function Stars({ n = 5 }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} stars`}>
      {[...Array(n)].map((_, i) => (
        <svg key={i} className="w-[14px] h-[14px] fill-yellow flex-shrink-0" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  )
}

function ArrowRight({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function TherapeuticHub({ onClose }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openBlog, setOpenBlog] = useState(null)

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
      <StatsStrip />
      <ServicesSection />
      <ProcessSection />
      <ReviewsSection />
      <AboutSection />
      <CentresSection />
      <BlogSection openBlog={openBlog} setOpenBlog={setOpenBlog} />
      <CTASection />
      <FooterSection onClose={onClose} />
    </motion.div>
  )
}

// ── Navigation ────────────────────────────────────────────────────────────────

function StickyNav({ onClose, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Back */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm text-warm-gray hover:text-navy transition-colors flex-shrink-0"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <span className="hidden sm:inline">Home</span>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Aldeia" className="h-8 w-auto"
            onError={(e) => { e.target.style.display='none' }} />
          <span className="font-serif font-bold text-navy hidden sm:block">Aldeia</span>
          <span className="text-xs text-warm-gray/60 hidden md:block">· Therapeutic Learning</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-warm-gray">
          <a href="#services" className="hover:text-navy transition-colors">Services</a>
          <a href="#reviews" className="hover:text-navy transition-colors">Reviews</a>
          <a href="#about" className="hover:text-navy transition-colors">Our Team</a>
          <a href="#centres" className="hover:text-navy transition-colors">Centres</a>
        </nav>

        {/* CTA */}
        <a
          href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
          className="flex-shrink-0 px-4 py-2 bg-red text-white text-xs font-bold rounded-full shadow-[3px_3px_0_0_#9B2429] hover:-translate-y-0.5 hover:shadow-[3px_4px_0_0_#9B2429] active:translate-y-px transition-all duration-150"
        >
          Book Free Consult
        </a>

        {/* Mobile menu toggle */}
        <button className="md:hidden p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18 18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-stone/40 bg-white overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3 text-sm text-warm-gray">
              {['Services', 'Reviews', 'Our Team', 'Centres'].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-navy" onClick={() => setMobileMenuOpen(false)}>
                  {link}
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
    <section ref={ref} className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="py-16 lg:py-24 lg:pr-12 flex flex-col justify-center"
          >
            {/* Rainbow stripe */}
            <div className="flex gap-1 w-28 mb-6">
              {['#C8363F','#F2C418','#7BA93A','#7E479A','#237BB7','#006CC0'].map(c => (
                <div key={c} className="h-[3px] flex-1 rounded-full" style={{ background: c }} />
              ))}
            </div>

            <span className="text-xs font-bold tracking-widest uppercase text-red mb-3 block">
              Award-winning · Since 2013
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-navy leading-[1.1] mb-6">
              Your child is trying.<br />
              <span className="text-red">We help them</span><br />
              find the way.
            </h1>
            <p className="text-warm-gray text-lg leading-relaxed mb-8 max-w-md">
              Integrated learning therapy, behavioural support and educational
              programmes for children in homeschool and mainstream education.
              We look at the whole child — not just the subject they're failing.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-red text-white text-sm font-bold rounded-full shadow-[4px_4px_0_0_#9B2429] hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_#9B2429] transition-all duration-150"
              >
                Book a free consultation
                <ArrowRight />
              </a>
              <a
                href="https://wa.me/27000000000"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-green text-green text-sm font-bold rounded-full hover:bg-green/5 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.998 0C5.372 0 0 5.373 0 12c0 2.117.555 4.112 1.527 5.843L.057 23.927l6.293-1.651C8.047 23.312 9.98 24 11.998 24 18.627 24 24 18.627 24 12S18.627 0 11.998 0zm0 21.818a9.78 9.78 0 01-4.991-1.371l-.358-.213-3.712.974.99-3.624-.234-.375A9.773 9.773 0 012.182 12c0-5.414 4.401-9.818 9.816-9.818 5.414 0 9.816 4.404 9.816 9.818 0 5.414-4.402 9.818-9.816 9.818z" />
                </svg>
                WhatsApp us
              </a>
            </div>

            {/* Award badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: '13 Awards', colour: '#F2C418' },
                { label: 'SAQA Registered', colour: '#7BA93A' },
                { label: 'DBE Accredited', colour: '#006CC0' },
              ].map(b => (
                <span key={b.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cream border border-stone/50 text-navy">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: b.colour }} />
                  {b.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:min-h-[520px] overflow-hidden"
          >
            {/* REPLACE THIS with a real Aldeia photo: child and therapist/teacher working together */}
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format&fit=crop"
              alt="A child working with an Aldeia practitioner"
              className="absolute inset-0 w-full h-full object-cover lg:rounded-none rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />

            {/* Floating review badge */}
            <div className="absolute bottom-8 left-6 bg-white rounded-2xl shadow-xl px-5 py-4 max-w-[220px]">
              <div className="flex items-center gap-2 mb-1">
                <Stars n={5} />
                <span className="text-sm font-bold text-navy">4.9</span>
              </div>
              <p className="text-xs text-warm-gray leading-tight">
                "They finally understood WHY my son struggled."
              </p>
              <p className="text-xs text-warm-gray/60 mt-1">— Parent, Cape Town</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Stats strip ────────────────────────────────────────────────────────────────

function StatsStrip() {
  const stats = [
    { n: '12+', label: 'Years of practice' },
    { n: '2800+', label: 'Families supported' },
    { n: '15+', label: 'Practitioners' },
    { n: '3', label: 'Countries' },
  ]
  return (
    <div className="bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map(s => (
            <div key={s.label} className="px-8 py-10 text-center">
              <div className="font-serif text-3xl lg:text-4xl text-yellow mb-1">{s.n}</div>
              <div className="text-xs font-medium tracking-wider text-white/50 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    n: '01',
    title: 'Learning Therapy',
    sub: 'Understanding how your child learns — not just what they\'re missing.',
    body: 'Our qualified learning therapists identify the cognitive and perceptual barriers that make reading, writing and maths harder than it needs to be. Then they address the root cause.',
    tags: ['Homeschool', 'Mainstream'],
    colour: '#006CC0',
  },
  {
    n: '02',
    title: 'Behavioural Support',
    sub: 'When behaviour is communication.',
    body: 'We work with children and families to understand what the behaviour is expressing — and then develop practical, compassionate strategies that work at home and at school.',
    tags: ['Individual', 'Family'],
    colour: '#C8363F',
  },
  {
    n: '03',
    title: 'Homeschool Pathways',
    sub: 'Education, your way, with real support.',
    body: 'From curriculum consultation to therapeutic co-teaching, we walk alongside homeschool families. Your child learns; your family stays connected.',
    tags: ['Curriculum', 'Co-teaching'],
    colour: '#7BA93A',
  },
  {
    n: '04',
    title: 'Mainstream School Support',
    sub: 'In school, but not thriving.',
    body: 'We liaise with teachers, compile support plans and provide in-school or after-school sessions that complement what\'s happening in the classroom.',
    tags: ['School liaison', 'Support plans'],
    colour: '#7E479A',
  },
]

function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="services" className="py-20 lg:py-28 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-purple block mb-3">What we offer</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-navy max-w-lg leading-snug">
            Programmes that look at the whole child
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-stone/40 rounded-[22px] overflow-hidden border border-stone/40">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white p-8 lg:p-10 group hover:bg-cream/80 transition-colors"
            >
              <div className="flex items-start gap-4 mb-5">
                <span className="font-serif text-sm font-bold text-warm-gray/40">{s.n}</span>
                <div className="w-6 h-0.5 mt-3 flex-shrink-0" style={{ background: s.colour }} />
                <h3 className="font-serif text-xl text-navy leading-snug">{s.title}</h3>
              </div>
              <p className="text-sm font-medium text-navy/70 italic mb-3 leading-snug">{s.sub}</p>
              <p className="text-sm text-warm-gray leading-relaxed mb-5">{s.body}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-stone text-warm-gray">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Process ───────────────────────────────────────────────────────────────────

const STEPS = [
  { n: 1, title: 'Start with a conversation', body: 'Tell us your child\'s story. No forms, no immediate assessments — just an honest call with one of our practitioners.' },
  { n: 2, title: 'Full picture assessment', body: 'We identify what\'s happening and why: cognitive, emotional, and educational. We work with your child\'s school where needed.' },
  { n: 3, title: 'A plan that fits your family', body: 'A tailored programme that your child\'s team — therapists, teachers, parents — can follow and build on together.' },
  { n: 4, title: 'Real progress, properly tracked', body: 'Regular reviews, parent coaching, school liaison. We celebrate every milestone and adjust when life changes.' },
]

function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-green block mb-3">How we work</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-navy max-w-lg leading-snug">From your first message to real progress</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {STEPS.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}>
              <div className="font-serif text-5xl text-navy/8 font-bold mb-4 leading-none">{String(s.n).padStart(2, '0')}</div>
              <h3 className="font-serif text-lg text-navy mb-3 leading-snug">{s.title}</h3>
              <p className="text-sm text-warm-gray leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Reviews ───────────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    name: 'Michelle van der Merwe',
    location: 'Cape Town',
    timeAgo: '2 months ago',
    initials: 'MV',
    colour: '#006CC0',
    quote: 'After four years and three different specialists, Aldeia was the first place that actually told us why our daughter was struggling. Within six months we saw real, lasting change — not just coping strategies.',
  },
  {
    name: 'James & Priya Naidoo',
    location: 'Pretoria',
    timeAgo: '6 weeks ago',
    initials: 'JN',
    colour: '#7BA93A',
    quote: 'What makes Aldeia different is that the people working with our son actually talk to each other. His learning therapist and behaviour practitioner worked as a team. That had never happened before.',
  },
  {
    name: 'Daniela Ferreira',
    location: 'Windhoek',
    timeAgo: '1 month ago',
    initials: 'DF',
    colour: '#C8363F',
    quote: "We were homeschooling and barely holding it together. Aldeia didn't just help our child — they helped us as parents understand what he needed. We finally feel like we know what we're doing.",
  },
]

function ReviewsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-end gap-6 mb-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-blue block mb-3">What parents say</span>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy leading-snug">
                Families who found their way
              </h2>
            </div>
            <div className="flex items-center gap-3 pb-1">
              <Stars n={5} />
              <span className="font-serif text-2xl font-bold text-navy">4.9</span>
              <span className="text-sm text-warm-gray">· 127 reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-[20px] p-7 border border-stone/50 flex flex-col"
            >
              {/* Reviewer */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: r.colour }}>
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy leading-tight">{r.name}</div>
                  <div className="text-xs text-warm-gray">{r.location} · {r.timeAgo}</div>
                </div>
              </div>
              <Stars n={5} />
              <p className="mt-4 text-sm text-warm-gray leading-relaxed flex-1">
                &ldquo;{r.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white text-sm font-bold rounded-full hover:bg-navy/90 transition-colors"
          >
            Start your child&apos;s journey
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

// ── About ─────────────────────────────────────────────────────────────────────

function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="about" className="bg-navy py-20 lg:py-28 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* REPLACE with real team photo */}
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80&auto=format&fit=crop"
              alt="The Aldeia team"
              className="rounded-[22px] w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-yellow block mb-3">Our story</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-white leading-snug mb-6">
              Built for children who don&apos;t fit<br className="hidden lg:block" /> neatly into one box
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed mb-8">
              <p>
                Aldeia was founded in 2013 by a group of learning therapists and behaviour
                practitioners who kept encountering the same thing: children being sent from
                specialist to specialist, with no one looking at the whole picture.
              </p>
              <p>
                We built something different. Under one roof, your child&apos;s learning
                therapist, behaviour practitioner, and educational consultant work together as
                a real team — sharing notes, attending reviews, building a coherent plan.
              </p>
              <p>
                Today we operate in South Africa, Namibia and the Netherlands, and we&apos;ve
                supported more than 2,800 families across three countries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Qualified Learning Therapists',
                'Registered Behaviour Practitioners',
                'Educational Consultants',
                'Speech & Language Therapists',
                'Occupational Therapists',
                'Parent Coaches',
              ].map(s => (
                <div key={s} className="flex items-center gap-2 text-sm text-white/70">
                  <svg className="w-4 h-4 text-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Centres + Facebook ────────────────────────────────────────────────────────

const CENTRES = [
  { country: 'South Africa', flag: '🇿🇦', colour: '#006CC0', locations: ['Cape Town (Durbanville)', 'Pretoria (Lynnwood)'], phone: '+27 (0)21 000 0000', email: 'info@aldeiawellness.co.za' },
  { country: 'Namibia', flag: '🇳🇦', colour: '#C8363F', locations: ['Windhoek (Klein Windhoek)'], phone: '+264 (0)61 000 0000', email: 'info@aldeiawellness.com' },
  { country: 'Netherlands', flag: '🇳🇱', colour: '#7BA93A', locations: ['Connecting online'], phone: '', email: 'info@aldeiawellness.com' },
]

function CentresSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="centres" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-red block mb-3">Where we are</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-navy leading-snug">Our centres</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {CENTRES.map((c, i) => (
            <motion.div
              key={c.country}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-[20px] border border-stone/50 overflow-hidden"
            >
              <div className="h-1 w-full" style={{ background: c.colour }} />
              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{c.flag}</span>
                  <h3 className="font-serif text-xl text-navy">{c.country}</h3>
                </div>
                {c.locations.map(l => (
                  <div key={l} className="flex items-center gap-2 text-sm text-warm-gray mb-2">
                    <svg className="w-4 h-4 text-stone flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {l}
                  </div>
                ))}
                {c.email && (
                  <a href={`mailto:${c.email}`} className="text-sm text-blue hover:underline mt-3 block">{c.email}</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facebook section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-[22px] border border-stone/50 overflow-hidden"
        >
          <div className="bg-cream px-8 py-6 border-b border-stone/40">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#1877F2] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <p className="font-serif font-bold text-navy text-sm">Aldeia Wellness on Facebook</p>
                <p className="text-xs text-warm-gray">Follow us for updates, articles and community</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-white py-4 overflow-hidden">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAldeiaWellness&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="500"
              className="max-w-full"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Aldeia Wellness Facebook"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── Blog ──────────────────────────────────────────────────────────────────────

const BLOG_POSTS = [
  {
    id: 1,
    tag: 'Learning Therapy',
    tagColour: '#006CC0',
    title: 'The difference between learning therapy and tutoring',
    excerpt: 'Tutoring fills gaps in what your child knows. Learning therapy addresses why they struggle in the first place. Here\'s how to know which your child needs.',
    readTime: '8 min',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=70&auto=format&fit=crop',
  },
  {
    id: 2,
    tag: 'Behavioural Support',
    tagColour: '#C8363F',
    title: 'When a child \'won\'t\' versus when a child \'can\'t\'',
    excerpt: 'One of the most important questions a practitioner asks is: is this a won\'t or a can\'t? The answer changes everything about how we respond.',
    readTime: '6 min',
    img: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=600&q=70&auto=format&fit=crop',
  },
  {
    id: 3,
    tag: 'Homeschool',
    tagColour: '#7BA93A',
    title: 'Homeschooling a child with learning differences: what actually works',
    excerpt: 'After working with hundreds of homeschool families, here are the approaches that consistently make a difference — and the traps that trip people up.',
    readTime: '10 min',
    img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=70&auto=format&fit=crop',
  },
]

function BlogSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="py-20 lg:py-28 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-purple block mb-3">Resources</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-navy leading-snug">For the parents in the thick of it</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-[20px] overflow-hidden border border-stone/50 group cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase mb-3" style={{ color: p.tagColour }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.tagColour }} />
                  {p.tag}
                </span>
                <h3 className="font-serif text-lg text-navy leading-snug mb-3">{p.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-4">{p.excerpt}</p>
                <span className="text-xs text-warm-gray/60">{p.readTime} read</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="bg-navy py-20 lg:py-28" ref={ref}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="flex justify-center gap-1 w-28 mx-auto mb-8">
            {['#C8363F','#F2C418','#7BA93A','#7E479A','#237BB7','#006CC0'].map(c => (
              <div key={c} className="h-[3px] flex-1 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl text-white mb-5 leading-snug">
            Ready to find out what&apos;s<br />holding your child back?
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Book a free, no-pressure consultation with one of our practitioners.
            We&apos;ll listen, ask the right questions, and tell you honestly
            what we think would help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
              className="px-8 py-4 bg-red text-white text-sm font-bold rounded-full shadow-[4px_4px_0_0_#9B2429] hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_#9B2429] transition-all duration-150 inline-flex items-center justify-center gap-2"
            >
              Book free consultation
              <ArrowRight />
            </a>
            <a
              href="mailto:info@aldeiawellness.com"
              className="px-8 py-4 border border-white/25 text-white text-sm font-bold rounded-full hover:bg-white/8 transition-colors inline-flex items-center justify-center gap-2"
            >
              Just have a question?
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function FooterSection({ onClose }) {
  return (
    <footer className="bg-[#06244f] text-white/50 text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="" className="h-8 w-auto opacity-80"
                onError={(e) => { e.target.style.display='none' }} />
              <span className="font-serif font-bold text-white">Aldeia</span>
            </div>
            <p className="text-xs leading-relaxed">
              Integrated therapeutic and educational support<br />
              for children across three countries.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-3">Services</h4>
            <ul className="space-y-1.5 text-xs">
              {['Learning Therapy', 'Behavioural Support', 'Homeschool Pathways', 'Mainstream Support'].map(s => (
                <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-3">Locations</h4>
            <ul className="space-y-1.5 text-xs">
              <li>Cape Town, South Africa</li>
              <li>Pretoria, South Africa</li>
              <li>Windhoek, Namibia</li>
              <li>Netherlands (online)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-3">Contact</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="mailto:info@aldeiawellness.com" className="hover:text-white">info@aldeiawellness.com</a></li>
              <li><a href="https://www.aldeiawellness.com" className="hover:text-white">aldeiawellness.com</a></li>
              <li><a href="https://www.aldeiawellness.co.za" className="hover:text-white">aldeiawellness.co.za</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; 2026 Aldeia Wellness (Pty) Ltd. All rights reserved.</p>
          <button onClick={onClose} className="text-xs hover:text-white transition-colors inline-flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to home
          </button>
        </div>
      </div>
    </footer>
  )
}
