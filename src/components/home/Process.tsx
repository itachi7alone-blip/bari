import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { processSteps } from '@/data/site'

export function Process() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Work Process"
            title="A Clear Path From Idea to Launch"
            description="A proven seven-step process that keeps projects transparent, collaborative, and delivery-focused."
          />
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" aria-hidden />
          <div className="space-y-8">
            {processSteps.map((step, i) => {
              const left = i % 2 === 0
              return (
                <AnimatedSection key={step.step} delay={i * 0.04}>
                  <div className={`relative flex md:items-center ${left ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div
                      className={`ml-12 w-full rounded-2xl border border-border bg-surface-alt p-5 md:ml-0 md:w-[calc(50%-2rem)] ${
                        left ? 'md:mr-auto' : 'md:ml-auto'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-cyan">
                          {step.step}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-navy">{step.title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-muted leading-relaxed">{step.description}</p>
                    </div>
                    <span className="absolute left-[0.7rem] top-6 h-3 w-3 rounded-full border-2 border-gold bg-white md:left-1/2 md:-translate-x-1/2" />
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
