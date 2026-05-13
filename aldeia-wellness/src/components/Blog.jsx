import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const posts = [
  {
    category: 'Homeschooling',
    title: 'How to Build Structure Without Losing Flexibility in Your Homeschool',
    excerpt:
      'Finding the sweet spot between routine and freedom is one of the biggest challenges homeschooling families face. Here are five strategies that work.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&auto=format&fit=crop',
    date: '12 May 2026',
    readTime: '5 min read',
  },
  {
    category: 'Therapeutic Support',
    title: 'Why Occupational Therapy and Education Should Work Together',
    excerpt:
      'When OT and classroom strategies are aligned, children make faster, more sustainable progress. Here\'s the research — and what it means for your family.',
    image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80&auto=format&fit=crop',
    date: '5 May 2026',
    readTime: '7 min read',
  },
  {
    category: 'Mainstream Support',
    title: 'Navigating IEPs: A Parent\'s Guide to Getting the Support Your Child Deserves',
    excerpt:
      'Individual Education Plans can feel overwhelming. This guide breaks down what to expect, what to ask, and how to advocate effectively.',
    image: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=600&q=80&auto=format&fit=crop',
    date: '28 Apr 2026',
    readTime: '6 min read',
  },
]

export default function Blog() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="py-24 lg:py-36 bg-white" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-sage" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-sage">
                From Our Blog
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-[2.75rem] text-blue leading-snug">
              Insights for{' '}
              <span className="italic text-sage">families & educators</span>
            </h2>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:text-sage transition-colors"
          >
            View all articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-sage/10 text-sage-dark">
                  {post.category}
                </span>
                <span className="text-xs text-warm-gray">{post.readTime}</span>
              </div>
              <h3 className="font-serif text-lg text-blue leading-snug mb-2 group-hover:text-sage transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <div className="text-xs text-warm-gray/60">{post.date}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
