import { UrgencyBar } from '../components/UrgencyBar'
import { Hero } from '../components/Hero'
import { ResultStrip } from '../components/ResultStrip'
import { Problem } from '../components/Problem'
import { Solution } from '../components/Solution'
import { Results } from '../components/Results'
import { WhatYouGet } from '../components/WhatYouGet'
import { ForWho, VerseBreak, CountdownSection, Pricing, Footer } from '../components/Sections'

export default function App() {
  return (
    <>
      <UrgencyBar />
      <Hero />
      <ResultStrip />
      <Problem />
      <Solution />
      <Results />
      <WhatYouGet />
      <ForWho />
      <VerseBreak />
      <CountdownSection />
      <Pricing />
      <Footer />
    </>
  )
}
