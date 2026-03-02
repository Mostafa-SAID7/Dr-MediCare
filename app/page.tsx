"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, Phone, Shield, Award, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader } from "@/components/loader"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { DoctorCard } from "@/components/doctor-card"
import { SectionContainer } from "@/components/section-container"
import { TypingText } from "@/components/typing-text"
import { EmergencyModal } from "@/components/emergency-modal"
import { doctors, specialties } from "@/data"
import { useLoading } from "@/hooks"

export default function HomePage() {
  const isLoading = useLoading(500)
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false)

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      <Header currentPath="/" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-background overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-particle-1" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-particle-2" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-particle-3" />
          <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-particle-4" />
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-secondary-foreground rounded-full animate-particle-5" />
          
          {/* Medical Icons Floating */}
          <div className="absolute top-1/4 right-1/4 opacity-10 animate-float-slow">
            <Heart className="w-16 h-16 text-primary" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 opacity-10 animate-float-delayed">
            <Shield className="w-12 h-12 text-accent" />
          </div>
          <div className="absolute top-1/2 right-1/3 opacity-10 animate-float">
            <Award className="w-14 h-14 text-secondary-foreground" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  <TypingText 
                    text="Your Health, Our Priority" 
                    speed={80}
                    neon
                    className="text-primary"
                  />
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Book appointments with top-rated doctors instantly. Quality healthcare made accessible and convenient.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-3">
                  <Link href="/doctors">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="destructive" 
                  className="text-lg px-8 py-3"
                  onClick={() => setEmergencyModalOpen(true)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Call
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-primary neon-stat border-2 border-primary/30 rounded-lg p-4 bg-primary/5 hover:border-primary/60 transition-all duration-300">
                    500+
                  </div>
                  <div className="text-gray-600 mt-2">Expert Doctors</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-accent neon-stat border-2 border-accent/30 rounded-lg p-4 bg-accent/5 hover:border-accent/60 transition-all duration-300">
                    50k+
                  </div>
                  <div className="text-gray-600 mt-2">Happy Patients</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-secondary-foreground neon-stat border-2 border-secondary-foreground/30 rounded-lg p-4 bg-secondary-foreground/5 hover:border-secondary-foreground/60 transition-all duration-300">
                    24/7
                  </div>
                  <div className="text-gray-600 mt-2">Support</div>
                </div>
              </div>
              
              <style jsx>{`
                .neon-stat {
                  box-shadow: 
                    0 0 3px currentColor,
                    0 0 6px currentColor,
                    inset 0 0 3px currentColor;
                }
                
                .neon-stat:hover {
                  box-shadow: 
                    0 0 6px currentColor,
                    0 0 12px currentColor,
                    inset 0 0 6px currentColor;
                }
              `}</style>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/modern-medical-consultation-sketch.png"
                  alt="Medical consultation"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-primary to-accent rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <SectionContainer background="card">
        <PageHeader 
          title="Medical Specialties"
          description="Find the right specialist for your healthcare needs"
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <specialty.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{specialty.name}</h3>
                  <p className="text-gray-600">{specialty.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </SectionContainer>

      {/* Featured Doctors */}
      <SectionContainer background="muted">
        <PageHeader 
          title="Featured Doctors"
          description="Meet our top-rated healthcare professionals"
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </SectionContainer>

      {/* Features Section */}
      <SectionContainer background="card">
        <PageHeader 
          title="Why Choose MediCare?"
          description="Experience healthcare like never before"
          centered
        />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock medical support and emergency services</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Secure & Private</h3>
              <p className="text-gray-600">Your medical data is protected with enterprise-grade security</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-foreground/10 to-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Expert Care</h3>
              <p className="text-gray-600">Board-certified doctors with years of experience</p>
            </div>
          </div>
      </SectionContainer>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of patients who trust MediCare for their healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your First Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <EmergencyModal open={emergencyModalOpen} onOpenChange={setEmergencyModalOpen} />
    </div>
  )
}
