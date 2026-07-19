import type { PricingPlan } from '@/types'

export const pricing: PricingPlan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: '$400.000',
    period: 'proyecto',
    description: 'Ideal para landing pages simples y presencia web inicial.',
    features: [
      'Hasta 3 secciones',
      'Diseño responsive',
      'Formulario de contacto',
      '1 ronda de revisión',
    ],
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: '$800.000',
    period: 'proyecto',
    description: 'El plan más elegido para sitios completos con varias secciones.',
    features: [
      'Hasta 8 secciones',
      'Animaciones a medida',
      'Optimización SEO',
      '3 rondas de revisión',
      'Soporte por 30 días',
    ],
    highlighted: true,
  },
  {
    id: 'a-medida',
    name: 'A medida',
    price: 'Cotizar',
    period: 'según alcance',
    description: 'Para proyectos complejos: e-commerce, dashboards o sistemas a medida.',
    features: [
      'Secciones ilimitadas',
      'Integraciones a medida',
      'Panel de administración',
      'Revisiones ilimitadas',
      'Soporte prioritario',
    ],
  },
]
