import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import WhyUs from '@/components/WhyUs'
import Services from '@/components/Services'
import SoftwareSection from '@/components/SoftwareSection'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Buy Verified India Lead Databases Online | Galaxy Connect',
  description: 'India trusted source for verified B2B & B2C lead databases. Daily updated contact data across 25+ categories, delivered instantly.',
  alternates: { canonical: SITE_URL },
}

export default function Home() {
  const orgJson = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: 'https://www.galaxyconnect.in/logo.png',
    description: 'Verified B2B & B2C lead database provider in India. Daily updated, instant delivery across 25+ categories.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-62677-31901',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    sameAs: [
      'https://www.facebook.com/',
      'https://x.com/',
      'https://www.instagram.com/',
      'https://www.linkedin.com/',
      'https://www.youtube.com/',
    ],
  }
  const websiteJson = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Buy verified India lead databases online across B2B & B2C categories with daily updates and instant delivery.',
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: 'https://www.galaxyconnect.in/logo.png',
    },
  }

  return (
    <main>
      <JsonLd data={orgJson} />
      <JsonLd data={websiteJson} />
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