"use client"

import { useState, useMemo, memo } from "react"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty'
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { DoctorCard } from "@/components/doctor-card"
import { doctors, specialtyList } from "@/data"
import { useFilter } from "@/hooks"

export default function DoctorsPage() {
  const [sortBy, setSortBy] = useState("rating")
  
  const { 
    searchTerm, 
    setSearchTerm, 
    filters, 
    setFilter, 
    clearFilters, 
    filteredItems 
  } = useFilter({
    items: doctors,
    searchFields: ['name', 'specialty'],
    filterFn: (doctor, filters) => {
      if (filters.specialty && filters.specialty !== "All Specialties") {
        return doctor.specialty === filters.specialty
      }
      return true
    }
  })

  // Memoize sorted doctors to avoid re-sorting on every render
  const sortedDoctors = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "experience") return parseInt(b.experience) - parseInt(a.experience)
      if (sortBy === "fee") return parseInt(a.consultationFee.replace("$", "")) - parseInt(b.consultationFee.replace("$", ""))
      return 0
    })
  }, [filteredItems, sortBy])

  return (
    <div className="min-h-screen bg-grid-dots">
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
            <Select value={filters.specialty || "All Specialties"} onValueChange={(value) => setFilter('specialty', value)}>
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
            Showing {sortedDoctors.length} doctor{sortedDoctors.length !== 1 ? 's' : ''}
            {filters.specialty && filters.specialty !== "All Specialties" && ` in ${filters.specialty}`}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* No Results */}
        {sortedDoctors.length === 0 && (
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
                onClick={clearFilters}
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
