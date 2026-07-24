import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/constants/links'
import { SITE_CONFIG } from '@/constants/config'
import { Container } from '@/components/common/Container'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/utils/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(NAV_LINKS.map((link) => link.href.replace('#', '')))

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#hero" className="text-2xl font-semibold text-fg-strong">
          {SITE_CONFIG.logoText}
          <span className="text-accent">Punta</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-fg-strong' : 'text-fg hover:text-fg-strong',
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-accent-bg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            )
          })}
        </nav>

        <a
          href="#contacto"
          className="cta-gradient-text hidden rounded-full bg-linear-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Trabajemos juntos
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="text-fg-strong lg:hidden"
          aria-label="Abrir menú"
        >
          <Menu size={28} />
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg lg:hidden"
          >
            <Container className="flex h-20 items-center justify-between">
              <span className="text-2xl font-semibold text-fg-strong">
                {SITE_CONFIG.logoText}
                <span className="text-accent">Punta</span>
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-fg-strong"
                aria-label="Cerrar menú"
              >
                <X size={28} />
              </button>
            </Container>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col items-center gap-6 px-6 py-12"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                  className="text-2xl font-medium text-fg-strong"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
