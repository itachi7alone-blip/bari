import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { BackToTop } from './BackToTop'
import { WhatsAppFloat } from './WhatsAppFloat'
import { ScrollToTop } from './ScrollToTop'
import { PageTransition } from '@/components/ui/PageTransition'

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  )
}
