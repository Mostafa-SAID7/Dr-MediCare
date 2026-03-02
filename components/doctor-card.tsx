import { Calendar, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { slugify } from '@/lib/utils'

interface DoctorCardProps {
  doctor: {
    id: number
    name: string
    specialty: string
    rating: number
    experience: string
    image: string
    nextAvailable: string
    consultationFee: string
  }
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const slug = slugify(doctor.name)

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg shadow-sm cursor-pointer">
      <Link href={`/doctors/${slug}`} className="block">
        <div className="relative">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-4 right-4 bg-primary">
            Available
          </Badge>
        </div>
      </Link>
      <CardContent className="p-6">
        <div className="space-y-4">
          <Link href={`/doctors/${slug}`} className="block hover:opacity-80 transition-opacity">
            <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
            <p className="text-primary font-medium">{doctor.specialty}</p>
          </Link>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span>{doctor.rating}</span>
            </div>
            <span>{doctor.experience}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Next available</p>
              <p className="font-medium text-gray-800">{doctor.nextAvailable}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Consultation</p>
              <p className="font-bold text-accent">{doctor.consultationFee}</p>
            </div>
          </div>
          <Link href={`/book/${doctor.id}`}>
            <Button className="w-full">
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
