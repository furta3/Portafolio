import { Mail, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { ContactForm } from '@/components/forms/ContactForm'
import { SITE_CONFIG } from '@/constants/config'

const infoItems = [
  { icon: Mail, label: 'Email', value: SITE_CONFIG.email },
  { icon: MapPin, label: 'Ubicación', value: SITE_CONFIG.location },
  { icon: Clock, label: 'Tiempo de respuesta', value: 'Menos de 24hs' },
]

export function Contact() {
  return (
    <section id="contacto" className="section-padding">
      <Container className="grid gap-16 lg:grid-cols-2">
        <div>
          <Reveal direction="fade">
            <span className="inline-block rounded-full border border-accent-border bg-accent-bg px-4 py-1 text-sm font-medium text-accent">
              Contacto
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-fg-strong sm:text-4xl">
              Hablemos sobre tu próximo proyecto
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mt-4 text-lg text-fg">
              Completá el formulario y me pondré en contacto a la brevedad para charlar sobre tu
              idea, sin compromiso.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6">
            {infoItems.map((item, index) => (
              <Reveal key={item.label} direction="left" delay={0.15 + index * 0.08}>
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent-bg text-accent">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-fg">{item.label}</p>
                    <p className="font-medium text-fg-strong">{item.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal direction="right" delay={0.1}>
          <div className="rounded-(--radius-lg) border border-border bg-surface p-8 shadow-sm">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
