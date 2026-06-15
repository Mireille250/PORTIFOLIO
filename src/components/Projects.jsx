import SectionHeader from './SectionHeader'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const PROJECTS = [
  {
    id:       'build-connect',
    featured: true,
    name:     'Build Connect',
    badge:    '⭐ Featured',
    desc:     'A digital platform connecting clients with construction professionals and services. Build Connect streamlines finding, vetting, and hiring qualified contractors — bringing transparency and efficiency to an industry still relying heavily on word-of-mouth.',
    features: [
      '🔍 Smart contractor search',
      '📋 Project listing & bidding',
      '⭐ Review & rating system',
      '💬 In-app messaging',
      '🔒 Secure authentication',
      '📱 Mobile responsive',
    ],
    tech:     ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'REST API', 'Figma'],
    github:   'https://github.com/Mireille250/BuildConnectRwanda',
    demo:     '#',
    gradient: 'from-cobalt to-[#0D1A3A]',
    label:    'BUILD CONNECT',
  },
  {
    id:       'stockr',
    featured: true,
    name:     'Stockr',
    badge:    '🆕 New',
    desc:     'A smart business management platform built for shop owners. Stockr simplifies day-to-day inventory tracking, sales recording, and automatic tax calculation — empowering small and medium businesses to stay organised, compliant, and profitable.',
    features: [
      '📦 Inventory management',
      '💰 Sales & revenue tracking',
      '🧾 Automatic tax calculation',
      '📊 Business analytics dashboard',
      '🔔 Low-stock alerts',
      '📄 Tax report generation',
      '👥 Multi-user access',
      '📱 Mobile friendly',
    ],
    tech:     ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'REST API', 'Node.js'],
    github:   'https://github.com/Yves-Developer/stockr',
    demo:     '#',
    gradient: 'from-[#0a1f0a] to-[#0f3320]',
    label:    'STOCKR',
  },
  {
    id:       'portfolio',
    featured: false,
    name:     'Personal Portfolio',
    desc:     'This responsive portfolio website — a showcase of design sensibility and frontend skills built with React and Tailwind CSS.',
    features: [],
    tech:     ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github:   '#',
    demo:     '#',
    gradient: 'from-[#0D1A3A] to-cobalt',
    label:    'PORTFOLIO',
  },
  {
    id:       'coming-soon',
    featured: false,
    name:     'Next Project 🚧',
    desc:     'Currently in design phase — stay tuned for an exciting new application. Innovation never sleeps.',
    features: [],
    tech:     ['TBD'],
    github:   null,
    demo:     null,
    gradient: 'from-[#1a1a0a] to-[#2a2a10]',
    label:    'COMING SOON',
  },
]

function ProjectCard({ project }) {
  const { featured, name, badge, desc, features, tech, github, demo, gradient, label } = project
  return (
    <div
      className={`fade-up bg-white dark:bg-cobalt/30 border border-gray-100 dark:border-cobalt/60 rounded-2xl overflow-hidden hover:border-gold dark:hover:border-gold hover:-translate-y-1 transition-all duration-200 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Image / banner */}
      <div
        className={`relative w-full ${featured ? 'h-56' : 'h-44'} bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 blueprint-grid opacity-[0.12]" />

        {/* Stockr-specific decorative icons */}
        {project.id === 'stockr' && (
          <div className="absolute inset-0 flex items-center justify-around px-8 opacity-10 text-6xl select-none pointer-events-none">
            <span>📦</span><span>🧾</span><span>📊</span>
          </div>
        )}

        <span className="font-display text-2xl font-bold text-gold/40 tracking-widest z-10 px-4 text-center">
          {label}
        </span>

        {badge && (
          <span className={`absolute top-4 left-4 text-navy text-xs font-bold px-3 py-1 rounded-full z-10 ${
            project.id === 'stockr' ? 'bg-emerald-400' : 'bg-gold'
          }`}>
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
        <p className="text-gray-500 dark:text-blue-200/60 text-sm leading-relaxed mb-4">{desc}</p>

        {features.length > 0 && (
          <div className="mb-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-gray-700 dark:text-white/60 mb-2">Key Features</p>
            <div className="flex flex-wrap gap-1.5">
              {features.map(f => (
                <span key={f}
                  className="text-xs bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/8 text-gray-500 dark:text-blue-200/50 px-2.5 py-0.5 rounded-full"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mb-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-gray-700 dark:text-white/60 mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {tech.map(t => (
              <span key={t}
                className="text-xs bg-gold/10 text-yellow-800 dark:text-gold font-semibold px-2.5 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {demo && (
            <a href={demo}
              className="inline-flex items-center gap-1.5 bg-gold text-navy font-semibold text-xs px-4 py-2 rounded-lg hover:bg-gold-light transition-all duration-150"
            >
              <FiExternalLink size={13} /> Live Demo
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-gray-200 dark:border-white/15 text-gray-600 dark:text-white/60 font-medium text-xs px-4 py-2 rounded-lg hover:border-gold hover:text-gold dark:hover:text-gold transition-all duration-150"
            >
              <FiGithub size={13} /> GitHub
            </a>
          )}
          {!demo && !github && (
            <a href="#contact"
              className="inline-flex items-center gap-1.5 border border-gray-200 dark:border-white/15 text-gray-500 dark:text-white/50 text-xs px-4 py-2 rounded-lg hover:border-gold hover:text-gold transition-all duration-150"
            >
              📬 Get Notified
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 bg-white dark:bg-navy">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <SectionHeader label="My Work" title="Featured Projects" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
