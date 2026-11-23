import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import RainbowBar from './RainbowBar'

export default function TwoDoors({ onOpenWellness }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-purple mb-3">
            Two Doors, One Village
          </span>
          <h2 className="font-serif text-3xl lg:text-[2.75rem] text-navy leading-snug mb-4">
            Growing individuals.{' '}
            <span className="text-red">Strengthening families.</span>
          </h2>
          <RainbowBar className="w-36 mx-auto mt-3 mb-6" />
          <p className="text-warm-gray text-lg leading-relaxed">
            Aldeia means village. Since 2013, we have been building one: a place where
            children learn, families grow, and nobody has to find their way alone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left door — Therapeutic Learning */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-navy rounded-[22px] overflow-hidden min-h-[420px] flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-blue-dark" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-green/10 rounded-full blur-3xl" />

            {/* Rainbow accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-[5px] flex overflow-hidden rounded-t-[22px]">
              {['#C8363F','#F2C418','#7BA93A','#7E479A','#237BB7'].map(c => (
                <div key={c} style={{ background: c, flex: 1 }} />
              ))}
            </div>

            <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full pt-10">
              <div className="w-12 h-12 rounded-2xl bg-yellow/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>

              <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3">
                Therapeutic Learning
              </h3>
              <p className="text-white/70 leading-relaxed mb-8 flex-1">
                Small-group learning support, developmental programmes and a whole-child
                approach for learners who need more.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Learning Therapy', 'Behavioural Support', 'Homeschool', 'Mainstream'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-bold text-yellow hover:text-yellow/80 transition-colors"
              >
                Explore learning
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right door — Wellness House (editorial / spa style) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-cream rounded-[22px] overflow-hidden min-h-[420px] flex flex-col border border-stone/60 hover:border-stone hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-500 cursor-pointer"
            onClick={() => onOpenWellness('house')}
          >
            {/* Thin green accent line — top only */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-green rounded-t-[22px]" />

            <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full pt-10">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-green">
                  <span className="w-1.5 h-1.5 rounded-full bg-green" />
                  Durbanville, Cape Town
                </span>
              </div>

              <h3 className="font-serif text-2xl lg:text-3xl text-navy mb-3 leading-snug">
                Aldeia Wellness House
              </h3>
              <p className="font-serif text-navy/50 italic mb-5">
                A village of professionals, under one welcoming roof.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8 flex-1 text-sm">
                Individual and family wellbeing in Durbanville: family wellness support,
                wellness counselling and a team of independent practitioners.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Family Wellness', 'Wellness Counselling', 'Durbanville'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-stone/60 text-warm-gray">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-navy group-hover:gap-3 transition-all duration-200">
                Visit the Wellness House
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
