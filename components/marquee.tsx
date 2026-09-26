'use client'

import { motion } from 'framer-motion'

const items = [
  'Web Development',
  'Apparel & Merch',
  'UI/UX Design',
  'Visual Identity',
  'React JS',
  'Wireframing',
]

export function Marquee() {
  const row = [...items, ...items]

  return (
    <div className="overflow-hidden border-y-2 border-brand-ink bg-brand-blue py-4">
      <motion.div
        className="flex w-max gap-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-2xl font-extrabold tracking-tight text-primary-foreground sm:text-3xl"
          >
            {item}
            <span
              className="inline-block size-3 rounded-full bg-brand-yellow"
              aria-hidden="true"
            />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
