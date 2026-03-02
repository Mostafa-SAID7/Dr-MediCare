import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Portal - MediCare',
  description: 'Access your patient portal to manage your profile, view medical history, track appointments, and communicate with your healthcare providers.',
  keywords: ['patient portal', 'medical records', 'health profile', 'patient dashboard', 'medical history'],
  openGraph: {
    title: 'Patient Portal - MediCare',
    description: 'Manage your health profile and appointments in one place.',
    url: 'https://dr-medicare.vercel.app/patient-portal',
    type: 'website',
    images: [{ url: 'https://dr-medicare.vercel.app/icon.svg' }],
  },
}

export default function PatientPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
