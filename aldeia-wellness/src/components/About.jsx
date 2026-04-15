import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const credentials = [
  { label: 'Years of Experience', value: '12+' },
  { label: 'Qualified Practitioners', value: '15+' },
  { label: 'Disciplines Integrated', value: '8' },
  { label: 'Families Served', value: '200+' },
]

const specialisms = [
  'Special Education',
  'Speech & Language Therapy',
  'Occupational Therapy',
  'Educational Psychology',
  'Behavioural Support',
  'Art & Play Therapy',
  'Sensory Integration',
  'Family Counselling',
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 lg:py-36 bg-forest text-white overflow-hidden" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column — image & credentials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Image placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-white/5 mb-10 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-14 h-14 text-white/20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                <p className="text-xs text-white/30">Our multidisciplinary team</p>
              </div>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-6">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="font-serif text-3xl text-gold-light">{cred.value}</div>
                  <div className="text-xs text-white/50 mt-1 tracking-wide">{cred.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — story & specialisms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">
                Our Story
              </span>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl leading-snug mb-8">
              Built by practitioners who believe{' '}
              <span className="italic text-gold-light">every child belongs</span>
            </h2>

            <div className="space-y-5 text-white/70 leading-relaxed mb-12">
              <p>
                Aldeia was founded by a group of educators and therapists who were
                frustrated by the same thing parents experience — a disconnected
                system that asks children to fit into rigid moulds.
              </p>
              <p>
                The name &ldquo;Aldeia&rdquo; comes from the Portuguese word for
                &ldquo;village,&rdquo; because we believe it truly takes a village
                to nurture a child. Our multidisciplinary team works as one —
                sharing insights in real time, adapting strategies together, and
                keeping your family at the heart of every decision.
              </p>
              <p>
                We are registered practitioners with deep experience across special
                education, therapeutic support, and child development. But more
                than our credentials, what defines us is a genuine commitment to
                seeing every child for who they are — and who they can become.
              </p>
            </div>

            {/* Specialisms */}
            <div className="border-t border-white/10 pt-8">
              <div className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-4">
                Our Specialisms
              </div>
              <div className="flex flex-wrap gap-2">
                {specialisms.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-4 py-2 rounded-full border border-white/10 text-white/60 hover:border-gold/40 hover:text-gold-light transition-colors duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
