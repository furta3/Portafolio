import placeholder from '@/assets/images/placeholder-black.jpg'
import type { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: 'testimonio-1',
    name: 'Lucía Fernández',
    role: 'Fundadora',
    company: 'Estudio Nimbo',
    avatar: placeholder,
    quote:
      'Superó todas mis expectativas. El sitio quedó rápido, moderno y las animaciones le dan un toque profesional increíble.',
  },
  {
    id: 'testimonio-2',
    name: 'Martín Suárez',
    role: 'CEO',
    company: 'Suárez Digital',
    avatar: placeholder,
    quote:
      'Excelente comunicación durante todo el proyecto. Entendió exactamente lo que necesitaba mi negocio.',
  },
  {
    id: 'testimonio-3',
    name: 'Carla Gómez',
    role: 'Marketing Manager',
    company: 'Bright Studio',
    avatar: placeholder,
    quote:
      'La landing page que nos hizo aumentó nuestras conversiones en el primer mes. Totalmente recomendado.',
  },
]
