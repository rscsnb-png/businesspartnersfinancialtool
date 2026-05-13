import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const credentials = [
  { label: 'Years of Experience', value: '12+' },
  { label: 'Qualified Practitioners', value: '15+' },
  { label: 'International Awards', value: '4' },
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
  'Homeschool Support',
  'Mainstream Integration',
]

const branches = [
  { country: 'South Africa', cities: 'Johannesburg · Cape Town · Pretoria' },
  { country: 'Namibia', cities: 'Windhoek' },
  { country: 'Netherlands', cities: 'Amsterdam · Rotterdam' },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 lg:py-36 bg-blue text-white overflow-hidden" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop"
                alt="Our diverse team of educators and therapists collaborating"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
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

            {/* Branches */}
            <div className="border-t border-white/10 pt-8">
              <div className="text-xs font-medium tracking-[0.15em] uppercase text-white/40 mb-4">
                Our Centres
              </div>
              <div className="space-y-3">
                {branches.map((branch) => (
                  <div key={branch.country} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-white">{branch.country}</div>
                      <div className="text-xs text-white/50">{branch.cities}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

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

            <div className="space-y-5 text-white/70 leading-relaxed mb-10">
              <p>
                Aldeia was founded by a group of educators and therapists who were
                frustrated by the same thing parents experience — a disconnected
                system that asks children to fit into rigid moulds.
              </p>
              <p>
                The name &ldquo;Aldeia&rdquo; comes from the Portuguese word for
                &ldquo;village,&rdquo; because we believe it truly takes a village
                to nurture a child. From our origins in South Africa, we&apos;ve
                grown to serve families across Namibia and the Netherlands,
                supporting both homeschool and mainstream learners with the same
                integrated, personalised approach.
              </p>
              <p>
                Our work has been recognised with multiple international awards
                for excellence in inclusive education and therapeutic innovation.
                But more than our accolades, what defines us is a genuine
                commitment to seeing every child for who they are — and who they
                can become.
              </p>
            </div>

            {/* Awards */}
            <div className="bg-white/5 rounded-xl p-6 mb-10">
              <div className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4">
                International Recognition
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.04 6.04 0 0 1-2.27.89m0 0a6.052 6.052 0 0 1-2.77-.001m0 0a6.04 6.04 0 0 1-2.27-.89" />
                  </svg>
                  <span className="text-sm text-white/70">Excellence in Inclusive Education</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.04 6.04 0 0 1-2.27.89m0 0a6.052 6.052 0 0 1-2.77-.001m0 0a6.04 6.04 0 0 1-2.27-.89" />
                  </svg>
                  <span className="text-sm text-white/70">Therapeutic Innovation Award</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.04 6.04 0 0 1-2.27.89m0 0a6.052 6.052 0 0 1-2.77-.001m0 0a6.04 6.04 0 0 1-2.27-.89" />
                  </svg>
                  <span className="text-sm text-white/70">Best Practice in Family-Centred Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.04 6.04 0 0 1-2.27.89m0 0a6.052 6.052 0 0 1-2.77-.001m0 0a6.04 6.04 0 0 1-2.27-.89" />
                  </svg>
                  <span className="text-sm text-white/70">Cross-Border Education Pioneer</span>
                </div>
              </div>
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
