import SectionHeader from './SectionHeader'

const CERTS = [
  {
    icon:  '🌐',
    title: 'Web Fundamentals',
    org:   'IRO Rwanda',
    year:  '2025 · Kigali',
  },
  {
    icon:  '⚙️',
    title: 'Backend Development',
    org:   'IRO Rwanda',
    year:  '2026 · Kigali',
  },
  {
    icon:  '🏆',
    title: 'DSE Hackathon',
    org:   'DSE Rwanda',
    year:  '2026 · Participant',
  },
  {
    icon:  '👩‍💻',
    title: 'SheCode Bootcamp',
    org:   'SheCode Africa',
    year:  'Software Development Track',
  },
  {
    icon:  '🎓',
    title: 'University Graduate',
    org:   'SJITC Nyamirambo',
    year:  'B.Tech Construction Technology · 2024–present',
  },
  {
    icon:  '🏗️',
    title: 'A2 Masonry',
    org:   'APEKI TUMBA TSS · Rulindo',
    year:  'Jan 2020 – Jul 2023',
  },
]

export default function Certs() {
  return (
    <section id="certs" className="py-24 px-5 bg-blue-50/60 dark:bg-[#0D1525]">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <SectionHeader label="Recognition" title="Certifications & Education" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {CERTS.map((c, i) => (
            <div
              key={c.title}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="fade-up relative group bg-white dark:bg-cobalt/30 border border-gray-100 dark:border-cobalt/60 rounded-2xl p-7 text-center overflow-hidden hover:border-gold dark:hover:border-gold hover:-translate-y-1 transition-all duration-200"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
              <div className="text-4xl mb-3">{c.icon}</div>
              <h3 className="font-display text-base font-bold text-gray-900 dark:text-white mb-1">{c.title}</h3>
              <p className="text-gold text-sm font-medium mb-1">{c.org}</p>
              <p className="text-gray-400 dark:text-blue-200/40 text-xs">{c.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
