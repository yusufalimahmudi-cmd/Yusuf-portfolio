import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { LanguageProvider } from '@/lib/language'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yusuf Ali Mahmudi — Digital & Visual Creative',
  description:
    'Yusuf Ali Mahmudi is a digital and visual creative crafting web experiences, UI/UX, and apparel design. Explore selected work and start a project.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/OC.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/OC.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/OC.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/OC.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#f2b705',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${inter.variable} ${bricolage.variable}`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
