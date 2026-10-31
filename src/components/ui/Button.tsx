import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'gold' | 'ghost' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

type Common = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }
type ButtonAsLink = Common & { to: string; onClick?: () => void }

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-0.5 active:translate-y-0'

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-cyan text-navy hover:bg-cyan-soft shadow-[0_10px_30px_rgba(0,188,228,0.28)] hover:shadow-[0_14px_36px_rgba(0,188,228,0.38)]',
  secondary:
    'bg-navy text-white hover:bg-navy-light shadow-[0_10px_28px_rgba(16,28,53,0.2)]',
  gold:
    'bg-gradient-to-r from-gold to-gold-soft text-navy hover:brightness-105 shadow-[0_10px_30px_rgba(214,166,79,0.35)]',
  ghost: 'bg-transparent text-navy border border-border hover:border-cyan hover:text-cyan hover:bg-cyan/5',
  'outline-light':
    'bg-white/5 text-white border border-white/20 hover:border-cyan hover:text-cyan hover:bg-white/10 backdrop-blur-sm',
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = 'primary', size = 'md', className = '' } = props
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button
      className={classes}
      type={buttonProps.type || 'button'}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
    >
      {children}
    </button>
  )
}
