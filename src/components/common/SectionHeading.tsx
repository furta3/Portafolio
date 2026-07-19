import { Reveal } from '@/components/common/Reveal'
import { Container } from '@/components/common/Container'
import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <Container className={cn('mb-14', align === 'center' ? 'text-center' : 'text-left')}>
      {eyebrow && (
        <Reveal direction="fade">
          <span className="inline-block rounded-full border border-accent-border bg-accent-bg px-4 py-1 text-sm font-medium text-accent">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05}>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-fg-strong sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.1}>
          <p className={cn('mt-4 text-lg text-fg', align === 'center' && 'mx-auto max-w-2xl')}>
            {description}
          </p>
        </Reveal>
      )}
    </Container>
  )
}
