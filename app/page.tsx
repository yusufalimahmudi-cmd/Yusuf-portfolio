import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { WorkGallery } from '@/components/work-gallery'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Marquee />
      <WorkGallery />
      <About />
      <Services />
      <Contact />
    </main>
  )
}
