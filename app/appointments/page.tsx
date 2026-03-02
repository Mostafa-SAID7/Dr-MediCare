"use client"

import { useState } from "react"
import { Calendar, Clock, User, Phone, MapPin, Heart, Filter, Search, MoreVertical, Video, MessageSquare, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty'
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { DoctorAvatar } from "@/components/doctor-avatar"
import { appointments, statusColors } from "@/data"

export default function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter
    
    let matchesDate = true
    if (dateFilter === "upcoming") {
      matchesDate = new Date(appointment.date) >= new Date()
    } else if (dateFilter === "past") {
      matchesDate = new Date(appointment.date) < new Date()
    }
    
    return matchesSearch && matchesStatus && matchesDate
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    if (date.toDateString() === today.toDateString()) {
      return "Today"
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow"
    } else {
      return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      })
    }
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':')
    const date = new Date()
    date.setHours(parseInt(hours), parseInt(minutes))
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/doctors", label: "Doctors" },
    { href: "/appointments", label: "Appointments" },
    { href: "/contact", label: "Contact" },
    { href: "/patient-portal", label: "Patient Portal" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      <Header 
        currentPath="/appointments" 
        rightContent={
          <Link href="/doctors">
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Book New
            </Button>
          </Link>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Appointments
          </h1>
          <p className="text-xl text-gray-600">
            Manage your healthcare appointments and consultations
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search appointments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="past">Past</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {appointments.filter(a => a.status === 'confirmed').length}
              </div>
              <div className="text-gray-600">
                Confirmed
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {appointments.filter(a => a.status === 'pending').length}
              </div>
              <div className="text-gray-600">
                Pending
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {appointments.filter(a => a.status === 'completed').length}
              </div>
              <div className="text-gray-600">
                Completed
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">
                {appointments.length}
              </div>
              <div className="text-gray-600">
                Total
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {filteredAppointments.map((appointment) => (
            <Card key={appointment.id} className="hover:shadow-lg transition-shadow rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <DoctorAvatar 
                      name={appointment.doctor}
                      specialty={appointment.specialty}
                      image={appointment.image}
                      size="md"
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {appointment.doctor}
                      </h3>
                      <p className="text-primary font-medium">
                        {appointment.specialty}
                      </p>
                      <p className="text-sm text-gray-600">
                        {appointment.reason}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{formatDate(appointment.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{formatTime(appointment.time)}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center text-gray-600 mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">Location</span>
                      </div>
                      <p className="text-sm text-gray-800">{appointment.location}</p>
                    </div>
                    
                    <div className="text-center">
                      <Badge className={statusColors[appointment.status as keyof typeof statusColors]}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {appointment.status === 'confirmed' && (
                        <>
                          <Button size="sm" variant="outline">
                            <Video className="w-4 h-4 mr-1" />
                            Join Call
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            Message
                          </Button>
                        </>
                      )}
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="ghost">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Reschedule</DropdownMenuItem>
                          <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Cancel Appointment
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredAppointments.length === 0 && (
          <Empty>
            <EmptyHeader>
              <EmptyMedia>
                <Calendar className="w-8 h-8" />
              </EmptyMedia>
              <EmptyTitle>No appointments found</EmptyTitle>
              <EmptyDescription>
                {searchTerm || statusFilter !== "all" || dateFilter !== "all" 
                  ? "We couldn't find any appointments matching your criteria. Try adjusting your filters." 
                  : "You don't have any appointments scheduled yet. Book your first appointment with one of our expert doctors."}
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex flex-col sm:flex-row gap-3">
                {(searchTerm || statusFilter !== "all" || dateFilter !== "all") && (
                  <Button 
                    onClick={() => {
                      setSearchTerm("")
                      setStatusFilter("all")
                      setDateFilter("all")
                    }}
                    variant="outline"
                    size="lg"
                  >
                    Clear All Filters
                  </Button>
                )}
                <Link href="/doctors">
                  <Button size="lg" className="gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </EmptyContent>
          </Empty>
        )}
      </div>

      <Footer />
    </div>
  )
}
