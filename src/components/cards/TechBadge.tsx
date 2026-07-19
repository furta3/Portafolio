import type { TechItem } from '@/types'

interface TechBadgeProps {
  tech: TechItem
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <div className="mx-4 flex shrink-0 items-center gap-3 rounded-full border border-border bg-surface px-6 py-3 whitespace-nowrap">
      <span className="text-2xl">{tech.icon}</span>
      <span className="font-medium text-fg-strong">{tech.name}</span>
    </div>
  )
}
