import { ShieldCheck, Timer, Users, Sparkles, Gauge, MessagesSquare } from 'lucide-react'
import type { WhyItem } from '@/types'

export const whyChooseMe: WhyItem[] = [
  {
    id: 'calidad',
    icon: ShieldCheck,
    title: 'Código de calidad',
    description: 'Buenas prácticas, tipado estricto y componentes reutilizables en cada proyecto.',
  },
  {
    id: 'tiempos',
    icon: Timer,
    title: 'Cumplo los tiempos',
    description: 'Entregas puntuales con avances constantes durante todo el proceso.',
  },
  {
    id: 'comunicacion',
    icon: MessagesSquare,
    title: 'Comunicación clara',
    description: 'Hablamos el mismo idioma: sin tecnicismos innecesarios, siempre al tanto.',
  },
  {
    id: 'foco-cliente',
    icon: Users,
    title: 'Enfoque en tu negocio',
    description: 'Cada decisión de diseño busca un objetivo: hacer crecer tu marca.',
  },
  {
    id: 'rendimiento',
    icon: Gauge,
    title: 'Rendimiento primero',
    description: 'Sitios livianos y veloces, optimizados desde el primer commit.',
  },
  {
    id: 'creatividad',
    icon: Sparkles,
    title: 'Detalles que enamoran',
    description: 'Animaciones y microinteracciones que hacen que tu web se sienta viva.',
  },
]
