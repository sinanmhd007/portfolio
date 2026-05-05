import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative z-10 px-5 py-20 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mb-10"
          >
            {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyanSoft">{eyebrow}</p>}
            {title && <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
