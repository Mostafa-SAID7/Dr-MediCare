"use client"

import { useState } from "react"
import { Calendar, Clock, User, Phone, MapPin, Heart, Filter, Search, MoreVertical, Video, MessageSquare, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "2024-01-15",
    time: "14:00",
    status: "confirmed",
    type: "consultation",
    location: "Downtown Medical Center",
    image: "/placeholder-lerxs.png",
    reason: "Regular checkup and blood pressure monitoring"
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Neurologist",
    date: "2024-01-16",
    time: "10:00",
    status: "pending",
    type: "followup",
    location: "Central Hospital",
    image: "/male-neurologist.png",
    reason: "Follow-up for migraine treatment"
  },
  {
    id: 3,
    doctor: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    date: "2024-01-12",
    time: "16:30",
    status: "completed",
    type: "consultation",
    location: "Children's Medical Center",
    image: "/placeholder-gi9iv.png",
    reason: "Child vaccination and health assessment"
  },
  {
    id: 4,
    doctor: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    date: "2024-01-20",
    time: "09:00",
    status: "confirmed",
    type: "consultation",
    location: "Sports Medicine Clinic",
    image: "/male-orthopedic-surgeon.png",
    reason: "Knee pain evaluation and treatment options"
  }
]

const statusColors = {
  confirmed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  completed: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800"
}

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
                <Link key={link.href} href={link.href} className={`text-white/90 hover:text-white transition-colors font-medium ${link.href === '/appointments' ? 'font-bold' : ''}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/doctors">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book New
                </Button>
              </Link>
              <MobileMenu links={navLinks} />
            </div>
          </div>
        </div>
      </header>

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
                    <img
                      src={`/simple-line-sketch.png?height=64&width=64&query=sketch of ${appointment.specialty.toLowerCase()} doctor`}
                      alt={appointment.doctor}
                      className="w-16 h-16 rounded-full object-cover"
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
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No appointments found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || statusFilter !== "all" || dateFilter !== "all" 
                ? "Try adjusting your search criteria" 
                : "You don't have any appointments yet"}
            </p>
            <div className="space-x-4">
              {(searchTerm || statusFilter !== "all" || dateFilter !== "all") && (
                <Button 
                  onClick={() => {
                    setSearchTerm("")
                    setStatusFilter("all")
                    setDateFilter("all")
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              )}
              <Link href="/doctors">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
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
                <li><Link href="/doctors" className="hover:text-white transition-colors">Doctors</Link></li>
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
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
