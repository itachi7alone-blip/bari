import { SEO } from '@/components/seo/SEO'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { CTA } from '@/components/home/CTA'

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore Bari Digital services — website development, web apps, mobile, UI/UX, digital marketing, custom software, AI, and analytics."
        path="/services"
      />
      <section className="gradient-navy pt-32 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Services</p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl text-white">Digital Services Built for Growth</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Premium IT and digital solutions for startups, SMEs, and enterprises across India and international markets.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <CTA />
    </>
  )
}
