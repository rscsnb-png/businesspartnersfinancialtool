import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-stone/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-sage" />
          <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-sage" />
          <circle cx="400" cy="400" r="100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-sage" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-px bg-sage" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sage">
                Personalised Learning
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] leading-[1.1] tracking-tight text-charcoal mb-6"
            >
              Every child deserves a pathway{' '}
              <span className="italic text-sage">designed for them</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg lg:text-xl text-warm-gray leading-relaxed max-w-xl mb-10"
            >
              Aldeia brings together educators, therapists, and families to
              co-create integrated learning journeys — so your child can thrive
              on their own terms.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-sage text-white text-sm font-medium tracking-wide rounded-full hover:bg-sage-dark transition-all duration-300 shadow-lg shadow-sage/20 hover:shadow-xl hover:shadow-sage/30 hover:-translate-y-0.5"
              >
                Book a Free Consultation
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-charcoal border border-stone rounded-full hover:border-sage hover:text-sage transition-all duration-300"
              >
                See How It Works
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-14 pt-8 border-t border-stone/60"
            >
              <div className="flex flex-wrap gap-8 lg:gap-12">
                <div>
                  <div className="font-serif text-2xl text-charcoal">200+</div>
                  <div className="text-xs text-warm-gray mt-1 tracking-wide">Families Supported</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-charcoal">15+</div>
                  <div className="text-xs text-warm-gray mt-1 tracking-wide">Expert Practitioners</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-charcoal">98%</div>
                  <div className="text-xs text-warm-gray mt-1 tracking-wide">Parent Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Column — editorial asymmetric composition */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main image placeholder */}
              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-sage/10 via-stone/40 to-cream-dark">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <svg className="w-16 h-16 text-sage/40 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                  <p className="text-sm text-warm-gray/60 font-medium">
                    Child learning with educator
                  </p>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white rounded-xl shadow-xl shadow-charcoal/5 p-5 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-charcoal">Integrated Support</span>
                </div>
                <p className="text-[11px] text-warm-gray leading-relaxed">
                  Education, therapy &amp; family — working as one.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
