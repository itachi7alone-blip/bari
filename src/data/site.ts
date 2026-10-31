export const siteConfig = {
  name: 'Bari Digital Private Limited',
  shortName: 'Bari Digital',
  tagline: 'Turning Ideas Into Digital Reality.',
  motto: 'Innovate. Develop. Grow.',
  trustLine: 'Your Vision. Our Technology. Shared Success.',
  description:
    'Your Trusted Technology Partner for Web Development, Software Solutions, Digital Marketing, and Innovative Digital Experiences.',
  email: import.meta.env.VITE_BUSINESS_EMAIL || 'bari.digitaltech@gmail.com',
  phone: import.meta.env.VITE_BUSINESS_PHONE || '+91 81004 52294',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '918100452294',
  address:
    import.meta.env.VITE_OFFICE_ADDRESS ||
    '1865, Rajdanga Main Road, Kolkata – 700 107, West Bengal',
  mapsEmbed:
    import.meta.env.VITE_MAPS_EMBED_URL ||
    'https://maps.google.com/maps?q=1865+Rajdanga+Main+Road+Kolkata+700107&t=&z=15&ie=UTF8&iwloc=&output=embed',
  social: {
    linkedin: '#',
    twitter: '#',
    instagram: '#',
    facebook: '#',
  },
  copyrightYear: 2026,
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
] as const

export const processSteps = [
  { step: 1, title: 'Discovery & Consultation', description: 'We understand your goals, audience, and business challenges.' },
  { step: 2, title: 'Requirement Analysis', description: 'We define scope, features, timelines, and success metrics.' },
  { step: 3, title: 'Planning & UI/UX Design', description: 'Wireframes and visual designs that reflect your brand.' },
  { step: 4, title: 'Development', description: 'Clean, scalable code with modern technology stacks.' },
  { step: 5, title: 'Testing & Quality Assurance', description: 'Rigorous testing across devices, browsers, and workflows.' },
  { step: 6, title: 'Deployment', description: 'Secure launch with performance and SEO foundations.' },
  { step: 7, title: 'Maintenance & Support', description: 'Ongoing improvements, monitoring, and dedicated support.' },
]

export const whyChooseUs = [
  { title: 'Client-Focused Approach', description: 'Every solution is shaped around your business goals and users.' },
  { title: 'Affordable & Flexible Solutions', description: 'Packages that adapt to startups, SMEs, and enterprise needs.' },
  { title: 'Modern Technology Stack', description: 'React, Node.js, cloud, and AI-ready architectures.' },
  { title: 'On-Time Project Delivery', description: 'Clear milestones, transparent communication, and reliable timelines.' },
  { title: 'Dedicated Support', description: 'A partner who stays with you after launch.' },
  { title: 'Scalable Solutions', description: 'Built to grow with your traffic, teams, and product roadmap.' },
]

export const coreValues = [
  { title: 'Innovation', description: 'We explore modern tools and thoughtful design to solve real problems.' },
  { title: 'Quality', description: 'Every deliverable is crafted with care, clarity, and craftsmanship.' },
  { title: 'Transparency', description: 'Honest timelines, clear communication, and no hidden surprises.' },
  { title: 'Client Satisfaction', description: 'Success is measured by outcomes that move your business forward.' },
  { title: 'Long-Term Partnerships', description: 'We build relationships that extend beyond a single project.' },
]
