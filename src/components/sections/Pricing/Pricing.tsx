import { pricing } from '@/data/pricing'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { PricingCard } from '@/components/cards/PricingCard'

export function Pricing() {
  return (
    <section id="planes" className="section-padding bg-bg-alt">
      <SectionHeading
        eyebrow="Planes"
        title="Un plan para cada etapa de tu proyecto"
        description="Precios claros y transparentes. Si tu proyecto es distinto, armamos un plan a medida."
      />
      <Container>
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <Reveal key={plan.id} direction="zoom" delay={index * 0.1}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
