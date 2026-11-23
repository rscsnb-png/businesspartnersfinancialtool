import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#process' },
  { label: 'Centres', href: '#centres' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
]

const wellnessLinks = [
  { id: 'house', label: 'Aldeia Wellness House' },
  { id: 'family', label: 'Family Wellness' },
  { id: 'services', label: 'Our Services' },
  { id: 'interest', label: 'Join the Interest List' },
]

export default function Navigation({ onOpenWellness }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_16px_rgba(13,58,145,0.12)]' : 'shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-center justify-between h-18 lg:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/images/logo.png"
              alt="Aldeia"
              className="h-12 lg:h-14 w-auto"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
            />
            <span className="font-serif text-2xl tracking-tight text-navy group-hover:text-red transition-colors hidden">
              aldeia
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-warm-gray hover:text-navy transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Wellness House dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium tracking-wide text-warm-gray hover:text-navy transition-colors duration-300"
              >
                Wellness House
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-0 mt-3 w-56 bg-white rounded-[22px] shadow-[0_8px_30px_rgba(13,58,145,0.15)] border border-stone/40 overflow-hidden z-50"
                  >
                    <div className="p-1.5">
                      <div className="px-3 py-1.5 mb-1">
                        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-warm-gray/50">
                          Durbanville, Cape Town
                        </span>
                      </div>
                      {wellnessLinks.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => { onOpenWellness(item.id); setDropdownOpen(false) }}
                          className="w-full text-left text-sm text-warm-gray hover:text-navy hover:bg-cream rounded-xl px-3 py-2 transition-colors duration-150"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
              className="text-sm font-bold px-6 py-2.5 bg-navy text-white rounded-full shadow-[3px_3px_0_0_#092668] hover:-translate-y-0.5 hover:shadow-[3px_4px_0_0_#092668] active:translate-y-px active:shadow-[2px_2px_0_0_#092668] transition-all duration-150"
            >
              Book a Consultation
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-t border-stone/50 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-navy"
                >
                  {link.label}
                </a>
              ))}
              <div>
                <div className="text-xs font-semibold tracking-[0.12em] uppercase text-warm-gray/50 mb-3">
                  Wellness House
                </div>
                <div className="flex flex-col gap-2 pl-2">
                  {wellnessLinks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => { onOpenWellness(item.id); setMobileOpen(false) }}
                      className="text-left text-base text-warm-gray hover:text-navy transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
                onClick={() => setMobileOpen(false)}
                className="text-center text-sm font-bold px-6 py-3 bg-navy text-white rounded-full shadow-[3px_3px_0_0_#092668]"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
