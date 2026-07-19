import { technologies } from '@/data/technologies'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { TechBadge } from '@/components/cards/TechBadge'

const rowOne = [...technologies, ...technologies]
const rowTwo = [...technologies.slice().reverse(), ...technologies.slice().reverse()]

export function Technologies() {
  return (
    <section id="tecnologias" className="section-padding overflow-hidden">
      <SectionHeading
        eyebrow="Tecnologías"
        title="Las herramientas detrás de cada proyecto"
        description="Trabajo con un stack moderno enfocado en rendimiento, escalabilidad y buena experiencia de desarrollo."
      />

      <Container className="!max-w-none px-0">
        <div className="flex w-max animate-marquee">
          {rowOne.map((tech, index) => (
            <TechBadge key={`${tech.id}-a-${index}`} tech={tech} />
          ))}
        </div>
        <div className="mt-6 flex w-max animate-marquee [animation-direction:reverse]">
          {rowTwo.map((tech, index) => (
            <TechBadge key={`${tech.id}-b-${index}`} tech={tech} />
          ))}
        </div>
      </Container>
    </section>
  )
}
