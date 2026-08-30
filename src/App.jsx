import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Code2, Download, Mail, Palette, Smartphone, Sparkles } from 'lucide-react'
import ProfileImage from './components/ProfileImage.jsx'
import Section from './components/Section.jsx'
import TiltCard from './components/TiltCard.jsx'
import { GitHubIcon, LinkedInIcon } from './components/Icons.jsx'
import { experience, profile, projects, skills } from './data/portfolio.js'

const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Social', '#social'],
  ['Contact', '#contact'],
]

function CursorBackground() {
  const [cursor, setCursor] = useState({ x: 50, y: 32 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursor({
        x: Math.round((event.clientX / window.innerWidth) * 100),
        y: Math.round((event.clientY / window.innerHeight) * 100),
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  const offsetX = (cursor.x - 50) * 0.32
  const offsetY = (cursor.y - 50) * 0.24

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#060812]">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(125, 220, 255, 0.2), transparent 24rem), radial-gradient(circle at ${100 - cursor.x}% ${100 - cursor.y}%, rgba(215, 197, 154, 0.12), transparent 22rem), linear-gradient(to bottom, rgba(6, 8, 18, 0.18), #060812 92%)`,
        }}
        transition={{ type: 'spring', stiffness: 52, damping: 24, mass: 0.8 }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        animate={{ x: offsetX, y: offsetY }}
        transition={{ type: 'spring', stiffness: 38, damping: 22, mass: 1 }}
      />
      <motion.div
        className="absolute left-[8%] top-[18%] h-48 w-48 rounded-[42px] border border-cyanSoft/20 bg-cyanSoft/10 blur-sm"
        animate={{ x: offsetX * 1.6, y: offsetY * 1.2, rotate: offsetX * 0.2 }}
        transition={{ type: 'spring', stiffness: 42, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-[14%] right-[10%] h-64 w-64 rounded-full border border-white/10 bg-silver/10 blur-md"
        animate={{ x: offsetX * -1.4, y: offsetY * -1.1 }}
        transition={{ type: 'spring', stiffness: 36, damping: 22 }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(6,8,18,0.55))]" />
    </div>
  )
}

function SplashScreen({ onDone }) {
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const logoTimer = window.setTimeout(() => setShowLogo(true), 2000)
    const doneTimer = window.setTimeout(onDone, 4300)

    return () => {
      window.clearTimeout(logoTimer)
      window.clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -28, scale: 1.04 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[999] grid place-items-center overflow-hidden bg-black"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showLogo ? 1 : 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,220,255,0.08),transparent_28rem)]"
      />
      <motion.img
        src="splash.png"
        alt="Mohammed Sinan portfolio splash"
        initial={{ opacity: 0, scale: 0.86, filter: 'blur(18px)' }}
        animate={{
          opacity: showLogo ? 1 : 0,
          scale: showLogo ? 1 : 0.86,
          filter: showLogo ? 'blur(0px)' : 'blur(18px)',
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full object-contain p-8 sm:p-12"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: showLogo ? 1 : 0 }}
        transition={{ duration: 1.65, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 h-px w-40 origin-left bg-gradient-to-r from-cyanSoft via-white to-transparent"
      />
    </motion.div>
  )
}

function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-ink/55 px-4 py-3 shadow-premium backdrop-blur-xl">
        <a href="#home" className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-bold text-ink">
          MS
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-silver/70 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyanSoft/40 hover:bg-white/10">
            <GitHubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyanSoft/40 hover:bg-white/10">
            <LinkedInIcon className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  const shortcutCards = [
    {
      label: 'Projects',
      text: 'See my Flutter builds',
      href: '#projects',
      Icon: ArrowUpRight,
      className: 'border-cyanSoft/30 bg-cyanSoft/12 text-cyanSoft hover:bg-cyanSoft/18',
    },
    {
      label: 'Experience',
      text: 'Fixail internship',
      href: '#experience',
      Icon: BriefcaseBusiness,
      className: 'border-[#d7c59a]/35 bg-[#d7c59a]/12 text-[#f0d999] hover:bg-[#d7c59a]/18',
    },
    {
      label: 'Contact',
      text: 'Start a conversation',
      href: '#contact',
      Icon: Mail,
      className: 'border-white/15 bg-white/[0.065] text-white hover:bg-white/[0.095]',
    },
    {
      label: 'Download CV',
      text: 'Get my resume',
      href: 'resume.pdf',
      download: 'Mohammed_Sinan_Resume.pdf',
      Icon: Download,
      className: 'border-silver/25 bg-silver/12 text-silver hover:bg-silver/18',
    },
  ]

  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center px-5 pb-20 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyanSoft backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Modern Mobile Experiences
          </div>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-lg font-medium text-silver sm:text-xl">{profile.title}</p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-muted lg:mx-0">{profile.tagline}</p>
          <div className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-3 lg:mx-0">
            {shortcutCards.map(({ label, text, href, download, Icon, className }, index) => (
              <motion.a
                key={label}
                href={href}
                download={download}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 + index * 0.06, duration: 0.5, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group min-h-28 rounded-[24px] border p-4 text-left shadow-premium backdrop-blur-xl transition sm:p-5 ${className}`}
              >
                <span className="flex items-start justify-between gap-4">
                  <span>
                    <span className="block text-sm font-bold text-white sm:text-base">{label}</span>
                    <span className="mt-2 block text-xs leading-5 text-silver/62 sm:text-sm">{text}</span>
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-current/20 bg-black/18 transition group-hover:rotate-6 sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4" />
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
        <ProfileImage />
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Flutter developer focused on clean, reliable mobile products.">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
        <TiltCard className="p-8">
          <p className="text-lg leading-9 text-silver/80">
            I build scalable and maintainable Flutter applications with responsive UI, clean architecture,
            Firebase integration, REST APIs, and smooth user experiences. I enjoy turning practical ideas into
            polished mobile apps that feel fast, clear, and dependable.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Mobile UI', Smartphone],
              ['Clean Code', Code2],
              ['UI/UX', Palette],
            ].map(([label, Icon]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-silver">
                <Icon className="mb-3 h-5 w-5 text-cyanSoft" />
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </TiltCard>
        <div className="relative min-h-72">
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[38px] border border-cyanSoft/20 bg-cyanSoft/10 shadow-glow backdrop-blur-xl animate-float" />
          <div className="absolute left-[18%] top-[18%] h-24 w-24 rotate-12 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl animate-float-delayed" />
          <div className="absolute bottom-[12%] right-[16%] h-28 w-28 -rotate-12 rounded-full border border-white/10 bg-silver/10 backdrop-blur-xl animate-float-slow" />
        </div>
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Hands-on professional work in Flutter delivery.">
      <div className="grid gap-6">
        {experience.map((item, index) => (
          <TiltCard key={item.company} delay={index * 0.08} className="overflow-hidden p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <img src={item.logo} alt={`${item.company} logo`} className="h-20 w-20 rounded-3xl border border-white/10 bg-white object-cover shadow-premium" />
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyanSoft/20 bg-cyanSoft/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyanSoft">
                  <BriefcaseBusiness className="h-4 w-4" />
                  {item.type}
                </div>
                <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">{item.company}</h3>
                <p className="mt-2 text-base font-semibold text-silver">{item.role}</p>
                <p className="mt-4 max-w-3xl leading-7 text-muted">{item.summary}</p>
              </div>
              <p className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-silver lg:text-right">
                {item.period}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Core tools for cross-platform app development.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <TiltCard key={skill.name} delay={index * 0.06} className="p-5 text-center">
            <div className={`mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${skill.tone} text-lg font-black text-ink shadow-premium`}>
              {skill.name.slice(0, 2).toUpperCase()}
            </div>
            <h3 className="font-semibold text-white">{skill.name}</h3>
          </TiltCard>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected Flutter projects with real GitHub links.">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <TiltCard key={project.name} delay={index * 0.08} className="relative overflow-hidden p-6">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-cyanSoft/20 bg-cyanSoft/5" />
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyanSoft">
              Project {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="font-display text-3xl font-semibold text-white">{project.name}</h3>
            <p className="mt-4 min-h-24 leading-7 text-muted">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-medium text-silver">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 font-semibold text-white transition hover:border-cyanSoft/40 hover:bg-cyanSoft/10">
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </TiltCard>
        ))}
      </div>
    </Section>
  )
}

function Social() {
  return (
    <Section id="social" eyebrow="Social" title="Find me online.">
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          ['GitHub', profile.github, GitHubIcon],
          ['LinkedIn', profile.linkedin, LinkedInIcon],
        ].map(([label, href, Icon]) => (
          <TiltCard key={label} className="p-8">
            <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-5">
              <span className="flex items-center gap-4 text-2xl font-semibold text-white">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyanSoft">
                  <Icon className="h-6 w-6" />
                </span>
                {label}
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted" />
            </a>
          </TiltCard>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build a beautiful mobile experience.">
      <TiltCard className="p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-silver transition hover:border-cyanSoft/30">
            <span className="text-sm text-muted">Email</span>
            <p className="mt-2 font-semibold text-white">{profile.email}</p>
          </a>
          <a href={`tel:${profile.phone.replaceAll(' ', '')}`} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-silver transition hover:border-cyanSoft/30">
            <span className="text-sm text-muted">Phone</span>
            <p className="mt-2 font-semibold text-white">{profile.phone}</p>
          </a>
        </div>
      </TiltCard>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-sm text-muted sm:flex-row">
        <p>Copyright 2026 Mohammed Sinan. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <CursorBackground />
      <motion.div
        animate={{
          opacity: showSplash ? 0.35 : 1,
          scale: showSplash ? 1.015 : 1,
          filter: showSplash ? 'blur(10px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Social />
        <Contact />
        <Footer />
      </motion.div>
      <AnimatePresence>{showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}</AnimatePresence>
    </main>
  )
}
