import { useState, useEffect } from 'react'
import { useTheme } from '../App'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'About',       href: '#about'    },
  { label: 'Skills',      href: '#skills'   },
  { label: 'Projects',    href: '#projects' },
  { label: 'Achievements',href: '#certs'    },
  { label: 'Contact',     href: '#contact'  },
]

export default function Navbar() {
  const { dark, setDark } = useTheme()
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-navy'
      } border-b border-gold/10`}>
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* Brand */}
          <a href="#home" className="font-display text-xl font-bold text-white tracking-wide">
            M.<span className="text-gold">U</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-7 list-none">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/70 hover:text-gold text-xs font-medium uppercase tracking-widest transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-200"
              aria-label="Toggle theme"
            >
              {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white"
              aria-label="Menu"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-navy/97 border-b border-gold/10 px-5 py-4 flex flex-col gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-white/80 hover:text-gold py-3 border-b border-white/5 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
