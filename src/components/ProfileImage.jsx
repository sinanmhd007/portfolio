import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProfileImage() {
  const [imageSrc, setImageSrc] = useState('/profile.jpeg')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mx-auto flex h-[360px] w-full max-w-[360px] items-center justify-center sm:h-[430px] sm:max-w-[430px]"
    >
      <div className="absolute h-[88%] w-[88%] rounded-full border border-cyanSoft/20 bg-cyanSoft/5 blur-[1px]" />
      <div className="absolute h-[72%] w-[72%] animate-spin-slow rounded-full border border-dashed border-white/14" />
      <div className="absolute bottom-10 h-24 w-80 rounded-full bg-cyanSoft/10 blur-2xl" />
      <motion.div
        whileHover={{ rotateY: -8, rotateX: 5, y: -8 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className="relative z-10 aspect-[0.78] w-[72%] overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-white/12 to-white/[0.03] p-3 shadow-premium backdrop-blur-xl"
      >
        <img
          src={imageSrc}
          alt="Mohammed Sinan profile"
          className="h-full w-full rounded-[20px] object-cover"
          onError={() => setImageSrc('/profile.jpeg')}
        />
        <div className="pointer-events-none absolute inset-3 rounded-[20px] bg-gradient-to-t from-ink/65 via-transparent to-white/10" />
      </motion.div>
      <div className="absolute right-2 top-20 z-20 rounded-2xl border border-white/10 bg-panel/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-silver shadow-premium backdrop-blur-xl">
        Flutter
      </div>
      <div className="absolute bottom-16 left-0 z-20 rounded-2xl border border-white/10 bg-panel/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyanSoft shadow-premium backdrop-blur-xl">
        Cross Platform
      </div>
    </motion.div>
  )
}
