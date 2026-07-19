import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'

interface RevealProps {
  children: ReactNode
  direction?: RevealDirection
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}

const OFFSET = 48

function getVariants(direction: RevealDirection): Variants {
  switch (direction) {
    case 'up':
      return {
        hidden: { opacity: 0, y: OFFSET },
        show: { opacity: 1, y: 0 },
      }
    case 'down':
      return {
        hidden: { opacity: 0, y: -OFFSET },
        show: { opacity: 1, y: 0 },
      }
    case 'left':
      return {
        hidden: { opacity: 0, x: -OFFSET * 1.5 },
        show: { opacity: 1, x: 0 },
      }
    case 'right':
      return {
        hidden: { opacity: 0, x: OFFSET * 1.5 },
        show: { opacity: 1, x: 0 },
      }
    case 'zoom':
      return {
        hidden: { opacity: 0, scale: 0.82 },
        show: { opacity: 1, scale: 1 },
      }
    case 'fade':
    default:
      return {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }
  }
}

/**
 * Wraps its children with a scroll-triggered reveal animation.
 * Animates once the element enters the viewport.
 */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.25,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
