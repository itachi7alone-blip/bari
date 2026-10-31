import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout/Layout'
import { CurrencyProvider } from '@/context/CurrencyContext'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { WorkPage } from '@/pages/WorkPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { PricingPage } from '@/pages/PricingPage'
import { CareersPage } from '@/pages/CareersPage'
import { ContactPage } from '@/pages/ContactPage'
import { QuotePage } from '@/pages/QuotePage'
import { PrivacyPage, TermsPage } from '@/pages/LegalPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  return (
    <HelmetProvider>
      <CurrencyProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/:slug" element={<ServiceDetailPage />} />
              <Route path="work" element={<WorkPage />} />
              <Route path="work/:slug" element={<ProjectDetailPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="careers" element={<CareersPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="quote" element={<QuotePage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CurrencyProvider>
    </HelmetProvider>
  )
}
