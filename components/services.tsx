'use client'

import { motion } from 'framer-motion'
import { Palette, Shirt, Code, MonitorSmartphone } from 'lucide-react'
import { useLanguage } from '@/lib/language'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Logos, systems, and guidelines that give your brand a bold, consistent voice.',
    accent: 'bg-brand-pink',
    tags: ['Logo', 'Guidelines', 'Branding'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Merch',
    desc: 'Tactile, custom t-shirt designs and merchandise that people love to wear and keep.',
    accent: 'bg-brand-yellow',
    tags: ['T-Shirts', 'Merchandise', 'Screen Printing'],
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Building responsive and interactive web interfaces using React JS and modern tech stacks.',
    accent: 'bg-brand-blue',
    tags: ['React JS', 'Frontend', 'Docker Setup'],
  },
  {
    icon: MonitorSmartphone,
    title: 'UI/UX & Wireframe',
    desc: 'Playful, high-converting digital products and wireframes mapped out seamlessly in Figma.',
    accent: 'bg-brand-pink',
    tags: ['Figma', 'UI/UX', 'Prototypes'],
  },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section
      id="services"
      className="border-y-2 border-brand-ink bg-brand-ink px-4 py-20 text-background sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 text-sm font-semibold text-brand-ink">
            {t('What I do')}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tighter text-balance sm:text-6xl">
            {t('Services built for brands with personality.')}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-3xl border-2 border-background/20 bg-card p-7 text-foreground transition-colors hover:border-background"
              >
                <div
                  className={`mb-5 flex size-14 items-center justify-center rounded-2xl border-2 border-brand-ink ${service.accent}`}
                >
                  <Icon className="size-7 text-brand-ink" />
                </div>
                <h3 className="font-display text-2xl font-extrabold tracking-tight">
                  {t(service.title)}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {t(service.desc)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-ink px-3 py-1 text-xs font-semibold"
                    >
                      {t(tag)}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}