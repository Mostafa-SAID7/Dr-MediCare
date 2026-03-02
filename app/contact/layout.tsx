import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - MediCare',
  description: 'Get in touch with MediCare. Contact our support team for assistance, inquiries, or feedback. Available 24/7 to help you.',
  keywords: ['contact medicare', 'customer support', 'medical help', 'healthcare support', 'contact doctor'],
  openGraph: {
    title: 'Contact Us - MediCare',
    description: 'Get in touch with MediCare support team. Available 24/7.',
    url: 'https://dr-medicare.vercel.app/contact',
    type: 'website',
    images: [{ url: 'https://dr-medicare.vercel.app/icon.svg' }],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
