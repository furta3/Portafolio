import { Code2, Briefcase, Camera, MessageCircle } from 'lucide-react'
import { NAV_LINKS } from '@/constants/links'
import { SOCIALS } from '@/constants/socials'
import { SITE_CONFIG } from '@/constants/config'
import { Container } from '@/components/common/Container'

// Note: lucide-react no longer ships brand logos, so these are generic stand-ins.
const socialIcons = [
  { icon: Code2, href: SOCIALS.github, label: 'GitHub' },
  { icon: Briefcase, href: SOCIALS.linkedin, label: 'LinkedIn' },
  { icon: Camera, href: SOCIALS.instagram, label: 'Instagram' },
  { icon: MessageCircle, href: SOCIALS.whatsapp, label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="text-2xl font-semibold text-fg-strong">
            {SITE_CONFIG.logoText}
            <span className="text-accent">Punta</span>
          </span>
          <p className="mt-4 max-w-sm text-fg">{SITE_CONFIG.tagline}</p>
          <div className="mt-6 flex gap-3">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-border text-fg transition-colors hover:border-accent-border hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-strong">
            Navegación
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-fg transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-strong">
            Contacto
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-fg">
            <li>{SITE_CONFIG.email}</li>
            <li>{SITE_CONFIG.location}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-sm text-fg sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.</p>
          <p>Hecho con React, TypeScript y Tailwind CSS.</p>
        </Container>
      </div>
    </footer>
  )
}
