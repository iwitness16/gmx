import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Global Mail Express | Worldwide Freight & Package Tracking',
  description:
    'Global Mail Express delivers fast, secure air, sea, road and rail freight forwarding with real-time package tracking across the world.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
    apple: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  userScalable: true,
  themeColor: '#12203f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background light" style={{ colorScheme: 'light' }}>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* Smartsupp Live Chat — key must be set before loader runs */}
        <Script id="smartsupp-config" strategy="beforeInteractive">{`
          var _smartsupp = _smartsupp || {};
          _smartsupp.key = '622f132b7c6b4d19cea8aa8cc9ba72d2b8ee325e';
        `}</Script>
        <Script
          src="https://www.smartsuppchat.com/loader.js?"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
