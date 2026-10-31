import type { CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site'

function TechVisual() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <div className="absolute inset-6 rounded-full border border-cyan/15" />
      <div className="absolute inset-14 rounded-full border border-gold/15" />
      <motion.div
        className="absolute inset-[18%] rounded-full bg-gradient-to-br from-cyan/25 via-transparent to-gold/18 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

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
              className="relative mx-auto h-auto w-full max-w-[300px] object-contain drop-shadow-[0_12px_36px_rgba(0,188,228,0.28)]"
              width={300}
              height={212}
              decoding="async"
            />
            <div className="relative mt-8 grid w-full max-w-[280px] grid-cols-3 gap-2">
              {['Web', 'Apps', 'AI'].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.05] px-2 py-2.5 text-center backdrop-blur-sm"
                >
                  <p className="text-xs font-semibold tracking-wide text-white/90">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {[
        { top: '10%', left: '8%', label: 'React' },
        { top: '18%', right: '4%', label: 'Node' },
        { bottom: '18%', left: '2%', label: 'Cloud' },
        { bottom: '12%', right: '10%', label: 'SEO' },
      ].map((chip, i) => (
        <motion.span
          key={chip.label}
          className="absolute z-20 rounded-full border border-white/15 bg-navy-light/70 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur"
          style={chip as CSSProperties}
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
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
