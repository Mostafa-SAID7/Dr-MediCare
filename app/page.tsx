"use client"

import { Calendar, Clock, Phone, Shield, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader } from "@/components/loader"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { DoctorCard } from "@/components/doctor-card"
import { SectionContainer } from "@/components/section-container"
import { doctors, specialties } from "@/data"
import { useLoading } from "@/hooks"

export default function HomePage() {
  const isLoading = useLoading(500)

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      <Header currentPath="/" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Health,{" "}
                  <span className="text-primary">
                    Our Priority
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Book appointments with top-rated doctors instantly. Quality healthcare made accessible and convenient.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button size="lg" variant="destructive" className="text-lg px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Call
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-gray-600">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">50k+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-foreground">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
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
    </div>
  )
}
