import { Link, useParams } from 'react-router-dom'
import { SEO } from '@/components/seo/SEO'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { services } from '@/data/services'
import { NotFoundPage } from './NotFoundPage'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFoundPage />

  return (
    <>
      <SEO title={service.title} description={service.shortDescription} path={`/services/${service.slug}`} />
      <section className="gradient-navy pt-32 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Link to="/services" className="text-sm text-cyan hover:underline">
            ← All Services
          </Link>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl text-white">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-white/70">{service.description}</p>
          <div className="mt-8">
            <Button to="/quote" variant="gold" size="lg">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-semibold text-navy">Features</h2>
            <ul className="mt-4 space-y-2">
              {service.offerings.map((o) => (
                <li key={o} className="text-muted">• {o}</li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <h2 className="font-display text-2xl font-semibold text-navy">Technologies Used</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span key={t} className="rounded-full bg-surface-alt border border-border px-3 py-1 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Benefits</h2>
            <ul className="mt-4 space-y-2">
              {service.benefits.map((b) => (
                <li key={b} className="text-muted">• {b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Development Process</h2>
            <ol className="mt-4 space-y-3">
              {service.process.map((p, i) => (
                <li key={p} className="flex gap-3 text-muted">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs text-cyan">
                    {i + 1}
                  </span>
                  {p}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-display text-2xl font-semibold text-navy text-center">FAQs</h2>
          <div className="mt-8 space-y-4">
            {service.faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-border bg-surface-alt p-5">
                <summary className="cursor-pointer font-medium text-navy">{faq.q}</summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/quote" variant="secondary" size="lg">
              Get a Quote for {service.title}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
