import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        size === 'md' ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg',
        variant === 'primary' &&
          'bg-linear-to-r from-accent to-accent-2 text-white shadow-lg shadow-accent-bg hover:brightness-110 hover:-translate-y-0.5',
        variant === 'secondary' &&
          'border border-border bg-surface text-fg-strong hover:border-accent-border hover:-translate-y-0.5',
        variant === 'ghost' && 'text-fg-strong hover:text-accent',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
