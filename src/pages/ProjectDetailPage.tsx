import { Link, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/seo/SEO'
import { Button } from '@/components/ui/Button'
import { projects } from '@/data/portfolio'
import { NotFoundPage } from './NotFoundPage'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <NotFoundPage />

  return (
    <>
      <SEO title={project.title} description={project.shortDescription} path={`/work/${project.slug}`} />
      <section
        className="pt-32 pb-16 text-white"
        style={{ background: `linear-gradient(145deg, #0A1224 0%, ${project.accent} 55%, #101C35 100%)` }}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Link to="/work" className="text-sm text-white/70 hover:text-cyan">
            ← Back to portfolio
          </Link>
          {!project.isSample && (
            <span className="ml-4 inline-block rounded-md border border-cyan/30 bg-cyan/15 px-2 py-1 text-[10px] uppercase tracking-wider text-cyan">
              Delivered Project
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl text-white">{project.title}</h1>
          <p className="mt-2 text-cyan text-sm font-semibold uppercase tracking-[0.16em]">{project.category}</p>
          <p className="mt-5 max-w-3xl text-white/75 leading-relaxed">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button to="/quote" variant="gold" size="lg">
              Start a Similar Project
            </Button>
          </div>
        </div>
      </section>

      {project.features && project.features.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-navy">Key Features</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-2xl border border-border bg-surface-alt p-5">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-cyan" size={18} />
                  <p className="text-sm text-ink/80 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
