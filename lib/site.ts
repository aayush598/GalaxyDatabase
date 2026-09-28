/* ─── Canonical site constants for SEO / metadata / sitemaps ─── */
export const SITE_URL = 'https://www.galaxyconnect.in'
export const SITE_NAME = 'Galaxy Connect'
export const SITE_TAGLINE = 'Buy Verified India Business & Consumer Leads Online'

/* Alternate-language (hreflang) declaration, single-language site */
export function siteAlternates(canonical: string) {
  return {
    canonical,
    languages: {
      en: canonical,
      'x-default': canonical,
    },
  }
}

/* ─── Social profiles (single source of truth) ──────────────── */
export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/galaxy_connect?stkn=MWhoOXdkcWluN3JzNQ==',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1Ey7qR5ZyX/',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/galaxy-connect-india/',
  },
  {
    label: 'IndiaMART',
    href: 'https://m.indiamart.com/galaxyconnect-indore/',
  },
]