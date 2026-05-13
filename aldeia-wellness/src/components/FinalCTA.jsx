import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 lg:py-36 bg-beige relative overflow-hidden" ref={sectionRef}>
      {/* Colorful decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-coral/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-sage/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-10 lg:p-16 shadow-xl shadow-charcoal/5 text-center relative overflow-hidden"
          >
            {/* Gradient accent bar at top */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-coral via-gold to-sage" />

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral/10 text-coral text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
              Take the First Step
            </span>

            <h2 className="font-serif text-3xl lg:text-[2.75rem] text-blue leading-snug mb-6">
              Your child&apos;s potential is{' '}
              <span className="italic text-sage">waiting to unfold</span>
            </h2>

            <p className="text-warm-gray text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you&apos;re homeschooling or in mainstream education, book a
              free consultation and tell us about your child. Together,
              we&apos;ll explore how an integrated, personalised approach can make
              a meaningful difference — wherever you are in the world.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-coral to-gold text-white text-sm font-semibold tracking-wide rounded-full hover:shadow-xl hover:shadow-coral/25 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                Book Your Free Consultation
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <span className="text-xs text-warm-gray">No commitment required</span>
            </div>

            <div className="border-t border-stone/50 pt-8 grid sm:grid-cols-3 gap-6 text-left sm:text-center">
              <div>
                <div className="text-xs font-semibold tracking-[0.15em] uppercase text-warm-gray/60 mb-2">
                  Email
                </div>
                <a href="mailto:hello@aldeiawellness.com" className="text-sm text-blue hover:text-coral transition-colors">
                  hello@aldeiawellness.com
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.15em] uppercase text-warm-gray/60 mb-2">
                  Phone
                </div>
                <a href="tel:+1234567890" className="text-sm text-blue hover:text-coral transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.15em] uppercase text-warm-gray/60 mb-2">
                  Response Time
                </div>
                <span className="text-sm text-blue">Within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
