import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  children?: ReactNode
}

export function SectionHeading({ eyebrow, title, description, align = 'center', light = false, children }: Props) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-12 md:mb-16`}>
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.24em] mb-3 ${light ? 'text-gold-soft' : 'text-cyan'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-balance ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
      {children}
      <div className={`gold-rule mt-6 w-24 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  )
}
