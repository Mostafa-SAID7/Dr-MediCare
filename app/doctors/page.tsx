"use client"

import { useState } from "react"
import { Search, Star, Calendar, MapPin, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty'
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { doctors, specialtyList } from "@/data"

import { slugify } from "@/lib/utils"

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      <Header 
        currentPath="/doctors" 
        rightContent={
          <Button variant="destructive">
            Emergency
          </Button>
        }
      />

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
                {specialtyList.map((specialty) => (
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
            const slug = slugify(doctor.name)
            
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
                    {doctor.languages?.map((language) => (
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
          <Empty>
            <EmptyHeader>
              <EmptyMedia>
                <Search className="w-8 h-8" />
              </EmptyMedia>
              <EmptyTitle>No doctors found</EmptyTitle>
              <EmptyDescription>
                We couldn't find any doctors matching your search criteria.
                <br />
                Try adjusting your filters or search terms.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedSpecialty("All Specialties")
                }}
                size="lg"
                className="gap-2"
              >
                Clear All Filters
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </div>

      <Footer />
    </div>
  )
}
