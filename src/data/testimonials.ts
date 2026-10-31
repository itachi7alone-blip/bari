export type Testimonial = {
  id: string
  quote: string
  authorLabel: string
  roleLabel: string
  isSample: true
}

/** Clearly labeled sample testimonials for development only. */
export const testimonials: Testimonial[] = [
  {
    id: 'sample-1',
    quote:
      'The team delivered a clean, professional website and kept communication clear throughout the project. The process felt structured and reliable.',
    authorLabel: 'Sample Client A',
    roleLabel: 'Founder, Sample Brand',
    isSample: true,
  },
  {
    id: 'sample-2',
    quote:
      'We needed a partner who understood both design and development. The final product was modern, fast, and aligned with our business goals.',
    authorLabel: 'Sample Client B',
    roleLabel: 'Marketing Lead, Sample Company',
    isSample: true,
  },
  {
    id: 'sample-3',
    quote:
      'From discovery to launch, timelines were realistic and the quality of work met our expectations. Looking forward to the next phase.',
    authorLabel: 'Sample Client C',
    roleLabel: 'Operations Manager, Sample Org',
    isSample: true,
  },
]
