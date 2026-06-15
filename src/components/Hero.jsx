import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-navy relative flex items-center overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.07]" />
      <div className="absolute -right-20 -top-20 w-[500px] h-[500px] rounded-full border border-gold/10 pointer-events-none" />
      <div className="absolute -right-5  -top-5  w-[370px] h-[370px] rounded-full border border-gold/07 pointer-events-none" />
      <div className="absolute -left-40 bottom-0  w-[400px] h-[400px] rounded-full border border-gold/05 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div>
          <motion.div {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full pulse-dot" />
            Open to Opportunities
          </motion.div>

          <motion.h1 {...fadeUp(0.2)}
            className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.08] mb-4"
          >
            Mireille<br />
            <span className="text-gold">Umuhire</span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)}
            className="text-white/50 text-xs uppercase tracking-[0.12em] mb-5"
          >
            Backend Software Engineer &nbsp;|&nbsp; Construction Technology Student
          </motion.p>

          <motion.p {...fadeUp(0.4)}
            className="text-white/70 text-[1.05rem] leading-relaxed mb-8 max-w-[460px]"
          >
            "Passionate about building scalable backend systems and digital solutions
            that solve real-world problems through technology and innovation."
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-10">
            <a href="#projects"
              className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-lg text-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5"
            >
              View Projects <FiArrowRight size={16} />
            </a>
            <a href="/cv.pdf" download="Mireille_Umuhire_CV.pdf"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-6 py-3 rounded-lg text-sm hover:border-gold hover:text-gold transition-all duration-200 hover:-translate-y-0.5"
            >
              <FiDownload size={16} /> Download CV
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-6 py-3 rounded-lg text-sm hover:border-gold hover:text-gold transition-all duration-200 hover:-translate-y-0.5"
            >
              <FiMail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { num: '10+', lbl: 'Tech Skills'   },
              { num: '3+',  lbl: 'Projects'       },
              { num: '3',   lbl: 'Certifications' },
              { num: '1',   lbl: 'Hackathon'      },
            ].map(s => (
              <div key={s.lbl}
                className="bg-white/[0.04] border border-gold/10 rounded-xl p-4 text-center"
              >
                <div className="font-display text-2xl font-bold text-gold">{s.num}</div>
                <div className="text-white/40 text-[0.68rem] uppercase tracking-wider mt-1">{s.lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — real graduation photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="flex justify-center items-center"
        >
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-gold/40 p-2 relative">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/photo.jpg"
                alt="Mireille Umuhire — Graduation"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="absolute bottom-4 right-4 w-5 h-5 bg-gold rounded-full border-2 border-navy" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 text-[0.65rem] uppercase tracking-[0.1em]">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent scroll-arrow" />
      </div>
    </section>
  )
}
