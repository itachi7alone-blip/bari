import { SEO } from '@/components/seo/SEO'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { CTA } from '@/components/home/CTA'
import { pricingPackages } from '@/data/pricing'
import { useCurrency } from '@/context/CurrencyContext'
import { Check } from 'lucide-react'

export function PricingPage() {
  const { currency, setCurrency, formatPrice } = useCurrency()

  return (
    <>
      <SEO
        title="Pricing"
        description="Flexible sample pricing packages in INR and USD. Request a custom quote for international or enterprise needs."
        path="/pricing"
      />
      <section className="gradient-navy pt-32 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Pricing</p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl text-white">Packages Built Around Your Goals</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Sample pricing for planning purposes — final quotes depend on scope. Switch between INR and USD.
          </p>
          <div className="mt-8 inline-flex rounded-xl border border-white/15 bg-white/5 p-1">
            {(['INR', 'USD'] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  currency === c ? 'bg-cyan text-navy' : 'text-white/70 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Sample Packages"
              title="Choose a starting point — or request a custom quote"
              description="All prices are editable samples and may change based on requirements."
            />
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-4">
            {pricingPackages.map((pkg, i) => (
              <AnimatedSection key={pkg.slug} delay={i * 0.05}>
                <div
                  className={`flex h-full flex-col rounded-2xl border bg-white p-6 ${
                    pkg.highlighted ? 'border-cyan shadow-soft ring-1 ring-cyan/30' : 'border-border'
                  }`}
                >
                  {pkg.highlighted && (
                    <span className="mb-3 w-fit rounded-md bg-cyan/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan">
                      Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-navy">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-muted flex-none">{pkg.description}</p>
                  <p className="mt-5 font-display text-3xl font-bold text-navy">
                    {formatPrice(pkg.priceInr, pkg.priceUsd)}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-ink/80">
                        <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button to="/quote" variant={pkg.highlighted || pkg.custom ? 'gold' : 'secondary'} className="mt-8 w-full">
                    {pkg.custom ? 'Request Custom Quote' : 'Get Started'}
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
