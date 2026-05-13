import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const credentials = [
  { label: 'Years of Experience', value: '12+', color: 'from-coral to-gold' },
  { label: 'Qualified Practitioners', value: '15+', color: 'from-sage to-mint' },
  { label: 'International Awards', value: '4', color: 'from-gold to-sunshine' },
  { label: 'Families Served', value: '200+', color: 'from-lavender to-sage-light' },
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
  { country: 'South Africa', cities: 'Johannesburg · Cape Town · Pretoria', flag: '🇿🇦' },
  { country: 'Namibia', cities: 'Windhoek', flag: '🇳🇦' },
  { country: 'Netherlands', cities: 'Amsterdam · Rotterdam', flag: '🇳🇱' },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 lg:py-36 bg-blue text-white overflow-hidden relative" ref={sectionRef}>
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Team image with colorful frame */}
            <div className="relative mb-10">
              <div className="absolute -inset-2 bg-gradient-to-br from-sage/40 via-gold/30 to-coral/40 rounded-3xl blur-sm" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/team.jpg"
                  alt="Aldeia therapist working one-on-one with a child"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Credentials — colorful cards */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <div className={`font-serif text-2xl font-bold bg-gradient-to-r ${cred.color} bg-clip-text text-transparent`}>
                    {cred.value}
                  </div>
                  <div className="text-xs text-white/50 mt-1">{cred.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Branches */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-4">
                Our Centres
              </div>
              <div className="space-y-3">
                {branches.map((branch) => (
                  <div key={branch.country} className="flex items-center gap-3">
                    <span className="text-lg">{branch.flag}</span>
                    <div>
                      <div className="text-sm font-medium text-white">{branch.country}</div>
                      <div className="text-xs text-white/40">{branch.cities}</div>
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
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Our Story
            </span>

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

            {/* Awards — colorful row */}
            <div className="bg-white/5 rounded-2xl p-6 mb-10 border border-white/10">
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-4">
                International Recognition
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Excellence in Inclusive Education',
                  'Therapeutic Innovation Award',
                  'Best Practice in Family-Centred Care',
                  'Cross-Border Education Pioneer',
                ].map((award) => (
                  <div key={award} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-sunshine flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/70">{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialisms — colorful pills */}
            <div>
              <div className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
                Our Specialisms
              </div>
              <div className="flex flex-wrap gap-2">
                {specialisms.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-gold/20 hover:border-gold/30 hover:text-gold-light transition-all duration-300 cursor-default"
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
