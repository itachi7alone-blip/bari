import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/data/site'

type Props = {
  title?: string
  description?: string
  path?: string
}

export function SEO({ title, description, path = '/' }: Props) {
  const fullTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : `${siteConfig.name} | IT & Digital Solutions`
  const desc = description || siteConfig.description
  const url = `https://baridigital.com${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteConfig.name,
          url: 'https://baridigital.com',
          description: siteConfig.description,
          email: siteConfig.email,
          telephone: siteConfig.phone,
          slogan: siteConfig.tagline,
        })}
      </script>
    </Helmet>
  )
}
