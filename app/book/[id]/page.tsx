"use client"

import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, CreditCard, Heart, ArrowLeft, Check, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { MobileMenu } from "@/components/mobile-menu"

const doctors = {
  "1": {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    location: "Downtown Medical Center",
    image: "/sketch-cardiologist-sarah.jpg",
    consultationFee: 150,
    availableSlots: [
      { date: "2024-01-15", time: "09:00", available: true },
      { date: "2024-01-15", time: "10:30", available: true },
      { date: "2024-01-15", time: "14:00", available: false },
      { date: "2024-01-15", time: "15:30", available: true },
      { date: "2024-01-16", time: "09:00", available: true },
      { date: "2024-01-16", time: "11:00", available: true },
      { date: "2024-01-16", time: "14:30", available: true },
    ]
  }
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
]

const dates = [
  { date: "2024-01-15", day: "Today", dayName: "Monday" },
  { date: "2024-01-16", day: "Tomorrow", dayName: "Tuesday" },
  { date: "2024-01-17", day: "Jan 17", dayName: "Wednesday" },
  { date: "2024-01-18", day: "Jan 18", dayName: "Thursday" },
  { date: "2024-01-19", day: "Jan 19", dayName: "Friday" },
]

export default function BookAppointmentPage() {
  const params = useParams()
  const router = useRouter()
  const doctorId = params.id as string
  const doctor = doctors[doctorId as keyof typeof doctors]

  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("consultation")
  const [patientInfo, setPatientInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    reason: "",
    symptoms: "",
    insurance: ""
  })
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setBookingComplete(true)
  }

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary to-background flex items-center justify-center">
        <Card className="max-w-md mx-auto rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Your appointment with {doctor.name} has been scheduled for {selectedDate} at {selectedTime}.
            </p>
            <div className="space-y-3">
              <Button className="w-full" onClick={() => router.push("/appointments")}>
                View My Appointments
              </Button>
              <Button variant="outline" className="w-full" onClick={() => router.push("/")}>
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
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
                <Link key={link.href} href={link.href} className={`text-white/90 hover:text-white transition-colors font-medium`}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/doctors">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Doctors
                </Button>
              </Link>
              <MobileMenu links={navLinks} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Book Appointment</h1>
          <p className="text-gray-600">Schedule your consultation with {doctor.name}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Doctor Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-full mx-auto overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                    <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                  </div>
                  <Badge className="bg-primary text-white">Available Today</Badge>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">Consultation Fee</p>
                    <p className="text-2xl font-bold text-accent">${doctor.consultationFee}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Date Selection */}
              <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    Select Date
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {dates.map((dateOption) => (
                      <button
                        key={dateOption.date}
                        type="button"
                        onClick={() => setSelectedDate(dateOption.date)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          selectedDate === dateOption.date
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium">{dateOption.day}</div>
                        <div className="text-sm text-gray-600">{dateOption.dayName}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Time Selection */}
              {selectedDate && (
                <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-accent" />
                      Select Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border text-center transition-all ${
                            selectedTime === time
                              ? "border-accent bg-accent/10 text-accent"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Appointment Type */}
              <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Appointment Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={appointmentType} onValueChange={setAppointmentType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="consultation" id="consultation" />
                      <Label htmlFor="consultation">General Consultation - ${doctor.consultationFee}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="followup" id="followup" />
                      <Label htmlFor="followup">Follow-up Visit - ${doctor.consultationFee - 30}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="emergency" id="emergency" />
                      <Label htmlFor="emergency">Emergency Consultation - ${doctor.consultationFee + 50}</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Patient Information */}
              <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2 text-accent" />
                    Patient Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={patientInfo.firstName}
                        onChange={(e) => setPatientInfo({...patientInfo, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={patientInfo.lastName}
                        onChange={(e) => setPatientInfo({...patientInfo, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={patientInfo.email}
                        onChange={(e) => setPatientInfo({...patientInfo, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={patientInfo.phone}
                        onChange={(e) => setPatientInfo({...patientInfo, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={patientInfo.dateOfBirth}
                      onChange={(e) => setPatientInfo({...patientInfo, dateOfBirth: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="reason">Reason for Visit *</Label>
                    <Textarea
                      id="reason"
                      placeholder="Please describe the reason for your appointment..."
                      value={patientInfo.reason}
                      onChange={(e) => setPatientInfo({...patientInfo, reason: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="symptoms">Current Symptoms (Optional)</Label>
                    <Textarea
                      id="symptoms"
                      placeholder="Describe any current symptoms..."
                      value={patientInfo.symptoms}
                      onChange={(e) => setPatientInfo({...patientInfo, symptoms: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="insurance">Insurance Provider (Optional)</Label>
                    <Input
                      id="insurance"
                      placeholder="e.g., Blue Cross Blue Shield"
                      value={patientInfo.insurance}
                      onChange={(e) => setPatientInfo({...patientInfo, insurance: e.target.value})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-secondary-foreground" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Credit/Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="insurance" id="insurance" />
                      <Label htmlFor="insurance">Insurance Coverage</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">Pay at Clinic</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card className="rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreeTerms}
                      onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      . I understand that this appointment is subject to confirmation by the healthcare provider.
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 px-8"
                  disabled={!selectedDate || !selectedTime || !agreeTerms || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Booking...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      Confirm Booking
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
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
