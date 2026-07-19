import { Link } from 'react-router-dom'
import { Button } from '@/components/buttons/Button'

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="text-gradient text-7xl font-semibold">404</span>
      <h1 className="mt-4 text-2xl font-medium text-fg-strong">Página no encontrada</h1>
      <p className="mt-2 max-w-md text-fg">
        La página que buscás no existe o fue movida. Volvé al inicio para seguir explorando.
      </p>
      <Link to="/" className="mt-8">
        <Button>Volver al inicio</Button>
      </Link>
    </section>
  )
}
