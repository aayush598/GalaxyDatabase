import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Galaxy Connect — Premium Lead Generation Data',
  description: 'Access daily updated, premium quality B2B & B2C databases for doctors, teachers, car owners, students, HNI professionals and more. India\'s most trusted data provider.',
  keywords: 'lead generation, B2B database, B2C data, India leads, doctors database, teachers database, HNI data',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '144x144', type: 'image/png' }
    ],
  },
  openGraph: {
    title: 'Galaxy Connect — Premium Lead Generation Data',
    description: 'Premium quality, daily updated leads across 13+ categories. Fuel your outreach with verified Indian business data.',
    type: 'website',
  },
  verification: {
    google: 'q_WjYNddpX7fTO4oES6AzapjYYcCOIiR7TN8_9KsWeE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise-overlay">
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J3GWY0MML6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J3GWY0MML6');
          `}
        </Script>
      </body>
    </html>
  )
}
