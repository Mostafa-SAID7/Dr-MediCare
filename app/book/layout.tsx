import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Appointment - MediCare',
  description: 'Book your medical appointment online. Choose your preferred date, time, and doctor. Quick and easy appointment scheduling.',
  keywords: ['book appointment', 'schedule doctor visit', 'online booking', 'medical appointment', 'doctor reservation'],
  openGraph: {
    title: 'Book Appointment - MediCare',
    description: 'Book your medical appointment online quickly and easily.',
    url: 'https://dr-medicare.vercel.app/book',
    type: 'website',
    images: [{ url: 'https://dr-medicare.vercel.app/icon.svg' }],
  },
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
