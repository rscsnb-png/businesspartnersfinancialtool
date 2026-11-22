import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import RainbowBar from './RainbowBar'

const credentials = [
  { label: 'Years of Experience', value: '12+', color: 'text-red' },
  { label: 'Qualified Practitioners', value: '15+', color: 'text-green' },
  { label: 'International Awards', value: '13', color: 'text-yellow' },
  { label: 'Families Served', value: '2800+', color: 'text-sky' },
]

const specialisms = [
  'Special Education',
  'Educational Psychology',
  'Behavioural Support',
  'Art & Play Therapy',
  'Sensory Integration',
  'Family Counselling',
  'Homeschool Support',
  'Mainstream Integration',
]

const branches = [
  { country: 'South Africa', cities: 'Western Cape · Gauteng · KwaZulu Natal · Northern Cape · Mpumalanga', flag: '🇿🇦' },
  { country: 'Namibia', cities: 'Walvis Bay · Windhoek', flag: '🇳🇦' },
  { country: 'Netherlands', cities: 'Hilversum', flag: '🇳🇱' },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 lg:py-36 bg-navy text-white overflow-hidden relative" ref={sectionRef}>
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Team image with colourful frame */}
            <div className="relative mb-10">
              <div className="absolute -inset-2 rounded-3xl blur-sm"
                style={{ background: 'linear-gradient(135deg, rgba(123,169,58,0.4), rgba(242,196,24,0.3), rgba(200,54,63,0.4))' }} />
              <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden">
                <img
                  src="/images/team.jpg"
                  alt="Aldeia therapist working one-on-one with a child"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Credentials — colourful cards */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/8 rounded-[22px] p-4 border border-white/10"
                >
                  <div className={`font-serif text-2xl ${cred.color}`}>{cred.value}</div>
                  <div className="text-xs text-white/50 mt-1">{cred.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Branches */}
            <div className="bg-white/8 rounded-[22px] p-6 border border-white/10">
              <div className="text-xs font-bold tracking-widest uppercase text-yellow mb-4">
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
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow/20 text-yellow text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
              Our Story
            </span>

            <h2 className="font-serif text-3xl lg:text-4xl leading-snug mb-4">
              Built by practitioners who believe{' '}
              <span className="text-yellow">every child belongs</span>
            </h2>
            <RainbowBar className="w-36 mt-3 mb-8" />

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
            <div className="bg-white/8 rounded-[22px] p-6 mb-10 border border-white/10">
              <div className="text-xs font-bold tracking-widest uppercase text-yellow mb-4">
                Global Winner of 13 Awards
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Best Neurobehavior Assessment & Coaching Provider 2024 — SA",
                  "Children's Therapy Service of the Year — SA",
                  "Best Children's Behavioural Therapy Practice 2023 — SA",
                  "Best Family & Child Wellness Practice 2023 — Northern SA",
                  "Most Trusted Children's Cognitive Behavioral Experts 2024 — SA",
                  "Best Family & Child Wellness Practice 2024 — Gauteng",
                ].map((award) => (
                  <div key={award} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/70">{award}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                {['AI Business Excellence Awards', 'SA Prestige Awards', 'African Excellence Awards', 'Corporate Vision Small Business Awards'].map((org) => (
                  <span key={org} className="text-[10px] px-2.5 py-1 rounded-full bg-yellow/10 text-yellow/70">
                    {org}
                  </span>
                ))}
              </div>
            </div>

            {/* Specialisms */}
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">
                Our Specialisms
              </div>
              <div className="flex flex-wrap gap-2">
                {specialisms.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-yellow/20 hover:border-yellow/30 hover:text-yellow transition-all duration-300 cursor-default"
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
