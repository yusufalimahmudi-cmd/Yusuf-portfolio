'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '3+', label: 'Years exploring design' },
  { value: '15+', label: 'Web & merch projects' },
  { value: '5+', label: 'Clients & collaborations' },
]

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-4xl border-2 border-brand-ink shadow-[6px_6px_0_0_var(--brand-ink)]">
            <Image
              src="/yusuf.jpg"
              alt="Portrait of Momo Adisa"
              width={720}
              height={860}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-4 -right-4 rotate-6 rounded-full border-2 border-brand-ink bg-brand-yellow px-4 py-2 font-display font-extrabold shadow-[3px_3px_0_0_var(--brand-ink)]">
            Hi there!
          </span>
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-extrabold tracking-tighter text-balance sm:text-6xl"
          >
            A creator who
            <br />
            <span className="text-brand-pink">blends code</span> with the canvas.
          </motion.h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I started out designing in the creative space and never really looked back. 
                Today I work across web development, UI/UX, and apparel design — 
                helping projects and brands find a distinct digital and visual voice.
              </p>
              <p>
                My approach is simple: take the work seriously, but never 
                yourself. The best ideas come from play, curiosity, and a little 
                bit of experimentation.
              </p>
            </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border-2 border-brand-ink bg-card p-4 text-center shadow-[3px_3px_0_0_var(--brand-ink)]"
              >
                <div className="font-display text-3xl font-extrabold tracking-tight text-brand-blue sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
