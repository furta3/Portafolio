import { trustedBy } from '@/data/trustedBy'
import { Reveal } from '@/components/common/Reveal'

const loopItems = [...trustedBy, ...trustedBy]

export function TrustedBy() {
  return (
    <section id="empresas" className="section-padding border-y border-border bg-bg-alt">
      <Reveal direction="fade">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-fg">
          Empresas y marcas que confiaron en mi trabajo
        </p>
      </Reveal>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bg-alt to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bg-alt to-transparent" />

        <div className="flex w-max animate-marquee">
          {loopItems.map((company, index) => (
            <span
              key={`${company.id}-${index}`}
              className="mx-6 flex items-center whitespace-nowrap rounded-full border border-border bg-surface px-6 py-3 text-lg font-medium text-fg-strong"
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
