import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Code2,
  Cpu,
  Globe,
  Megaphone,
  Palette,
  Smartphone,
} from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'

const iconMap = {
  Globe,
  Code2,
  Smartphone,
  Palette,
  Megaphone,
  Cpu,
  Bot,
  BarChart3,
} as const

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services

  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Services"
            title="End-to-End Digital Capabilities"
            description="From websites and applications to marketing, AI, and analytics — built for Indian and international clients."
          />
        </AnimatedSection>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Globe
            return (
              <AnimatedSection key={service.slug} delay={i * 0.04}>
                <Link
                  to={`/services/${service.slug}`}
                  className="smooth-card group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[0_1px_0_rgba(16,28,53,0.04)] hover:border-cyan/35"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-cyan transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-cyan group-hover:text-navy group-hover:shadow-[0_0_24px_rgba(0,188,228,0.35)]">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
                  <ul className="mt-4 space-y-1">
                    {service.offerings.slice(0, 3).map((item) => (
                      <li key={item} className="text-xs text-ink/70">• {item}</li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cyan">
                    Learn More <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
