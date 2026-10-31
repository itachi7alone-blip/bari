import { SEO } from '@/components/seo/SEO'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you requested could not be found." path="/404" />
      <section className="flex min-h-[80vh] items-center justify-center bg-surface px-4 pt-24">
        <div className="text-center">
          <p className="font-display text-7xl font-bold text-cyan">404</p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-navy">Page not found</h1>
          <p className="mt-3 text-muted">The page you're looking for doesn't exist or has been moved.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button to="/" variant="secondary">
              Go Home
            </Button>
            <Button to="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
