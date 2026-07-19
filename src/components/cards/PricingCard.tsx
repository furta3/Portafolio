import { Check } from 'lucide-react'
import { Button } from '@/components/buttons/Button'
import { cn } from '@/utils/cn'
import type { PricingPlan } from '@/types'

interface PricingCardProps {
  plan: PricingPlan
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-(--radius-lg) border p-8 transition-transform duration-300 hover:-translate-y-2',
        plan.highlighted
          ? 'border-accent-border bg-surface shadow-lg shadow-accent-bg lg:scale-105'
          : 'border-border bg-surface',
      )}
    >
      {plan.highlighted && (
        <span className="mb-4 inline-block w-fit rounded-full bg-linear-to-r from-accent to-accent-2 px-3 py-1 text-xs font-medium text-white">
          Más elegido
        </span>
      )}
      <h3 className="text-xl font-medium text-fg-strong">{plan.name}</h3>
      <p className="mt-2 text-fg">{plan.description}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-medium text-fg-strong">{plan.price}</span>
        <span className="text-fg">/ {plan.period}</span>
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-fg">
            <Check size={18} className="mt-0.5 shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>
      <Button variant={plan.highlighted ? 'primary' : 'secondary'} className="mt-8 w-full">
        Elegir plan
      </Button>
    </div>
  )
}
