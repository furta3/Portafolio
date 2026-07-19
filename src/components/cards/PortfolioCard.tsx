import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { PortfolioItem } from '@/types'

interface PortfolioCardProps {
  item: PortfolioItem
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-(--radius-lg) border border-border bg-surface">
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="size-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute right-4 top-4 flex size-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-accent">{item.category}</span>
        <h3 className="mt-1 text-xl font-medium text-fg-strong">{item.title}</h3>
        <p className="mt-2 text-fg">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-bg-alt px-3 py-1 text-xs text-fg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
