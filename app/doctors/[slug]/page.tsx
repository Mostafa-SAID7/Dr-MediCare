'use client'

import { Star, Calendar, Award, User, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { getDoctorBySlug } from '@/data'

export default function DoctorDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const doctor = getDoctorBySlug(slug)

  if (!doctor) {
    return (
      <div className="min-h-screen bg-grid-dots flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor not found</h1>
          <Link href="/doctors">
            <Button>Back to Doctors</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-grid-dots">
      <Header 
        currentPath="/doctors" 
        rightContent={
          <Link href="/doctors">
            <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        }
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Doctor Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 rounded-lg shadow-sm">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-48 h-48 rounded-lg mx-auto overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{doctor.name}</h1>
                    <p className="text-primary font-semibold">{doctor.specialty}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 py-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{doctor.rating} ({doctor.reviews} reviews)</span>
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
          </div>

          {/* Doctor Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card className="rounded-lg shadow-sm">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{doctor.bio}</p>
                <p className="text-gray-600">{doctor.description}</p>
              </CardContent>
            </Card>

            {/* Experience & Education */}
            <Card className="rounded-lg shadow-sm">
              <CardHeader>
                <CardTitle>Experience & Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Experience</p>
                    <p className="text-gray-600">{doctor.experience} in {doctor.specialty}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <User className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Education</p>
                    <p className="text-gray-600">{doctor.education}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="rounded-lg shadow-sm">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {doctor.certifications?.map((cert: string, i: number) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Badge className="bg-primary/10 text-primary">{cert}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="rounded-lg shadow-sm">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p className="text-gray-600">{doctor.location}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <p className="text-gray-600">contact@medicare.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="rounded-lg shadow-sm">
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages?.map((lang: string, i: number) => (
                    <Badge key={i} className="bg-accent/20 text-accent">{lang}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
