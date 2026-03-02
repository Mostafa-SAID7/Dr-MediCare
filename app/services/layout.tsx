import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | MediCare - Comprehensive Healthcare Solutions',
  description: 'Explore our wide range of medical services including general consultation, specialist care, emergency services, diagnostic facilities, and telemedicine. Quality healthcare for all your needs.',
  keywords: ['medical services', 'healthcare', 'consultation', 'specialist care', 'emergency services', 'telemedicine', 'diagnostic services'],
  openGraph: {
    title: 'Our Services | MediCare',
    description: 'Comprehensive healthcare solutions designed to meet all your medical needs',
    url: 'https://dr-medicare.vercel.app/services',
    siteName: 'MediCare',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | MediCare',
    description: 'Comprehensive healthcare solutions designed to meet all your medical needs',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
