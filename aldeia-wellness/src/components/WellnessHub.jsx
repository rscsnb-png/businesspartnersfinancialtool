import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const subPages = [
  { id: 'house', label: 'Aldeia Wellness House' },
  { id: 'family', label: 'Family Wellness' },
  { id: 'services', label: 'Our Services' },
  { id: 'interest', label: 'Join the Interest List' },
]

function Divider() {
  return <div className="border-t border-stone/50 my-8" />
}

function Tag({ children, color = 'text-green' }) {
  return (
    <span className={`inline-block text-xs font-bold tracking-widest uppercase ${color}`}>
      {children}
    </span>
  )
}

function CtaButton({ href, onClick, children, variant = 'outline' }) {
  const base = 'inline-flex items-center gap-2 text-sm font-medium rounded-full px-7 py-3 transition-all duration-200'
  const styles = {
    outline: `${base} border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-white`,
    solid: `${base} bg-navy text-white hover:bg-blue-dark`,
    green: `${base} border border-green/40 text-green hover:border-green hover:bg-green hover:text-white`,
  }
  const cls = styles[variant] || styles.outline
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button onClick={onClick} className={cls}>{children}</button>
}

function PageHouse({ onNavigate }) {
  return (
    <div className="space-y-10">
      {/* Hero — editorial */}
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-green mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          Opening 2027 · Durbanville, Cape Town
        </span>
        <h1 className="font-serif text-3xl lg:text-[2.5rem] text-navy leading-snug mb-4">
          Aldeia Wellness House
        </h1>
        <p className="text-warm-gray text-lg leading-relaxed mb-2">
          Individual &amp; Family Wellbeing · Durbanville, Cape Town
        </p>
        <p className="text-navy font-serif text-xl italic">
          A village of professionals, under one welcoming roof.
        </p>
      </div>

      <Divider />

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Tag>Why a Wellness House?</Tag>
          <h2 className="font-serif text-2xl text-navy mt-3 mb-4">One calm, welcoming space</h2>
          <p className="text-warm-gray leading-relaxed mb-4">
            Life gets complicated when someone in the family needs more: more appointments,
            more decisions, more advice that doesn&apos;t always agree. Aldeia Wellness House brings
            practical support for individuals and families together in one calm, welcoming space.
          </p>
          <p className="text-warm-gray leading-relaxed">
            You don&apos;t need a diagnosis or a referral to come in. Some of our visitors are parents
            carrying a lot. Others are adults who simply want to look after their own wellbeing.
          </p>
        </div>

        <div className="space-y-3">
          <Tag>Who We Support</Tag>
          <div className="mt-3 space-y-2">
            {[
              { icon: '👨‍👩‍👧', text: 'Families raising children with additional needs' },
              { icon: '🤲', text: 'Parents and caregivers who hold everything together' },
              { icon: '🌿', text: 'Adults: personal wellbeing and life transitions' },
              { icon: '🏡', text: 'Families navigating change — new schools, adolescence, a move' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-stone/40">
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <p className="text-warm-gray text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <Tag>What You&apos;ll Find Here</Tag>
        <div className="mt-4 space-y-3">
          {[
            'Family wellness support, including the Family Wellness Plan',
            'Independent practitioners offering complementary services — educational psychology, occupational therapy, arts therapies, counselling, yoga',
            'Workshops and parent evenings on topics families ask us about',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border border-green flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <p className="text-warm-gray leading-relaxed text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-stone/50 rounded-2xl p-6 bg-white">
        <Tag color="text-warm-gray/60">How It Works</Tag>
        <p className="text-warm-gray leading-relaxed mt-3 text-sm mb-3">
          Each practitioner at Aldeia Wellness House runs their own independent practice.
          They hold their own professional registration and insurance, and manage their own
          bookings, fees and client records. You choose who you see, and nothing is shared
          between practitioners without your consent.
        </p>
        <p className="text-xs text-warm-gray/50 border-t border-stone/40 pt-3 mt-3">
          <strong className="text-navy">Address:</strong> [street address], Durbanville &nbsp;·&nbsp; [phone] &nbsp;·&nbsp; [email]
        </p>
      </div>

      <div>
        <CtaButton onClick={() => onNavigate('interest')} variant="solid">
          Join the Interest List
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </CtaButton>
      </div>
    </div>
  )
}

function PageFamily({ onNavigate }) {
  return (
    <div className="space-y-10">
      <div>
        <Tag>Family Wellness</Tag>
        <h1 className="font-serif text-3xl lg:text-[2.5rem] text-navy leading-snug mt-3 mb-4">
          Supporting the whole family
        </h1>
        <p className="text-warm-gray text-lg leading-relaxed">
          Not just the person with additional needs.
        </p>
      </div>

      <Divider />

      <div>
        <p className="text-warm-gray leading-relaxed mb-4">
          When one person in a family needs more, everyone feels it. Parents juggle appointments
          and advice, siblings adjust, and daily routines become hard work. We help families step
          back, see the whole picture, and agree on a plan that fits their real life.
        </p>
        <p className="text-warm-gray leading-relaxed">
          We work alongside your child&apos;s therapists, teachers and doctors — not instead of them —
          and help you bring their recommendations together into everyday routines.
        </p>
      </div>

      <div>
        <Tag color="text-navy">The Family Wellness Plan</Tag>
        <p className="text-warm-gray text-sm mt-2 mb-6">
          A 12-week programme that gives your family a clear, written plan and support while
          you put it into practice.
        </p>

        <div className="space-y-0">
          {[
            { step: '01', title: 'Getting to know your family', duration: '90 minutes', desc: 'Your priorities, routines, strengths, pressures and the professionals already involved.' },
            { step: '02', title: 'Seeing daily life', duration: '60 minutes', desc: 'A visit at home, or at a time of day that is hard for your family.' },
            { step: '03', title: 'Your Family Wellness Plan', duration: '60–90 minutes', desc: 'A written plan with 3–5 realistic goals, routines, who does what, and review dates.' },
            { step: '04', title: 'Three follow-up sessions', duration: '60 min · every 3–4 weeks', desc: "Review what's working, adjust the plan, and support for parents along the way." },
          ].map((item, i, arr) => (
            <div key={item.step} className={`flex gap-5 py-5 ${i < arr.length - 1 ? 'border-b border-stone/40' : ''}`}>
              <div className="font-serif text-2xl text-navy/20 font-bold flex-shrink-0 w-10 leading-none mt-0.5">
                {item.step}
              </div>
              <div>
                <div className="text-sm font-semibold text-navy mb-0.5">
                  {item.title}
                  <span className="ml-2 text-warm-gray/60 font-normal">· {item.duration}</span>
                </div>
                <div className="text-sm text-warm-gray">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-stone/50 rounded-xl p-4 mt-4 text-xs text-warm-gray/60 bg-white">
          Investment: [R____ for the full programme, payable in instalments] · Plan only (steps 1–3): [R____] · Individual sessions: [R____]
          <div className="mt-1 text-warm-gray/40">These services are not claimable from medical aid.</div>
        </div>
      </div>

      <Divider />

      <div>
        <Tag>Also Available</Tag>
        <div className="mt-4 space-y-2">
          {[
            'Wellness counselling for parents and caregivers: coping, balance and emotional wellbeing',
            'Family guidance sessions: ongoing support after the 12-week programme',
            "Online sessions for families who can't come in person",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-warm-gray">
              <div className="w-1 h-1 rounded-full bg-green flex-shrink-0 mt-2" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="border border-stone/50 rounded-xl p-5 bg-white">
        <p className="text-xs font-bold tracking-widest uppercase text-warm-gray/50 mb-2">What this service is not</p>
        <p className="text-warm-gray text-sm leading-relaxed">
          Family wellness support is non-diagnostic. It doesn&apos;t diagnose or treat mental health
          conditions, or include psychological assessments. If you or your child need that,
          we&apos;ll help you find the right professional.
        </p>
      </div>

      <CtaButton onClick={() => onNavigate('interest')} variant="outline">
        Ask about the Family Wellness Plan
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </CtaButton>
    </div>
  )
}

function PageServices({ onNavigate }) {
  return (
    <div className="space-y-10">
      <div>
        <Tag>Our Services</Tag>
        <h1 className="font-serif text-3xl lg:text-[2.5rem] text-navy leading-snug mt-3 mb-4">
          Practitioners under one roof
        </h1>
        <p className="text-warm-gray text-lg leading-relaxed">
          Aldeia Wellness House brings practitioners together so families and individuals can find
          support in one welcoming place.
        </p>
      </div>

      <Divider />

      <div className="space-y-4">
        {[
          {
            title: 'Behaviour Therapists',
            desc: 'Support for children and teenagers with behaviour, routines, emotional regulation and social skills.',
            accent: 'border-l-2 border-red',
          },
          {
            title: 'Family Wellness Specialist',
            desc: 'The Family Wellness Plan, family guidance and wellness counselling for parents and caregivers.',
            accent: 'border-l-2 border-green',
          },
          {
            title: 'More Services Coming in 2027',
            desc: 'Occupational therapy, arts therapies, adult counselling, yoga, and more.',
            accent: 'border-l-2 border-yellow',
            coming: true,
          },
        ].map((service) => (
          <div key={service.title} className={`bg-white rounded-xl p-5 ${service.accent} border border-stone/30`}>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-serif text-lg text-navy">{service.title}</h3>
              {service.coming && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow/15 text-yellow-dark font-semibold">
                  Coming 2027
                </span>
              )}
            </div>
            <p className="text-warm-gray text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="border border-stone/50 rounded-xl p-5 text-sm text-warm-gray bg-white">
        Each practitioner runs their own independent practice and holds their own professional
        registration and insurance. You choose who you see, and nothing is shared between
        practitioners without your consent.
      </div>

      <Divider />

      <div className="border border-navy/15 rounded-2xl p-6 lg:p-8">
        <Tag color="text-navy">Join us?</Tag>
        <h2 className="font-serif text-xl text-navy mt-2 mb-3">Are you a registered professional?</h2>
        <p className="text-warm-gray leading-relaxed mb-3 text-sm">
          Looking for a warm, welcoming place to see clients in Durbanville? Aldeia Wellness House
          offers consultation rooms on fixed sessional days, with a shared reception and waiting area.
        </p>
        <p className="text-warm-gray leading-relaxed mb-3 text-sm">
          We&apos;re especially interested in practitioners working with children, families or adults,
          including educational psychologists, occupational therapists, arts therapists, counsellors
          and yoga teachers.
        </p>
        <p className="text-warm-gray text-sm mb-4">
          You keep your own practice, clients and fees. We ask for proof of current registration
          with your professional body and professional indemnity insurance.
        </p>
        <CtaButton
          href="mailto:info@aldeiawellness.com?subject=Room%20Availability%20Enquiry%20%E2%80%94%20Aldeia%20Wellness%20House"
          variant="outline"
        >
          Ask about room availability
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </CtaButton>
      </div>

      <CtaButton onClick={() => onNavigate('interest')} variant="solid">
        Join the Interest List
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </CtaButton>
    </div>
  )
}

function PageInterest() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    interests: [], message: '', consent: false,
  })

  const interestOptions = [
    'Family Wellness Plan',
    'Support for myself as a parent or caregiver',
    'Adult wellbeing',
    'Workshops and parent evenings',
    "I'm a practitioner looking for a room",
  ]

  const toggle = (val) => setForm((f) => ({
    ...f,
    interests: f.interests.includes(val)
      ? f.interests.filter((i) => i !== val)
      : [...f.interests, val],
  }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Wellness House Interest List')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\n\nInterested in:\n${form.interests.map((i) => `- ${i}`).join('\n')}\n\nMessage: ${form.message || 'None'}`
    )
    window.location.href = `mailto:info@aldeiawellness.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-14 h-14 rounded-full border-2 border-green flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl text-navy mb-3">You&apos;re on the list.</h2>
        <p className="text-warm-gray">We&apos;ll be in touch as soon as bookings open.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-green mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          Opening 2027
        </span>
        <h1 className="font-serif text-3xl lg:text-[2.5rem] text-navy leading-snug mb-3">
          Be the First to Know
        </h1>
        <p className="text-warm-gray text-lg leading-relaxed">
          Aldeia Wellness House opens in Durbanville in 2027. Leave your details and we&apos;ll let
          you know when bookings open, and invite you to our first workshops.
        </p>
      </div>

      <Divider />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-navy/60 mb-2">
              Name <span className="text-red">*</span>
            </label>
            <input
              type="text" required value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-stone/60 bg-white text-navy text-sm focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/8 transition-all placeholder:text-warm-gray/40"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-navy/60 mb-2">
              Email <span className="text-red">*</span>
            </label>
            <input
              type="email" required value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-stone/60 bg-white text-navy text-sm focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/8 transition-all placeholder:text-warm-gray/40"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-navy/60 mb-2">Phone</label>
          <input
            type="tel" value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-stone/60 bg-white text-navy text-sm focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/8 transition-all placeholder:text-warm-gray/40"
            placeholder="+27 ..."
          />
        </div>

        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-navy/60 mb-3">
            I&apos;m interested in <span className="text-red">*</span>
          </label>
          <div className="space-y-2">
            {interestOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center border flex-shrink-0 transition-all duration-200 ${
                    form.interests.includes(opt) ? 'bg-navy border-navy' : 'border-stone/60 bg-white group-hover:border-navy/40'
                  }`}
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

        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-navy/60 mb-2">
            Anything you&apos;d like us to know?
          </label>
          <textarea
            rows={3} value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-stone/60 bg-white text-navy text-sm focus:outline-none focus:border-navy/40 focus:ring-2 focus:ring-navy/8 transition-all resize-none placeholder:text-warm-gray/40"
            placeholder="Optional"
          />
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <div
              className={`w-5 h-5 rounded flex items-center justify-center border flex-shrink-0 mt-0.5 transition-all duration-200 ${
                form.consent ? 'bg-navy border-navy' : 'border-stone/60 bg-white hover:border-navy/40'
              }`}
              onClick={() => setForm((f) => ({ ...f, consent: !f.consent }))}
            >
              {form.consent && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              )}
            </div>
            <span className="text-xs text-warm-gray leading-relaxed" onClick={() => setForm((f) => ({ ...f, consent: !f.consent }))}>
              I agree that Aldeia may store my details and contact me about Aldeia Wellness House.
              I can ask to be removed at any time. <span className="text-red">*</span>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={!form.consent || form.interests.length === 0}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white text-sm font-medium rounded-full hover:bg-blue-dark transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Join the Interest List
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default function WellnessHub({ initialPage, onClose }) {
  const [activePage, setActivePage] = useState(initialPage || 'house')

  const pageComponents = {
    house: <PageHouse onNavigate={setActivePage} />,
    family: <PageFamily onNavigate={setActivePage} />,
    services: <PageServices onNavigate={setActivePage} />,
    interest: <PageInterest />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-cream overflow-y-auto"
    >
      <div className="max-w-3xl mx-auto pb-16">
        {/* Sub-nav */}
        <div className="sticky top-0 bg-cream/95 backdrop-blur-md border-b border-stone/50 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Back button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-sm text-warm-gray hover:text-navy transition-colors flex-shrink-0 mr-3"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              <span className="hidden sm:inline">Home</span>
            </button>
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none flex-1">
              {subPages.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePage(p.id)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                    activePage === p.id
                      ? 'bg-navy text-white'
                      : 'text-warm-gray hover:text-navy hover:bg-navy/8'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Page content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="px-8 lg:px-14 py-10 lg:py-14"
          >
            {pageComponents[activePage]}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
