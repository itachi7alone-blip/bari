import { siteConfig } from '@/data/site'

export type EnquiryPayload = {
  fullName: string
  companyName: string
  email: string
  phone: string
  country: string
  service: string
  description: string
  budget: string
  deadline: string
  file?: File | null
}

function saveLocal(key: string, payload: unknown) {
  const existing = JSON.parse(localStorage.getItem(key) || '[]') as unknown[]
  existing.unshift({ ...(payload as object), createdAt: new Date().toISOString() })
  localStorage.setItem(key, JSON.stringify(existing.slice(0, 50)))
}

export function buildWhatsAppEnquiryLink(payload: EnquiryPayload) {
  const text = [
    `Hello Bari Digital, I have a project enquiry.`,
    ``,
    `Name: ${payload.fullName}`,
    payload.companyName ? `Company: ${payload.companyName}` : null,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Country: ${payload.country}`,
    `Service: ${payload.service}`,
    `Budget: ${payload.budget}`,
    payload.deadline ? `Deadline: ${payload.deadline}` : null,
    ``,
    `Project:`,
    payload.description,
  ]
    .filter(Boolean)
    .join('\n')

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`
}

export async function submitEnquiry(payload: EnquiryPayload) {
  saveLocal('bari_enquiries_local', {
    ...payload,
    fileName: payload.file?.name || null,
    status: 'NEW',
  })
  return {
    success: true,
    message: 'Enquiry prepared successfully.',
    whatsappUrl: buildWhatsAppEnquiryLink(payload),
  }
}

export async function submitContact(payload: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  saveLocal('bari_contact_local', payload)

  const body = [
    payload.message,
    '',
    `From: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailto

  return { success: true }
}

export async function submitJobApplication(payload: FormData) {
  const fullName = String(payload.get('fullName') || '')
  const email = String(payload.get('email') || '')
  const phone = String(payload.get('phone') || '')
  const coverLetter = String(payload.get('coverLetter') || '')
  const resume = payload.get('resume')

  saveLocal('bari_applications_local', {
    fullName,
    email,
    phone,
    coverLetter,
    resumeName: resume instanceof File ? resume.name : null,
  })

  const body = [
    `Job application from ${fullName}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    '',
    coverLetter || 'Please find my resume attached (sent separately if needed).',
  ]
    .filter(Boolean)
    .join('\n')

  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Job Application — ${fullName}`)}&body=${encodeURIComponent(body)}`
  window.location.href = mailto

  return { success: true }
}
