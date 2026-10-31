import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { portfolioCategories, projects, type ProjectCategory } from '@/data/portfolio'

export function PortfolioPreview({ showFilters = true, limit }: { showFilters?: boolean; limit?: number }) {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All')
  const filtered = (active === 'All' ? projects : projects.filter((p) => p.category === active)).slice(
    0,
    limit ?? projects.length,
  )

  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Work"
            title="Projects That Deliver Real Business Impact"
            description="From student admission CRMs to e-commerce, healthcare, and growth platforms — built with clarity, performance, and premium design."
          />
        </AnimatedSection>

        {showFilters && (
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-navy text-white'
                    : 'bg-white text-muted border border-border hover:border-cyan hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.05}>
              <Link
                to={`/work/${project.slug}`}
                className="smooth-card group block overflow-hidden rounded-2xl border border-border bg-white hover:border-cyan/30"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, #0A1224 0%, ${project.accent} 78%, #101C35 100%)`,
                  }}
                >
                  <div className="absolute inset-0 gradient-mesh opacity-30" />
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan/20 blur-2xl" />
                  <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-gold/15 blur-2xl" />
                  {!project.isSample && (
                    <span className="absolute left-4 top-4 rounded-md bg-cyan/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan backdrop-blur border border-cyan/30">
                      Delivered Project
                    </span>
                  )}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p className="font-display text-xl font-semibold text-white leading-snug">{project.title}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/15 bg-black/20 px-2 py-0.5 text-[10px] text-white/75 backdrop-blur"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">{project.category}</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{project.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:text-cyan">
                    View details <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Button to="/work" variant="secondary">
              View Full Portfolio
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
