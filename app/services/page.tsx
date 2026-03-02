"use client"

import { Heart, Shield, Clock, Award, Stethoscope, Activity, Pill, Microscope, Ambulance, Users, Calendar, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { SectionContainer } from "@/components/section-container"

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Comprehensive health assessments and routine check-ups with experienced general practitioners.",
    features: ["Physical Examination", "Health Screening", "Preventive Care", "Medical Advice"]
  },
  {
    icon: Activity,
    title: "Specialist Care",
    description: "Expert medical care from board-certified specialists across various medical fields.",
    features: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics"]
  },
  {
    icon: Ambulance,
    title: "Emergency Services",
    description: "24/7 emergency medical care with rapid response and critical care facilities.",
    features: ["24/7 Availability", "Rapid Response", "Critical Care", "Trauma Care"]
  },
  {
    icon: Microscope,
    title: "Diagnostic Services",
    description: "State-of-the-art diagnostic facilities with accurate and timely test results.",
    features: ["Laboratory Tests", "Imaging Services", "Pathology", "Radiology"]
  },
  {
    icon: Pill,
    title: "Pharmacy Services",
    description: "In-house pharmacy with a wide range of medications and pharmaceutical care.",
    features: ["Prescription Filling", "Medication Counseling", "Home Delivery", "Generic Options"]
  },
  {
    icon: Users,
    title: "Telemedicine",
    description: "Virtual consultations with doctors from the comfort of your home.",
    features: ["Video Consultations", "Online Prescriptions", "Follow-up Care", "Remote Monitoring"]
  }
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Trusted Care",
    description: "Over 20 years of excellence in healthcare services"
  },
  {
    icon: Award,
    title: "Expert Doctors",
    description: "Board-certified specialists with extensive experience"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock medical assistance and emergency care"
  },
  {
    icon: Heart,
    title: "Patient-Centered",
    description: "Personalized care tailored to your unique needs"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      <Header 
        currentPath="/services"
        rightContent={
          <Link href="/doctors">
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </Link>
        }
      />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Medical Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to meet all your medical needs with excellence and compassion
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionContainer background="background">
        <PageHeader 
          title="What We Offer"
          description="Explore our wide range of medical services"
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Why Choose Us */}
      <SectionContainer background="card">
        <PageHeader 
          title="Why Choose MediCare?"
          description="Experience the difference in healthcare excellence"
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Book an appointment today and let our expert team take care of your health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/doctors">
              <Button size="lg" variant="secondary" className="text-primary">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
