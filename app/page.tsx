import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import WhyUs from '@/components/WhyUs'
import Services from '@/components/Services'
import SoftwareSection from '@/components/SoftwareSection'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <Services />
      <SoftwareSection />
      <WhyUs />
      <Footer />
      <FloatingWA />
    </main>
  )
}
