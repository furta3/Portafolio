import type { ProcessStep } from '@/types'

interface ProcessStepCardProps {
  item: ProcessStep
  isLast?: boolean
}

export function ProcessStepCard({ item, isLast }: ProcessStepCardProps) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent to-accent-2 text-lg font-medium text-white">
          {item.step}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
      </div>
      <div className="pb-12">
        <h3 className="text-xl font-medium text-fg-strong">{item.title}</h3>
        <p className="mt-2 text-fg">{item.description}</p>
      </div>
    </div>
  )
}
