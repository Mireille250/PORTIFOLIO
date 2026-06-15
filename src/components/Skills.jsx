import SectionHeader from './SectionHeader'

const groups = [
  {
    icon:  '⚙️',
    title: 'Backend Development',
    tags:  ['Java', 'Node.js', 'Spring Boot', 'REST APIs', 'Git', 'GitHub', 'JavaScript'],
  },
  {
    icon:  '🌐',
    title: 'Web Fundamentals',
    tags:  ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Problem Solving', 'Debugging'],
  },
  {
    icon:  '🛠️',
    title: 'Tools & Soft Skills',
    tags:  ['VS Code', 'Postman', 'Figma', 'Research & Docs', 'Team Collaboration', 'Communication'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 bg-blue-50/60 dark:bg-[#0D1525]">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <SectionHeader label="My Expertise" title="Skills & Tools" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <div
              key={g.title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="fade-up bg-white dark:bg-cobalt/30 border border-gray-100 dark:border-cobalt/60 rounded-2xl p-7 hover:border-gold dark:hover:border-gold hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{g.icon}</div>
              <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-5">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.tags.map(t => (
                  <span key={t}
                    className="bg-gold/10 border border-gold/20 text-yellow-800 dark:text-gold text-xs font-medium px-3 py-1 rounded-full hover:bg-gold/20 hover:border-gold transition-all duration-150 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
