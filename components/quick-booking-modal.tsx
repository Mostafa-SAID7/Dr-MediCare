'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, User, Stethoscope, Clock, Phone, Mail, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { DoctorAvatar } from '@/components/doctor-avatar'
import { doctors } from '@/data'
import Link from 'next/link'

interface QuickBookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuickBookingModal({ open, onOpenChange }: QuickBookingModalProps) {
  const [step, setStep] = useState(1)
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const specialties = [
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
    'General Practice'
  ]

  const filteredDoctors = selectedSpecialty
    ? doctors.filter(d => d.specialty === selectedSpecialty)
    : doctors

  const selectedDoctorData = doctors.find(d => d.id.toString() === selectedDoctor)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      
      // Reset after 2 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setStep(1)
        setSelectedSpecialty('')
        setSelectedDoctor('')
        onOpenChange(false)
      }, 2000)
    }, 1500)
  }

  const handleClose = () => {
    setStep(1)
    setSelectedSpecialty('')
    setSelectedDoctor('')
    setIsSuccess(false)
    onOpenChange(false)
  }

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-950/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Booking Confirmed!</h3>
              <p className="text-muted-foreground">
                Your appointment has been successfully scheduled.
              </p>
              <p className="text-sm text-muted-foreground">
                Check your email for confirmation details.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            Quick Booking
          </DialogTitle>
          <DialogDescription>
            Book your appointment in just a few steps
          </DialogDescription>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  step >= s
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-1 mx-1 transition-colors ${
                    step > s ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Select Specialty */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Select Specialty</h3>
                <div className="grid grid-cols-2 gap-3">
                  {specialties.map((specialty) => (
                    <Card
                      key={specialty}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedSpecialty === specialty
                          ? 'ring-2 ring-primary bg-primary/5'
                          : ''
                      }`}
                      onClick={() => setSelectedSpecialty(specialty)}
                    >
                      <CardContent className="p-4 text-center">
                        <Stethoscope className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="font-medium text-sm">{specialty}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!selectedSpecialty}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Select Doctor */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Select Doctor - {selectedSpecialty}
                </h3>
                <div className="space-y-3 max-h-[400px] overflow-y-auto">
                  {filteredDoctors.map((doctor) => (
                    <Card
                      key={doctor.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedDoctor === doctor.id.toString()
                          ? 'ring-2 ring-primary bg-primary/5'
                          : ''
                      }`}
                      onClick={() => setSelectedDoctor(doctor.id.toString())}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <DoctorAvatar
                            name={doctor.name}
                            specialty={doctor.specialty}
                            image={doctor.image}
                            size="md"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">
                              {doctor.name}
                            </h4>
                            <p className="text-sm text-primary">{doctor.specialty}</p>
                            <p className="text-xs text-muted-foreground">
                              {doctor.experience} • {doctor.consultationFee}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">Next available</p>
                            <p className="text-sm font-medium">{doctor.nextAvailable}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!selectedDoctor}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Patient Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Your Details</h3>
                
                {/* Selected Doctor Summary */}
                {selectedDoctorData && (
                  <Card className="mb-4 bg-primary/5 border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <DoctorAvatar
                          name={selectedDoctorData.name}
                          specialty={selectedDoctorData.specialty}
                          image={selectedDoctorData.image}
                          size="sm"
                        />
                        <div>
                          <p className="font-semibold text-sm">{selectedDoctorData.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {selectedDoctorData.specialty} • {selectedDoctorData.nextAvailable}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select required>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="14:00">02:00 PM</SelectItem>
                        <SelectItem value="15:00">03:00 PM</SelectItem>
                        <SelectItem value="16:00">04:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                </Button>
              </div>
            </div>
          )}
        </form>

        <div className="pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Need more options?{' '}
            <Link
              href="/doctors"
              className="text-primary hover:underline"
              onClick={handleClose}
            >
              Browse all doctors
            </Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
