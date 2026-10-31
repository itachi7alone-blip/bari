import { CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { whyChooseUs } from '@/data/site'

export function WhyChooseUs() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <SectionHeading
              align="left"
              eyebrow="Why Choose Us"
              title="A Technology Partner Built for Trust"
              description="We combine modern engineering with clear communication so every project feels predictable, premium, and business-focused."
            />
            <div className="rounded-2xl gradient-navy p-8 text-white">
              <p className="font-display text-2xl font-semibold leading-snug">
                Turning Ideas Into Digital Reality.
              </p>
              <p className="mt-3 text-sm text-white/65">Innovate. Develop. Grow.</p>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-surface-alt p-5">
                  <CheckCircle2 className="text-cyan" size={22} />
                  <h3 className="mt-3 font-display text-base font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
