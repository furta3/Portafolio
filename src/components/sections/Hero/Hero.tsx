import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/buttons/Button'
import { SITE_CONFIG } from '@/constants/config'
import placeholder from '@/assets/images/placeholder-black.jpg'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--accent-bg),transparent)]" />

      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <Reveal direction="fade">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-bg px-4 py-1.5 text-sm font-medium text-accent">
              <Sparkles size={16} />
              Disponible para nuevos proyectos
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-fg-strong sm:text-5xl lg:text-6xl">
              Convierto ideas en{' '}
              <span className="text-gradient">experiencias web</span> memorables
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-6 text-lg text-fg lg:max-w-xl">
              Soy {SITE_CONFIG.role.toLowerCase()}. Diseño y desarrollo sitios rápidos, modernos
              y a medida que ayudan a tu marca a destacarse.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver mi trabajo
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hablemos de tu proyecto
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal direction="zoom" delay={0.15} className="relative mx-auto w-full max-w-md">
          <div className="relative">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -left-8 z-10 hidden rounded-2xl border border-border bg-surface p-4 shadow-lg sm:block"
            >
              <img
                src={placeholder}
                alt="Vista previa de proyecto"
                width={96}
                height={96}
                className="size-24 rounded-xl object-cover"
              />
            </motion.div>

            <div className="overflow-hidden rounded-(--radius-lg) border border-border shadow-xl">
              <img
                src={placeholder}
                alt="Retrato profesional"
                width={480}
                height={560}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 rounded-2xl border border-accent-border bg-surface px-5 py-4 shadow-lg"
            >
              <p className="text-2xl font-semibold text-fg-strong">+40</p>
              <p className="text-sm text-fg">Proyectos entregados</p>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
