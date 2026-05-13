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
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige to-stone/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue" />
          <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue" />
          <circle cx="400" cy="400" r="100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-px bg-gold" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
                Personalised Learning &middot; Homeschool &amp; Mainstream
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] leading-[1.1] tracking-tight text-blue mb-6"
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
              Whether your child is homeschooled or in mainstream education,
              Aldeia brings together educators, therapists, and families to
              co-create integrated learning journeys — so every child can thrive
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
                className="inline-flex items-center justify-center px-8 py-4 bg-blue text-white text-sm font-medium tracking-wide rounded-full hover:bg-blue-light transition-all duration-300 shadow-lg shadow-blue/20 hover:shadow-xl hover:shadow-blue/30 hover:-translate-y-0.5"
              >
                Book a Free Consultation
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-blue border border-stone rounded-full hover:border-blue hover:text-blue-light transition-all duration-300"
              >
                See How It Works
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-14 pt-8 border-t border-stone/60"
            >
              <div className="flex flex-wrap gap-8 lg:gap-12">
                <div>
                  <div className="font-serif text-2xl text-blue">200+</div>
                  <div className="text-xs text-warm-gray mt-1 tracking-wide">Families Supported</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-blue">3</div>
                  <div className="text-xs text-warm-gray mt-1 tracking-wide">Countries</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-blue">Award</div>
                  <div className="text-xs text-warm-gray mt-1 tracking-wide">Winning Practice</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 xl:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop"
                  alt="Diverse children learning together in a warm, supportive environment"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue/20 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white rounded-xl shadow-xl shadow-charcoal/5 p-5 max-w-[220px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-blue">SA &middot; Namibia &middot; NL</span>
                </div>
                <p className="text-[11px] text-warm-gray leading-relaxed">
                  Centres across three countries, one integrated approach.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
