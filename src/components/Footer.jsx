import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/10 py-10 px-5 text-center">
      <p className="font-display text-lg font-bold text-white mb-1">
        Mireille <span className="text-gold">Umuhire</span>
      </p>
      <p className="text-white/40 text-xs mb-5">
        Backend Software Engineer · Construction Technology · Kigali, Rwanda 🇷🇼
      </p>

      <div className="flex justify-center gap-4 mb-6">
        {[
          { href: 'mailto:umuhiremireille7@gmail.com', icon: <FiMail size={17} />, label: 'Email' },
          { href: 'tel:+250781414668',                 icon: <FiPhone size={17} />, label: 'Phone' },
          { href: 'https://www.linkedin.com/in/ihimbazwe-umuhire-mireille-b35a45398', icon: <FiLinkedin size={17} />, label: 'LinkedIn' },
          { href: 'https://github.com/Mireille250', icon: <FiGithub size={17} />, label: 'GitHub' },
        ].map(s => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={s.label}
            className="w-9 h-9 rounded-full border border-gold/20 text-white/40 hover:text-gold hover:border-gold flex items-center justify-center transition-all duration-200"
          >
            {s.icon}
          </a>
        ))}
      </div>

      <p className="text-white/25 text-xs">
        © {new Date().getFullYear()} Mireille Umuhire. Built with passion &amp; purpose.
      </p>
    </footer>
  )
}
