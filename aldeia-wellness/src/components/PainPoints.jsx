import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const painPoints = [
  {
    number: '01',
    title: 'Fragmented support systems',
    description:
      'Your child sees a speech therapist on Monday, an OT on Wednesday, and a tutor on Friday — but none of them talk to each other. Progress in one area doesn\'t carry over to the next.',
  },
  {
    number: '02',
    title: 'One-size-fits-all education',
    description:
      'Traditional schooling wasn\'t designed for children who learn differently. You watch your child struggle in a system that measures success on a single scale.',
  },
  {
    number: '03',
    title: 'The emotional toll on families',
    description:
      'Endless appointments, conflicting advice, paperwork, and the persistent worry that you might be missing something — it\'s exhausting to navigate alone.',
  },
]

function PainCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="flex gap-6 lg:gap-8">
        <div className="flex-shrink-0">
          <span className="font-serif text-4xl lg:text-5xl text-stone/80 group-hover:text-terracotta/60 transition-colors duration-500">
            {item.number}
          </span>
        </div>
        <div className="pt-2">
          <h3 className="font-serif text-xl lg:text-2xl text-charcoal mb-3">
            {item.title}
          </h3>
          <p className="text-warm-gray leading-relaxed text-[15px] lg:text-base">
            {item.description}
          </p>
        </div>
      </div>
      {index < painPoints.length - 1 && (
        <div className="ml-[3.5rem] lg:ml-[4.5rem] mt-8 mb-8 h-px bg-gradient-to-r from-stone/60 to-transparent" />
      )}
    </motion.div>
  )
}

export default function PainPoints() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="py-24 lg:py-36 bg-ivory" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — editorial sticky label */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-terracotta" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-terracotta">
                  The Challenge
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal leading-snug mb-6">
                You know your child is{' '}
                <span className="italic text-terracotta">capable of more</span>
              </h2>
              <p className="text-warm-gray leading-relaxed">
                You&apos;ve done everything right — researched, advocated, shown
                up to every appointment. Yet the pieces never quite come together.
              </p>
            </motion.div>
          </div>

          {/* Right — pain points list */}
          <div className="lg:col-span-7 lg:col-start-6">
            {painPoints.map((item, index) => (
              <PainCard key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
