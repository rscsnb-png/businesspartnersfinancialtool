import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    subtitle: 'We Listen',
    description:
      'Share your child\'s story, strengths, and challenges. We\'ll learn about your family\'s goals and answer every question — no pressure, no commitment.',
    detail: '30-minute video or in-person session',
  },
  {
    number: '02',
    title: 'Holistic Assessment',
    subtitle: 'We Understand',
    description:
      'Our multidisciplinary team observes and evaluates your child across educational, therapeutic, and social-emotional domains to build a complete picture.',
    detail: 'Comprehensive written report provided',
  },
  {
    number: '03',
    title: 'Personalised Pathway',
    subtitle: 'We Design',
    description:
      'Together, we co-create a learning plan that integrates education and therapy — with clear goals, timelines, and the flexibility to adapt as your child grows.',
    detail: 'Collaborative planning with your family',
  },
  {
    number: '04',
    title: 'Integrated Support',
    subtitle: 'We Deliver',
    description:
      'Your child\'s team of educators and therapists work in concert — sharing progress, adjusting strategies, and keeping you informed every step of the way.',
    detail: 'Regular progress reviews & family check-ins',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-1/2 w-px h-[calc(100%+2rem)] bg-gradient-to-b from-sage/30 to-transparent -translate-x-1/2 -z-0" />
      )}

      <div className="relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        {/* Left: number + line */}
        <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2 lg:text-left' : 'lg:text-right'}`}>
          <span className="inline-block font-serif text-6xl lg:text-7xl text-stone/50 group-hover:text-sage/30 transition-colors duration-500 mb-2">
            {step.number}
          </span>
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-sage">
            {step.subtitle}
          </div>
        </div>

        {/* Right: content */}
        <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
          <div className={`bg-white rounded-2xl p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500 ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}>
            <h3 className="font-serif text-2xl text-charcoal mb-3">{step.title}</h3>
            <p className="text-warm-gray leading-relaxed mb-4">{step.description}</p>
            <div className={`flex items-center gap-2 text-xs text-sage font-medium ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              {step.detail}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Process() {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="process" className="py-24 lg:py-36 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">
                Your Journey
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h2 className="font-serif text-3xl lg:text-[2.75rem] text-charcoal leading-snug mb-6">
              Four steps to a{' '}
              <span className="italic text-sage">brighter path</span>
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed">
              From first conversation to ongoing support, here&apos;s how we
              partner with your family to unlock your child&apos;s potential.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-16 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
