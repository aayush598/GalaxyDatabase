import './global.css';
import { Metadata } from 'next';
import Providers from './providers';
import { Toaster } from 'sonner';
import { Layout } from './layout-client';

export const metadata: Metadata = {
    title: 'Galaxy Database',
    description: 'Pure Next.js Application',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body>
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
                <Toaster />
                <script src="https://kit.fontawesome.com/2c15cc0cc7.js" crossOrigin="anonymous" async />
            </body>
        </html>
    );
}
