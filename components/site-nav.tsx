'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/language'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <a
          href="#top"
          className={`flex items-center gap-2 rounded-full border-2 border-brand-ink bg-card px-4 py-2 font-display text-lg font-extrabold tracking-tight transition-all ${
            scrolled ? 'shadow-[3px_3px_0_0_var(--brand-ink)]' : ''
          }`}
        >
          <span
            className="inline-block size-4 rounded-full bg-brand-pink"
            aria-hidden="true"
          />
          Portfolio<span className="text-brand-blue">.</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border-2 border-brand-ink bg-card p-1.5 shadow-[3px_3px_0_0_var(--brand-ink)] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-brand-yellow"
            >
              {t(link.label)}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brand-pink px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {t("Let's talk")}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t(
              language === 'en'
                ? 'Switch language to Indonesian'
                : 'Switch language to English',
            )}
            className="flex h-11 items-center justify-center rounded-full border-2 border-brand-ink bg-card px-4 text-sm font-bold shadow-[3px_3px_0_0_var(--brand-ink)]"
          >
            {language === 'en' ? 'ID' : 'EN'}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t(open ? 'Close menu' : 'Open menu')}
            aria-expanded={open}
            className="flex size-11 items-center justify-center rounded-full border-2 border-brand-ink bg-card shadow-[3px_3px_0_0_var(--brand-ink)] md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 rounded-3xl border-2 border-brand-ink bg-card p-3 shadow-[4px_4px_0_0_var(--brand-ink)] md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-lg font-semibold hover:bg-brand-yellow"
              >
                {t(link.label)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-2xl bg-brand-pink px-4 py-3 text-center text-lg font-semibold text-primary-foreground"
            >
              {t("Let's talk")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
