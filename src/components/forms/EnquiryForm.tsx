import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'
import { siteConfig } from '@/data/site'
import { submitEnquiry } from '@/lib/api'

const budgets = [
  'Under ₹25,000 / $300',
  '₹25,000 – ₹75,000 / $300 – $900',
  '₹75,000 – ₹2,00,000 / $900 – $2,500',
  '₹2,00,000+ / $2,500+',
  'Not sure yet',
]

type FormState = {
  fullName: string
  companyName: string
  email: string
  phone: string
  country: string
  service: string
  description: string
  budget: string
  deadline: string
}

const initial: FormState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: 'India',
  service: '',
  description: '',
  budget: '',
  deadline: '',
}

export function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [file, setFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState('')
  const [serverError, setServerError] = useState('')

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) next.fullName = 'Full name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email is required'
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 8) next.phone = 'Valid phone / WhatsApp is required'
    if (!form.country.trim()) next.country = 'Country is required'
    if (!form.service) next.service = 'Please select a service'
    if (!form.description.trim() || form.description.trim().length < 20)
      next.description = 'Please describe your project (min. 20 characters)'
    if (!form.budget) next.budget = 'Please select a budget range'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setServerError('')
    if (!validate()) return
    setLoading(true)
    try {
      const result = await submitEnquiry({ ...form, file })
      setWhatsappUrl(result.whatsappUrl)
      setSuccess(true)
      setForm(initial)
      setFile(null)
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Unable to submit enquiry. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    const wa =
      whatsappUrl ||
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        'Hello Bari Digital, I would like to discuss a project.',
      )}`
    return (
      <div className="rounded-2xl border border-cyan/30 bg-surface-alt p-8 text-center">
        <CheckCircle2 className="mx-auto text-cyan" size={40} />
        <h3 className="mt-4 font-display text-2xl font-semibold text-navy">Enquiry Ready</h3>
        <p className="mt-2 text-muted">
          Send your project details on WhatsApp and our team will respond shortly.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white"
          >
            <MessageCircle size={18} /> Send on WhatsApp
          </a>
          <Button type="button" variant="ghost" onClick={() => setSuccess(false)}>
            Submit another enquiry
          </Button>
        </div>
      </div>
    )
  }

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
  })

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name *" error={errors.fullName}>
          <input className={inputClass(errors.fullName)} {...field('fullName')} autoComplete="name" />
        </Field>
        <Field label="Company Name (Optional)">
          <input className={inputClass()} {...field('companyName')} autoComplete="organization" />
        </Field>
        <Field label="Email Address *" error={errors.email}>
          <input type="email" className={inputClass(errors.email)} {...field('email')} autoComplete="email" />
        </Field>
        <Field label="Phone / WhatsApp *" error={errors.phone}>
          <input type="tel" className={inputClass(errors.phone)} {...field('phone')} autoComplete="tel" />
        </Field>
        <Field label="Country *" error={errors.country}>
          <input className={inputClass(errors.country)} {...field('country')} autoComplete="country-name" />
        </Field>
        <Field label="Select Service *" error={errors.service}>
          <select className={inputClass(errors.service)} {...field('service')}>
            <option value="">Choose a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Custom / Not listed">Custom / Not listed</option>
          </select>
        </Field>
        <Field label="Estimated Budget *" error={errors.budget}>
          <select className={inputClass(errors.budget)} {...field('budget')}>
            <option value="">Select budget range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Expected Deadline">
          <input type="date" className={inputClass()} {...field('deadline')} />
        </Field>
      </div>

      <Field label="Project Description *" error={errors.description}>
        <textarea rows={5} className={inputClass(errors.description)} {...field('description')} />
      </Field>

      <Field label="File Attachment (Optional)">
        <input
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
          className="block w-full text-sm text-muted file:mr-4 file:rounded-lg file:border-0 file:bg-navy file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
      </Field>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        onChange={() => undefined}
      />

      {serverError && <p className="text-sm text-red-600">{serverError}</p>}

      <Button type="submit" variant="gold" size="lg" disabled={loading} className="w-full md:w-auto">
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={18} /> Submitting...
          </>
        ) : (
          'Submit Project Enquiry'
        )}
      </Button>
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

function inputClass(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-cyan ${
    error ? 'border-red-400' : 'border-border'
  }`
}
