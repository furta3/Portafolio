import { motion } from 'framer-motion'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group h-full rounded-(--radius-lg) border border-border bg-surface p-8 shadow-sm transition-colors hover:border-accent-border"
    >
      <div className="flex size-14 items-center justify-center rounded-2xl bg-accent-bg text-accent transition-transform duration-300 group-hover:scale-110">
        <Icon size={26} strokeWidth={1.75} />
      </div>
      <h3 className="mt-6 text-xl font-medium text-fg-strong">{service.title}</h3>
      <p className="mt-3 text-fg">{service.description}</p>
    </motion.div>
  )
}
