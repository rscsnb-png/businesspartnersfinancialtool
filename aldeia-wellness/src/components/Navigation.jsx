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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
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
            <span className="font-serif text-2xl tracking-tight text-blue group-hover:text-coral transition-colors hidden">
              aldeia
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-warm-gray hover:text-blue transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Wellness House dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm tracking-wide text-warm-gray hover:text-blue transition-colors duration-300"
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
                    className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl shadow-charcoal/10 border border-stone/40 overflow-hidden z-50"
                  >
                    <div className="p-1.5">
                      <div className="px-3 py-1.5 mb-1">
                        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-warm-gray/50">
                          Opening 2027
                        </span>
                      </div>
                      {wellnessLinks.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => { onOpenWellness(item.id); setDropdownOpen(false) }}
                          className="w-full text-left text-sm text-warm-gray hover:text-blue hover:bg-beige rounded-xl px-3 py-2 transition-colors duration-150"
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
              className="text-sm font-medium px-6 py-2.5 bg-blue text-white rounded-full hover:bg-blue-light transition-colors duration-300"
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
              <span className={`h-px bg-charcoal transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`h-px bg-charcoal transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
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
            className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-stone/50 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-charcoal"
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
                      className="text-left text-base text-warm-gray hover:text-blue transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="mailto:info@aldeiawellness.com?subject=Free%20Consultation%20Request"
                onClick={() => setMobileOpen(false)}
                className="text-center text-sm font-medium px-6 py-3 bg-blue text-white rounded-full"
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
