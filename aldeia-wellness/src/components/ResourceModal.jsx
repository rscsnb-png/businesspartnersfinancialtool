import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'How much do your services cost?',
    a: 'Our fees depend on each child’s unique needs. After an initial consultation, we assess what support is required and provide a tailored quote. This ensures you only pay for the services your child actually needs — no unnecessary extras.',
  },
  {
    q: 'How do I know if my child needs learning therapy or tutoring?',
    a: 'Tutoring helps when your child needs extra practice with specific content. Learning therapy is needed when the underlying skills — like memory, processing, or attention — are making learning difficult. If your child has had tutoring but progress doesn’t stick, learning therapy may be the missing piece. We can help you work out which is right.',
  },
  {
    q: 'Do you work with mainstream schools?',
    a: 'Yes. We support children in mainstream education by working alongside their school. We can liaise with teachers, contribute to IEPs, and provide therapeutic support that complements what happens in the classroom.',
  },
  {
    q: 'Can I combine homeschool support with therapy?',
    a: 'Absolutely — this is one of our core strengths. We design integrated pathways where education and therapy reinforce each other, so your child gets a seamless, holistic experience whether they learn at home or in school.',
  },
  {
    q: 'What does an assessment involve?',
    a: 'Our holistic assessment looks at your child across educational, therapeutic, and social-emotional domains. It typically includes observation, standardised assessments, and conversation with you as parents. You’ll receive a comprehensive written report with clear recommendations.',
  },
  {
    q: 'Do you offer online or remote sessions?',
    a: 'Yes. Many of our services can be delivered online, making support accessible wherever you are. We also offer hybrid models — some sessions in-person, some remote — depending on your family’s needs.',
  },
  {
    q: 'What ages do you work with?',
    a: 'We work with children from early childhood through adolescence. Our team is experienced with learners at every developmental stage, and we adapt our approach accordingly.',
  },
  {
    q: 'How often will my child need sessions?',
    a: 'This depends on your child’s needs and goals. Some children benefit from weekly sessions, while others need more intensive support initially that tapers over time. We’ll recommend a frequency during your consultation and adjust as your child progresses.',
  },
  {
    q: 'How is Aldeia different from seeing individual therapists?',
    a: 'When you see separate specialists, they rarely communicate with each other. At Aldeia, your child’s entire team — educators, therapists, and specialists — collaborates in real time. This integrated approach means progress in one area reinforces progress in others.',
  },
  {
    q: 'Is the initial consultation really free?',
    a: 'Yes, completely free with no obligation. It’s a 30-minute conversation where we learn about your child and your family’s goals, and you can ask us anything. We’ll let you know honestly whether we’re the right fit.',
  },
]

const parentGuides = [
  {
    title: 'Recognising When Your Child Needs More Than Tutoring',
    description: 'Your child works hard but grades don’t reflect the effort. This guide helps you identify the signs that underlying learning barriers may be at play — and what to do next.',
    tags: ['Learning Differences', 'Early Intervention'],
  },
  {
    title: 'Supporting Your Child’s Emotional Wellbeing at Home',
    description: 'School-related frustration often spills into home life. Practical strategies for building resilience, managing meltdowns, and creating a calm learning environment.',
    tags: ['Emotional Support', 'Home Strategies'],
  },
  {
    title: 'A Parent’s Introduction to Sensory Processing',
    description: 'Why does your child cover their ears in busy places? Why do they chew their shirt collar? Understanding sensory processing can unlock better support for your child.',
    tags: ['Sensory Integration', 'Understanding Behaviour'],
  },
  {
    title: 'How to Advocate for Your Child at School',
    description: 'Navigating IEPs, meetings with teachers, and school accommodations can feel overwhelming. This guide gives you the language and confidence to advocate effectively.',
    tags: ['Mainstream Support', 'IEPs'],
  },
  {
    title: 'Getting Started with Homeschooling: What You Need to Know',
    description: 'Thinking about homeschooling? A practical overview of legal requirements, curriculum options, and how to build structure without losing flexibility.',
    tags: ['Homeschooling', 'Getting Started'],
  },
]

const research = [
  {
    title: 'The Case for Integrated Therapy Models',
    description: 'Research consistently shows that multidisciplinary collaboration produces better outcomes than isolated interventions. When therapists and educators share insights and align goals, children progress faster and retain skills longer.',
    source: 'Journal of Interprofessional Care, 2022',
  },
  {
    title: 'Early Intervention and Long-Term Outcomes',
    description: 'Studies demonstrate that children who receive targeted therapeutic support before age 8 show significantly better academic and social outcomes by adolescence. Early identification of learning differences is key.',
    source: 'Developmental Psychology Review, 2023',
  },
  {
    title: 'Learning Therapy vs. Tutoring: What the Evidence Says',
    description: 'While tutoring addresses content gaps, learning therapy targets the cognitive and perceptual foundations that make learning possible. Research shows that addressing root causes leads to more sustainable academic improvement.',
    source: 'Educational Psychology in Practice, 2021',
  },
  {
    title: 'The Impact of Family-Centred Practice',
    description: 'When families are positioned as active partners in their child’s therapeutic journey — rather than passive recipients — intervention outcomes improve significantly. Parental involvement is one of the strongest predictors of success.',
    source: 'Child Development Perspectives, 2023',
  },
  {
    title: 'Sensory Integration and Academic Performance',
    description: 'Children with unaddressed sensory processing difficulties often struggle academically despite adequate intelligence. Sensory integration therapy has been shown to improve attention, self-regulation, and classroom participation.',
    source: 'American Journal of Occupational Therapy, 2022',
  },
]

const events = [
  {
    title: 'Understanding Your Child’s Learning Profile',
    type: 'Online Workshop',
    date: 'June 2026',
    description: 'A free workshop for parents to learn how to identify learning styles, strengths, and areas where your child may need additional support.',
  },
  {
    title: 'Homeschool Parent Coffee Morning',
    type: 'In-Person · Western Cape',
    date: 'Monthly',
    description: 'Connect with other homeschooling families, share experiences, and hear from Aldeia practitioners on topics that matter to you.',
  },
  {
    title: 'Sensory-Friendly Playgroup',
    type: 'In-Person · Gauteng',
    date: 'Fortnightly',
    description: 'A safe, structured play environment for children with sensory processing needs. Facilitated by our occupational therapy team.',
  },
  {
    title: 'Navigating the IEP Process',
    type: 'Online Webinar',
    date: 'July 2026',
    description: 'Practical guidance on how to prepare for, participate in, and follow up on Individual Education Plan meetings with your child’s school.',
  },
]

const pages = {
  'FAQs': function FAQsPage() {
    return (
      <>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold tracking-wide uppercase mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-blue leading-snug">
            Everything you need to know
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group bg-beige rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-serif text-lg text-blue">{faq.q}</span>
                <svg className="w-5 h-5 text-warm-gray flex-shrink-0 group-open:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </summary>
              <div className="px-6 pb-6 -mt-2">
                <p className="text-warm-gray leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
        <div className="bg-gradient-to-r from-blue to-blue-light rounded-2xl p-8 mt-10 text-center text-white">
          <h3 className="font-serif text-xl mb-3">Still have questions?</h3>
          <p className="text-white/70 text-sm mb-6">Book a free consultation and we&apos;ll answer everything in person.</p>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300">
            Book a Free Consultation
          </a>
        </div>
      </>
    )
  },

  'Parent Guides': function ParentGuidesPage() {
    return (
      <>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/10 text-sage-dark text-xs font-semibold tracking-wide uppercase mb-4">
            Parent Guides
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-blue leading-snug mb-4">
            Practical resources for your family
          </h2>
          <p className="text-warm-gray max-w-lg mx-auto">
            Free guides written by our team to help you better understand and support your child.
          </p>
        </div>
        <div className="space-y-4">
          {parentGuides.map((guide) => (
            <div key={guide.title} className="bg-beige rounded-2xl p-6 lg:p-8">
              <h3 className="font-serif text-xl text-blue mb-2">{guide.title}</h3>
              <p className="text-warm-gray leading-relaxed mb-4">{guide.description}</p>
              <div className="flex flex-wrap gap-2">
                {guide.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-sage/10 text-sage-dark font-medium">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-beige rounded-2xl p-8 mt-8 text-center">
          <h3 className="font-serif text-xl text-blue mb-3">Want personalised guidance?</h3>
          <p className="text-warm-gray text-sm mb-6 max-w-md mx-auto">
            Our team can provide advice specific to your child&apos;s needs. Start with a free consultation.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-coral to-gold text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-coral/25 transition-all duration-300">
            Book a Free Consultation
          </a>
        </div>
      </>
    )
  },

  'Research & Evidence': function ResearchPage() {
    return (
      <>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue/10 text-blue text-xs font-semibold tracking-wide uppercase mb-4">
            Research & Evidence
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-blue leading-snug mb-4">
            The science behind our approach
          </h2>
          <p className="text-warm-gray max-w-lg mx-auto">
            Our methods are grounded in current research. Here are some of the key findings that inform how we work.
          </p>
        </div>
        <div className="space-y-4">
          {research.map((item) => (
            <div key={item.title} className="bg-beige rounded-2xl p-6 lg:p-8 border-l-4 border-blue">
              <h3 className="font-serif text-xl text-blue mb-2">{item.title}</h3>
              <p className="text-warm-gray leading-relaxed mb-3">{item.description}</p>
              <span className="text-xs text-warm-gray/60 italic">{item.source}</span>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-blue to-blue-light rounded-2xl p-8 mt-10 text-white">
          <h3 className="font-serif text-xl mb-3 text-center">Evidence-based, child-centred</h3>
          <p className="text-white/70 text-sm text-center max-w-md mx-auto mb-6">
            Every intervention we recommend is backed by research and tailored to your child. Talk to our team to learn more.
          </p>
          <div className="text-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300">
              Speak to Our Team
            </a>
          </div>
        </div>
      </>
    )
  },

  'Community Events': function EventsPage() {
    return (
      <>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral/10 text-coral text-xs font-semibold tracking-wide uppercase mb-4">
            Community Events
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-blue leading-snug mb-4">
            Connect, learn, and grow together
          </h2>
          <p className="text-warm-gray max-w-lg mx-auto">
            Workshops, support groups, and events for families and educators.
          </p>
        </div>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.title} className="bg-beige rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-gold flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl text-blue mb-1">{event.title}</h3>
                <div className="flex flex-wrap gap-3 mb-2">
                  <span className="text-xs font-medium text-coral">{event.type}</span>
                  <span className="text-xs text-warm-gray">{event.date}</span>
                </div>
                <p className="text-warm-gray text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-beige rounded-2xl p-8 mt-8 text-center">
          <h3 className="font-serif text-xl text-blue mb-3">Want to attend an event?</h3>
          <p className="text-warm-gray text-sm mb-6 max-w-md mx-auto">
            Get in touch to register for upcoming events or suggest topics you&apos;d like us to cover.
          </p>
          <a href="mailto:info@aldeiawellness.com" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-coral to-gold text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-coral/25 transition-all duration-300">
            Email Us to Register
          </a>
        </div>
      </>
    )
  },
}

export default function ResourceModal({ page, onClose }) {
  const PageContent = pages[page]
  if (!PageContent) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-charcoal/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto my-8 lg:my-16 bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-coral via-gold to-sage" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-beige/80 backdrop-blur-sm flex items-center justify-center text-charcoal hover:bg-beige transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-8 lg:px-16 py-10 lg:py-14">
          <PageContent />
        </div>
      </motion.div>
    </motion.div>
  )
}
