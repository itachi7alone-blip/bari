import { SEO } from '@/components/seo/SEO'
import { siteConfig } from '@/data/site'

export function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      path="/privacy"
      body={`This privacy policy template explains how ${siteConfig.name} may collect and use information submitted through our website forms. Replace this placeholder with your final legal policy before production launch. We collect enquiry and contact details solely to respond to business requests. Do not submit sensitive personal data unless required for the engagement.`}
    />
  )
}

export function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      path="/terms"
      body={`These terms are a placeholder for ${siteConfig.name}. They should be reviewed by legal counsel before public launch. Website content, sample pricing, and sample portfolio items are for informational purposes and do not constitute a binding offer until a written agreement is executed.`}
    />
  )
}

function LegalShell({ title, path, body }: { title: string; path: string; body: string }) {
  return (
    <>
      <SEO title={title} description={`${title} for ${siteConfig.name}`} path={path} />
      <section className="pt-32 pb-20 bg-surface">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="font-display text-4xl font-bold text-navy">{title}</h1>
          <p className="mt-6 text-muted leading-relaxed">{body}</p>
        </div>
      </section>
    </>
  )
}
