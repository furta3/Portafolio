import { Hero } from '@/components/sections/Hero/Hero'
import { TrustedBy } from '@/components/sections/TrustedBy/TrustedBy'
import { Services } from '@/components/sections/Services/Services'
import { WhyChooseMe } from '@/components/sections/WhyChooseMe/WhyChooseMe'
import { Portfolio } from '@/components/sections/Portfolio/Portfolio'
import { Testimonials } from '@/components/sections/Testimonials/Testimonials'
import { Process } from '@/components/sections/Process/Process'
import { Pricing } from '@/components/sections/Pricing/Pricing'
import { Technologies } from '@/components/sections/Technologies/Technologies'
import { FAQ } from '@/components/sections/FAQ/FAQ'
import { CTA } from '@/components/sections/CTA/CTA'
import { Contact } from '@/components/sections/Contact/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseMe />
      <Portfolio />
      <Testimonials />
      <Process />
      <Pricing />
      <Technologies />
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}
