import type { Metadata, Viewport } from 'next'
import { Exo, Source_Serif_4, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const fontSans = Exo({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fontSerif = Source_Serif_4({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const fontMono = IBM_Plex_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MediCare - Online Doctor Reservation & Appointment Booking',
  description: 'Book appointments with top-rated doctors instantly. Quality healthcare made accessible. 500+ expert doctors, 50k+ happy patients, 24/7 support.',
  keywords: ['doctor appointment', 'online doctor booking', 'healthcare', 'medical consultation', 'doctor reservation'],
  authors: [{ name: 'MediCare' }],
  creator: 'MediCare',
  publisher: 'MediCare',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dr-medicare.vercel.app',
    siteName: 'MediCare',
    title: 'MediCare - Online Doctor Reservation & Appointment Booking',
    description: 'Book appointments with top-rated doctors instantly. Quality healthcare made accessible.',
    images: [
      {
        url: 'https://dr-medicare.vercel.app/icon.svg',
        width: 180,
        height: 180,
        alt: 'MediCare - Doctor Appointment Booking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediCare - Online Doctor Reservation',
    description: 'Book appointments with top-rated doctors instantly',
    images: ['https://dr-medicare.vercel.app/icon.svg'],
  },
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'MediCare',
    description: 'Online doctor reservation and appointment booking platform',
    url: 'https://dr-medicare.vercel.app',
    logo: 'https://dr-medicare.vercel.app/icon.svg',
    telephone: '(555) 123-4567',
    email: 'support@medicare.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Health Street',
      addressLocality: 'Medical City',
      addressRegion: 'MC',
      postalCode: '12345',
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
  }

  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: var(--font-sans);
}
        `}</style>
        <meta name="theme-color" content="hsl(262, 95%, 35%)" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="hsl(262, 95%, 55%)" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: 'hsl(var(--card))',
                color: 'hsl(var(--card-foreground))',
                border: '1px solid hsl(var(--border))',
              },
              className: 'sonner-toast',
            }}
            richColors
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
