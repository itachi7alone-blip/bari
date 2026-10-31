import { SEO } from '@/components/seo/SEO'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTA } from '@/components/home/CTA'
import { coreValues, siteConfig, whyChooseUs } from '@/data/site'
import { services } from '@/data/services'

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Bari Digital Private Limited — our mission, vision, values, and technology expertise."
        path="/about"
      />
      <section className="gradient-navy pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">About Us</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold md:text-5xl text-white">
            Technology Partners for Ambitious Brands
          </h1>
          <p className="mt-5 max-w-2xl text-white/70 leading-relaxed">
            {siteConfig.name} delivers IT solutions, software development, digital marketing, and freelancing services
            with a focus on innovation, quality, and long-term partnerships.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title="Build digital products that create measurable business value"
              description="We help organizations turn ideas into reliable websites, applications, and growth systems — with clarity at every step."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Our Vision"
              title="Become a trusted digital partner across India and global markets"
              description="We aim to set a high standard for transparent delivery, modern craftsmanship, and client-centered collaboration."
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading eyebrow="Core Values" title="Principles That Guide Every Engagement" />
          </AnimatedSection>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-border bg-white p-5">
                  <h3 className="font-display font-semibold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Technology Expertise"
              title="Modern stacks for modern businesses"
              description="We work across frontend, backend, mobile, design, marketing, AI, and analytics."
            />
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(services.flatMap((s) => s.technologies))).map((tech) => (
              <span key={tech} className="rounded-full border border-border bg-surface-alt px-4 py-2 text-sm text-navy">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeading
              align="left"
              eyebrow="Work Philosophy"
              title="Clarity over complexity"
              description="We prefer honest scoping, iterative delivery, and designs that serve the business — not decoration for its own sake."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-navy">Why Businesses Trust Us</h3>
              {whyChooseUs.map((item) => (
                <div key={item.title} className="border-l-2 border-cyan pl-4">
                  <p className="font-medium text-navy">{item.title}</p>
                  <p className="text-sm text-muted mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  )
}
