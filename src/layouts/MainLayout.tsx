import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Navbar } from '@/components/navbar/Navbar'
import { Footer } from '@/components/footer/Footer'
import { useLenis } from '@/hooks/useLenis'

export function MainLayout() {
  useLenis()

  return (
    <div className="flex min-h-screen flex-col bg-bg text-fg">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  )
}
