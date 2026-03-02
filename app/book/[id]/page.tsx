"use client"

import { useState } from "react"
import { Calendar, Clock, User, CreditCard, ArrowLeft, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePicker } from "@/components/ui/date-picker"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { getDoctorById, timeSlots, getAvailableDates } from "@/data"
import { toast } from 'sonner'

export default function BookAppointmentPage() {
  const params = useParams()
  const router = useRouter()
  const doctorId = parseInt(params.id as string)
  const doctor = getDoctorById(doctorId)
  const dates = getAvailableDates()

  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("consultation")
  const [patientInfo, setPatientInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: undefined as Date | undefined,
    reason: "",
    symptoms: "",
    insurance: ""
  })
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)

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
    
    // Show success toast
    toast.success('Appointment Confirmed!', {
      description: `Your appointment with ${doctor.name} has been scheduled for ${selectedDate} at ${selectedTime}.`,
      duration: 5000,
    })
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
      <Header 
        currentPath="/doctors" 
        rightContent={
          <Link href="/doctors">
            <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Doctors
            </Button>
          </Link>
        }
      />

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
                    <p className="text-2xl font-bold text-accent">{doctor.consultationFee}</p>
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
                      <Label htmlFor="consultation">General Consultation - {doctor.consultationFee}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="followup" id="followup" />
                      <Label htmlFor="followup">Follow-up Visit - {doctor.consultationFee}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="emergency" id="emergency" />
                      <Label htmlFor="emergency">Emergency Consultation - {doctor.consultationFee}</Label>
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
                    <DatePicker
                      id="dateOfBirth"
                      date={patientInfo.dateOfBirth}
                      onDateChange={(date) => setPatientInfo({...patientInfo, dateOfBirth: date})}
                      placeholder="Select your date of birth"
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
                      <RadioGroupItem value="card" id="payment-card" />
                      <Label htmlFor="payment-card">Credit/Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="insurance" id="payment-insurance" />
                      <Label htmlFor="payment-insurance">Insurance Coverage</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="payment-cash" />
                      <Label htmlFor="payment-cash">Pay at Clinic</Label>
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

      <Footer />
    </div>
  )
}
