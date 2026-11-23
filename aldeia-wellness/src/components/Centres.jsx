import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import RainbowBar from './RainbowBar'

const centres = [
  {
    country: 'South Africa',
    flag: '🇿🇦',
    locations: ['Western Cape (Durbanville & Somerset West)', 'Gauteng (Noordheuwel)', 'KwaZulu Natal (Umhlanga)', 'Northern Cape (Upington)', 'Mpumalanga (Nelspruit & White River)'],
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80&auto=format&fit=crop',
    description: 'Our founding centres, serving families across five provinces.',
    accent: 'border-t-4 border-green',
  },
  {
    country: 'Namibia',
    flag: '🇳🇦',
    locations: ['Walvis Bay', 'Windhoek'],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80&auto=format&fit=crop',
    description: 'Bringing integrated learning pathways to families in southern Africa.',
    accent: 'border-t-4 border-yellow',
  },
  {
    country: 'Netherlands',
    flag: '🇳🇱',
    locations: ['Hilversum'],
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80&auto=format&fit=crop',
    description: 'Our European hub, connecting families with personalised support.',
    accent: 'border-t-4 border-sky',
  },
]

export default function Centres() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="centres" className="py-24 lg:py-36 bg-cream" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky mb-3">
            Our Centres
          </span>
          <h2 className="font-serif text-3xl lg:text-[2.75rem] text-navy leading-snug mb-3">
            A village that spans{' '}
            <span className="text-sky">three countries</span>
          </h2>
          <RainbowBar className="w-36 mx-auto mt-3 mb-6" />
          <p className="text-warm-gray text-lg leading-relaxed">
            From South Africa to the Netherlands, our centres offer the same
            award-winning integrated approach — adapted to each community we serve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {centres.map((centre, index) => (
            <motion.div
              key={centre.country}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-white rounded-[22px] overflow-hidden ${centre.accent} hover:shadow-[5px_5px_0_0_rgba(13,58,145,0.1)] transition-shadow duration-300 group`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={centre.image}
                  alt={`Aldeia Wellness centre in ${centre.country}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{centre.flag}</span>
                  <h3 className="font-serif text-xl text-navy">{centre.country}</h3>
                </div>
                <p className="text-warm-gray text-sm leading-relaxed mb-4">{centre.description}</p>
                <div className="flex flex-wrap gap-2">
                  {centre.locations.map((loc) => (
                    <span key={loc} className="text-xs px-3 py-1 rounded-full bg-cream text-navy/70 font-medium border border-stone/40">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facebook follow card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-[22px] overflow-hidden border border-stone/50 flex flex-col">
            <div className="flex items-center gap-3 px-5 py-4" style={{ borderTop: '5px solid #1877F2' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#1877F2' }}>
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-navy text-[0.95rem]">Aldeia on Facebook</div>
                <a href="https://www.facebook.com/aldeianeuro" target="_blank" rel="noopener noreferrer" className="text-xs no-underline" style={{ color: '#1877F2' }}>
                  facebook.com/aldeianeuro
                </a>
              </div>
              <a href="https://www.facebook.com/aldeianeuro" target="_blank" rel="noopener noreferrer"
                className="ml-auto text-xs font-bold px-4 py-1.5 rounded-full text-white no-underline flex-shrink-0"
                style={{ background: '#1877F2' }}>
                Follow
              </a>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center gap-6"
              style={{ background: 'linear-gradient(135deg,#f0f4ff 0%,#f7f4ef 60%,#e8f0ff 100%)' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ background: '#1877F2' }}>
                <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </div>
              <div>
                <div className="font-serif font-bold text-navy text-xl mb-1">facebook.com/aldeianeuro</div>
                <div className="text-warm-gray text-sm leading-relaxed max-w-[32ch]">
                  Updates, events, and stories from our centres — follow us to stay connected.
                </div>
              </div>
              <a href="https://www.facebook.com/aldeianeuro"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white no-underline text-sm shadow-md hover:-translate-y-0.5 transition-transform"
                style={{ background: '#1877F2' }}>
                Follow on Facebook
              </a>
              <p className="text-xs text-warm-gray/50 italic">Tap to view our latest posts</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
