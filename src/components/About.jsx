import SectionHeader from './SectionHeader'

const highlights = [
  {
    icon: '⚙️',
    title: 'Backend Development',
    desc:  'Building scalable systems with Java, Node.js, Spring Boot and REST APIs.',
  },
  {
    icon: '🏗️',
    title: 'Construction Tech',
    desc:  'Bridging built environments and digital innovation from both sides.',
  },
  {
    icon: '💡',
    title: 'Innovation Mindset',
    desc:  'Hackathon participant always exploring fresh approaches to hard problems.',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    desc:  'Strong communicator fluent in English, Kinyarwanda, and French.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-5 bg-white dark:bg-navy">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Real graduation photo */}
        <div className="relative max-w-xs mx-auto md:mx-0 fade-up">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-xl">
            <img
              src="/photo.jpg"
              alt="Mireille Umuhire at graduation"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gold text-navy text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg">
            🎓 SheCode Graduate
          </div>
        </div>

        {/* Text */}
        <div className="fade-up">
          <SectionHeader label="About Me" title="Where Construction Meets Code" />

          <p className="text-gray-500 dark:text-blue-200/60 leading-relaxed mb-4 text-[0.97rem]">
            I'm Mireille Umuhire, a motivated and detail-oriented aspiring Backend Software Engineer
            currently pursuing a Bachelor of Technology in Construction Technology at SJITC Nyamirambo,
            Kigali. I bring a unique perspective — having trained in Masonry at APEKI TUMBA TSS before
            pivoting fully into software.
          </p>
          <p className="text-gray-500 dark:text-blue-200/60 leading-relaxed mb-4 text-[0.97rem]">
            I have hands-on experience in backend development with Java, Node.js, and Spring Boot,
            and I've sharpened my skills through bootcamps like SheCode and IRO Rwanda's Web Fundamentals
            and Backend Development tracks. I also participated in the DSE Hackathon in 2026.
          </p>
          <p className="text-gray-500 dark:text-blue-200/60 leading-relaxed mb-8 text-[0.97rem]">
            I thrive on building scalable backend systems, solving real-world problems through technology,
            and continuously learning new tools and frameworks — all while collaborating with great teams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map(h => (
              <div
                key={h.title}
                className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-cobalt/30 border border-gray-100 dark:border-cobalt/50 rounded-xl hover:border-gold dark:hover:border-gold transition-colors duration-200"
              >
                <div className="w-9 h-9 bg-gold/10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                  {h.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-0.5">{h.title}</h4>
                  <p  className="text-xs text-gray-500 dark:text-blue-200/50 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
