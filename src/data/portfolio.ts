export type ProjectCategory = 'Websites' | 'Web Applications' | 'Mobile Applications' | 'UI/UX Design' | 'Digital Marketing'

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  shortDescription: string
  description: string
  technologies: string[]
  isSample: boolean
  accent: string
  features?: string[]
}

export const portfolioCategories: Array<ProjectCategory | 'All'> = [
  'All',
  'Websites',
  'Web Applications',
  'Mobile Applications',
  'UI/UX Design',
  'Digital Marketing',
]

export const projects: Project[] = [
  {
    slug: 'capital-immigration-canada-crm',
    title: 'Capital Immigration Canada CRM',
    category: 'Web Applications',
    shortDescription:
      'Student admission CRM for managing leads, applications, documents, and counsellor workflows.',
    description:
      'A complete CRM platform built for Capital Immigration Canada to streamline student admissions. Counsellors can capture leads, track application stages, manage student documents, schedule follow-ups, and monitor conversion pipelines from enquiry to enrollment — all in one secure dashboard.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'File Uploads'],
    isSample: false,
    accent: '#00BCE4',
    features: [
      'Student lead & enquiry management',
      'Admission pipeline & status tracking',
      'Document upload & verification flow',
      'Counsellor role-based access',
      'Follow-up reminders & notes',
      'Reports and conversion insights',
    ],
  },
  {
    slug: 'medilynk-hospital-portal',
    title: 'MediLynk Hospital Portal',
    category: 'Web Applications',
    shortDescription:
      'Hospital operations portal for appointments, patient records, and doctor scheduling.',
    description:
      'A modern healthcare web application that helps hospitals manage appointments, patient profiles, doctor availability, and departmental workflows with a clean clinical interface designed for speed and clarity.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    isSample: false,
    accent: '#1A8F9F',
    features: [
      'Online appointment booking',
      'Doctor & department management',
      'Patient history overview',
      'Admin operations dashboard',
    ],
  },
  {
    slug: 'shopnova-ecommerce',
    title: 'ShopNova E-Commerce Platform',
    category: 'Websites',
    shortDescription:
      'Premium multi-category online store with cart, checkout, and inventory-ready architecture.',
    description:
      'A conversion-focused e-commerce experience featuring elegant product storytelling, fast category browsing, wishlist support, and a smooth checkout journey for growing retail brands.',
    technologies: ['React', 'Node.js', 'Stripe-ready APIs', 'Tailwind CSS'],
    isSample: false,
    accent: '#D6A64F',
    features: [
      'Product catalog & filters',
      'Cart and checkout flow',
      'Order management panel',
      'Mobile-first storefront design',
    ],
  },
  {
    slug: 'edusphere-learning-app',
    title: 'EduSphere Learning App',
    category: 'Mobile Applications',
    shortDescription:
      'Cross-platform learning app for courses, live classes, and student progress tracking.',
    description:
      'A mobile-first learning platform that lets students explore courses, join live sessions, track progress, and receive notifications — designed for edtech brands expanding into app-based learning.',
    technologies: ['React Native', 'Firebase', 'REST APIs'],
    isSample: false,
    accent: '#3B6EF5',
    features: [
      'Course catalog & enrollment',
      'Progress tracking',
      'Push notifications',
      'Instructor content modules',
    ],
  },
  {
    slug: 'realtyvista-property-platform',
    title: 'RealtyVista Property Platform',
    category: 'Websites',
    shortDescription:
      'Real-estate discovery website with listings, enquiry forms, and agent dashboards.',
    description:
      'A polished property platform for agencies to showcase listings, capture buyer enquiries, and help agents manage property pipelines with a premium visual presentation.',
    technologies: ['React', 'Node.js', 'Maps Integration', 'Tailwind CSS'],
    isSample: false,
    accent: '#101C35',
    features: [
      'Advanced property search',
      'Listing detail pages',
      'Buyer enquiry capture',
      'Agent listing management',
    ],
  },
  {
    slug: 'brandforge-ui-system',
    title: 'BrandForge Design System',
    category: 'UI/UX Design',
    shortDescription:
      'Complete UI/UX system with logo direction, interface kit, and marketing creatives.',
    description:
      'A cohesive brand and interface system covering visual identity, component libraries, website wireframes, and social creatives — built to keep digital products consistent across every touchpoint.',
    technologies: ['Figma', 'Design Tokens', 'Prototype'],
    isSample: false,
    accent: '#D6A64F',
    features: [
      'Brand identity guidelines',
      'Reusable UI components',
      'Website & app wireframes',
      'Social media creative set',
    ],
  },
  {
    slug: 'growthpulse-seo-campaign',
    title: 'GrowthPulse Digital Campaign',
    category: 'Digital Marketing',
    shortDescription:
      'SEO + ads growth campaign framework for lead generation and brand visibility.',
    description:
      'An integrated digital marketing engagement covering SEO foundations, landing page optimization, Google Ads structure, and performance reporting for measurable business growth.',
    technologies: ['SEO', 'Google Ads', 'Analytics', 'Content Strategy'],
    isSample: false,
    accent: '#00BCE4',
    features: [
      'Keyword & competitor research',
      'On-page SEO improvements',
      'Paid acquisition setup',
      'Monthly performance reporting',
    ],
  },
  {
    slug: 'fleettrack-ops-dashboard',
    title: 'FleetTrack Operations Dashboard',
    category: 'Web Applications',
    shortDescription:
      'Logistics operations dashboard for fleet monitoring, delivery status, and team KPIs.',
    description:
      'A real-time operations dashboard that helps logistics teams monitor vehicles, delivery statuses, SLA performance, and dispatch coordination through clear KPI visualizations.',
    technologies: ['React', 'Node.js', 'Charts', 'PostgreSQL'],
    isSample: false,
    accent: '#1A2B4D',
    features: [
      'Live delivery status board',
      'Fleet & driver overview',
      'KPI analytics charts',
      'Role-based team access',
    ],
  },
]
