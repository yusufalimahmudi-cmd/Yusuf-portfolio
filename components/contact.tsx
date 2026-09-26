'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { useLanguage } from '@/lib/language'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/ysfali_252/' },
  { label: 'WhatsApp', href: 'https://wa.me/6281229519035'},
  { label: 'Dribbble', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yusuf-ali-mahmudi/' },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const { t } = useLanguage()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    // Memasukkan API Key Web3Forms milikmu
    formData.append('access_key', 'acdb0830-9c16-472f-8bc8-e00e49c62613')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSent(true)
        setLoading(false)
      } else {
        console.error('Error:', data)
        setLoading(false)
        alert(t('Failed to send the message. Please try again.'))
      }
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
      alert(t('A network error occurred.'))
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2.5rem] border-2 border-brand-ink bg-brand-pink shadow-[8px_8px_0_0_var(--brand-ink)]"
        >
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-12">
            <div className="text-primary-foreground">
              <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tighter text-balance sm:text-6xl">
                    {t('Got a project?')}
                <br />
                    {t("Let's make it loud.")}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/90">
                {t("Tell me a little about what you're working on. I reply to every message within a couple of days.")}
              </p>

              <div className="mt-8">
                <a
                  href="mailto:yusufalimahmudi345@gmail.com"
                  className="font-display text-x2 font-extrabold underline decoration-brand-yellow decoration-4 underline-offset-4 sm:text-2xl"
                >
                  yusufalimahmudi345@gmail.com
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="inline-flex items-center gap-1 rounded-full border-2 border-brand-ink bg-card px-4 py-2 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    {social.label}
                    <ArrowUpRight className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border-2 border-brand-ink bg-card p-6 sm:p-8">
              {sent ? (
                <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                  <div className="flex size-16 items-center justify-center rounded-full border-2 border-brand-ink bg-brand-yellow">
                    <Check className="size-8" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight">
                    {t('Message sent!')}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {t("Thanks for reaching out — I'll be in touch soon.")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t('Name')} name="name" placeholder="Jane Doe" />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <Field
                    label={t('Project type')}
                    name="type"
                    placeholder={t('Web, apparel, branding…')}
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold"
                    >
                      {t('Message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder={t('Tell me about your project…')}
                      className="w-full rounded-2xl border-2 border-brand-ink bg-background px-4 py-3 text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:shadow-[3px_3px_0_0_var(--brand-ink)]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-ink py-4 font-display text-lg font-bold text-background transition-transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {loading ? t('Sending...') : t('Send message')}
                    <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t-2 border-brand-ink pt-8 text-sm font-medium text-muted-foreground sm:flex-row">
          <p>{t('© 2026 Yusuf Ali Mahmudi (Yusuf Digital Creative). All rights reserved.')}</p>
          <p>
            {t('Designed & built with passion in Indonesia.')}
          </p>
        </footer>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border-2 border-brand-ink bg-background px-4 py-3 text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:shadow-[3px_3px_0_0_var(--brand-ink)]"
      />
    </div>
  )
}