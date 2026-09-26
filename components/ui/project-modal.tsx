'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useLanguage } from '@/lib/language'

type ProjectDetail = {
  title: string
  category: string
  year: string
  image: string
  accent: string
  description: string
  challenge: string
  solution: string
  results: string[]
  tools: string[]
}

interface ProjectModalProps {
  project: ProjectDetail | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage()

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 z-50 overflow-y-auto rounded-3xl border-2 border-brand-ink bg-background shadow-2xl sm:inset-8 md:inset-12 lg:inset-16"
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 z-10 flex size-10 items-center justify-center rounded-full border-2 border-brand-ink bg-brand-pink hover:bg-brand-blue transition-colors duration-200"
                aria-label={t('Close modal')}
              >
                <X className="size-5 text-brand-ink" />
              </button>

              <div className="px-6 py-8 sm:px-12 sm:py-12">
                {/* Header Image */}
                <div className="mb-8 aspect-video overflow-hidden rounded-2xl border-2 border-brand-ink shadow-[4px_4px_0_0_var(--brand-ink)]">
                  <Image
                    src={project.image}
                    alt={t(project.title)}
                    width={1200}
                    height={675}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Title & Meta */}
                <div className="mb-8">
                  <span className="inline-block rounded-full border border-brand-ink px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    {t(project.category)}
                  </span>
                  <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {t(project.title)}
                  </h1>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {t('Completed in ')}{project.year}
                  </p>
                </div>

                {/* Overview */}
                <div className="mb-12 rounded-2xl bg-card border border-brand-ink p-6 sm:p-8">
                  <p className="text-lg leading-relaxed text-foreground">
                    {t(project.description)}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-12 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border-2 border-brand-blue bg-blue-50/20 p-6 sm:p-8">
                    <h3 className="font-display text-xl font-bold mb-3">
                      {t('Challenge')}
                    </h3>
                    <p className="leading-relaxed text-foreground">
                      {t(project.challenge)}
                    </p>
                  </div>
                  <div className="rounded-2xl border-2 border-brand-pink bg-pink-50/20 p-6 sm:p-8">
                    <h3 className="font-display text-xl font-bold mb-3">
                      {t('Solution')}
                    </h3>
                    <p className="leading-relaxed text-foreground">
                      {t(project.solution)}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-12">
                  <h3 className="font-display text-2xl font-bold mb-4">
                    {t('Results')}
                  </h3>
                  <div className="space-y-3">
                    {project.results.map((result, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-brand-ink bg-card p-4"
                      >
                        <span className="mt-1 inline-block size-2 rounded-full bg-brand-pink shrink-0" />
                        <p className="text-foreground">{t(result)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">
                    {t('Tools & Tech')}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center rounded-full border-2 border-brand-ink bg-brand-yellow px-4 py-2 text-sm font-semibold text-brand-ink"
                      >
                        {t(tool)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
