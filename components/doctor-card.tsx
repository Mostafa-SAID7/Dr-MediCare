import { Calendar, Star, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
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
    education?: string
    reviews?: number
    location?: string
    languages?: string[]
  }
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const slug = slugify(doctor.name)

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg shadow-sm cursor-pointer">
      <Link href={`/doctors/${slug}`} className="block">
        <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={400}
            height={300}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
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
            {doctor.education && (
              <p className="text-sm text-gray-600">{doctor.education}</p>
            )}
          </Link>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span className="font-medium">{doctor.rating}</span>
              {doctor.reviews && (
                <span className="text-gray-600 ml-1">({doctor.reviews} reviews)</span>
              )}
            </div>
            <span className="text-gray-600">{doctor.experience}</span>
          </div>

          {(doctor.location || doctor.nextAvailable) && (
            <div className="space-y-2 text-sm text-gray-600">
              {doctor.location && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{doctor.location}</span>
                </div>
              )}
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Next: {doctor.nextAvailable}</span>
              </div>
            </div>
          )}

          {doctor.languages && doctor.languages.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {doctor.languages.map((language) => (
                <Badge key={language} variant="secondary" className="text-xs">
                  {language}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-sm text-gray-600">Consultation Fee</p>
              <p className="font-bold text-accent text-lg">{doctor.consultationFee}</p>
            </div>
            <Link href={`/book/${doctor.id}`}>
              <Button>
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
