import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import InfoCards from '@/components/info-cards'
import SkillsSection from '@/components/skills-section'
import ContactSection from '@/components/contact-section'
import { FAQSection } from '@/components/faq-section'

export const metadata = {
  title: 'Your Name - AI Developer Portfolio',
  description: 'AI Native Developer portfolio showcasing projects and skills',
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <InfoCards />
        <SkillsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <footer className="bg-white p-4 border-t-2 border-black">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 All Right Reserved</p>
          <div className="flex gap-4">
            {['linkedin', 'instagram', 'github', 'tiktok'].map((social) => (
              <a key={social} href={`#${social}`} className="hover:opacity-75">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

