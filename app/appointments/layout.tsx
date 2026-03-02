import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Appointments - MediCare',
  description: 'View and manage your medical appointments. Track upcoming consultations, past visits, and reschedule appointments easily.',
  keywords: ['my appointments', 'medical appointments', 'doctor appointments', 'appointment management', 'healthcare schedule'],
  openGraph: {
    title: 'My Appointments - MediCare',
    description: 'View and manage your medical appointments.',
    url: 'https://dr-medicare.vercel.app/appointments',
    type: 'website',
    images: [{ url: 'https://dr-medicare.vercel.app/icon.svg' }],
  },
}

export default function AppointmentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
