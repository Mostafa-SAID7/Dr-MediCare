import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Doctors - MediCare',
  description: 'Browse and book appointments with top-rated doctors across all specialties. Expert healthcare professionals available 24/7.',
  keywords: ['find doctors', 'book doctor appointment', 'medical specialists', 'healthcare professionals', 'doctor search'],
  openGraph: {
    title: 'Find Doctors - MediCare',
    description: 'Browse and book appointments with top-rated doctors across all specialties.',
    url: 'https://dr-medicare.vercel.app/doctors',
    type: 'website',
    images: [{ url: 'https://dr-medicare.vercel.app/icon.svg' }],
  },
}

export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
