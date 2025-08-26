import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import ClickSpark from '@/components/ClickSpark'

export default function Home() {
  return (
    <ClickSpark
      sparkColor='#ffffff'
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
    >
      <main className="min-h-screen">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
      </main>
    </ClickSpark>
  )
}