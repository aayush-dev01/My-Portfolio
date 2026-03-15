import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CursorGlow } from '@/components/cursor-glow'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Aayush Rajesh Patil | Creative Developer',
  description: 'Creative developer passionate about building meaningful digital products. I enjoy transforming ideas into functional experiences using modern web technologies.',
  keywords: ['developer', 'web developer', 'frontend', 'react', 'next.js', 'portfolio'],
  authors: [{ name: 'Aayush Rajesh Patil' }],
  openGraph: {
    title: 'Aayush Rajesh Patil | Creative Developer',
    description: 'Creative developer passionate about building meaningful digital products.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aayush Rajesh Patil | Creative Developer',
    description: 'Creative developer passionate about building meaningful digital products.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased noise`}>
        <CursorGlow />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
