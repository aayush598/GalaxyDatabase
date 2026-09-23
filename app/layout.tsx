import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Galaxy Connect | Buy Verified India Lead Databases Online',
    template: '%s | Galaxy Connect',
  },
  description: 'Buy verified B2B & B2C lead databases in India across 25+ categories. Daily updates, instant delivery, Excel/CSV/JSON export.',
  keywords: 'buy leads online india, lead database, verified leads, B2B database, B2C data, real estate leads, education leads, finance leads, India lead generation',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '144x144', type: 'image/png' }
    ],
  },
  openGraph: {
    title: 'Galaxy Connect | Buy Verified India Lead Databases Online',
    description: 'Daily updated, verified Indian lead databases across 25+ categories. Purchased instantly with a credit wallet, exported as Excel, CSV or JSON.',
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary',
    title: 'Galaxy Connect | Buy Verified India Lead Databases Online',
    description: SITE_TAGLINE,
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
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <>
            <Script
              id="facebook-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <Script id="facebook-pixel-noscript" strategy="afterInteractive">
              {`<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1" /></noscript>`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}