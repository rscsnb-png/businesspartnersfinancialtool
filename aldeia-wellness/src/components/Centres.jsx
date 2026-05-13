import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const centres = [
  {
    country: 'South Africa',
    flag: '🇿🇦',
    locations: ['Johannesburg', 'Cape Town', 'Pretoria'],
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80&auto=format&fit=crop',
    description: 'Our founding centres, serving families across Gauteng and the Western Cape.',
  },
  {
    country: 'Namibia',
    flag: '🇳🇦',
    locations: ['Windhoek'],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80&auto=format&fit=crop',
    description: 'Bringing integrated learning pathways to families in southern Africa.',
  },
  {
    country: 'Netherlands',
    flag: '🇳🇱',
    locations: ['Amsterdam', 'Rotterdam'],
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80&auto=format&fit=crop',
    description: 'Our European hub, connecting families with personalised support.',
  },
]

export default function Centres() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="centres" className="py-24 lg:py-36 bg-beige" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold-dark">
              Our Centres
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl lg:text-[2.75rem] text-blue leading-snug mb-6">
            A village that spans{' '}
            <span className="italic text-sage">three countries</span>
          </h2>
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
              className="bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500 group"
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
                  <h3 className="font-serif text-xl text-blue">{centre.country}</h3>
                </div>
                <p className="text-warm-gray text-sm leading-relaxed mb-4">{centre.description}</p>
                <div className="flex flex-wrap gap-2">
                  {centre.locations.map((loc) => (
                    <span key={loc} className="text-xs px-3 py-1 rounded-full bg-beige text-blue/70 font-medium">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facebook embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-center max-w-3xl mx-auto"
        >
          <h3 className="font-serif text-xl text-blue mb-3">Follow Our Journey</h3>
          <p className="text-warm-gray text-sm mb-6">
            See what&apos;s happening at our centres — follow us on Facebook for updates, events, and stories.
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faldeianeuro&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="500"
              height="600"
              className="max-w-full border-none overflow-hidden rounded-xl"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
              title="Aldeia Neuro Facebook Page"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
