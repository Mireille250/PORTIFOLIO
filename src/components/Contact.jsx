import { useState } from 'react'
import SectionHeader from './SectionHeader'
import { FiMail, FiLinkedin, FiGithub, FiPhone, FiSend } from 'react-icons/fi'

const CONTACT_LINKS = [
  {
    icon:  <FiMail size={18} />,
    label: 'Email',
    value: 'umuhiremireille7@gmail.com',
    href:  'mailto:umuhiremireille7@gmail.com',
  },
  {
    icon:  <FiPhone size={18} />,
    label: 'Phone',
    value: '+250 781 414 668',
    href:  'tel:+250781414668',
  },
  {
    icon:  <FiLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'ihimbazwe-umuhire-mireille',
    href:  'https://www.linkedin.com/in/ihimbazwe-umuhire-mireille-b35a45398',
  },
  {
    icon:  <FiGithub size={18} />,
    label: 'GitHub',
    value: 'github.com/mireille-umuhire',
    href:  'https://github.com/mireille-umuhire',
  },
]

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handle = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  const inputCls =
    'w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-navy border border-gray-200 dark:border-cobalt/70 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 text-sm focus:outline-none focus:border-gold dark:focus:border-gold transition-colors duration-200'

  return (
    <section id="contact" className="py-24 px-5 bg-white dark:bg-navy">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <SectionHeader label="Get In Touch" title="Let's Build Something" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* Left — info */}
          <div className="fade-up">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to collaborate?
            </h3>
            <p className="text-gray-500 dark:text-blue-200/60 text-sm leading-relaxed mb-8">
              Whether you have a project, a backend role, or just want to connect — I'm always
              open. Based in Kigali, Rwanda 🇷🇼, and available remotely.
            </p>
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-cobalt/30 border border-gray-100 dark:border-cobalt/60 rounded-xl hover:border-gold dark:hover:border-gold hover:translate-x-1 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                    {l.icon}
                  </div>
                  <div>
                    <p className="text-[0.7rem] text-gray-400 dark:text-white/35 uppercase tracking-widest">{l.label}</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white break-all">{l.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="fade-up bg-white dark:bg-cobalt/20 border border-gray-100 dark:border-cobalt/60 rounded-2xl p-7">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-3">
                <span className="text-5xl">✅</span>
                <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white">Message Sent!</h4>
                <p className="text-gray-500 dark:text-blue-200/50 text-sm">Thanks for reaching out — I'll be in touch soon.</p>
                <button onClick={() => setStatus('idle')} className="mt-2 text-gold text-sm underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[0.72rem] font-semibold uppercase tracking-widest text-gray-700 dark:text-white/60 mb-1.5">Name</label>
                    <input name="name" value={form.name} onChange={handle} placeholder="Your name" required className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[0.72rem] font-semibold uppercase tracking-widest text-gray-700 dark:text-white/60 mb-1.5">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" required className={inputCls} />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-[0.72rem] font-semibold uppercase tracking-widest text-gray-700 dark:text-white/60 mb-1.5">Subject</label>
                  <input name="subject" value={form.subject} onChange={handle} placeholder="What's this about?" required className={inputCls} />
                </div>
                <div className="mb-5">
                  <label className="block text-[0.72rem] font-semibold uppercase tracking-widest text-gray-700 dark:text-white/60 mb-1.5">Message</label>
                  <textarea name="message" rows={5} value={form.message} onChange={handle} placeholder="Tell me about your project or opportunity..." required className={`${inputCls} resize-none`} />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 bg-gold text-navy font-bold py-3 rounded-lg text-sm hover:bg-gold-light disabled:opacity-70 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {status === 'sending' ? 'Sending…' : <><FiSend size={15} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
