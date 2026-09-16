import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Rubik } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const rubik = Rubik({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ТӨГС ТОНОГТ | Гадна металл фасад угсралт',
  description:
    'Төгс Тоногт — гадна металл фасад угсралтын мэргэжлийн шийдэл. Professional exterior metal facade solutions.',
  generator: 'v0.app',
  openGraph: {
    title: 'ТӨГС ТОНОГТ | Гадна металл фасад угсралт',
    description: 'Гадна металл фасад угсралтын мэргэжлийн шийдэл.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#181818',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn" className={`${manrope.variable} ${rubik.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
