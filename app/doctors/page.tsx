"use client"

import { useState } from "react"
import { Search, Filter, Star, Calendar, MapPin, Clock, Heart, Menu, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 156,
    experience: "15 years",
    location: "Downtown Medical Center",
    image: "/sketch-cardiologist-sarah.jpg",
    nextAvailable: "Today 2:00 PM",
    consultationFee: "$150",
    languages: ["English", "Spanish"],
    education: "Harvard Medical School"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.8,
    reviews: 203,
    experience: "12 years",
    location: "Central Hospital",
    image: "/sketch-neurologist-michael.jpg",
    nextAvailable: "Tomorrow 10:00 AM",
    consultationFee: "$180",
    languages: ["English", "Mandarin"],
    education: "Johns Hopkins University"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 4.9,
    reviews: 189,
    experience: "10 years",
    location: "Children's Medical Center",
    image: "/sketch-pediatrician-emily.jpg",
    nextAvailable: "Today 4:30 PM",
    consultationFee: "$120",
    languages: ["English", "Spanish"],
    education: "Stanford Medical School"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    rating: 4.7,
    reviews: 142,
    experience: "18 years",
    location: "Sports Medicine Clinic",
    image: "/sketch-orthopedic-james.jpg",
    nextAvailable: "Monday 9:00 AM",
    consultationFee: "$200",
    languages: ["English"],
    education: "Mayo Clinic"
  },
  {
    id: 5,
    name: "Dr. Lisa Park",
    specialty: "Dermatologist",
    rating: 4.8,
    reviews: 167,
    experience: "8 years",
    location: "Skin Care Center",
    image: "/sketch-dermatologist-lisa.jpg",
    nextAvailable: "Today 3:15 PM",
    consultationFee: "$140",
    languages: ["English", "Korean"],
    education: "UCLA Medical School"
  },
  {
    id: 6,
    name: "Dr. Robert Taylor",
    specialty: "General Practitioner",
    rating: 4.6,
    reviews: 234,
    experience: "20 years",
    location: "Family Health Clinic",
    image: "/sketch-gp-robert.jpg",
    nextAvailable: "Today 1:00 PM",
    consultationFee: "$100",
    languages: ["English", "French"],
    education: "University of Pennsylvania"
  }
]

const specialties = [
  "All Specialties",
  "Cardiologist",
  "Neurologist", 
  "Pediatrician",
  "Orthopedic Surgeon",
  "Dermatologist",
  "General Practitioner"
]

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties")
  const [sortBy, setSortBy] = useState("rating")

  const filteredDoctors = doctors
    .filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSpecialty = selectedSpecialty === "All Specialties" || 
                              doctor.specialty === selectedSpecialty
      return matchesSearch && matchesSpecialty
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "experience") return parseInt(b.experience) - parseInt(a.experience)
      if (sortBy === "fee") return parseInt(a.consultationFee.replace("$", "")) - parseInt(b.consultationFee.replace("$", ""))
      return 0
    })

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/doctors", label: "Doctors" },
    { href: "/appointments", label: "Appointments" },
    { href: "/contact", label: "Contact" },
    { href: "/patient-portal", label: "Patient Portal" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
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
                <Link key={link.href} href={link.href} className={`text-white/90 hover:text-white transition-colors font-medium ${link.href === '/doctors' ? 'font-bold' : ''}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="destructive">
                Emergency
              </Button>
              <MobileMenu links={navLinks} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find Your Doctor
          </h1>
          <p className="text-xl text-gray-600">
            Browse our network of qualified healthcare professionals
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search doctors by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Select specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
                <SelectItem value="fee">Lowest Fee</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
            {selectedSpecialty !== "All Specialties" && ` in ${selectedSpecialty}`}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => {
            const slugMap: Record<number, string> = {
              1: 'sarah-johnson',
              2: 'michael-chen',
              3: 'emily-rodriguez',
              4: 'james-wilson',
              5: 'lisa-park',
              6: 'robert-taylor'
            }
            const slug = slugMap[doctor.id]
            
            return (
            <Card key={doctor.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer">
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
                    <p className="text-sm text-gray-600">{doctor.education}</p>
                  </Link>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-gray-600 ml-1">({doctor.reviews} reviews)</span>
                    </div>
                    <span className="text-gray-600">{doctor.experience}</span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Next: {doctor.nextAvailable}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((language) => (
                      <Badge key={language} variant="secondary" className="text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>

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
          })}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No doctors found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
            <Button 
              onClick={() => {
                setSearchTerm("")
                setSelectedSpecialty("All Specialties")
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-accent text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MediCare</span>
              </div>
              <p className="text-gray-400">
                Providing quality healthcare services with compassion and excellence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/appointments" className="hover:text-white transition-colors">Appointments</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/patient-portal" className="hover:text-white transition-colors">Patient Portal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@medicare.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  123 Health St, Medical City
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency</h3>
              <p className="text-gray-400 mb-2">24/7 Emergency Hotline</p>
              <p className="text-2xl font-bold text-destructive">(555) 911-HELP</p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Copyright Section */}
      <div className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 w-full mb-6"></div>
          <p className="text-center text-gray-400">
            &copy; 2024 - {new Date().getFullYear()}{' '}
            <a 
              href="https://m-said-portfolio.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors font-semibold"
            >
              M.Said
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
