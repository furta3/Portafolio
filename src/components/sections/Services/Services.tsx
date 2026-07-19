import { services } from '@/data/services'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { ServiceCard } from '@/components/cards/ServiceCard'

export function Services() {
  return (
    <section id="servicios" className="section-padding">
      <SectionHeading
        eyebrow="Servicios"
        title="Todo lo que tu proyecto necesita"
        description="Desde una simple landing page hasta plataformas completas, cubro cada etapa del desarrollo web."
      />
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} direction="up" delay={(index % 3) * 0.1}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
