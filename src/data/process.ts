import type { ProcessStep } from '@/types'

export const process: ProcessStep[] = [
  {
    id: 'descubrimiento',
    step: 1,
    title: 'Descubrimiento',
    description: 'Charlamos sobre tu proyecto, objetivos y público para entender qué necesitás.',
  },
  {
    id: 'diseno',
    step: 2,
    title: 'Diseño',
    description: 'Propongo una dirección visual acorde a tu marca antes de escribir una línea de código.',
  },
  {
    id: 'desarrollo',
    step: 3,
    title: 'Desarrollo',
    description: 'Construyo tu sitio con tecnologías modernas, cuidando el detalle y el rendimiento.',
  },
  {
    id: 'revision',
    step: 4,
    title: 'Revisión',
    description: 'Ajustamos juntos hasta que el resultado sea exactamente lo que imaginaste.',
  },
  {
    id: 'lanzamiento',
    step: 5,
    title: 'Lanzamiento',
    description: 'Publicamos tu sitio y me aseguro de que todo funcione perfecto en producción.',
  },
]
