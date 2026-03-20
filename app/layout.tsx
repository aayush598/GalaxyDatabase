import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Galaxy Connect — Premium Lead Generation Data',
  description: 'Access daily updated, premium quality B2B & B2C databases for doctors, teachers, car owners, students, HNI professionals and more. India\'s most trusted data provider.',
  keywords: 'lead generation, B2B database, B2C data, India leads, doctors database, teachers database, HNI data',
  openGraph: {
    title: 'Galaxy Connect — Premium Lead Generation Data',
    description: 'Premium quality, daily updated leads across 13+ categories. Fuel your outreach with verified Indian business data.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise-overlay">{children}</body>
    </html>
  )
}
