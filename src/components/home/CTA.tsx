import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl gradient-navy px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-30" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Let's Collaborate</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Have a Project in Mind?</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                Let's discuss your ideas and build something amazing together.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/quote" variant="gold" size="lg">
                  Get a Free Consultation
                  <ArrowRight size={18} />
                </Button>
                <Button to="/contact" variant="outline-light" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
