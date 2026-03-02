'use client'

import { useState } from 'react'
import { Heart, MapPin, Star, Calendar, Clock, Award, User, Phone, Mail, Menu, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { MobileMenu } from '@/components/mobile-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import { Footer } from '@/components/footer'
import { Footer } from '@/components/footer'

const doctorsData = {
  'sarah-johnson': {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    slug: 'sarah-johnson',
    rating: 4.9,
    reviews: 156,
    experience: "15 years",
    location: "Downtown Medical Center",
    image: "/sketch-cardiologist-sarah.jpg",
    nextAvailable: "Today 2:00 PM",
    consultationFee: "$150",
    languages: ["English", "Spanish"],
    education: "Harvard Medical School",
    bio: "Dr. Sarah Johnson is an accomplished cardiologist with 15 years of experience in cardiovascular health. She specializes in preventive cardiology and interventional procedures.",
    certifications: ["Board Certified Cardiologist", "American Heart Association", "Interventional Cardiology Specialist"],
    description: "Dedicated to providing comprehensive cardiac care with a focus on patient education and preventive medicine."
  },
  'michael-chen': {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    slug: 'michael-chen',
    rating: 4.8,
    reviews: 203,
    experience: "12 years",
    location: "Central Hospital",
    image: "/sketch-neurologist-michael.jpg",
    nextAvailable: "Tomorrow 10:00 AM",
    consultationFee: "$180",
    languages: ["English", "Mandarin"],
    education: "Johns Hopkins University",
    bio: "Dr. Michael Chen is a highly skilled neurologist specializing in neurodegenerative diseases and movement disorders.",
    certifications: ["Board Certified Neurologist", "Neurodegenerative Disease Specialist", "Sleep Medicine Certified"],
    description: "Expert in diagnosing and treating complex neurological conditions with advanced treatment modalities."
  },
  'emily-rodriguez': {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    slug: 'emily-rodriguez',
    rating: 4.9,
    reviews: 189,
    experience: "10 years",
    location: "Children's Medical Center",
    image: "/sketch-pediatrician-emily.jpg",
    nextAvailable: "Today 4:30 PM",
    consultationFee: "$120",
    languages: ["English", "Spanish"],
    education: "Stanford Medical School",
    bio: "Dr. Emily Rodriguez is a compassionate pediatrician dedicated to the health and wellbeing of children from infancy through adolescence.",
    certifications: ["Board Certified Pediatrician", "Pediatric Emergency Medicine", "Child Development Specialist"],
    description: "Providing comprehensive pediatric care with a focus on child development, vaccination, and preventive health."
  },
  'james-wilson': {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    slug: 'james-wilson',
    rating: 4.7,
    reviews: 142,
    experience: "18 years",
    location: "Sports Medicine Clinic",
    image: "/sketch-orthopedic-james.jpg",
    nextAvailable: "Monday 9:00 AM",
    consultationFee: "$200",
    languages: ["English"],
    education: "Mayo Clinic",
    bio: "Dr. James Wilson is an experienced orthopedic surgeon specializing in sports medicine and joint replacement.",
    certifications: ["Board Certified Orthopedic Surgery", "Sports Medicine Fellowship", "Joint Preservation Specialist"],
    description: "Specializing in surgical and non-surgical treatment of orthopedic injuries and conditions."
  },
  'lisa-park': {
    id: 5,
    name: "Dr. Lisa Park",
    specialty: "Dermatologist",
    slug: 'lisa-park',
    rating: 4.8,
    reviews: 167,
    experience: "8 years",
    location: "Skin Care Center",
    image: "/sketch-dermatologist-lisa.jpg",
    nextAvailable: "Today 3:15 PM",
    consultationFee: "$140",
    languages: ["English", "Korean"],
    education: "UCLA Medical School",
    bio: "Dr. Lisa Park is a board-certified dermatologist specializing in cosmetic and medical dermatology.",
    certifications: ["Board Certified Dermatologist", "Cosmetic Dermatology", "Laser Surgery Specialist"],
    description: "Expert in treating skin conditions and offering advanced cosmetic dermatology procedures."
  },
  'robert-taylor': {
    id: 6,
    name: "Dr. Robert Taylor",
    specialty: "General Practitioner",
    slug: 'robert-taylor',
    rating: 4.6,
    reviews: 234,
    experience: "20 years",
    location: "Family Health Clinic",
    image: "/sketch-gp-robert.jpg",
    nextAvailable: "Today 1:00 PM",
    consultationFee: "$100",
    languages: ["English", "French"],
    education: "University of Pennsylvania",
    bio: "Dr. Robert Taylor is a seasoned general practitioner with 20 years of experience in primary care medicine.",
    certifications: ["Board Certified Family Medicine", "Preventive Medicine", "Chronic Disease Management"],
    description: "Committed to providing comprehensive primary care and building long-term patient relationships."
  }
}

export default function DoctorDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const doctor = doctorsData[slug as keyof typeof doctorsData]

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/doctors", label: "Doctors" },
    { href: "/appointments", label: "Appointments" },
    { href: "/contact", label: "Contact" },
    { href: "/patient-portal", label: "Patient Portal" },
  ]

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary to-background flex items-center justify-center">
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MediCare</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/90 hover:text-white transition-colors font-medium">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/doctors">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <MobileMenu links={navLinks} />
            </div>
          </div>
        </div>
      </header>

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
                  {doctor.certifications.map((cert, i) => (
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
                  {doctor.languages.map((lang, i) => (
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
