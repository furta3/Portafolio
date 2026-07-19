import { Quote } from 'lucide-react'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="mx-3 flex h-full flex-col rounded-(--radius-lg) border border-border bg-surface p-8">
      <Quote className="text-accent" size={28} />
      <p className="mt-4 flex-1 text-lg text-fg">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="size-12 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-fg-strong">{testimonial.name}</p>
          <p className="text-sm text-fg">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}
