import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://opticorecaribbean.com'),
  title: {
    default: 'OptiCore Caribbean — Business Efficiency Engineers',
    template: '%s — OptiCore Caribbean',
  },
  description:
    'We partner with Caribbean businesses to audit, design, and deploy custom systems that cut waste and unlock growth.',
  openGraph: {
    type: 'website',
    locale: 'en_BB',
    url: 'https://opticorecaribbean.com',
    siteName: 'OptiCore Caribbean',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Nav />
        <main className="pt-20 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
