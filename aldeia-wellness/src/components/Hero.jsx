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
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-white to-coral/10" />

      {/* Playful floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sage/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-coral/8 rounded-full blur-2xl" />

      {/* Decorative dots pattern */}
      <div className="absolute top-32 right-12 opacity-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120">
          {[...Array(25)].map((_, i) => (
            <circle key={i} cx={(i % 5) * 28 + 10} cy={Math.floor(i / 5) * 28 + 10} r="3" fill="#FFCF26" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Colorful pill badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sage/15 to-gold/15 border border-sage/20">
                <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                <span className="text-xs font-semibold tracking-wide uppercase text-blue">
                  Learning &amp; Behaviour Support
                </span>
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
              <span className="relative">
                <span className="italic text-coral">designed for them</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8c40-8 80-4 120-2s60 4 76-2" stroke="#FF6B4A" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
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
                href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-coral to-gold text-white text-sm font-semibold tracking-wide rounded-full hover:shadow-xl hover:shadow-coral/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Free Consultation
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-blue bg-white border-2 border-blue/10 rounded-full hover:border-blue/30 hover:bg-blue/5 transition-all duration-300"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Trust indicators with color accents */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-14 flex flex-wrap gap-6 lg:gap-10"
            >
              {[
                { value: '2800+', label: 'Families Supported', color: 'bg-sage' },
                { value: '3', label: 'Countries', color: 'bg-gold' },
                { value: '13', label: 'International Awards', color: 'bg-coral' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${stat.color}/15 rounded-xl flex items-center justify-center`}>
                    <span className="font-serif text-lg font-bold text-blue">{stat.value}</span>
                  </div>
                  <span className="text-xs text-warm-gray leading-tight">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Colorful frame behind image */}
              <div className="absolute -inset-3 bg-gradient-to-br from-sage/30 via-gold/20 to-coral/30 rounded-3xl blur-sm" />

              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero.jpg"
                  alt="Children learning together in a collaborative, supportive environment"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl shadow-xl shadow-charcoal/8 p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage to-mint flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-blue">SA &middot; Namibia &middot; NL</div>
                  <div className="text-[10px] text-warm-gray">Three countries, one village</div>
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-3 -right-3 lg:-right-6 bg-gradient-to-br from-gold to-sunshine text-white rounded-2xl shadow-lg p-3 text-center"
              >
                <div className="text-lg font-bold leading-none">Award</div>
                <div className="text-[10px] font-medium opacity-80">Winning</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 40c240-30 480 20 720 10s480-40 720-10v40H0z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
