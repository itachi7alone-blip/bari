import { SEO } from '@/components/seo/SEO'
import { PortfolioPreview } from '@/components/home/PortfolioPreview'
import { CTA } from '@/components/home/CTA'

export function WorkPage() {
  return (
    <>
      <SEO
        title="Our Work"
        description="Explore sample portfolio projects from Bari Digital across websites, apps, UI/UX, and digital marketing."
        path="/work"
      />
      <section className="gradient-navy pt-32 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Portfolio</p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl text-white">Our Work</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Explore delivered projects across CRMs, websites, apps, design systems, and digital growth platforms.
          </p>
        </div>
      </section>
      <PortfolioPreview />
      <CTA />
    </>
  )
}
