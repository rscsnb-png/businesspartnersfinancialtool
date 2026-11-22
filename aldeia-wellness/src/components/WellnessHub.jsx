import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const subPages = [
  { id: 'house', label: 'Aldeia Wellness House' },
  { id: 'family', label: 'Family Wellness' },
  { id: 'services', label: 'Our Services' },
  { id: 'interest', label: 'Join the Interest List' },
]

function PageHouse({ onNavigate }) {
  return (
    <>
      <div className="relative bg-gradient-to-br from-blue to-blue-dark text-white rounded-2xl p-10 lg:p-14 mb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Opening 2027 · Durbanville, Cape Town
          </span>
          <h1 className="font-serif text-3xl lg:text-4xl leading-snug mb-4">
            Aldeia Wellness House
          </h1>
          <p className="text-white/70 text-lg">
            Individual &amp; Family Wellbeing · Durbanville, Cape Town
          </p>
          <p className="text-white/90 text-xl font-serif italic mt-4">
            A village of professionals, under one welcoming roof.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="font-serif text-2xl text-blue mb-4">Why a Wellness House?</h2>
          <p className="text-warm-gray leading-relaxed mb-4">
            Life gets complicated when someone in the family needs more: more appointments,
            more decisions, more advice that doesn't always agree. Aldeia Wellness House brings
            practical support for individuals and families together in one calm, welcoming space.
          </p>
          <p className="text-warm-gray leading-relaxed">
            You don't need a diagnosis or a referral to come in. Some of our visitors are parents
            carrying a lot. Others are adults who simply want to look after their own wellbeing.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-blue mb-4">Who We Support</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: '👨‍👩‍👧', text: 'Families raising children with additional needs: making sense of diagnoses, therapies, routines and school decisions together' },
              { icon: '🤲', text: 'Parents and caregivers: coping, balance and support for the people who hold everything together' },
              { icon: '🌿', text: 'Adults: personal wellbeing, life transitions and stress' },
              { icon: '🏡', text: 'Families in transition: new schools, adolescence, a move, or a change in family life' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 bg-beige rounded-xl p-4">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="text-warm-gray text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-blue mb-4">What You'll Find Here</h2>
          <div className="space-y-3">
            {[
              'Family wellness support, including the Family Wellness Plan',
              'Independent practitioners offering complementary services such as [educational psychology, occupational therapy, arts therapies, counselling, yoga]',
              'Workshops and parent evenings on topics families ask us about',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-warm-gray leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-beige rounded-2xl p-6 lg:p-8">
          <h2 className="font-serif text-xl text-blue mb-3">How It Works</h2>
          <p className="text-warm-gray leading-relaxed mb-4">
            Each practitioner at Aldeia Wellness House runs their own independent practice.
            They hold their own professional registration and insurance, and manage their own
            bookings, fees and client records. You choose who you see, and nothing is shared
            between practitioners without your consent.
          </p>
          <div className="text-xs text-warm-gray/60 border-t border-stone pt-4 mt-4">
            <strong className="text-blue">Address:</strong> [street address], Durbanville &nbsp;·&nbsp; [phone] &nbsp;·&nbsp; [email]
          </div>
        </div>

        <button
          onClick={() => onNavigate('interest')}
          className="inline-flex items-center justify-center px-8 py-4 bg-green text-white text-sm font-bold rounded-full shadow-[4px_4px_0_0_#5A7D2B] hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_#5A7D2B] active:translate-y-px active:shadow-[2px_2px_0_0_#5A7D2B] transition-all duration-150"
        >
          Join the Interest List
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </>
  )
}

function PageFamily({ onNavigate }) {
  return (
    <>
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral/10 text-coral text-xs font-semibold tracking-wide uppercase mb-4">
          Family Wellness
        </span>
        <h1 className="font-serif text-3xl lg:text-4xl text-blue leading-snug mb-4">
          Family Wellness
        </h1>
        <p className="text-warm-gray text-xl leading-relaxed">
          Supporting the whole family, not just the person with additional needs.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="font-serif text-2xl text-blue mb-4">What We Offer</h2>
          <p className="text-warm-gray leading-relaxed mb-4">
            When one person in a family needs more, everyone feels it. Parents juggle appointments
            and advice, siblings adjust, and daily routines become hard work. We help families step
            back, see the whole picture, and agree on a plan that fits their real life.
          </p>
          <p className="text-warm-gray leading-relaxed">
            We work alongside your child's therapists, teachers and doctors — not instead of them —
            and help you bring their recommendations together into everyday routines.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue to-blue-dark text-white rounded-2xl p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-4">
              The Family Wellness Plan
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              A 12-week programme that gives your family a clear, written plan and support while
              you put it into practice.
            </p>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Getting to know your family', duration: '90 minutes', desc: 'Your priorities, routines, strengths, pressures and the professionals already involved.' },
                { step: '2', title: 'Seeing daily life', duration: '60 minutes', desc: 'A visit at home, or at a time of day that is hard for your family.' },
                { step: '3', title: 'Your Family Wellness Plan', duration: '60–90 minutes', desc: 'A written plan with 3–5 realistic goals, routines, who does what, and review dates.' },
                { step: '4', title: 'Three follow-up sessions', duration: '60 min · every 3–4 weeks', desc: 'Review what\'s working, adjust the plan, and support for parents along the way.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0 font-serif font-bold text-gold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.title} <span className="text-white/50 font-normal">· {item.duration}</span></div>
                    <div className="text-sm text-white/70 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-sm text-white/60">
              Investment: [R____ for the full programme, payable in instalments] · Plan only (steps 1–3): [R____] · Individual sessions: [R____]
              <div className="mt-1 text-white/40 text-xs">These services are not claimable from medical aid.</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-blue mb-4">Also Available</h2>
          <div className="space-y-3">
            {[
              'Wellness counselling for parents and caregivers: coping, balance and emotional wellbeing',
              'Family guidance sessions: ongoing support after the 12-week programme',
              "Online sessions for families who can't come in person",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-warm-gray leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gold/8 border border-gold/20 rounded-2xl p-6">
          <h3 className="font-serif text-lg text-blue mb-2">What this service is not</h3>
          <p className="text-warm-gray text-sm leading-relaxed">
            Family wellness support is non-diagnostic. It doesn't diagnose or treat mental health
            conditions, or include psychological assessments. If you or your child need that,
            we'll help you find the right professional.
          </p>
        </div>

        <button
          onClick={() => onNavigate('interest')}
          className="inline-flex items-center justify-center px-8 py-4 bg-red text-white text-sm font-bold rounded-full shadow-[4px_4px_0_0_#9B2429] hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_#9B2429] active:translate-y-px active:shadow-[2px_2px_0_0_#9B2429] transition-all duration-150"
        >
          Ask about the Family Wellness Plan
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </>
  )
}

function PageServices({ onNavigate }) {
  return (
    <>
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue/10 text-blue text-xs font-semibold tracking-wide uppercase mb-4">
          Our Services
        </span>
        <h1 className="font-serif text-3xl lg:text-4xl text-blue leading-snug mb-4">
          Our Services
        </h1>
        <p className="text-warm-gray text-lg leading-relaxed">
          Aldeia Wellness House brings practitioners together under one roof, so families and
          individuals can find support in one welcoming place.
        </p>
      </div>

      <div className="space-y-5 mb-10">
        {[
          {
            title: 'Behaviour Therapists',
            desc: 'Support for children and teenagers with behaviour, routines, emotional regulation and social skills.',
            color: 'from-coral to-gold',
            icon: (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg>
            ),
          },
          {
            title: 'Family Wellness Specialist',
            desc: 'The Family Wellness Plan, family guidance and wellness counselling for parents and caregivers.',
            color: 'from-sage to-mint',
            icon: (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            ),
          },
          {
            title: 'More Services Coming in 2027',
            desc: '[e.g. occupational therapy, arts therapies, adult counselling, yoga]',
            color: 'from-gold to-sunshine',
            coming: true,
            icon: (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            ),
          },
        ].map((service) => (
          <div key={service.title} className="flex gap-5 bg-beige rounded-2xl p-6">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
              {service.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-serif text-lg text-blue">{service.title}</h3>
                {service.coming && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/15 text-gold-dark font-medium">Coming soon</span>
                )}
              </div>
              <p className="text-warm-gray text-sm leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-beige rounded-2xl p-6 mb-8">
        <p className="text-warm-gray text-sm leading-relaxed">
          Each practitioner runs their own independent practice and holds their own professional
          registration and insurance. You choose who you see, and nothing is shared between
          practitioners without your consent.
        </p>
      </div>

      <div className="border border-blue/15 rounded-2xl p-6 lg:p-8 mb-8">
        <h2 className="font-serif text-xl text-blue mb-3">Join us?</h2>
        <p className="text-warm-gray leading-relaxed mb-4 text-sm">
          Are you a registered professional looking for a warm, welcoming place to see clients
          in Durbanville? Aldeia Wellness House offers consultation rooms on fixed sessional days,
          with a shared reception and waiting area.
        </p>
        <p className="text-warm-gray leading-relaxed mb-4 text-sm">
          We're especially interested in practitioners working with children, families or adults,
          including [educational psychologists, occupational therapists, arts therapists,
          counsellors and yoga teachers].
        </p>
        <p className="text-warm-gray text-sm">
          You keep your own practice, clients and fees. We ask for proof of current registration
          with your professional body and professional indemnity insurance.
        </p>
        <a
          href="mailto:info@aldeiawellness.com?subject=Room%20Availability%20Enquiry%20%E2%80%94%20Aldeia%20Wellness%20House"
          className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-blue hover:text-coral transition-colors"
        >
          Ask about room availability
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <button
        onClick={() => onNavigate('interest')}
        className="inline-flex items-center justify-center px-8 py-4 bg-red text-white text-sm font-bold rounded-full shadow-[4px_4px_0_0_#9B2429] hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_#9B2429] active:translate-y-px active:shadow-[2px_2px_0_0_#9B2429] transition-all duration-150"
      >
        Join the Interest List
        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </>
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
        <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl text-blue mb-3">Thank you! You're on the list.</h2>
        <p className="text-warm-gray">We'll be in touch as soon as bookings open.</p>
      </div>
    )
  }

  return (
    <>
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/10 text-sage-dark text-xs font-semibold tracking-wide uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
          Opening 2027
        </span>
        <h1 className="font-serif text-3xl lg:text-4xl text-blue leading-snug mb-4">
          Be the First to Know
        </h1>
        <p className="text-warm-gray text-lg leading-relaxed">
          Aldeia Wellness House opens in Durbanville in 2027. Leave your details and we'll let
          you know when bookings open, and invite you to our first workshops.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue mb-1.5">Name <span className="text-coral">*</span></label>
            <input
              type="text" required value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-stone bg-beige text-charcoal text-sm focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/10 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue mb-1.5">Email <span className="text-coral">*</span></label>
            <input
              type="email" required value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-stone bg-beige text-charcoal text-sm focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/10 transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-blue mb-1.5">Phone</label>
          <input
            type="tel" value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-stone bg-beige text-charcoal text-sm focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/10 transition-all"
            placeholder="+27 ..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue mb-3">I'm interested in <span className="text-coral">*</span></label>
          <div className="space-y-2">
            {interestOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center border flex-shrink-0 transition-all duration-200 ${
                    form.interests.includes(opt) ? 'bg-blue border-blue' : 'border-stone bg-white group-hover:border-blue/40'
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
          <label className="block text-sm font-medium text-blue mb-1.5">Anything you'd like us to know?</label>
          <textarea
            rows={3} value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-stone bg-beige text-charcoal text-sm focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/10 transition-all resize-none"
            placeholder="Optional"
          />
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <div
              className={`w-5 h-5 rounded flex items-center justify-center border flex-shrink-0 mt-0.5 transition-all duration-200 ${
                form.consent ? 'bg-blue border-blue' : 'border-stone bg-white hover:border-blue/40'
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
              I can ask to be removed at any time. <span className="text-coral">*</span>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={!form.consent || form.interests.length === 0}
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-red text-white text-sm font-bold rounded-full shadow-[4px_4px_0_0_#9B2429] hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_#9B2429] active:translate-y-px active:shadow-[2px_2px_0_0_#9B2429] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none"
        >
          Join the Interest List
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </form>
    </>
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-charcoal/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto my-8 lg:my-16 bg-white rounded-3xl shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Rainbow bar */}
        <div className="absolute top-0 left-0 right-0 h-[6px] flex overflow-hidden z-20">
          {['#C8363F','#F2C418','#0D3A91','#7BA93A','#7E479A','#237BB7','#006CC0'].map(c => (
            <div key={c} style={{ background: c, flex: 1 }} />
          ))}
        </div>

        {/* Sub-nav */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-stone/50 z-10 pt-1.5">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
              {subPages.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePage(p.id)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                    activePage === p.id
                      ? 'bg-blue text-white'
                      : 'text-warm-gray hover:text-blue hover:bg-beige'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="ml-3 w-8 h-8 rounded-full bg-beige flex items-center justify-center text-charcoal hover:bg-stone transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Page content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="px-8 lg:px-14 py-10 lg:py-12"
          >
            {pageComponents[activePage]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
