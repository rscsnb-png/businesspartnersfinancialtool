import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import RainbowBar from './RainbowBar'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    subtitle: 'We Listen',
    description:
      "Share your child's story, strengths, and challenges. We'll learn about your family's goals and answer every question — no pressure, no commitment.",
    detail: '30-minute video or in-person session',
    bg: 'bg-red',
    tagBg: 'bg-red',
    dot: 'bg-red',
  },
  {
    number: '02',
    title: 'Holistic Assessment',
    subtitle: 'We Understand',
    description:
      'Our multidisciplinary team observes and evaluates your child across educational, therapeutic, and social-emotional domains to build a complete picture.',
    detail: 'Comprehensive written report provided',
    bg: 'bg-green',
    tagBg: 'bg-green',
    dot: 'bg-green',
  },
  {
    number: '03',
    title: 'Personalised Pathway',
    subtitle: 'We Design',
    description:
      'Together, we co-create a learning plan that integrates education and therapy — tailored for homeschool or mainstream settings — with clear goals and the flexibility to adapt.',
    detail: 'Collaborative planning with your family',
    bg: 'bg-yellow',
    tagBg: 'bg-yellow',
    dot: 'bg-yellow',
  },
  {
    number: '04',
    title: 'Integrated Support',
    subtitle: 'We Deliver',
    description:
      "Your child's team of educators and therapists work in concert — sharing progress, adjusting strategies, and keeping you informed every step of the way.",
    detail: 'Regular progress reviews & family check-ins',
    bg: 'bg-purple',
    tagBg: 'bg-purple',
    dot: 'bg-purple',
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
      <div className="flex gap-6 lg:gap-8">
        {/* Step indicator */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center text-white font-serif text-lg shadow-[3px_3px_0_0_rgba(0,0,0,0.15)]`}>
            {step.number}
          </div>
          {index < steps.length - 1 && (
            <div className="w-px h-full bg-gradient-to-b from-stone to-transparent mt-3" />
          )}
        </div>

        {/* Content */}
        <div className="pb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-green mb-2">
            {step.subtitle}
          </div>
          <h3 className="font-serif text-2xl text-navy mb-3">{step.title}</h3>
          <p className="text-warm-gray leading-relaxed mb-4">{step.description}</p>
          <div className={`inline-flex items-center gap-2 text-xs font-bold text-white ${step.tagBg} px-4 py-1.5 rounded-full shadow-[2px_2px_0_0_rgba(0,0,0,0.15)]`}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            {step.detail}
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
    <section id="process" className="py-24 lg:py-36 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow/15 text-yellow-dark text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
              Your Journey
            </span>
            <h2 className="font-serif text-3xl lg:text-[2.75rem] text-navy leading-snug mb-3">
              Four steps to a{' '}
              <span className="text-green">brighter path</span>
            </h2>
            <RainbowBar className="w-36 mx-auto mt-3 mb-6" />
            <p className="text-warm-gray text-lg leading-relaxed">
              From first conversation to ongoing support, here&apos;s how we
              partner with your family to unlock your child&apos;s potential.
            </p>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
