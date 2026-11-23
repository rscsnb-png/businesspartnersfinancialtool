import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import RainbowBar from './RainbowBar'

const painPoints = [
  {
    number: '01',
    title: 'Fragmented support systems',
    description:
      "Your child sees a speech therapist on Monday, an OT on Wednesday, and a tutor on Friday — but none of them talk to each other. Progress in one area doesn't carry over to the next.",
    color: 'text-red',
    bg: 'bg-red/8',
    border: 'border-red/20',
    accent: '#C8363F',
  },
  {
    number: '02',
    title: 'One-size-fits-all education',
    description:
      "Whether homeschooled or in mainstream schooling, children who learn differently deserve more than a rigid curriculum. You watch your child struggle in a system that measures success on a single scale.",
    color: 'text-yellow-dark',
    bg: 'bg-yellow/8',
    border: 'border-yellow/20',
    accent: '#F2C418',
  },
  {
    number: '03',
    title: 'The emotional toll on families',
    description:
      "Endless appointments, conflicting advice, paperwork, and the persistent worry that you might be missing something — it's exhausting to navigate alone.",
    color: 'text-green',
    bg: 'bg-green/8',
    border: 'border-green/20',
    accent: '#7BA93A',
  },
]

function PainCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${item.bg} ${item.border} border-2 rounded-[22px] p-6 lg:p-8 hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.08)] transition-all duration-300`}
    >
      <div className="flex gap-5 lg:gap-6">
        <div className="flex-shrink-0">
          <span className={`font-serif text-3xl lg:text-4xl ${item.color} opacity-70`}>
            {item.number}
          </span>
        </div>
        <div>
          <h3 className="font-serif text-xl lg:text-2xl text-navy mb-2">
            {item.title}
          </h3>
          <p className="text-warm-gray leading-relaxed text-[15px] lg:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function PainPoints() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="py-24 lg:py-36 bg-white relative" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red/10 text-red text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red" />
                The Challenge
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy leading-snug mb-4">
                You know your child is{' '}
                <span className="relative inline-block">
                  <span className="text-red">capable of more</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6c60-8 140-4 196-2" stroke="#C8363F" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                  </svg>
                </span>
              </h2>
              <RainbowBar className="w-28 mt-3 mb-6" />
              <p className="text-warm-gray leading-relaxed">
                You&apos;ve done everything right — researched, advocated, shown
                up to every appointment. Yet the pieces never quite come together.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-5">
            {painPoints.map((item, index) => (
              <PainCard key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
