'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type Language = 'en' | 'id'

const translations: Record<string, string> = {
  Work: 'Karya',
  About: 'Tentang',
  Services: 'Layanan',
  Contact: 'Kontak',
  "Let's talk": 'Mari berdiskusi',
  'Close menu': 'Tutup menu',
  'Open menu': 'Buka menu',
  'Switch language to Indonesian': 'Ganti bahasa ke Indonesia',
  'Switch language to English': 'Ganti bahasa ke Inggris',
  'Close modal': 'Tutup jendela',
  'Available for freelance — 2026': 'Tersedia untuk proyek lepas — 2026',
  'Crafting digital': 'Menciptakan karya digital',
  'visuals': 'visual',
  '& web': '& web',
  that: 'yang',
  'stand out': 'tampil menonjol',
  "I'm Yusuf Ali Mahmudi. Balancing my studies in Agro-industrial Technology with a passion for digital crafting, I design intuitive web experiences and bold apparel that help brands stand out.":
    'Saya Yusuf Ali Mahmudi. Sambil menempuh studi Teknologi Agroindustri dan menekuni dunia kreasi digital, saya merancang pengalaman web yang intuitif serta apparel berani agar brand tampil menonjol.',
  'See the work': 'Lihat karya',
  'Web Development': 'Pengembangan Web',
  'Apparel & Merch': 'Pakaian & Merchandise',
  'UI/UX Design': 'Desain UI/UX',
  'Visual Identity': 'Identitas Visual',
  Wireframing: 'Pembuatan Wireframe',
  'Selected work': 'Karya pilihan',
  'A mix of brand, motion, and print projects — each one built to stand out and stay memorable.':
    'Rangkaian proyek brand, motion, dan cetak — masing-masing dirancang agar tampil menonjol dan mudah diingat.',
  'Brand Identity': 'Identitas Brand',
  'Motion Design': 'Desain Motion',
  Editorial: 'Editorial',
  Packaging: 'Kemasan',
  'Web Design': 'Desain Web',
  Illustration: 'Ilustrasi',
  'View ': 'Lihat detail ',
  ' details': '',
  'project': 'proyek',
  'Portrait of Momo Adisa': 'Potret Yusuf Ali Mahmudi',
  'Hi there!': 'Hai!',
  'A creator who': 'Kreator yang',
  'blends code': 'memadukan kode',
  ' with the canvas.': ' dengan kanvas.',
  'I started out designing in the creative space and never really looked back. Today I work across web development, UI/UX, and apparel design — helping projects and brands find a distinct digital and visual voice.':
    'Saya memulai perjalanan di dunia desain kreatif dan terus mengembangkannya hingga kini. Saya berkarya di bidang pengembangan web, UI/UX, dan desain apparel — membantu proyek serta brand menemukan karakter digital dan visual yang khas.',
  'My approach is simple: take the work seriously, but never yourself. The best ideas come from play, curiosity, and a little bit of experimentation.':
    'Pendekatan saya sederhana: serius dalam berkarya, tetapi jangan terlalu serius pada diri sendiri. Ide terbaik lahir dari bermain, rasa ingin tahu, dan sedikit eksperimen.',
  'Years exploring design': 'Tahun mendalami desain',
  'Web & merch projects': 'Proyek web & merchandise',
  'Clients & collaborations': 'Klien & kolaborasi',
  'What I do': 'Yang saya kerjakan',
  'Services built for brands with personality.':
    'Layanan untuk brand yang punya karakter.',
  'UI/UX & Wireframe': 'UI/UX & Wireframe',
  Logo: 'Logo',
  Guidelines: 'Panduan',
  Branding: 'Branding',
  'T-Shirts': 'Kaos',
  Merchandise: 'Merchandise',
  'Screen Printing': 'Sablon',
  Frontend: 'Frontend',
  'Docker Setup': 'Konfigurasi Docker',
  Prototypes: 'Prototipe',
  'Logos, systems, and guidelines that give your brand a bold, consistent voice.':
    'Logo, sistem, dan panduan yang membentuk karakter brand yang berani dan konsisten.',
  'Tactile, custom t-shirt designs and merchandise that people love to wear and keep.':
    'Desain kaus dan merchandise kustom yang nyaman dipakai dan disukai untuk dikoleksi.',
  'Building responsive and interactive web interfaces using React JS and modern tech stacks.':
    'Membangun antarmuka web responsif dan interaktif dengan React JS serta teknologi modern.',
  'Playful, high-converting digital products and wireframes mapped out seamlessly in Figma.':
    'Produk digital yang menarik dan efektif, beserta wireframe yang dirancang rapi di Figma.',
  'Got a project?': 'Punya proyek?',
  "Let's make it loud.": 'Mari buat jadi istimewa.',
  "Tell me a little about what you're working on. I reply to every message within a couple of days.":
    'Ceritakan sedikit tentang proyek yang sedang kamu kerjakan. Saya akan membalas setiap pesan dalam beberapa hari.',
  'Message sent!': 'Pesan terkirim!',
  "Thanks for reaching out — I'll be in touch soon.":
    'Terima kasih sudah menghubungi — saya akan segera membalas.',
  Name: 'Nama',
  'Project type': 'Jenis proyek',
  Message: 'Pesan',
  'Tell me about your project…': 'Ceritakan tentang proyekmu…',
  'Web, apparel, branding…': 'Web, apparel, branding…',
  'Sending...': 'Mengirim...',
  'Send message': 'Kirim pesan',
  'Failed to send the message. Please try again.':
    'Gagal mengirim pesan, silakan coba lagi.',
  'A network error occurred.': 'Terjadi kesalahan jaringan.',
  '© 2026 Yusuf Ali Mahmudi (Yusuf Digital Creative). All rights reserved.':
    '© 2026 Yusuf Ali Mahmudi (Yusuf Digital Creative). Hak cipta dilindungi.',
  'Designed & built with passion in Indonesia.':
    'Dirancang dan dibuat dengan sepenuh hati di Indonesia.',
  'Completed in ': 'Selesai pada ',
  Challenge: 'Tantangan',
  Solution: 'Solusi',
  Results: 'Hasil',
  'Tools & Tech': 'Alat & Teknologi',
  'Brand Strategy': 'Strategi Brand',
  Photography: 'Fotografi',
  Typography: 'Tipografi',
  'Die-cutting software': 'Perangkat lunak die-cut',
  'Production management': 'Manajemen produksi',
  'Design System': 'Sistem Desain',
  'Animation Assist': 'Animation Assist',
  'Bloom & Co. Rebrand': 'Rebranding Bloom & Co.',
  'Kinetic Type Reel': 'Reel Tipografi Kinetik',
  'Riso Quarterly': 'Riso Quarterly',
  'Fizz Soda Co.': 'Fizz Soda Co.',
  'Playground OS': 'Playground OS',
  'Doodle Friends': 'Doodle Friends',
  'Complete visual identity redesign for sustainable beauty brand Bloom & Co., featuring a modern logo system, color palette, and brand guidelines.':
    'Perancangan ulang identitas visual menyeluruh untuk brand kecantikan berkelanjutan Bloom & Co., mencakup sistem logo modern, palet warna, dan panduan brand.',
  "The previous brand identity felt dated and didn't communicate the brand's commitment to sustainability and innovation. The design needed to appeal to eco-conscious millennials while maintaining premium positioning.":
    'Identitas brand sebelumnya terasa usang dan belum menunjukkan komitmen terhadap keberlanjutan serta inovasi. Desain baru perlu menarik bagi generasi milenial yang peduli lingkungan tanpa menghilangkan kesan premium.',
  'Created a bold, nature-inspired logo featuring an interlocking flower motif. Developed a vibrant but sophisticated color palette emphasizing natural tones with energetic accent colors. Built comprehensive brand guidelines covering typography, imagery, and application patterns.':
    'Menciptakan logo berani yang terinspirasi alam dengan motif bunga saling bertaut. Mengembangkan palet warna yang cerah namun elegan, memadukan warna alami dengan aksen energik. Menyusun panduan brand menyeluruh untuk tipografi, citra, dan penerapan desain.',
  'Brand recognition increased by 48% in target demographic': 'Pengenalan brand meningkat 48% pada target demografis',
  'Social media engagement up 156% in first 3 months': 'Interaksi media sosial naik 156% dalam 3 bulan pertama',
  'Product packaging won design award for sustainability communication': 'Kemasan produk memenangkan penghargaan desain untuk komunikasi keberlanjutan',
  'Animated motion graphics reel showcasing kinetic typography techniques and 3D animation for a creative agency portfolio.':
    'Reel motion graphics animasi yang menampilkan teknik tipografi kinetik dan animasi 3D untuk portofolio agensi kreatif.',
  'Needed to create an eye-catching portfolio piece that demonstrated advanced motion design skills while remaining visually cohesive and narrative-driven.':
    'Membuat karya portofolio yang menarik perhatian dan menunjukkan kemampuan motion design tingkat lanjut, dengan visual yang tetap padu dan alur cerita yang kuat.',
  'Designed a 60-second motion piece combining hand-drawn typography, 3D text effects, and character animation. Used layering and pacing to create visual rhythm and maintain viewer engagement throughout.':
    'Merancang karya motion berdurasi 60 detik yang memadukan tipografi gambar tangan, efek teks 3D, dan animasi karakter. Mengatur lapisan serta tempo untuk membangun ritme visual dan menjaga perhatian penonton.',
  'Viewed over 50k times on Vimeo': 'Ditonton lebih dari 50 ribu kali di Vimeo',
  'Featured in Motion Design Magazine': 'Ditampilkan di Motion Design Magazine',
  'Led to 5 freelance project inquiries': 'Menghasilkan 5 permintaan proyek lepas',
  'Art direction and layout design for a independent publication focused on risograph printing, featuring experimental typography and vibrant color work.':
    'Arahan seni dan desain tata letak untuk publikasi independen tentang cetak risograf, dengan tipografi eksperimental dan warna-warna cerah.',
  'Create a distinctive editorial identity that celebrates the unique aesthetic of risograph printing while maintaining readability and hierarchy across diverse content types.':
    'Menciptakan identitas editorial khas yang merayakan estetika unik cetak risograf, sekaligus menjaga keterbacaan dan hierarki beragam jenis konten.',
  'Developed a modular grid system that accommodates both structured content and experimental layouts. Used playful typography pairing and strategic risograph color separations to create visual excitement.':
    'Mengembangkan sistem grid modular untuk konten terstruktur maupun tata letak eksperimental. Memadukan tipografi yang ekspresif dan separasi warna risograf secara strategis untuk menciptakan visual yang menarik.',
  '500 copies sold at independent bookfairs': '500 eksemplar terjual di pameran buku independen',
  'Featured in Print Magazine': 'Ditampilkan di Print Magazine',
  'Received 2 design competition nominations': 'Menerima 2 nominasi kompetisi desain',
  'Complete packaging design system for a retro-inspired soda brand, including label design, secondary packaging, and brand collateral.':
    'Sistem desain kemasan lengkap untuk brand soda bernuansa retro, mencakup desain label, kemasan sekunder, dan materi brand.',
  'Stand out on retail shelves in a crowded beverage category while conveying a playful, nostalgic brand personality that appeals to Gen Z consumers.':
    'Tampil menonjol di rak toko dalam kategori minuman yang padat, sekaligus menyampaikan karakter brand yang ceria dan nostalgis bagi konsumen Gen Z.',
  'Created bold, colorful label designs with die-cut shaped bottles. Developed a flexible pattern system that works across multiple flavor variants while maintaining brand consistency.':
    'Menciptakan label berani dan penuh warna dengan botol berbentuk khusus. Mengembangkan sistem pola fleksibel untuk berbagai varian rasa yang tetap konsisten dengan brand.',
  'Launched in 200+ retail locations': 'Diluncurkan di lebih dari 200 lokasi ritel',
  'First month sales exceeded projections by 34%': 'Penjualan bulan pertama melampaui proyeksi sebesar 34%',
  'Featured in packaging design blogs and publications': 'Ditampilkan di blog dan publikasi desain kemasan',
  'UI/UX design and front-end development for an interactive learning platform targeting young designers and developers.':
    'Desain UI/UX dan pengembangan front-end untuk platform belajar interaktif bagi desainer dan developer muda.',
  'Design an engaging digital learning experience that maintains user motivation across multiple skill levels while staying responsive and accessible.':
    'Merancang pengalaman belajar digital yang menarik dan menjaga motivasi pengguna di berbagai tingkat kemampuan, sekaligus tetap responsif dan mudah diakses.',
  'Built a component-based design system using Figma and React. Implemented micro-interactions and progress visualization to increase user engagement. Created intuitive navigation across complex content hierarchy.':
    'Membangun sistem desain berbasis komponen dengan Figma dan React. Menerapkan mikrointeraksi serta visualisasi progres untuk meningkatkan keterlibatan pengguna, dengan navigasi intuitif untuk hierarki konten yang kompleks.',
  '2,000+ users in beta launch': 'Lebih dari 2.000 pengguna saat peluncuran beta',
  '87% course completion rate': 'Tingkat penyelesaian kursus 87%',
  'Average session duration of 23 minutes': 'Durasi sesi rata-rata 23 menit',
  "Character design and illustration series for a children's digital literacy app, featuring 50+ unique characters and environmental assets.":
    'Seri desain karakter dan ilustrasi untuk aplikasi literasi digital anak, dengan lebih dari 50 karakter unik dan aset lingkungan.',
  'Create distinct, memorable characters that appeal to both children and parents while maintaining consistent style across a large asset library.':
    'Menciptakan karakter khas dan mudah diingat yang menarik bagi anak-anak maupun orang tua, dengan gaya konsisten di seluruh pustaka aset.',
  'Developed a cohesive illustration style combining simple shapes with expressive details. Built a modular character system allowing mix-and-match customization while maintaining visual unity.':
    'Mengembangkan gaya ilustrasi yang padu dengan bentuk sederhana dan detail ekspresif. Membangun sistem karakter modular yang bisa dikustomisasi tanpa kehilangan kesatuan visual.',
  '50+ characters in production': 'Lebih dari 50 karakter diproduksi',
  'Download rate of 100k+ users': 'Diunduh oleh lebih dari 100 ribu pengguna',
  'Licensed to 3 educational platforms': 'Dilisensikan ke 3 platform edukasi',
}

interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
  t: (text: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language')
    if (savedLanguage === 'en' || savedLanguage === 'id') {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  function toggleLanguage() {
    setLanguage((current) => (current === 'en' ? 'id' : 'en'))
  }

  function t(text: string) {
    return language === 'id' ? translations[text] ?? text : text
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
