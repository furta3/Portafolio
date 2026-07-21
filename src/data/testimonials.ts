import alemao_logo from '@/assets/images/alemao_logo.jpeg'
import complet_logo from '@/assets/images/complet_logo.jpeg'
import Incose_logo from '@/assets/images/Incose_logo.jpeg'
import type { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: 'testimonio-1',
    name: 'Flavio Marrero',
    role: 'Dueño',
    company: 'Complet SAS',
    avatar: complet_logo,
    quote:
      'Superó todas mis expectativas. El sitio quedó rápido, moderno y las animaciones le dan un toque profesional increíble.',
  },
  {
    id: 'testimonio-2',
    name: 'José Sosa',
    role: 'CEO',
    company: 'Incose SAS',
    avatar: Incose_logo,
    quote:
      'Excelente comunicación durante todo el proyecto. Entendió exactamente lo que necesitaba mi negocio.',
  },
  {
    id: 'testimonio-3',
    name: 'Luciano Alemão',
    role: 'Dueño',
    company: 'Alemão Expedições',
    avatar: alemao_logo,
    quote:
      'A landing page que ele fez aumentou nossas conversões no primeiro mês. Totalmente recomendado.',
  },
]
