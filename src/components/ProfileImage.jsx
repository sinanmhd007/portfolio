import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProfileImage() {
  const [imageSrc, setImageSrc] = useState('profile.jpg')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mx-auto flex h-[390px] w-full max-w-[380px] items-center justify-center [perspective:1200px] sm:h-[470px] sm:max-w-[450px]"
    >
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.34, 0.62, 0.34] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute h-[92%] w-[92%] rounded-full bg-cyanSoft/12 blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute h-[86%] w-[86%] rounded-full border border-dashed border-cyanSoft/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute h-[104%] w-[72%] rounded-full border border-white/12"
      />
      <motion.div
        animate={{ x: [-16, 18, -16], y: [8, -10, 8] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-6 top-16 h-24 w-24 rounded-[28px] border border-cyanSoft/20 bg-cyanSoft/10 backdrop-blur-xl"
      />
      <motion.div
        animate={{ x: [18, -14, 18], y: [-6, 14, -6] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-4 bottom-20 h-28 w-28 rounded-full border border-[#d7c59a]/20 bg-[#d7c59a]/10 backdrop-blur-xl"
      />
      <div className="absolute bottom-8 h-24 w-80 rounded-full bg-cyanSoft/14 blur-2xl" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        whileHover={{ rotateY: -10, rotateX: 6, y: -16, scale: 1.02 }}
        transition={{ y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }, default: { type: 'spring', stiffness: 170, damping: 18 } }}
        className="relative z-10 aspect-[0.78] w-[74%] overflow-hidden rounded-[34px] border border-white/15 bg-gradient-to-br from-white/16 to-white/[0.035] p-3 shadow-premium backdrop-blur-xl"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-24 bg-[conic-gradient(from_90deg,transparent,rgba(125,220,255,0.5),transparent,rgba(215,197,154,0.28),transparent)] opacity-70"
        />
        <div className="absolute inset-[1px] rounded-[33px] bg-panel/80" />
        <img
          src={imageSrc}
          alt="Mohammed Sinan profile"
          className="relative z-10 h-full w-full rounded-[24px] object-cover grayscale"
          onError={() => setImageSrc('profile.jpg')}
        />
        <div className="pointer-events-none absolute inset-3 z-20 rounded-[24px] bg-gradient-to-t from-ink/78 via-transparent to-white/10" />
        <motion.div
          animate={{ x: ['-140%', '140%'] }}
          transition={{ duration: 3.4, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-y-3 z-30 w-24 rotate-12 bg-gradient-to-r from-transparent via-white/24 to-transparent blur-sm"
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-16 z-20 rounded-2xl border border-white/10 bg-panel/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-silver shadow-premium backdrop-blur-xl"
      >
        Flutter
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 left-0 z-20 rounded-2xl border border-cyanSoft/20 bg-panel/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyanSoft shadow-premium backdrop-blur-xl"
      >
        Cross Platform
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-5 right-7 z-20 rounded-2xl border border-[#d7c59a]/20 bg-panel/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7c59a] shadow-premium backdrop-blur-xl"
      >
        UI Focus
      </motion.div>
    </motion.div>
  )
}
