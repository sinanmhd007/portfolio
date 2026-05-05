import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Mail, Palette, Smartphone, Sparkles } from 'lucide-react'
import ProfileImage from './components/ProfileImage.jsx'
import Scene from './components/Scene.jsx'
import Section from './components/Section.jsx'
import TiltCard from './components/TiltCard.jsx'
import { GitHubIcon, LinkedInIcon } from './components/Icons.jsx'
import { profile, projects, skills } from './data/portfolio.js'

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Social', '#social'],
  ['Contact', '#contact'],
]

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
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-silver px-6 py-3 font-semibold text-ink shadow-premium transition hover:-translate-y-1 hover:bg-white">
              View Projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyanSoft/40">
              Contact Me <Mail className="h-4 w-4" />
            </a>
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
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <Scene />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_top,rgba(125,220,255,0.12),transparent_34rem),linear-gradient(to_bottom,rgba(6,8,18,0.25),#060812_92%)]" />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Social />
      <Contact />
      <Footer />
    </main>
  )
}
