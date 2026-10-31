import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { coreValues } from '@/data/site'

export function Intro() {
  return (
    <section className="relative bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Who We Are"
            title="Building Digital Solutions That Drive Business Growth"
            description="Bari Digital Private Limited is a technology and digital solutions company helping brands innovate with quality engineering, transparent collaboration, and long-term partnerships."
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.05}>
              <div className="h-full border-t-2 border-cyan/40 pt-5">
                <h3 className="font-display text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
