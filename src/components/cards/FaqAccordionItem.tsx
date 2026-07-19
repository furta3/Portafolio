import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/types'

interface FaqAccordionItemProps {
  item: FaqItem
}

export function FaqAccordionItem({ item }: FaqAccordionItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-(--radius-md) border border-border bg-surface">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-medium text-fg-strong">{item.question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-accent"
        >
          <ChevronDown size={22} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-5 text-fg">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
