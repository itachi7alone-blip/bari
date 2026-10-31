import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type Currency = 'INR' | 'USD'

type Ctx = {
  currency: Currency
  setCurrency: (c: Currency) => void
  formatPrice: (inr: number | null, usd: number | null) => string
}

const CurrencyContext = createContext<Ctx | null>(null)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('INR')

  const value = useMemo<Ctx>(
    () => ({
      currency,
      setCurrency,
      formatPrice: (inr, usd) => {
        if (currency === 'INR') {
          if (inr == null) return 'Custom Quote'
          return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(inr)
        }
        if (usd == null) return 'Custom Quote'
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(usd)
      },
    }),
    [currency],
  )

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider')
  return ctx
}
