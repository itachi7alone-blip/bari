import { Link } from 'react-router-dom'

type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
  size?: 'sm' | 'md' | 'lg'
  /** Full stacked lockup (footer / hero). Default: mark + wordmark for header. */
  full?: boolean
}

const markHeights = {
  sm: 'h-9 md:h-10',
  md: 'h-10 md:h-11',
  lg: 'h-12 md:h-14',
} as const

const fullHeights = {
  sm: 'h-14 md:h-16',
  md: 'h-16 md:h-[4.5rem]',
  lg: 'h-20 md:h-28',
} as const

export function Logo({
  variant = 'dark',
  className = '',
  size = 'md',
  full = false,
}: LogoProps) {
  const isLight = variant === 'light'

  if (full) {
    return (
      <Link
        to="/"
        className={`inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-95 ${className}`}
        aria-label="Bari Digital Private Limited home"
      >
        <img
          src={isLight ? '/brand/logo.png?v=3' : '/brand/logo-on-light.png?v=3'}
          alt="Bari Digital Private Limited"
          className={`${fullHeights[size]} w-auto max-w-[160px] sm:max-w-[200px] object-contain object-left select-none`}
          width={200}
          height={141}
          decoding="async"
        />
      </Link>
    )
  }

  return (
    <Link
      to="/"
      className={`group inline-flex shrink-0 items-center gap-2.5 md:gap-3 transition-opacity duration-300 hover:opacity-95 ${className}`}
      aria-label="Bari Digital Private Limited home"
    >
      <img
        src={`/brand/logo-mark.png?v=3`}
        alt=""
        aria-hidden
        className={`${markHeights[size]} w-auto object-contain select-none drop-shadow-[0_4px_14px_rgba(0,188,228,0.22)]`}
        width={88}
        height={44}
        decoding="async"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display text-[0.95rem] font-extrabold tracking-[0.04em] sm:text-[1.05rem] md:text-[1.12rem] ${
            isLight ? 'text-white' : 'text-navy'
          }`}
        >
          BARI{' '}
          <span className={isLight ? 'text-cyan' : 'text-cyan'}>DIGITAL</span>
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.22em] sm:text-[0.62rem] ${
            isLight ? 'text-white/70' : 'text-ink/55'
          }`}
        >
          Private Limited
        </span>
      </span>
    </Link>
  )
}
