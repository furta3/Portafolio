import { Code2, Palette, Rocket, Smartphone, Search, LayoutDashboard } from 'lucide-react'
import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'landing',
    icon: Rocket,
    title: 'Landing Pages',
    description:
      'Páginas de aterrizaje optimizadas para convertir visitantes en clientes, con diseño enfocado en resultados.',
  },
  {
    id: 'web-apps',
    icon: Code2,
    title: 'Sitios Web a medida',
    description:
      'Desarrollo de sitios completos con React y TypeScript, escalables y fáciles de mantener.',
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'Diseño UI/UX',
    description:
      'Interfaces modernas, cuidadas al detalle, pensadas para ofrecer la mejor experiencia a tus usuarios.',
  },
  {
    id: 'responsive',
    icon: Smartphone,
    title: 'Diseño Responsive',
    description:
      'Tu sitio se verá impecable en cualquier dispositivo: celulares, tablets y escritorio.',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & Performance',
    description:
      'Optimización para buscadores y velocidad de carga, para que te encuentren y no te abandonen.',
  },
  {
    id: 'dashboards',
    icon: LayoutDashboard,
    title: 'Paneles & Dashboards',
    description:
      'Sistemas internos y paneles de administración a medida para gestionar tu negocio.',
  },
]
