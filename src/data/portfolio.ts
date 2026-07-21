import placeholder from '@/assets/images/placeholder-black.jpg'
import incose_landing from '@/assets/images/incose_landing.png'
import escanered from '@/assets/images/EscanerED.jpeg'
import type { PortfolioItem } from '@/types'

export const portfolio: PortfolioItem[] = [
  {
    id: 'proyecto-1',
    title: 'E-commerce Moderno',
    category: 'Tienda Online',
    description: 'Plataforma de ventas con carrito, pagos y panel de administración.',
    image: placeholder,
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'proyecto-2',
    title: 'Landing de Producto',
    category: 'Marketing',
    description: 'Página de lanzamiento, con información del producto, y medios de contacto.',
    image: incose_landing,
    tags: ['Vite', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'proyecto-3',
    title: 'App android para imprimir etiquetas',
    category: 'Portfolio',
    description: 'Aplicación para Android que permite imprimir etiquetas desde el dispositivo móvil, conectándose a una impresora térmica mediante Bluetooth.',
    image: escanered,
    tags: ['Android', 'Swiper', 'Bluetooth'],
  },
  {
    id: 'proyecto-4',
    title: 'Dashboard Interno',
    category: 'SaaS',
    description: 'Panel de control con métricas en tiempo real para un equipo de ventas.',
    image: placeholder,
    tags: ['React', 'Charts'],
  },
  {
    id: 'proyecto-5',
    title: 'Sitio Institucional',
    category: 'Corporativo',
    description: 'Presencia web para una empresa de servicios, con formulario de contacto.',
    image: placeholder,
    tags: ['React Router', 'SEO'],
  },
  {
    id: 'proyecto-6',
    title: 'App de Reservas',
    category: 'Booking',
    description: 'Sistema de turnos online con confirmación automática por email.',
    image: placeholder,
    tags: ['React', 'Zod'],
  },
]
