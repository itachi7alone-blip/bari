export type Service = {
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  offerings: string[]
  technologies: string[]
  benefits: string[]
  process: string[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    shortDescription: 'Fast, conversion-focused websites that represent your brand with clarity and polish.',
    description:
      'We design and develop business websites, e-commerce storefronts, landing pages, and portfolio sites that load quickly, rank well, and convert visitors into clients.',
    icon: 'Globe',
    offerings: ['Business Websites', 'E-commerce Websites', 'Landing Pages', 'Portfolio Websites'],
    technologies: ['React', 'Next.js', 'WordPress', 'Shopify', 'Tailwind CSS', 'Node.js'],
    benefits: ['Mobile-first responsive design', 'SEO-ready structure', 'Fast performance', 'Easy content updates'],
    process: ['Discovery', 'Wireframes & Design', 'Development', 'QA & Launch'],
    faqs: [
      { q: 'How long does a business website take?', a: 'Typical business websites take 2–6 weeks depending on scope, content readiness, and integrations.' },
      { q: 'Do you provide hosting support?', a: 'Yes. We can recommend and configure hosting, domains, SSL, and deployment pipelines.' },
    ],
  },
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    shortDescription: 'Scalable full-stack applications built with React, Node.js, and modern APIs.',
    description:
      'From dashboards to custom SaaS platforms, we build secure, maintainable web applications tailored to your workflows.',
    icon: 'Code2',
    offerings: ['React.js Apps', 'Node.js Backends', 'Express.js APIs', 'Full-Stack Applications'],
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'JWT'],
    benefits: ['Custom workflows', 'Secure authentication', 'API-first architecture', 'Cloud-ready deployment'],
    process: ['Requirements', 'Architecture', 'Agile Development', 'Testing & Handover'],
    faqs: [
      { q: 'Can you migrate an existing app?', a: 'Yes. We audit the current stack and plan a phased migration with minimal downtime.' },
      { q: 'Do you build admin panels?', a: 'Absolutely — role-based dashboards and content management are a core offering.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Android and cross-platform apps with polished UI/UX and reliable performance.',
    description:
      'We craft mobile experiences that feel native, intuitive, and ready for real-world usage across devices.',
    icon: 'Smartphone',
    offerings: ['Android Applications', 'Cross-Platform Applications', 'App UI/UX'],
    technologies: ['React Native', 'Flutter', 'Firebase', 'REST APIs'],
    benefits: ['Cross-platform reach', 'Consistent branding', 'Push notifications', 'App store readiness'],
    process: ['Product scoping', 'UI/UX design', 'Development', 'Store submission support'],
    faqs: [
      { q: 'Native or cross-platform?', a: 'We recommend based on budget, timeline, and feature complexity — often React Native or Flutter for speed.' },
    ],
  },
  {
    slug: 'ui-ux-graphic-design',
    title: 'UI/UX & Graphic Design',
    shortDescription: 'Brand systems, interfaces, and creatives that look premium and communicate clearly.',
    description:
      'From website design to logos, branding kits, and social creatives — we shape visual identity with purpose.',
    icon: 'Palette',
    offerings: ['Website Design', 'Logo Design', 'Branding', 'Social Media Creatives'],
    technologies: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Design Systems'],
    benefits: ['Strong brand presence', 'User-centered flows', 'Reusable design systems', 'Marketing-ready assets'],
    process: ['Brand discovery', 'Moodboards', 'Design iterations', 'Handoff'],
    faqs: [
      { q: 'Do you deliver source files?', a: 'Yes — editable source files and export-ready assets are included.' },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'SEO, social, ads, and content strategies that attract and convert qualified leads.',
    description:
      'Grow visibility and pipeline with search optimization, paid campaigns, social marketing, and content that compounds.',
    icon: 'Megaphone',
    offerings: ['SEO', 'Social Media Marketing', 'Google Ads', 'Content Marketing'],
    technologies: ['Google Analytics', 'Search Console', 'Meta Ads', 'Google Ads'],
    benefits: ['Qualified traffic', 'Measurable ROI', 'Brand awareness', 'Lead generation'],
    process: ['Audit', 'Strategy', 'Execution', 'Reporting & Optimization'],
    faqs: [
      { q: 'When will I see SEO results?', a: 'SEO is cumulative. Many clients see meaningful movement within 3–6 months depending on competition.' },
    ],
  },
  {
    slug: 'software-custom-solutions',
    title: 'Software & Custom Solutions',
    shortDescription: 'CRM, ERP, and business systems designed around how your organization actually works.',
    description:
      'Replace spreadsheets and fragmented tools with custom software that streamlines operations and reporting.',
    icon: 'Cpu',
    offerings: ['Business Management Systems', 'CRM Development', 'ERP Solutions', 'Custom Software'],
    technologies: ['Node.js', 'PostgreSQL', 'React', 'Cloud Infrastructure'],
    benefits: ['Process automation', 'Centralized data', 'Role-based access', 'Custom reporting'],
    process: ['Process mapping', 'Solution design', 'Build & integrate', 'Train & support'],
    faqs: [
      { q: 'Can you integrate with existing tools?', a: 'Yes — APIs, webhooks, and third-party integrations are part of most custom builds.' },
    ],
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    shortDescription: 'Chatbots, AI integrations, and workflow automation that save time and improve response.',
    description:
      'We help businesses adopt practical AI — from intelligent assistants to process automation that reduces manual work.',
    icon: 'Bot',
    offerings: ['AI Integration', 'Chatbots', 'Business Process Automation', 'Intelligent Applications'],
    technologies: ['OpenAI APIs', 'Automation workflows', 'Node.js', 'Vector search'],
    benefits: ['Faster operations', '24/7 support options', 'Reduced manual effort', 'Smarter insights'],
    process: ['Use-case discovery', 'Prototype', 'Integration', 'Monitor & improve'],
    faqs: [
      { q: 'Is AI suitable for every business?', a: 'We recommend AI where it creates clear value — support, content ops, data entry, or internal knowledge.' },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    shortDescription: 'Dashboards and analytics that turn business data into clear, actionable decisions.',
    description:
      'Visualize KPIs, uncover trends, and equip teams with reporting they can trust.',
    icon: 'BarChart3',
    offerings: ['Data Visualization', 'Business Analytics', 'Reporting Dashboards'],
    technologies: ['SQL', 'PostgreSQL', 'Charting libraries', 'ETL pipelines'],
    benefits: ['Real-time visibility', 'Better decisions', 'Custom KPIs', 'Team alignment'],
    process: ['Data audit', 'Metric definition', 'Dashboard build', 'Iterate'],
    faqs: [
      { q: 'Which data sources can you connect?', a: 'Databases, CRMs, spreadsheets, analytics platforms, and custom APIs.' },
    ],
  },
]
