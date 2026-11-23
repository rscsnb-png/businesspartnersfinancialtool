import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// ── Helpers ──────────────────────────────────────────────────────────────────

const RAINBOW = 'linear-gradient(90deg,#C8363F,#F2C418,#7BA93A,#7E479A,#237BB7,#006CC0)'

function RainbowStroke({ className = 'w-32 my-4' }) {
  return <div className={`h-[7px] rounded-full ${className}`} style={{ background: RAINBOW }} />
}

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
      <ServicesSection />
      <ProcessSection />
      <ReviewsSection />
      <AboutSection />
      <CentresSection />
      <BlogSection />
      <CTASection />
      <FooterSection onClose={onClose} />
    </motion.div>
  )
}

// ── Navigation ────────────────────────────────────────────────────────────────

function StickyNav({ onClose, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-40 bg-white/94 backdrop-blur-sm border-b border-stone/40">
      <div className="max-w-[1160px] mx-auto px-4 h-[72px] flex items-center gap-5">
        {/* Logo + name */}
        <a onClick={onClose} href="#" className="flex items-center gap-2.5 text-navy no-underline flex-shrink-0 font-serif font-bold text-[1.2rem]">
          <div className="w-[54px] h-[54px] rounded-full bg-white border border-stone/40 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
            <img src="/images/logo.png" alt="Aldeia" className="w-9 h-9 object-contain"
              onError={(e) => { e.target.style.display = 'none' }} />
          </div>
          <span className="hidden sm:block">Aldeia</span>
          <span className="text-sm text-warm-gray/60 font-normal hidden md:block">· Therapeutic Learning</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 ml-auto list-none p-0 m-0">
          {[['Services','#services'],['Reviews','#reviews'],['About','#about'],['Centres','#centres']].map(([label, href]) => (
            <a key={label} href={href} className="block px-3 py-2 rounded-[10px] text-navy no-underline font-semibold text-[0.95rem] hover:bg-cream transition-colors">
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
          className="ml-auto md:ml-4 flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-red text-white text-sm font-bold rounded-full no-underline shadow-[0_6px_0_#9B2429] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#9B2429] transition-all duration-150"
        >
          Book Free Consult
        </a>

        {/* Mobile burger */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-stone/40 bg-white overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {[['Services','#services'],['Reviews','#reviews'],['About','#about'],['Centres','#centres']].map(([label, href]) => (
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
    <section ref={ref} className="pt-14 pb-0 bg-white">
      <div className="max-w-[1160px] mx-auto px-4">

        {/* Two-column: text left, dark card right */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center mb-14">

          {/* Left: heading + lede + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-bold text-[0.8rem] tracking-[0.14em] uppercase text-warm-gray mb-3">
              Established 2013 · South Africa · Namibia · Netherlands
            </span>
            <RainbowStroke className="w-32 mt-1 mb-5" />
            <h1 className="font-serif font-extrabold text-[clamp(2.6rem,5.5vw,4.4rem)] leading-[1.08] tracking-tight mb-5 [overflow-wrap:normal] [word-break:normal]">
              <span className="inline-block" style={{ color: '#C8363F' }}>Supporting</span>{' '}
              <span className="inline-block text-navy">children.</span>{' '}
              <br className="hidden sm:block" />
              <span className="inline-block whitespace-nowrap" style={{ color: '#7BA93A' }}>Strengthening</span>{' '}
              <span className="inline-block" style={{ color: '#006CC0' }}>families.</span>
            </h1>
            <p className="text-[1.15rem] text-warm-gray mb-8 max-w-[44ch] leading-relaxed">
              Evidence-based therapeutic learning and behaviour support — for children who need more
              than a tutor, and families who need more than advice.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
                className="inline-flex items-center gap-2 px-6 py-4 bg-red text-white font-bold text-[1rem] rounded-full no-underline shadow-[0_6px_0_#9B2429] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#9B2429] transition-all duration-150"
              >
                Book free consultation <ArrowRight />
              </a>
              <a
                href="https://wa.me/27795423701"
                className="inline-flex items-center gap-2 px-6 py-4 bg-white text-navy border-2 border-navy font-bold text-[1rem] rounded-full no-underline hover:bg-cream transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.998 0C5.372 0 0 5.373 0 12c0 2.117.555 4.112 1.527 5.843L.057 23.927l6.293-1.651C8.047 23.312 9.98 24 11.998 24 18.627 24 24 18.627 24 12S18.627 0 11.998 0zm0 21.818a9.78 9.78 0 01-4.991-1.371l-.358-.213-3.712.974.99-3.624-.234-.375A9.773 9.773 0 012.182 12c0-5.414 4.401-9.818 9.816-9.818 5.414 0 9.816 4.404 9.816 9.818 0 5.414-4.402 9.818-9.816 9.818z" />
                </svg>
                WhatsApp us
              </a>
            </div>
          </motion.div>

          {/* Right: yellow stats card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[22px] p-7 relative overflow-hidden"
            style={{ background: '#F2C418' }}
          >
            {/* Rainbow top stripe */}
            <div className="absolute inset-x-0 top-0 h-[8px]" style={{ background: RAINBOW }} />

            <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase block mt-2 mb-2" style={{ color: '#0D3A91' }}>
              Aldeia Neurobehaviour Institute
            </span>
            <h2 className="font-serif text-[2rem] mb-2 leading-tight font-extrabold" style={{ color: '#0D3A91' }}>
              Every child. Every family.
            </h2>
            <p className="text-[1.15rem] font-serif mb-5 font-semibold" style={{ color: '#365644' }}>
              Every step of the way.
            </p>

            <div className="grid grid-cols-3 gap-2.5 mb-5">
              {[
                { n: '12', label: 'Branches Worldwide' },
                { n: '1,654', label: 'Families Supported' },
                { n: '14', label: 'International Awards' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-2xl p-3 text-center shadow-sm">
                  <b className="block font-serif font-extrabold text-[1.7rem] leading-none tabular-nums" style={{ color: '#0D3A91' }}>{s.n}</b>
                  <span className="text-[0.82rem] font-semibold leading-tight block mt-1" style={{ color: '#365644' }}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm" style={{ color: '#0D3A91' }}>
              <Stars n={5} />
              <span className="font-bold">4.9</span>
              <span className="opacity-70">· 127 Google reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Full-width brand banner image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-[22px] overflow-hidden"
        >
          <img
            src="/images/hero-therapeutic.webp"
            alt="Aldeia Neurobehaviour Institute — Supporting children, strengthening families"
            className="w-full h-auto block"
          />
        </motion.div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: 'Learning Therapy',
    sub: 'Understanding how your child learns — not just what they\'re missing.',
    body: 'Our qualified learning therapists identify the cognitive and perceptual barriers that make reading, writing and maths harder than it needs to be. Then they address the root cause.',
    tags: ['Homeschool', 'Mainstream'],
    colour: '#006CC0',
    img: '/images/svc-learning-therapy.webp', imgPos: 'center top', imgH: 220,
  },
  {
    title: 'Behavioural Support',
    sub: 'When behaviour is communication.',
    body: 'We work with children and families to understand what the behaviour is expressing — and then develop practical, compassionate strategies that work at home and at school.',
    tags: ['Individual', 'Family'],
    colour: '#C8363F',
    img: '/images/svc-behavioural-support.webp', imgPos: 'center top', imgH: 220,
  },
  {
    title: 'Homeschool Pathways',
    sub: 'Education, your way, with real support.',
    body: 'From curriculum consultation to therapeutic co-teaching, we walk alongside homeschool families. Your child learns; your family stays connected.',
    tags: ['Curriculum', 'Co-teaching'],
    colour: '#7BA93A',
    img: '/images/svc-homeschool-pathways.webp', imgPos: 'center top', imgH: 220,
  },
  {
    title: 'Mainstream School Support',
    sub: 'In school, but not thriving.',
    body: 'We liaise with teachers, compile support plans and provide in-school or after-school sessions that complement what\'s happening in the classroom.',
    tags: ['School liaison', 'Support plans'],
    colour: '#7E479A',
    img: '/images/svc-mainstream-support.webp', imgPos: 'center top', imgH: 220,
  },
]

function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="services" className="py-[88px] bg-cream" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-warm-gray block mb-2">What we offer</span>
          <RainbowStroke className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-navy max-w-lg leading-tight">
            Programmes that look at the whole child
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-[18px]">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-[22px] border border-stone/50 flex flex-col overflow-hidden"
            >
              <div className="w-full overflow-hidden" style={{ height: `${s.imgH || 220}px` }}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" style={{ objectPosition: s.imgPos || 'center' }} />
              </div>
              <div className="p-7 flex flex-col gap-3 flex-1" style={{ borderTop: `5px solid ${s.colour}` }}>
              <h3 className="font-serif font-bold text-[1.35rem] text-navy leading-snug">{s.title}</h3>
              <p className="font-semibold text-sm text-navy/70 italic leading-snug">{s.sub}</p>
              <p className="text-sm text-warm-gray leading-relaxed flex-1">{s.body}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {s.tags.map(t => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full font-semibold border-2"
                    style={{ color: s.colour, borderColor: s.colour + '44', background: s.colour + '0d' }}>
                    {t}
                  </span>
                ))}
              </div>
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
  { n: 1, title: 'Start with a conversation', body: 'Tell us your child\'s story. No forms, no immediate assessments — just an honest call with one of our practitioners.', colour: '#C8363F' },
  { n: 2, title: 'Full picture assessment', body: 'We identify what\'s happening and why: cognitive, emotional, and educational. We work with your child\'s school where needed.', colour: '#F2C418' },
  { n: 3, title: 'A plan that fits your family', body: 'A tailored programme that your child\'s team — therapists, teachers, parents — can follow and build on together.', colour: '#7BA93A' },
  { n: 4, title: 'Real progress, properly tracked', body: 'Regular reviews, parent coaching, school liaison. We celebrate every milestone and adjust when life changes.', colour: '#006CC0' },
]

function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="py-[88px] bg-white" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-10">
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-warm-gray block mb-2">How we work</span>
          <RainbowStroke className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-navy max-w-lg leading-tight">
            From your first message to real progress
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10 rounded-[22px] overflow-hidden shadow-sm border border-stone/40"
        >
          <img
            src="/images/how-we-work.webp"
            alt="How we work — Aldeia practitioners with family"
            className="w-full h-auto block"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-[22px] p-6 border border-stone/50"
              style={{ borderTop: `7px solid ${s.colour}` }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4 font-serif"
                style={{ background: s.colour }}>
                {s.n}
              </div>
              <h3 className="font-serif font-bold text-[1.15rem] text-navy mb-2 leading-snug">{s.title}</h3>
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
    <section id="reviews" className="py-[88px] bg-cream" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-warm-gray block mb-2">What parents say</span>
          <RainbowStroke className="w-32 mt-1 mb-4" />
          <div className="flex flex-wrap items-end gap-6">
            <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-navy leading-tight">
              Families who found their way
            </h2>
            <div className="flex items-center gap-3 pb-1">
              <Stars n={5} />
              <span className="font-serif text-2xl font-bold text-navy">4.9</span>
              <span className="text-sm text-warm-gray">· 127 Google reviews</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-[18px]">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-[22px] p-7 border border-stone/50 flex flex-col overflow-hidden"
              style={{ borderTop: `7px solid ${r.colour}` }}
            >
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-full no-underline shadow-[0_6px_0_#071f52] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#071f52] transition-all duration-150"
          >
            Start your child&apos;s journey <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

// ── About ─────────────────────────────────────────────────────────────────────

const PRACTITIONERS = [
  { label: 'Qualified Learning Therapists', colour: '#C8363F' },
  { label: 'Registered Behaviour Practitioners', colour: '#F2C418' },
  { label: 'Educational Consultants', colour: '#7BA93A' },
  { label: 'Speech & Language Therapists', colour: '#7E479A' },
  { label: 'Occupational Therapists', colour: '#237BB7' },
  { label: 'Parent Coaches', colour: '#006CC0' },
]

function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="about" className="py-[88px] bg-navy" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-yellow block mb-2">Our story</span>
          <RainbowStroke className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-white max-w-2xl leading-tight">
            Built for children who don&apos;t fit neatly into one box
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10 rounded-[22px] overflow-hidden shadow-sm border border-white/10"
        >
          <img
            src="/images/our-story.webp"
            alt="Aldeia — our story, our children"
            className="w-full h-auto block"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-white font-semibold leading-relaxed"
          >
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
              Today we operate across 10 branches in South Africa, Namibia and the
              Netherlands, and we&apos;ve supported 3,526 families across three countries.
            </p>
            <p className="font-serif text-lg text-white font-bold italic">
              &ldquo;Every child. Every family. Every step of the way.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-yellow/70 mb-5">Our practitioners include</p>
            <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0 mb-10">
              {PRACTITIONERS.map(p => (
                <li key={p.label}
                  className="px-4 py-2 rounded-full font-bold text-[0.95rem] border-2"
                  style={{ color: p.colour, borderColor: p.colour, background: 'white' }}>
                  {p.label}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-3">
              {[
                { n: '12', label: 'Branches Worldwide' },
                { n: '1,654', label: 'Families Supported' },
                { n: '14', label: 'International Awards' },
              ].map(s => (
                <div key={s.label} className="text-center border border-white/10 rounded-2xl py-5">
                  <div className="font-serif font-extrabold text-2xl text-yellow mb-1">{s.n}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{s.label}</div>
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
  {
    country: 'South Africa', flag: '🇿🇦', colour: '#006CC0',
    map: '/images/map-south-africa.webp',
    regions: [
      { region: 'Gauteng', locations: ['Noordheuwel', 'Randburg'] },
      { region: 'Western Cape', locations: ['Cape Town'] },
      { region: 'Northern Cape', locations: ['Upington'] },
      { region: 'Mpumalanga', locations: ['Nelspruit', 'White River'] },
      { region: 'KwaZulu-Natal', locations: ['Umhlanga'] },
    ],
    email: 'info@aldeiawellness.co.za',
  },
  {
    country: 'Namibia', flag: '🇳🇦', colour: '#C8363F',
    map: '/images/map-namibia.webp',
    regions: [
      { region: null, locations: ['Swakopmund', 'Walvis Bay', 'Windhoek'] },
    ],
    email: 'info@aldeiawellness.com',
  },
  {
    country: 'Netherlands', flag: '🇳🇱', colour: '#7BA93A',
    map: '/images/map-netherlands.webp',
    regions: [
      { region: null, locations: ['Hilversum'] },
    ],
    email: 'info@aldeiawellness.com',
  },
  {
    country: 'USA', flag: '🇺🇸', colour: '#C8363F',
    map: '/images/map-usa.webp',
    regions: [],
    email: null,
    comingSoon: true,
  },
]

function CentresSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="centres" className="py-[88px] bg-white" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        {/* World map banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-warm-gray block mb-2">Where we are</span>
          <RainbowStroke className="w-32 mt-1 mb-6" />
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-navy leading-tight flex-1">Our centres</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[18px] mb-6">
          {CENTRES.map((c, i) => (
            <motion.div
              key={c.country}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-[22px] border border-stone/50 overflow-hidden flex flex-col"
              style={{ borderTop: `7px solid ${c.colour}` }}
            >
              {/* Country map image */}
              <div className="bg-white flex items-center justify-center p-6 pb-2" style={{ minHeight: 180 }}>
                <img
                  src={c.map}
                  alt={`${c.country} map`}
                  className="w-full h-auto block object-contain"
                  style={{ maxHeight: 200 }}
                />
              </div>
              <div className="p-7 pt-3 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{c.flag}</span>
                  <h3 className="font-serif font-bold text-xl text-navy">{c.country}</h3>
                  {c.comingSoon && (
                    <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: c.colour }}>Coming Soon</span>
                  )}
                </div>
                {c.comingSoon ? (
                  <p className="text-sm text-warm-gray italic flex-1">We&apos;re expanding to the USA — stay tuned for our launch.</p>
                ) : (
                <div className="space-y-3 flex-1">
                  {c.regions.map(r => (
                    <div key={r.region || 'main'}>
                      {r.region && (
                        <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: c.colour + 'aa' }}>{r.region}</p>
                      )}
                      {r.locations.map(l => (
                        <div key={l} className="flex items-center gap-2 text-sm text-warm-gray mb-1">
                          <svg className="w-3.5 h-3.5 text-stone flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                          {l}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                )}
                {c.email && (
                  <a href={`mailto:${c.email}`} className="text-sm text-blue hover:underline mt-4 block">{c.email}</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Online block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-white rounded-[22px] border border-stone/50 overflow-hidden mb-14"
          style={{ borderTop: '7px solid #7E479A' }}
        >
          <div className="p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/globe-online.webp" alt="Online worldwide" className="w-14 h-14 object-contain flex-shrink-0" />
              <div>
                <h3 className="font-serif font-bold text-lg text-navy">Online Sessions</h3>
                <p className="text-sm text-warm-gray">Available worldwide — teletherapy for learning support and behaviour sessions</p>
              </div>
            </div>
            <a
              href="mailto:info@aldeiawellness.com?subject=Online%20Session%20Enquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-bold text-sm rounded-full no-underline flex-shrink-0"
              style={{ background: '#7E479A', boxShadow: '0 4px 0 #5a3070' }}
            >
              Enquire about online
            </a>
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
    colour: '#006CC0',
    title: 'The difference between learning therapy and tutoring',
    excerpt: 'Tutoring fills gaps in what your child knows. Learning therapy addresses why they struggle in the first place. Here\'s how to know which your child needs.',
    readTime: '8 min',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=70&auto=format&fit=crop',
  },
  {
    id: 2,
    tag: 'Behavioural Support',
    colour: '#C8363F',
    title: 'When a child \'won\'t\' versus when a child \'can\'t\'',
    excerpt: 'One of the most important questions a practitioner asks is: is this a won\'t or a can\'t? The answer changes everything about how we respond.',
    readTime: '6 min',
    img: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=600&q=70&auto=format&fit=crop',
  },
  {
    id: 3,
    tag: 'Homeschool',
    colour: '#7BA93A',
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
    <section className="py-[88px] bg-cream" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-10">
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-warm-gray block mb-2">Community</span>
          <RainbowStroke className="w-32 mt-1 mb-4" />
          <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-navy leading-tight">
            Follow our journey
          </h2>
          <p className="text-warm-gray mt-3 text-[1.05rem] max-w-xl">
            Updates, articles, family stories and resources — straight from our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* ── Facebook follow card ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="bg-white rounded-[22px] overflow-hidden border border-stone/50 flex flex-col h-full">
              <div className="flex items-center gap-3 px-5 py-4" style={{ borderTop: '5px solid #1877F2' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#1877F2' }}>
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-navy text-[0.95rem]">Aldeia on Facebook</div>
                  <a href="https://www.facebook.com/aldeianeuro" target="_blank" rel="noopener noreferrer" className="text-xs no-underline" style={{ color: '#1877F2' }}>
                    facebook.com/aldeianeuro
                  </a>
                </div>
                <a href="https://www.facebook.com/aldeianeuro" target="_blank" rel="noopener noreferrer"
                  className="ml-auto text-xs font-bold px-4 py-1.5 rounded-full text-white no-underline flex-shrink-0"
                  style={{ background: '#1877F2' }}>
                  Follow
                </a>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 px-8 py-12 text-center gap-6"
                style={{ background: 'linear-gradient(135deg,#f0f4ff 0%,#f7f4ef 60%,#e8f0ff 100%)' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ background: '#1877F2' }}>
                  <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-serif font-bold text-navy text-xl mb-1">facebook.com/aldeianeuro</div>
                  <div className="text-warm-gray text-sm leading-relaxed max-w-[28ch]">
                    Real updates, family stories and resources from our team — follow us to stay in the loop.
                  </div>
                </div>
                <a href="https://www.facebook.com/aldeianeuro"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white no-underline text-sm shadow-md hover:-translate-y-0.5 transition-transform"
                  style={{ background: '#1877F2' }}>
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                  Follow on Facebook
                </a>
                <p className="text-xs text-warm-gray/50 italic">Tap to view our latest posts</p>
              </div>
            </div>
          </motion.div>

          {/* ── Instagram card ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-white rounded-[22px] overflow-hidden border border-stone/50 flex flex-col h-full">
              <div className="flex items-center gap-3 px-5 py-4" style={{ borderTop: '5px solid #E1306C' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-navy text-[0.95rem]">Aldeia on Instagram</div>
                  <a href="https://www.instagram.com/int.aldeianeuroinstitute/" target="_blank" rel="noopener noreferrer" className="text-xs no-underline" style={{ color: '#E1306C' }}>
                    @int.aldeianeuroinstitute
                  </a>
                </div>
                <a href="https://www.instagram.com/int.aldeianeuroinstitute/" target="_blank" rel="noopener noreferrer"
                  className="ml-auto text-xs font-bold px-4 py-1.5 rounded-full text-white no-underline flex-shrink-0"
                  style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
                  Follow
                </a>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 px-8 py-12 text-center gap-6"
                style={{ background: 'linear-gradient(135deg,#fdf0f8 0%,#f7f4ef 60%,#fce9f4 100%)' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
                  <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-serif font-bold text-navy text-xl mb-1">@int.aldeianeuroinstitute</div>
                  <div className="text-warm-gray text-sm leading-relaxed max-w-[28ch]">
                    Real stories, practical tips and moments from our centres — follow us for daily inspiration.
                  </div>
                </div>
                <a href="https://www.instagram.com/int.aldeianeuroinstitute/"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white no-underline text-sm shadow-md hover:-translate-y-0.5 transition-transform"
                  style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Follow on Instagram
                </a>
                <p className="text-xs text-warm-gray/50 italic">Tap to view our latest posts</p>
              </div>
            </div>
          </motion.div>

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
    <section className="py-[88px] bg-navy" ref={ref}>
      <div className="max-w-[1160px] mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="font-bold text-[0.8rem] tracking-[0.14em] uppercase text-yellow block mb-2">Ready to begin?</span>
          <div className="flex justify-center mb-6">
            <RainbowStroke className="w-32 mt-1 mb-0" />
          </div>
          <h2 className="font-serif font-extrabold text-[clamp(2rem,4.2vw,3rem)] text-white max-w-xl mx-auto leading-tight mb-5">
            Your child&apos;s journey starts with a single conversation
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            No commitment required. Just an honest, free consultation with one of our practitioners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red text-white font-bold rounded-full no-underline shadow-[0_6px_0_#9B2429] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#9B2429] transition-all duration-150"
            >
              Book free consultation <ArrowRight />
            </a>
            <a
              href="https://wa.me/27795423701"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full no-underline hover:border-white/70 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.998 0C5.372 0 0 5.373 0 12c0 2.117.555 4.112 1.527 5.843L.057 23.927l6.293-1.651C8.047 23.312 9.98 24 11.998 24 18.627 24 24 18.627 24 12S18.627 0 11.998 0zm0 21.818a9.78 9.78 0 01-4.991-1.371l-.358-.213-3.712.974.99-3.624-.234-.375A9.773 9.773 0 012.182 12c0-5.414 4.401-9.818 9.816-9.818 5.414 0 9.816 4.404 9.816 9.818 0 5.414-4.402 9.818-9.816 9.818z" />
              </svg>
              WhatsApp us
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
    <footer className="bg-white border-t border-stone/40 py-10">
      <div className="max-w-[1160px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border border-stone/40 flex items-center justify-center overflow-hidden">
              <img src="/images/logo.png" alt="Aldeia" className="w-6 h-6 object-contain"
                onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <span className="font-serif font-bold text-navy text-sm">Aldeia Neurobehaviour Institute</span>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-warm-gray/60 items-center">
            <span>© 2025 Aldeia</span>
            <span>·</span>
            <a href="mailto:info@aldeiawellness.co.za" className="hover:text-navy transition-colors no-underline">info@aldeiawellness.co.za</a>
            <span>·</span>
            <a href="https://wa.me/27795423701" className="hover:text-navy transition-colors no-underline">+27 79 542 3701</a>
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
