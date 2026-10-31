import { useState, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { SEO } from '@/components/seo/SEO'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site'
import { submitContact } from '@/lib/api'

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || form.message.length < 10) {
      setError('Please fill all required fields with a meaningful message.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setError('')
    try {
      await submitContact(form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
      setError('Unable to send message. Please try again or use WhatsApp.')
    }
  }

  const wa = `https://wa.me/${siteConfig.whatsapp}`

  return (
    <>
      <SEO title="Contact Us" description="Contact Bari Digital Private Limited for project enquiries and consultations." path="/contact" />
      <section className="gradient-navy pt-32 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl text-white">Let's Talk</h1>
          <p className="mt-4 max-w-2xl text-white/70">Reach out for consultations, freelance projects, or partnership opportunities.</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Contact Information</h2>
            <ul className="mt-6 space-y-5 text-sm text-muted">
              <li className="flex gap-3">
                <Mail className="text-cyan shrink-0" size={18} />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan">{siteConfig.email}</a>
              </li>
              <li className="flex gap-3">
                <Phone className="text-cyan shrink-0" size={18} />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-cyan shrink-0" size={18} />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Office map"
                src={siteConfig.mapsEmbed}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface-alt p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-navy">Send a Message</h2>
            {status === 'success' ? (
              <p className="mt-6 text-cyan">
                Your email app should open with the message. If it didn't, write to {siteConfig.email}.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <input
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm"
                  placeholder="Your name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm"
                  placeholder="Subject *"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm"
                  placeholder="Message *"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
                <Button type="submit" variant="secondary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
