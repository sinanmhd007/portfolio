import { motion } from 'framer-motion'

export default function TiltCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ y: -10, rotateX: 4, rotateY: -5, scale: 1.015 }}
      className={`group transform-gpu rounded-2xl border border-white/10 bg-white/[0.055] shadow-premium backdrop-blur-xl transition-colors duration-300 hover:border-cyanSoft/35 hover:shadow-glow ${className}`}
    >
      {children}
    </motion.div>
  )
}
