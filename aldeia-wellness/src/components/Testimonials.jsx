import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const testimonials = [
  {
    quote:
      'For the first time, everyone on our son\'s team is actually talking to each other. His speech therapist and teacher plan together — and the difference is extraordinary. He\'s using full sentences now, something we were told might take years.',
    name: 'Maria & David',
    role: 'Parents of Lucas, age 7 · South Africa',
    initials: 'MD',
    color: 'from-coral to-gold',
  },
  {
    quote:
      'We spent two years bouncing between specialists who each saw only one piece of the puzzle. Aldeia brought all the pieces together. Our daughter is not just learning — she\'s genuinely happy at school for the first time.',
    name: 'Sarah Thompson',
    role: 'Mother of Amelia, age 9 · Namibia',
    initials: 'ST',
    color: 'from-sage to-mint',
  },
  {
    quote:
      'As a homeschooling family, we felt so isolated. Aldeia gave us the professional support and structure we needed while respecting our choice to learn at home. Kai is flourishing.',
    name: 'James & Priya Chen',
    role: 'Parents of Kai, age 5 · Netherlands',
    initials: 'JC',
    color: 'from-lavender to-sage-light',
  },
]

function TestimonialCard({ testimonial, isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isActive ? 1 : 0.4, y: 0, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-white rounded-3xl p-8 lg:p-12 transition-all duration-500 ${
        isActive ? 'shadow-xl shadow-charcoal/8' : ''
      }`}
    >
      {/* Colorful quote mark */}
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center mb-6`}>
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <blockquote className="font-serif text-xl lg:text-2xl text-blue leading-relaxed mb-8 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
          <span className="text-sm font-bold text-white">{testimonial.initials}</span>
        </div>
        <div>
          <div className="font-semibold text-blue text-sm">{testimonial.name}</div>
          <div className="text-warm-gray text-xs mt-0.5">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="py-24 lg:py-36 bg-gradient-to-br from-beige via-beige to-sage/5 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-coral/5 rounded-full blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lavender/15 text-blue text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-lavender" />
            Real Stories
          </span>
          <h2 className="font-serif text-3xl lg:text-[2.75rem] text-blue leading-snug mb-6">
            Families who found{' '}
            <span className="italic text-sage">their village</span>
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed">
            From South Africa to the Netherlands, here&apos;s what parents
            share about the Aldeia experience.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <TestimonialCard
            testimonial={testimonials[activeIndex]}
            isActive={true}
          />

          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-10 h-3 bg-gradient-to-r from-coral to-gold'
                    : 'w-3 h-3 bg-stone hover:bg-sage/40'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-11 h-11 rounded-full bg-white border border-stone flex items-center justify-center text-warm-gray hover:border-coral hover:text-coral hover:shadow-md transition-all"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="w-11 h-11 rounded-full bg-white border border-stone flex items-center justify-center text-warm-gray hover:border-coral hover:text-coral hover:shadow-md transition-all"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
