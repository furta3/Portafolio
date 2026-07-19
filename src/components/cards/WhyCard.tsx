import type { WhyItem } from '@/types'

interface WhyCardProps {
  item: WhyItem
}

export function WhyCard({ item }: WhyCardProps) {
  const Icon = item.icon

  return (
    <div className="flex gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-accent">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="text-lg font-medium text-fg-strong">{item.title}</h3>
        <p className="mt-1 text-fg">{item.description}</p>
      </div>
    </div>
  )
}
