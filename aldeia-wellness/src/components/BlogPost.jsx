import { motion } from 'framer-motion'

export default function BlogPost({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-charcoal/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto my-8 lg:my-16 bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-64 lg:h-80 bg-gradient-to-br from-sage/20 via-gold/10 to-coral/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 text-sage-dark text-xs font-semibold tracking-wide uppercase mb-4">
                Learning Therapy
              </span>
              <h1 className="font-serif text-3xl lg:text-4xl text-blue leading-snug max-w-lg">
                The Difference Between Learning Therapy and Tutoring
              </h1>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-charcoal hover:bg-white transition-colors"
            aria-label="Close article"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Article content */}
        <div className="px-8 lg:px-16 py-10 lg:py-14">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-8 text-sm text-warm-gray">
            <span>12 May 2026</span>
            <span className="w-1 h-1 rounded-full bg-stone" />
            <span>8 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone" />
            <span>By Aldeia Wellness Team</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-warm-gray leading-relaxed mb-6">
              As a parent, when your child struggles at school, the first instinct
              is often to find a tutor. And tutoring can be wonderful — the right
              tutor can make a subject click. But what happens when the challenge
              goes deeper than a tricky maths concept or a missed reading lesson?
            </p>

            <p className="text-lg text-warm-gray leading-relaxed mb-6">
              That&apos;s where learning therapy comes in — and understanding the
              difference between the two can change the trajectory of your
              child&apos;s education.
            </p>

            <h2 className="font-serif text-2xl text-blue mt-10 mb-4">
              What is tutoring?
            </h2>

            <p className="text-warm-gray leading-relaxed mb-6">
              Tutoring is content-focused. A tutor helps your child understand
              specific academic material — fractions, essay structure, science
              vocabulary. They work within the existing curriculum, often
              re-explaining what was taught in class or helping with homework.
            </p>

            <p className="text-warm-gray leading-relaxed mb-6">
              Tutoring is most effective when a child has a solid foundation for
              learning but needs extra practice, a different explanation, or more
              one-on-one attention. Think of it as filling in gaps in
              <strong className="text-blue"> what</strong> your child knows.
            </p>

            <div className="bg-sage/8 rounded-2xl p-6 my-8 border border-sage/15">
              <h4 className="font-serif text-lg text-blue mb-2">Tutoring works best when:</h4>
              <ul className="space-y-2">
                {[
                  'Your child missed school and needs to catch up',
                  'They need extra practice with specific content',
                  'They understand concepts but need help applying them',
                  'They\'re preparing for a specific test or exam',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-warm-gray">
                    <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-serif text-2xl text-blue mt-10 mb-4">
              What is learning therapy?
            </h2>

            <p className="text-warm-gray leading-relaxed mb-6">
              Learning therapy goes beneath the surface. Rather than focusing on
              <em> what</em> your child is learning, a learning therapist looks at
              <strong className="text-blue"> how</strong> they learn — and what might be
              getting in the way.
            </p>

            <p className="text-warm-gray leading-relaxed mb-6">
              A qualified learning therapist is trained to identify and address
              the underlying cognitive, perceptual, and emotional barriers that
              make learning difficult. These might include challenges with working
              memory, processing speed, visual or auditory perception, attention,
              or executive function.
            </p>

            <p className="text-warm-gray leading-relaxed mb-6">
              Learning therapy uses evidence-based techniques to strengthen these
              foundational skills — not by drilling content, but by rewiring the
              pathways that make learning possible in the first place.
            </p>

            <div className="bg-coral/8 rounded-2xl p-6 my-8 border border-coral/15">
              <h4 className="font-serif text-lg text-blue mb-2">Learning therapy is needed when:</h4>
              <ul className="space-y-2">
                {[
                  'Your child works hard but still falls behind',
                  'They\'ve had tutoring but progress is slow or doesn\'t stick',
                  'Reading, writing, or maths feels effortful despite practice',
                  'There\'s a diagnosis (or suspected) of dyslexia, ADHD, or other learning difference',
                  'They struggle with focus, organisation, or following multi-step instructions',
                  'Emotional frustration around schoolwork is increasing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-warm-gray">
                    <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-serif text-2xl text-blue mt-10 mb-4">
              The analogy that helps
            </h2>

            <p className="text-warm-gray leading-relaxed mb-6">
              Imagine your child is trying to fill a bucket with water, but the
              bucket has holes in it. A tutor pours water faster — more content,
              more repetition, more practice. A learning therapist fixes the holes.
            </p>

            <p className="text-warm-gray leading-relaxed mb-6">
              Both are valuable. But if the foundational skills aren&apos;t in
              place, no amount of tutoring will produce lasting results. That&apos;s
              why so many parents tell us: &ldquo;We&apos;ve tried tutors, but
              nothing seems to stick.&rdquo;
            </p>

            <div className="bg-gradient-to-r from-blue to-blue-light rounded-2xl p-8 my-10 text-white">
              <h3 className="font-serif text-xl mb-4">A quick comparison</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gold-light mb-3">Tutoring</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>Focuses on curriculum content</li>
                    <li>Re-teaches or explains material</li>
                    <li>Works within the school syllabus</li>
                    <li>Subject-specific</li>
                    <li>Addresses <em>what</em> a child learns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gold-light mb-3">Learning Therapy</h4>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>Focuses on underlying learning skills</li>
                    <li>Builds cognitive and perceptual foundations</li>
                    <li>Works across all areas of learning</li>
                    <li>Addresses root causes</li>
                    <li>Addresses <em>how</em> a child learns</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-2xl text-blue mt-10 mb-4">
              Do you need one, the other, or both?
            </h2>

            <p className="text-warm-gray leading-relaxed mb-6">
              Many children benefit from both — but the order matters. If
              foundational learning skills are compromised, starting with learning
              therapy first (or alongside tutoring) means the tutoring actually
              has something to build on.
            </p>

            <p className="text-warm-gray leading-relaxed mb-6">
              At Aldeia, we take an integrated approach. Our learning therapists
              work hand-in-hand with educators and other therapists so that every
              intervention supports the others. Whether your child is homeschooled
              or in mainstream education, we assess the full picture before
              recommending a pathway.
            </p>

            <h2 className="font-serif text-2xl text-blue mt-10 mb-4">
              How to know which your child needs
            </h2>

            <p className="text-warm-gray leading-relaxed mb-4">
              Ask yourself these questions:
            </p>

            <div className="bg-gold/8 rounded-2xl p-6 my-6 border border-gold/15">
              <ul className="space-y-3">
                {[
                  'Has my child had tutoring that didn\'t produce lasting change?',
                  'Does my child seem to understand in the moment but forget later?',
                  'Is learning effortful even with support and practice?',
                  'Are there emotional or behavioural signs of frustration around schoolwork?',
                  'Has a teacher suggested there might be something "more going on"?',
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3 text-warm-gray">
                    <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-gold-dark">?</span>
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-warm-gray leading-relaxed mb-6">
              If you answered yes to two or more, a learning therapy assessment
              could provide the clarity and direction your family needs.
            </p>

            {/* CTA */}
            <div className="bg-beige rounded-2xl p-8 mt-10 text-center">
              <h3 className="font-serif text-xl text-blue mb-3">
                Not sure where to start?
              </h3>
              <p className="text-warm-gray text-sm mb-6 max-w-md mx-auto">
                Book a free consultation with our team. We&apos;ll listen to your
                child&apos;s story and help you understand whether tutoring,
                learning therapy, or an integrated approach is the right next step.
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-coral to-gold text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-coral/25 transition-all duration-300"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}
