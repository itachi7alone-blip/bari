import { useState, type FormEvent } from 'react'
import { SEO } from '@/components/seo/SEO'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { submitJobApplication } from '@/lib/api'

/** No fake vacancies — empty openings by default. */
const openings: Array<{
  id: string
  title: string
  employmentType: string
  location: string
  description: string
}> = []

export function CareersPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', coverLetter: '' })
  const [resume, setResume] = useState<File | null>(null)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.fullName || !form.email || !resume) {
      setStatus('error')
      return
    }
    setStatus('loading')
    const data = new FormData()
    data.append('fullName', form.fullName)
    data.append('email', form.email)
    data.append('phone', form.phone)
    data.append('coverLetter', form.coverLetter)
    data.append('resume', resume)
    try {
      await submitJobApplication(data)
      setStatus('success')
      setForm({ fullName: '', email: '', phone: '', coverLetter: '' })
      setResume(null)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO title="Careers" description="Join Bari Digital Private Limited. View openings and apply with your resume." path="/careers" />
      <section className="gradient-navy pt-32 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Careers</p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl text-white">Build With Us</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            We're always interested in talented people who care about craft, clarity, and client success.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading eyebrow="Open Roles" title="Current Openings" />
          </AnimatedSection>

          {openings.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-border bg-surface-alt p-10 text-center">
              <p className="font-display text-xl font-semibold text-navy">No active openings right now</p>
              <p className="mt-2 text-sm text-muted">
                You can still share your profile below. We'll reach out when a suitable role opens.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {openings.map((job) => (
                <div key={job.id} className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">{job.title}</h3>
                  <p className="mt-1 text-sm text-cyan">
                    {job.employmentType} · {job.location}
                  </p>
                  <p className="mt-3 text-sm text-muted">{job.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-surface-alt">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <h2 className="font-display text-2xl font-semibold text-navy text-center">Candidate Application</h2>
          {status === 'success' ? (
            <p className="mt-6 text-center text-cyan">Application received. Thank you for your interest.</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-border bg-white p-6">
              <input
                className="w-full rounded-xl border border-border px-4 py-2.5 text-sm"
                placeholder="Full name *"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />
              <input
                type="email"
                className="w-full rounded-xl border border-border px-4 py-2.5 text-sm"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                className="w-full rounded-xl border border-border px-4 py-2.5 text-sm"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <textarea
                rows={4}
                className="w-full rounded-xl border border-border px-4 py-2.5 text-sm"
                placeholder="Cover letter"
                value={form.coverLetter}
                onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
              />
              <label className="block text-sm text-navy">
                Resume upload *
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-2 block w-full text-sm"
                  onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                />
              </label>
              {status === 'error' && <p className="text-sm text-red-600">Please provide name, email, and resume.</p>}
              <Button type="submit" variant="secondary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : 'Apply Now'}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
