"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, User, Calendar, Clock, Mail, Phone, MapPin, Edit, LogOut, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MobileMenu } from "@/components/mobile-menu"

// Placeholder data for a patient
const patient = {
  id: "patient-123",
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  phone: "+1 (555) 987-6543",
  dateOfBirth: "1990-05-15",
  address: "123 Health St, Medical City",
  insuranceProvider: "MediCare Insurance",
  medicalHistory: "No significant medical history. Allergies: Penicillin.",
  profileImage: "/placeholder-user.jpg"
}

// Placeholder data for patient's appointments
const patientAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "2024-08-10",
    time: "14:00",
    status: "confirmed",
    type: "consultation",
    location: "Downtown Medical Center",
    image: "/sketch-cardiologist-sarah.jpg",
    reason: "Annual checkup"
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Neurologist",
    date: "2024-08-05",
    time: "10:00",
    status: "completed",
    type: "followup",
    location: "Central Hospital",
    image: "/male-neurologist.png",
    reason: "Migraine follow-up"
  },
  {
    id: 3,
    doctor: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    date: "2024-08-20",
    time: "16:30",
    status: "pending",
    type: "consultation",
    location: "Children's Medical Center",
    image: "/placeholder-gi9iv.png",
    reason: "Child vaccination"
  }
]

const statusColors = {
  confirmed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  completed: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800"
}

export default function PatientPortalPage() {
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileData, setProfileData] = useState(patient)

  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const handleSaveProfile = () => {
    // In a real app, you'd send this data to your backend
    console.log("Saving profile:", profileData)
    setIsEditingProfile(false)
  }

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
                <Link key={link.href} href={link.href} className={`text-white/90 hover:text-white transition-colors font-medium ${link.href === '/patient-portal' ? 'font-bold' : ''}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white/90 hover:bg-white/10">
                    <User className="w-4 h-4 mr-2" />
                    {profileData.firstName} {profileData.lastName}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setIsEditingProfile(true)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <MobileMenu links={navLinks} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome, {profileData.firstName}!
          </h1>
          <p className="text-xl text-gray-600">
            Manage your profile and appointments in one place.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Patient Profile Card */}
          <div className="lg:col-span-1">
            <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-2xl">My Profile</CardTitle>
                {!isEditingProfile && (
                  <Button variant="ghost" size="sm" onClick={() => setIsEditingProfile(true)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                )}
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-col items-center space-y-4 mb-6">
                  <img
                    src="/user-profile-sketch.png"
                    alt="Patient Profile"
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {profileData.firstName} {profileData.lastName}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                      disabled={!isEditingProfile}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                      disabled={!isEditingProfile}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={profileData.dateOfBirth}
                      onChange={(e) => handleProfileChange('dateOfBirth', e.target.value)}
                      disabled={!isEditingProfile}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) => handleProfileChange('address', e.target.value)}
                      disabled={!isEditingProfile}
                    />
                  </div>
                  <div>
                    <Label htmlFor="insurance">Insurance Provider</Label>
                    <Input
                      id="insurance"
                      value={profileData.insuranceProvider}
                      onChange={(e) => handleProfileChange('insuranceProvider', e.target.value)}
                      disabled={!isEditingProfile}
                    />
                  </div>
                  <div>
                    <Label htmlFor="medicalHistory">Medical History / Notes</Label>
                    <Textarea
                      id="medicalHistory"
                      value={profileData.medicalHistory}
                      onChange={(e) => handleProfileChange('medicalHistory', e.target.value)}
                      disabled={!isEditingProfile}
                      rows={4}
                    />
                  </div>
                  {isEditingProfile && (
                    <Button onClick={handleSaveProfile} className="w-full bg-primary hover:bg-primary/90">
                      Save Changes
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Appointments */}
          <div className="lg:col-span-2">
            <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Upcoming Appointments
                </CardTitle>
                <CardDescription>
                  Your scheduled consultations and follow-ups.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {patientAppointments.filter(app => new Date(app.date) >= new Date() && app.status !== 'completed' && app.status !== 'cancelled').length > 0 ? (
                  patientAppointments.filter(app => new Date(app.date) >= new Date() && app.status !== 'completed' && app.status !== 'cancelled').map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <img
                          src={`/simple-line-sketch.png?height=48&width=48&query=sketch of ${appointment.specialty.toLowerCase()} doctor`}
                          alt={appointment.doctor}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">{appointment.doctor}</h4>
                          <p className="text-sm text-primary">{appointment.specialty}</p>
                          <p className="text-xs text-gray-600">{appointment.reason}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-800">{formatDate(appointment.date)} at {formatTime(appointment.time)}</p>
                        <Badge className={statusColors[appointment.status as keyof typeof statusColors]}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-600">
                    No upcoming appointments.
                    <Link href="/doctors">
                      <Button variant="link" className="text-primary">Book one now!</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Past Appointments */}
            <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-accent" />
                  Past Appointments
                </CardTitle>
                <CardDescription>
                  A record of your previous consultations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {patientAppointments.filter(app => new Date(app.date) < new Date() || app.status === 'completed' || app.status === 'cancelled').length > 0 ? (
                  patientAppointments.filter(app => new Date(app.date) < new Date() || app.status === 'completed' || app.status === 'cancelled').map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <img
                          src={`/simple-line-sketch.png?height=48&width=48&query=sketch of ${appointment.specialty.toLowerCase()} doctor`}
                          alt={appointment.doctor}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">{appointment.doctor}</h4>
                          <p className="text-sm text-primary">{appointment.specialty}</p>
                          <p className="text-xs text-gray-600">{appointment.reason}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-800">{formatDate(appointment.date)} at {formatTime(appointment.time)}</p>
                        <Badge className={statusColors[appointment.status as keyof typeof statusColors]}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-600">
                    No past appointments.
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
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
                <li><Link href="/appointments" className="hover:text-white transition-colors">Appointments</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
