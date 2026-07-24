import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/buttons/Button'

export function CTA() {
  return (
    <section className="section-padding">
      <Container>
        <Reveal direction="zoom">
          <div className="relative overflow-hidden rounded-(--radius-lg) bg-linear-to-br from-accent via-accent-2 to-accent-3 px-8 py-16 text-center shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(255,255,255,0.25),transparent)]" />
            <h2 className="relative text-3xl font-medium tracking-tight text-white sm:text-4xl">
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/90">
              Contame tu idea y en menos de 24hs te respondo con una propuesta a medida.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-on-light hover:-translate-y-0.5"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Escribime ahora
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
