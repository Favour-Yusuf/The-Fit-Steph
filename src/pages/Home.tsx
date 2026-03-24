import { UrgencyBar } from '../components/UrgencyBar'
import { Hero } from '../components/Hero'
import { ResultStrip } from '../components/ResultStrip'
import { Problem } from '../components/Problem'
import { Solution } from '../components/Solution'
import { Results } from '../components/Results'
import { WhatYouGet } from '../components/WhatYouGet'
import { ForWho, VerseBreak, CountdownSection, Pricing, Footer } from '../components/Sections'
import { Testimonials } from '../components/Testimonials'
import FloatingCTA from '../components/FloatingCTA'
import { HeroTestimonial } from '../components/HeroTestimonial'

export default function App() {
  return (
    <>
      <UrgencyBar />
      <Hero />
      <ResultStrip />
      <HeroTestimonial/>
      <Problem />
      <Solution />
      <Results />
      <WhatYouGet />
      <ForWho />
      <VerseBreak />
      <CountdownSection />

      {/* ✅ PRICING SECTION WITH ID */}
      <section
        id="pricing"
        className="relative px-6 py-24 overflow-hidden"
        style={{ background: '#FDF6EE' }}
      >
        <Pricing />
      </section>

      <Testimonials />
      <Footer />

      {/* ✅ FLOATING CTA (always visible) */}
      <FloatingCTA />
    </>
  )
}