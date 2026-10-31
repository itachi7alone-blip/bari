import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/site'

export function WhatsAppFloat() {
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Hello Bari Digital, I would like to discuss a project.',
  )}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform md:right-8"
    >
      <MessageCircle size={22} />
    </a>
  )
}
