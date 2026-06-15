import { useState, useEffect, createContext, useContext } from 'react'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Certs     from './components/Certs'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export const ThemeCtx = createContext(null)
export const useTheme = () => useContext(ThemeCtx)

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  /* Intersection observer for .fade-up elements */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <ThemeCtx.Provider value={{ dark, setDark }}>
      <div className="font-body bg-white dark:bg-navy text-gray-900 dark:text-blue-50 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certs />
        <Contact />
        <Footer />
      </div>
    </ThemeCtx.Provider>
  )
}
