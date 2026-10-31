import { SEO } from '@/components/seo/SEO'
import { EnquiryForm } from '@/components/forms/EnquiryForm'

export function QuotePage() {
  return (
    <>
      <SEO
        title="Get a Free Quote"
        description="Submit a freelance project enquiry to Bari Digital Private Limited. Get a free consultation."
        path="/quote"
      />
      <section className="gradient-navy pt-32 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Project Enquiry</p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl text-white">Get a Free Quote</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Tell us about your project. We'll review your requirements and respond with next steps.
          </p>
        </div>
      </section>
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft md:p-10">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
