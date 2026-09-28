import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, siteAlternates } from '@/lib/site'

export const metadata: Metadata = {
    title: 'Lead Categories | All Verified India Databases',
    description:
        'Browse 30+ verified B2B & B2C lead categories in India: real estate, education, finance, automobile and more. Daily updates, instant delivery.',
    keywords: 'lead categories india, buy lead database, B2B database categories, B2C data india, all lead categories gallery',
    alternates: siteAlternates(`${SITE_URL}/categories`),
    openGraph: {
        title: 'Lead Categories | All Verified India Databases | Galaxy Connect',
        description: 'Browse all verified B2B & B2C lead categories in India, refreshed daily and delivered instantly.',
        type: 'website',
        url: `${SITE_URL}/categories`,
        siteName: SITE_NAME,
    },
}

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}