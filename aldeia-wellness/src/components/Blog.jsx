import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import BlogPost from './BlogPost'
import RainbowBar from './RainbowBar'

const posts = [
  {
    category: 'Learning Therapy',
    categoryColor: 'bg-red/10 text-red',
    title: 'The Difference Between Learning Therapy and Tutoring',
    excerpt:
      "Your child has had tutors, but nothing seems to stick. Understanding the difference between tutoring and learning therapy could change everything.",
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop',
    date: '12 May 2026',
    readTime: '8 min read',
    hasFullPost: true,
    hoverColor: 'group-hover:text-red',
  },
  {
    category: 'Homeschooling',
    categoryColor: 'bg-green/10 text-sage-dark',
    title: 'How to Build Structure Without Losing Flexibility in Your Homeschool',
    excerpt:
      "Finding the sweet spot between routine and freedom is one of the biggest challenges homeschooling families face. Here are five strategies that work.",
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&auto=format&fit=crop',
    date: '5 May 2026',
    readTime: '5 min read',
    hasFullPost: false,
    hoverColor: 'group-hover:text-green',
  },
  {
    category: 'Mainstream Support',
    categoryColor: 'bg-yellow/15 text-yellow-dark',
    title: "Navigating IEPs: A Parent's Guide to Getting the Support Your Child Deserves",
    excerpt:
      "Individual Education Plans can feel overwhelming. This guide breaks down what to expect, what to ask, and how to advocate effectively.",
    image: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=600&q=80&auto=format&fit=crop',
    date: '28 Apr 2026',
    readTime: '6 min read',
    hasFullPost: false,
    hoverColor: 'group-hover:text-yellow-dark',
  },
]

export default function Blog() {
  const [showPost, setShowPost] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <>
      <section id="blog" className="py-24 lg:py-36 bg-white relative" ref={sectionRef}>
        <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
          <svg width="100" height="100" viewBox="0 0 100 100">
            {[...Array(16)].map((_, i) => (
              <circle key={i} cx={(i % 4) * 28 + 10} cy={Math.floor(i / 4) * 28 + 10} r="3" fill="#7BA93A" />
            ))}
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20"
          >
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green/10 text-sage-dark text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green" />
                From Our Blog
              </span>
              <h2 className="font-serif text-3xl lg:text-[2.75rem] text-navy leading-snug">
                Insights for{' '}
                <span className="text-green">families &amp; educators</span>
              </h2>
              <RainbowBar className="w-32 mt-3" />
            </div>
            <a
              href="#blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-red hover:text-coral-light transition-colors"
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
                onClick={() => post.hasFullPost && setShowPost(true)}
              >
                <div className="aspect-[16/10] rounded-[22px] overflow-hidden mb-5 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {post.hasFullPost && (
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[2px_2px_0_0_rgba(13,58,145,0.2)]">
                      <svg className="w-4 h-4 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-warm-gray">{post.readTime}</span>
                </div>
                <h3 className={`font-serif text-lg text-navy leading-snug mb-2 transition-colors duration-300 ${post.hoverColor}`}>
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

      <AnimatePresence>
        {showPost && <BlogPost onClose={() => setShowPost(false)} />}
      </AnimatePresence>
    </>
  )
}
