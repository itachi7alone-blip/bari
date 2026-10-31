import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { navLinks, siteConfig } from '@/data/site'
import { services } from '@/data/services'

function SocialIcon({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      {label === 'LinkedIn' && (
        <path d="M6.94 8.5H3.75V20h3.19V8.5zM5.34 3.5a1.85 1.85 0 100 3.7 1.85 1.85 0 000-3.7zM20.25 20h-3.18v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V20H9.88V8.5h3.05v1.57h.04c.43-.8 1.47-1.65 3.02-1.65 3.23 0 3.82 2.13 3.82 4.9V20z" />
      )}
      {label === 'Twitter' && (
        <path d="M18.9 3H21l-6.16 7.04L22 21h-5.5l-4.3-5.62L7.2 21H5.1l6.58-7.52L2.5 3h5.64l3.88 5.16L18.9 3zm-1.93 16.2h1.52L7.54 4.7H5.9l11.07 14.5z" />
      )}
      {label === 'Instagram' && (
        <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm0 2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7zm5 2.8A4.2 4.2 0 1112 16.2 4.2 4.2 0 0112 7.8zm0 2a2.2 2.2 0 100 4.4 2.2 2.2 0 000-4.4zm5.15-2.55a1 1 0 110 2 1 1 0 010-2z" />
      )}
      {label === 'Facebook' && (
        <path d="M14.5 8.5V6.8c0-.7.5-1.1 1.2-1.1H17V3h-2.4C11.9 3 11 5 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.4l.6-2.7h-3z" />
      )}
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" size="lg" full />
            <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-xs">
              {siteConfig.tagline} We help businesses innovate, develop, and grow with premium digital solutions.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gold">{siteConfig.motto}</p>
            <div className="mt-6 flex gap-3">
              {[
                { href: siteConfig.social.linkedin, label: 'LinkedIn' },
                { href: siteConfig.social.twitter, label: 'Twitter' },
                { href: siteConfig.social.instagram, label: 'Instagram' },
                { href: siteConfig.social.facebook, label: 'Facebook' },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 hover:border-cyan hover:text-cyan transition-colors"
                >
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/quote" className="text-sm text-white/70 hover:text-cyan transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">Our Services</h3>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-white/70 hover:text-cyan transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-cyan" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan">{siteConfig.email}</a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-cyan" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-cyan">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-rule my-10" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-white/50">
          <p>Copyright © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-cyan">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cyan">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
