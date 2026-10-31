import { Quote } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="gradient-navy py-20 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            light
            eyebrow="Testimonials"
            title="What Clients Say About Working With Us"
            description="Sample testimonials for development. Real client reviews will replace these once available."
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.06}>
              <figure className="glass flex h-full flex-col rounded-2xl p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Quote className="text-gold" size={28} />
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/60">
                    Sample Review
                  </span>
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-white/80">“{item.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-display font-semibold text-white">{item.authorLabel}</p>
                  <p className="text-xs text-white/50 mt-1">{item.roleLabel}</p>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
