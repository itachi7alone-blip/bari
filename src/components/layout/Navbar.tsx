import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { navLinks } from '@/data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !isHome || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        solid
          ? 'border-b border-border/70 bg-white/90 shadow-[0_10px_40px_rgba(16,28,53,0.07)] backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-black/25 to-transparent backdrop-blur-[2px]'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 md:gap-4 md:px-6 lg:px-8">
        <Logo variant={solid ? 'dark' : 'light'} size="md" />

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  solid
                    ? isActive
                      ? 'text-cyan bg-cyan/10'
                      : 'text-ink/75 hover:text-navy hover:bg-surface-alt'
                    : isActive
                      ? 'text-cyan'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button to="/quote" variant={solid ? 'gold' : 'primary'} size="sm">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-300 ${
            solid ? 'border-border text-navy bg-white/80' : 'border-white/20 text-white bg-white/5'
          }`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-border bg-white/95 backdrop-blur-xl px-4 py-4 shadow-soft">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-ink hover:bg-surface-alt transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button to="/quote" variant="gold" className="mt-3 w-full">
              Get a Free Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
