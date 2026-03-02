import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'MediCare - Online Doctor Reservation & Appointment Booking',
  description: 'Book appointments with top-rated doctors instantly. Quality healthcare made accessible. 500+ expert doctors, 50k+ happy patients, 24/7 support.',
  keywords: ['doctor appointment', 'online doctor booking', 'healthcare', 'medical consultation', 'doctor reservation'],
  authors: [{ name: 'MediCare' }],
  creator: 'MediCare',
  publisher: 'MediCare',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medicare.example.com',
    siteName: 'MediCare',
    title: 'MediCare - Online Doctor Reservation & Appointment Booking',
    description: 'Book appointments with top-rated doctors instantly. Quality healthcare made accessible.',
    images: [
      {
        url: 'https://medicare.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MediCare - Doctor Appointment Booking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediCare - Online Doctor Reservation',
    description: 'Book appointments with top-rated doctors instantly',
    images: ['https://medicare.example.com/twitter-image.jpg'],
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fontFamily = GeistSans.style.fontFamily
  const fontSans = GeistSans.variable
  const fontMono = GeistMono.variable

  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${fontFamily};
  --font-sans: ${fontSans};
  --font-mono: ${fontMono};
}
        `}</style>
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
