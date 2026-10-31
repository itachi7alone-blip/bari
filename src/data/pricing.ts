export type PricingPackage = {
  slug: string
  name: string
  tier: 'Starter' | 'Professional' | 'Business' | 'Enterprise'
  priceInr: number | null
  priceUsd: number | null
  description: string
  features: string[]
  highlighted?: boolean
  custom?: boolean
}

/** Sample/editable pricing — not fixed market claims. Update via admin or this file. */
export const pricingPackages: PricingPackage[] = [
  {
    slug: 'starter',
    name: 'Starter Package',
    tier: 'Starter',
    priceInr: 24999,
    priceUsd: 299,
    description: 'Ideal for new businesses needing a polished online presence.',
    features: [
      'Up to 5-page business website',
      'Responsive design',
      'Basic SEO setup',
      'Contact form',
      '2 revision rounds',
      '14-day support',
    ],
  },
  {
    slug: 'professional',
    name: 'Professional Package',
    tier: 'Professional',
    priceInr: 59999,
    priceUsd: 699,
    description: 'For growing brands that need stronger design and conversion focus.',
    features: [
      'Up to 10 pages or landing system',
      'Custom UI design',
      'CMS / content updates',
      'Performance optimization',
      'Analytics integration',
      '30-day support',
    ],
    highlighted: true,
  },
  {
    slug: 'business',
    name: 'Business Package',
    tier: 'Business',
    priceInr: 129999,
    priceUsd: 1499,
    description: 'Advanced websites or light web apps with integrations.',
    features: [
      'Custom web application modules',
      'API integrations',
      'Admin panel basics',
      'Advanced SEO foundations',
      'Priority communication',
      '60-day support',
    ],
  },
  {
    slug: 'enterprise',
    name: 'Enterprise / Custom',
    tier: 'Enterprise',
    priceInr: null,
    priceUsd: null,
    description: 'Tailored solutions for complex products, teams, and international clients.',
    features: [
      'Dedicated discovery workshop',
      'Custom architecture',
      'Scalable cloud deployment',
      'SLA-based support options',
      'Multi-currency / multi-region needs',
      'Ongoing partnership model',
    ],
    custom: true,
  },
]
