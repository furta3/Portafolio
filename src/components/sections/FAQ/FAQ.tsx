import { faq } from '@/data/faq'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { FaqAccordionItem } from '@/components/cards/FaqAccordionItem'

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-bg-alt">
      <SectionHeading
        eyebrow="Preguntas frecuentes"
        title="Dudas comunes antes de empezar"
        description="Si tenés otra pregunta, escribime, con gusto te respondo."
      />
      <Container className="mx-auto flex max-w-3xl flex-col gap-4">
        {faq.map((item, index) => (
          <Reveal key={item.id} direction="up" delay={index * 0.06}>
            <FaqAccordionItem item={item} />
          </Reveal>
        ))}
      </Container>
    </section>
  )
}
