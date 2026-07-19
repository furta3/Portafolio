import { process } from '@/data/process'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { ProcessStepCard } from '@/components/cards/ProcessStepCard'

export function Process() {
  return (
    <section id="proceso" className="section-padding">
      <SectionHeading
        eyebrow="Proceso de trabajo"
        title="Así trabajamos juntos, paso a paso"
        description="Un método simple y transparente para que tu proyecto avance sin sorpresas."
      />
      <Container className="mx-auto max-w-2xl">
        {process.map((item, index) => (
          <Reveal key={item.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.05}>
            <ProcessStepCard item={item} isLast={index === process.length - 1} />
          </Reveal>
        ))}
      </Container>
    </section>
  )
}
