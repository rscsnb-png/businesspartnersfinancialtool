import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 lg:py-36 bg-cream relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor" className="text-charcoal" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-10 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.06)] text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-sage" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sage">
                Take the First Step
              </span>
              <div className="w-12 h-px bg-sage" />
            </div>

            <h2 className="font-serif text-3xl lg:text-[2.75rem] text-charcoal leading-snug mb-6">
              Your child&apos;s potential is{' '}
              <span className="italic text-sage">waiting to unfold</span>
            </h2>

            <p className="text-warm-gray text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Book a free, no-obligation consultation and tell us about your
              child. Together, we&apos;ll explore how an integrated, personalised
              approach can make a meaningful difference in their learning and life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-sage text-white text-sm font-medium tracking-wide rounded-full hover:bg-sage-dark transition-all duration-300 shadow-lg shadow-sage/20 hover:shadow-xl hover:shadow-sage/30 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Book Your Free Consultation
              </a>
              <span className="text-xs text-warm-gray">No commitment required</span>
            </div>

            {/* Contact details */}
            <div className="border-t border-stone/50 pt-8 grid sm:grid-cols-3 gap-6 text-left sm:text-center">
              <div>
                <div className="text-xs font-medium tracking-[0.15em] uppercase text-warm-gray/60 mb-2">
                  Email
                </div>
                <a href="mailto:hello@aldeiawellness.com" className="text-sm text-charcoal hover:text-sage transition-colors">
                  hello@aldeiawellness.com
                </a>
              </div>
              <div>
                <div className="text-xs font-medium tracking-[0.15em] uppercase text-warm-gray/60 mb-2">
                  Phone
                </div>
                <a href="tel:+1234567890" className="text-sm text-charcoal hover:text-sage transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <div className="text-xs font-medium tracking-[0.15em] uppercase text-warm-gray/60 mb-2">
                  Response Time
                </div>
                <span className="text-sm text-charcoal">Within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
