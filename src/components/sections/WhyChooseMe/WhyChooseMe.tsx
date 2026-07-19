import { whyChooseMe } from '@/data/whyChooseMe'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { WhyCard } from '@/components/cards/WhyCard'
import placeholder from '@/assets/images/placeholder-black.jpg'

export function WhyChooseMe() {
  return (
    <section id="por-que-elegirme" className="section-padding bg-bg-alt">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal direction="left" className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-(--radius-lg) border border-border shadow-xl">
            <img
              src={placeholder}
              alt="Trabajando en un proyecto"
              width={560}
              height={640}
              className="aspect-[7/8] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal direction="fade">
            <span className="inline-block rounded-full border border-accent-border bg-accent-bg px-4 py-1 text-sm font-medium text-accent">
              ¿Por qué elegirme?
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-fg-strong sm:text-4xl">
              Un aliado para el crecimiento digital de tu marca
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8">
            {whyChooseMe.slice(0, 4).map((item, index) => (
              <Reveal key={item.id} direction="right" delay={0.1 + index * 0.08}>
                <WhyCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
