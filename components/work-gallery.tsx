'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ProjectModal } from './ui/project-modal'
import { useLanguage } from '@/lib/language'

type Project = {
  title: string
  category: string
  year: string
  image: string
  accent: string
  span?: string
  description: string
  challenge: string
  solution: string
  results: string[]
  tools: string[]
}

const projects: Project[] = [
  {
    title: 'Bloom & Co. Rebrand',
    category: 'Brand Identity',
    year: '2025',
    image: '/work/brand-identity.png',
    accent: 'bg-brand-pink',
    span: 'lg:col-span-3 lg:row-span-2',
    description: 'Complete visual identity redesign for sustainable beauty brand Bloom & Co., featuring a modern logo system, color palette, and brand guidelines.',
    challenge: 'The previous brand identity felt dated and didn\'t communicate the brand\'s commitment to sustainability and innovation. The design needed to appeal to eco-conscious millennials while maintaining premium positioning.',
    solution: 'Created a bold, nature-inspired logo featuring an interlocking flower motif. Developed a vibrant but sophisticated color palette emphasizing natural tones with energetic accent colors. Built comprehensive brand guidelines covering typography, imagery, and application patterns.',
    results: [
      'Brand recognition increased by 48% in target demographic',
      'Social media engagement up 156% in first 3 months',
      'Product packaging won design award for sustainability communication'
    ],
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Brand Strategy']
  },
  {
    title: 'Kinetic Type Reel',
    category: 'Motion Design',
    year: '2025',
    image: '/work/motion-reel.png',
    accent: 'bg-brand-blue',
    span: 'lg:col-span-3',
    description: 'Animated motion graphics reel showcasing kinetic typography techniques and 3D animation for a creative agency portfolio.',
    challenge: 'Needed to create an eye-catching portfolio piece that demonstrated advanced motion design skills while remaining visually cohesive and narrative-driven.',
    solution: 'Designed a 60-second motion piece combining hand-drawn typography, 3D text effects, and character animation. Used layering and pacing to create visual rhythm and maintain viewer engagement throughout.',
    results: [
      'Viewed over 50k times on Vimeo',
      'Featured in Motion Design Magazine',
      'Led to 5 freelance project inquiries'
    ],
    tools: ['After Effects', 'Cinema 4D', 'Illustrator', 'Premiere Pro']
  },
  {
    title: 'Riso Quarterly',
    category: 'Editorial',
    year: '2024',
    image: '/work/editorial.png',
    accent: 'bg-brand-yellow',
    span: 'lg:col-span-3',
    description: 'Art direction and layout design for a independent publication focused on risograph printing, featuring experimental typography and vibrant color work.',
    challenge: 'Create a distinctive editorial identity that celebrates the unique aesthetic of risograph printing while maintaining readability and hierarchy across diverse content types.',
    solution: 'Developed a modular grid system that accommodates both structured content and experimental layouts. Used playful typography pairing and strategic risograph color separations to create visual excitement.',
    results: [
      '500 copies sold at independent bookfairs',
      'Featured in Print Magazine',
      'Received 2 design competition nominations'
    ],
    tools: ['InDesign', 'Illustrator', 'Photography', 'Typography']
  },
  {
    title: 'Fizz Soda Co.',
    category: 'Packaging',
    year: '2024',
    image: '/work/packaging.png',
    accent: 'bg-brand-blue',
    span: 'lg:col-span-2',
    description: 'Complete packaging design system for a retro-inspired soda brand, including label design, secondary packaging, and brand collateral.',
    challenge: 'Stand out on retail shelves in a crowded beverage category while conveying a playful, nostalgic brand personality that appeals to Gen Z consumers.',
    solution: 'Created bold, colorful label designs with die-cut shaped bottles. Developed a flexible pattern system that works across multiple flavor variants while maintaining brand consistency.',
    results: [
      'Launched in 200+ retail locations',
      'First month sales exceeded projections by 34%',
      'Featured in packaging design blogs and publications'
    ],
    tools: ['Illustrator', 'Photoshop', 'Die-cutting software', 'Production management']
  },
  {
    title: 'Playground OS',
    category: 'Web Design',
    year: '2025',
    image: '/work/web-design.png',
    accent: 'bg-brand-pink',
    span: 'lg:col-span-2',
    description: 'UI/UX design and front-end development for an interactive learning platform targeting young designers and developers.',
    challenge: 'Design an engaging digital learning experience that maintains user motivation across multiple skill levels while staying responsive and accessible.',
    solution: 'Built a component-based design system using Figma and React. Implemented micro-interactions and progress visualization to increase user engagement. Created intuitive navigation across complex content hierarchy.',
    results: [
      '2,000+ users in beta launch',
      '87% course completion rate',
      'Average session duration of 23 minutes'
    ],
    tools: ['Figma', 'React', 'Tailwind CSS', 'Next.js', 'Framer Motion']
  },
  {
    title: 'Doodle Friends',
    category: 'Illustration',
    year: '2023',
    image: '/work/illustration.png',
    accent: 'bg-brand-yellow',
    span: 'lg:col-span-2',
    description: 'Character design and illustration series for a children\'s digital literacy app, featuring 50+ unique characters and environmental assets.',
    challenge: 'Create distinct, memorable characters that appeal to both children and parents while maintaining consistent style across a large asset library.',
    solution: 'Developed a cohesive illustration style combining simple shapes with expressive details. Built a modular character system allowing mix-and-match customization while maintaining visual unity.',
    results: [
      '50+ characters in production',
      'Download rate of 100k+ users',
      'Licensed to 3 educational platforms'
    ],
    tools: ['Procreate', 'Illustrator', 'Animation Assist', 'Design System']
  },
]

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const { t } = useLanguage()

  return (
    <motion.article
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border-2 border-brand-ink bg-card shadow-[5px_5px_0_0_var(--brand-ink)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--brand-ink)] cursor-pointer ${project.span ?? ''}`}
    >
      <div className="relative min-h-56 flex-1 overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${t(project.title)} — ${t(project.category)} ${t('project')}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <button
          onClick={onClick}
          className={`absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border-2 border-brand-ink ${project.accent} translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-110 active:scale-95`}
          aria-label={`${t('View ')}${t(project.title)}${t(' details')}`}
        >
          <ArrowUpRight className="size-5 text-brand-ink" />
        </button>
      </div>
      <div className="flex items-end justify-between gap-4 p-5">
        <div>
          <span className="inline-block rounded-full border border-brand-ink px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide">
            {t(project.category)}
          </span>
          <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight">
            {t(project.title)}
          </h3>
        </div>
        <span className="font-display text-lg font-bold text-muted-foreground">
          {project.year}
        </span>
      </div>
    </motion.article>
  )
}

export function WorkGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { t } = useLanguage()

  return (
    <>
      <section id="work" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-extrabold tracking-tighter text-balance sm:text-6xl">
              {t('Selected work')}
            </h2>
            <p className="max-w-sm text-muted-foreground">
              {t('A mix of brand, motion, and print projects — each one built to stand out and stay memorable.')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {projects.map((project) => (
              <ProjectCard 
                key={project.title} 
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  )
}
