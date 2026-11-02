import type { CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Cloud,
  Database,
  Globe2,
  Network,
  Server,
  Shield,
  Sparkles,
  Wifi,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site'

const techChips: Array<{ label: string; style: CSSProperties }> = [
  { label: 'React', style: { top: '6%', left: '6%' } },
  { label: 'Node', style: { top: '4%', right: '10%' } },
  { label: 'TypeScript', style: { top: '22%', left: '-2%' } },
  { label: 'API', style: { top: '20%', right: '-2%' } },
  { label: 'Cloud', style: { top: '38%', left: '-6%' } },
  { label: 'AWS', style: { top: '42%', right: '-4%' } },
  { label: 'Docker', style: { bottom: '28%', left: '0%' } },
  { label: 'PostgreSQL', style: { bottom: '24%', right: '2%' } },
  { label: 'CDN', style: { bottom: '10%', left: '10%' } },
  { label: 'SEO', style: { bottom: '8%', right: '12%' } },
  { label: 'GraphQL', style: { top: '52%', left: '8%' } },
  { label: 'Redis', style: { top: '56%', right: '6%' } },
]

const networkNodes = [
  { top: '12%', left: '48%' },
  { top: '48%', left: '8%' },
  { top: '48%', right: '8%' },
  { bottom: '16%', left: '36%' },
  { bottom: '16%', right: '34%' },
]

function TechVisual() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      {/* Network rings */}
      <div className="absolute inset-4 rounded-full border border-cyan/10" />
      <div className="absolute inset-10 rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-16 rounded-full border border-gold/15" />
      <div className="absolute inset-[22%] rounded-full border border-cyan/10" />

      {/* Orbiting pulse ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-cyan/20"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_12px_#00BCE4]" />
      </motion.div>
      <motion.div
        className="absolute inset-14 rounded-full border border-gold/15"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_10px_#D6A64F]" />
      </motion.div>

      <motion.div
        className="absolute inset-[18%] rounded-full bg-gradient-to-br from-cyan/25 via-transparent to-gold/18 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Network connection lines (SVG) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <path
          d="M200 40 L80 180 L140 320 L260 320 L320 180 Z"
          stroke="rgba(0,188,228,0.35)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <path d="M200 40 L200 200" stroke="rgba(214,166,79,0.35)" strokeWidth="1" />
        <path d="M80 180 L320 180" stroke="rgba(0,188,228,0.25)" strokeWidth="1" />
        <path d="M140 320 L200 200 L260 320" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="200" cy="200" r="4" fill="rgba(0,188,228,0.7)" />
        <circle cx="200" cy="40" r="3" fill="rgba(214,166,79,0.8)" />
        <circle cx="80" cy="180" r="3" fill="rgba(0,188,228,0.6)" />
        <circle cx="320" cy="180" r="3" fill="rgba(0,188,228,0.6)" />
        <circle cx="140" cy="320" r="3" fill="rgba(255,255,255,0.5)" />
        <circle cx="260" cy="320" r="3" fill="rgba(255,255,255,0.5)" />
      </svg>

      {/* Floating network nodes */}
      {networkNodes.map((pos, i) => (
        <motion.span
          key={i}
          className="absolute z-10 h-2.5 w-2.5 rounded-full bg-cyan/80 shadow-[0_0_10px_rgba(0,188,228,0.7)]"
          style={pos as CSSProperties}
          animate={reduce ? undefined : { scale: [1, 1.35, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.4 + i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-10 flex w-[78%] flex-col items-center"
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative flex flex-col items-center">
            <img
              src="/brand/logo-hd.png?v=3"
              alt="Bari Digital Private Limited"
              className="relative mx-auto h-auto w-full max-w-[280px] object-contain drop-shadow-[0_12px_36px_rgba(0,188,228,0.28)]"
              width={280}
              height={198}
              decoding="async"
            />
            <div className="relative mt-6 grid w-full max-w-[300px] grid-cols-4 gap-1.5">
              {[
                { label: 'Web', Icon: Globe2 },
                { label: 'Apps', Icon: Server },
                { label: 'Cloud', Icon: Cloud },
                { label: 'Secure', Icon: Shield },
              ].map(({ label, Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.05] px-1.5 py-2 text-center backdrop-blur-sm"
                >
                  <Icon className="mx-auto mb-1 h-3.5 w-3.5 text-cyan" />
                  <p className="text-[10px] font-semibold tracking-wide text-white/90">{label}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-2 grid w-full max-w-[300px] grid-cols-3 gap-1.5">
              {[
                { label: 'Network', Icon: Network },
                { label: 'Database', Icon: Database },
                { label: 'Connectivity', Icon: Wifi },
              ].map(({ label, Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-1.5 py-2 text-center backdrop-blur-sm"
                >
                  <Icon className="mx-auto mb-1 h-3.5 w-3.5 text-gold" />
                  <p className="text-[10px] font-semibold tracking-wide text-white/85">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {techChips.map((chip, i) => (
        <motion.span
          key={chip.label}
          className="absolute z-20 rounded-full border border-white/15 bg-navy-light/75 px-2.5 py-1 text-[10px] font-medium text-white/85 backdrop-blur sm:text-[11px]"
          style={chip.style}
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 3.8 + i * 0.22, repeat: Infinity, ease: 'easeInOut' }}
        >
          {chip.label}
        </motion.span>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden gradient-navy text-white">
      <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-35" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-gold/12 blur-3xl" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-4 pb-20 pt-28 md:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_#00BCE4]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Bari Digital Private Limited
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-[1.08] text-white text-balance sm:text-5xl lg:text-[3.35rem]"
          >
            Transforming Ideas Into Digital Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button to="/services" variant="primary" size="lg">
              Explore Our Services
              <ArrowRight size={18} />
            </Button>
            <Button to="/quote" variant="outline-light" size="lg">
              Start Your Project
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 inline-flex items-center gap-2 text-sm text-white/55"
          >
            <Sparkles size={16} className="text-gold" />
            {siteConfig.trustLine}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <TechVisual />
        </motion.div>
      </div>
    </section>
  )
}
