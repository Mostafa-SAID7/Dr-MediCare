import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | MediCare - 20+ Years of Healthcare Excellence',
  description: 'Learn about MediCare\'s mission, values, and commitment to providing exceptional healthcare services. Meet our leadership team and discover our story of healthcare excellence since 2004.',
  keywords: ['about medicare', 'healthcare mission', 'medical team', 'healthcare values', 'patient care', 'medical excellence'],
  openGraph: {
    title: 'About Us | MediCare',
    description: 'Committed to providing exceptional healthcare services with compassion, innovation, and excellence since 2004',
    url: 'https://dr-medicare.vercel.app/about',
    siteName: 'MediCare',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | MediCare',
    description: 'Committed to providing exceptional healthcare services with compassion, innovation, and excellence since 2004',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
