'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/language'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-40"
    >
      {/* floating decorative blobs are avoided; use bold shapes instead */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-brand-ink bg-brand-yellow px-4 py-1.5 text-sm font-semibold"
        >
          <Sparkles className="size-4" />
          {t('Available for freelance — 2026')}
        </motion.div>

        <h1 className="font-display text-6xl font-extrabold leading-[0.9] tracking-tighter text-balance sm:text-8xl lg:text-[9.5rem]">
          <motion.span variants={item} className="block">
            {t('Crafting digital')}
          </motion.span>
          <motion.span variants={item} className="block">
            <span className="text-brand-pink">{t('visuals')}</span> {t('& web')}
          </motion.span>
          <motion.span variants={item} className="block">
            {t('that')} <span className="text-brand-blue">{t('stand out')}</span>.
          </motion.span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            variants={item}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {t(
              "I'm Yusuf Ali Mahmudi. Balancing my studies in Agro-industrial Technology with a passion for digital crafting, I design intuitive web experiences and bold apparel that help brands stand out.",
            )}
          </motion.p>

          <motion.a
            variants={item}
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full bg-brand-ink px-7 py-4 text-lg font-semibold text-background transition-transform hover:-translate-y-1"
          >
            {t('See the work')}
            <span className="flex size-8 items-center justify-center rounded-full bg-brand-pink text-primary-foreground transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-5" />
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
