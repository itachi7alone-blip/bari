import { SEO } from '@/components/seo/SEO'
import { Hero } from '@/components/home/Hero'
import { Intro } from '@/components/home/Intro'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { PortfolioPreview } from '@/components/home/PortfolioPreview'
import { Process } from '@/components/home/Process'
import { Testimonials } from '@/components/home/Testimonials'
import { CTA } from '@/components/home/CTA'

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      <Hero />
      <Intro />
      <ServicesGrid limit={8} />
      <WhyChooseUs />
      <PortfolioPreview limit={6} showFilters={false} />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}
