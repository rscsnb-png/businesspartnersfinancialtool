import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import RainbowBar from './RainbowBar'

export default function FinalCTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 lg:py-36 bg-cream relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-10 left-10 w-72 h-72 bg-red/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-green/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[22px] p-10 lg:p-16 shadow-[6px_6px_0_0_rgba(13,58,145,0.1)] text-center relative overflow-hidden border-2 border-stone/20"
          >
            {/* Rainbow top bar */}
            <div className="absolute top-0 left-0 right-0 h-[6px] flex overflow-hidden rounded-t-[22px]">
              {['#C8363F','#F2C418','#0D3A91','#7BA93A','#7E479A','#237BB7','#006CC0'].map(c => (
                <div key={c} style={{ background: c, flex: 1 }} />
              ))}
            </div>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red/10 text-red text-xs font-bold tracking-widest uppercase mb-6 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
              Take the First Step
            </span>

            <h2 className="font-serif text-3xl lg:text-[2.75rem] text-navy leading-snug mb-3">
              Your child&apos;s potential is{' '}
              <span className="text-green">waiting to unfold</span>
            </h2>
            <RainbowBar className="w-40 mx-auto mt-3 mb-8" />

            <p className="text-warm-gray text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you&apos;re homeschooling or in mainstream education, book a
              free consultation and tell us about your child. Together,
              we&apos;ll explore how an integrated, personalised approach can make
              a meaningful difference — wherever you are in the world.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
                className="inline-flex items-center justify-center px-10 py-4 bg-red text-white text-sm font-bold tracking-wide rounded-full shadow-[5px_5px_0_0_#9B2429] hover:-translate-y-1 hover:shadow-[5px_7px_0_0_#9B2429] active:translate-y-px active:shadow-[2px_2px_0_0_#9B2429] transition-all duration-150 w-full sm:w-auto"
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
                <div className="text-xs font-bold tracking-widest uppercase text-warm-gray/60 mb-2">
                  Email
                </div>
                <a href="mailto:info@aldeiawellness.com" className="text-sm text-navy hover:text-red transition-colors">
                  info@aldeiawellness.com
                </a>
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-warm-gray/60 mb-2">
                  Phone
                </div>
                <div className="space-y-1.5">
                  <div>
                    <span className="text-xs text-warm-gray/60">South Africa: </span>
                    <a href="tel:+27100065199" className="text-sm text-navy hover:text-red transition-colors">
                      +27 10 006 5199
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-warm-gray/60">Netherlands: </span>
                    <a href="tel:+31619415086" className="text-sm text-navy hover:text-red transition-colors">
                      +31 61 941 5086
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-warm-gray/60">Namibia: </span>
                    <a href="tel:+264815883067" className="text-sm text-navy hover:text-red transition-colors">
                      +264 81 588 3067
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-warm-gray/60 mb-2">
                  Response Time
                </div>
                <span className="text-sm text-navy">Within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
