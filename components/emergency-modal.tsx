'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Phone, Ambulance, Heart, AlertTriangle, Clock, MapPin, User, Stethoscope, Activity } from 'lucide-react'
import { DoctorAvatar } from '@/components/doctor-avatar'
import Link from 'next/link'

interface EmergencyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const emergencyServices = [
  {
    icon: Ambulance,
    title: "Ambulance Service",
    description: "Immediate ambulance dispatch with paramedics",
    hotline: "911",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20"
  },
  {
    icon: Heart,
    title: "Cardiac Emergency",
    description: "Heart attack, chest pain, cardiac arrest",
    hotline: "(555) 123-4567",
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20"
  },
  {
    icon: Activity,
    title: "Trauma Care",
    description: "Accidents, injuries, severe bleeding",
    hotline: "(555) 123-4568",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    icon: AlertTriangle,
    title: "Poison Control",
    description: "Poisoning, overdose, toxic exposure",
    hotline: "(555) 123-4569",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
  },
  {
    icon: Stethoscope,
    title: "General Emergency",
    description: "Other urgent medical situations",
    hotline: "(555) 123-4570",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  }
]

const onCallDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Emergency Medicine",
    experience: "15 years",
    availability: "Available Now",
    image: "/simple-line-sketch.png?height=100&width=100&query=sketch%20of%20emergency%20doctor"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Trauma Surgery",
    experience: "12 years",
    availability: "Available Now",
    image: "/simple-line-sketch.png?height=100&width=100&query=sketch%20of%20surgeon%20doctor"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Critical Care",
    experience: "10 years",
    availability: "On Call",
    image: "/simple-line-sketch.png?height=100&width=100&query=sketch%20of%20critical%20care%20doctor"
  }
]

const emergencyTips = [
  "Stay calm and assess the situation",
  "Call emergency services immediately if life-threatening",
  "Provide clear location and nature of emergency",
  "Follow dispatcher instructions carefully",
  "Do not move injured person unless necessary",
  "Keep emergency contact numbers accessible"
]

export function EmergencyModal({ open, onOpenChange }: EmergencyModalProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-destructive flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
            Emergency Services
          </DialogTitle>
          <DialogDescription>
            Get immediate medical assistance. Available 24/7 for urgent care needs.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="doctors">On-Call Doctors</TabsTrigger>
            <TabsTrigger value="tips">Emergency Tips</TabsTrigger>
          </TabsList>

          {/* Emergency Services Tab */}
          <TabsContent value="services" className="space-y-4 mt-4">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Life-Threatening Emergency?</p>
                  <p className="text-sm text-muted-foreground">Call 911 immediately for ambulance dispatch</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {emergencyServices.map((service, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedService === service.title ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedService(service.title)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-12 h-12 ${service.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <service.icon className={`w-6 h-6 ${service.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground">{service.title}</h3>
                          <p className="text-sm text-muted-foreground truncate">{service.description}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="gap-2 flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCall(service.hotline)
                        }}
                      >
                        <Phone className="w-4 h-4" />
                        {service.hotline}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <p className="font-semibold text-foreground">24/7 Availability</p>
              </div>
              <p className="text-sm text-muted-foreground">
                All emergency services are available round the clock. Average response time: 8-12 minutes.
              </p>
            </div>
          </TabsContent>

          {/* On-Call Doctors Tab */}
          <TabsContent value="doctors" className="space-y-4 mt-4">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <Stethoscope className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Expert Emergency Physicians</p>
                  <p className="text-sm text-muted-foreground">Board-certified doctors ready to assist you</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {onCallDoctors.map((doctor) => (
                <Card key={doctor.id} className="hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <DoctorAvatar 
                        name={doctor.name}
                        specialty={doctor.specialty}
                        image={doctor.image}
                        size="lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                        <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
                        <p className="text-sm text-muted-foreground">{doctor.experience} experience</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={doctor.availability === "Available Now" ? "default" : "secondary"}
                          className="mb-2"
                        >
                          {doctor.availability}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleCall("(555) 123-4567")}>
                            <Phone className="w-4 h-4 mr-1" />
                            Call
                          </Button>
                          <Link href={`/book/${doctor.id}`}>
                            <Button size="sm" onClick={() => onOpenChange(false)}>
                              Book
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-4">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> For immediate life-threatening emergencies, please call 911 or visit the nearest emergency room.
              </p>
            </div>
          </TabsContent>

          {/* Emergency Tips Tab */}
          <TabsContent value="tips" className="space-y-4 mt-4">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Emergency Preparedness</p>
                  <p className="text-sm text-muted-foreground">Important guidelines for handling medical emergencies</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {emergencyTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-card border rounded-lg">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-sm text-foreground">{tip}</p>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive/20">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  When to Call 911
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Chest pain or difficulty breathing</li>
                  <li>• Severe bleeding or head injury</li>
                  <li>• Loss of consciousness</li>
                  <li>• Suspected stroke or heart attack</li>
                  <li>• Severe allergic reaction</li>
                  <li>• Any life-threatening situation</li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <p className="font-semibold text-foreground">Nearest Emergency Room</p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                MediCare Emergency Center<br />
                123 Health Street, Medical City<br />
                Open 24/7
              </p>
              <Button size="sm" variant="outline" className="w-full">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex gap-3 pt-4 border-t">
          <Button 
            variant="destructive" 
            className="flex-1 gap-2"
            onClick={() => handleCall("911")}
          >
            <Phone className="w-4 h-4" />
            Call 911 Now
          </Button>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
