"use client"

import { useState, lazy, Suspense, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Phone, Shield, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { DoctorCard } from "@/components/doctor-card"
import { SectionContainer } from "@/components/section-container"
import { doctors, specialties } from "@/data"

// Lazy load heavy modals
const EmergencyModal = lazy(() => import("@/components/emergency-modal").then(mod => ({ default: mod.EmergencyModal })))

// Memoized components for better performance
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center group">
    <div className="text-3xl font-bold text-primary neon-stat border-2 border-primary/30 rounded-lg p-4 bg-primary/5 hover:border-primary/60 transition-all duration-300 min-h-[88px] flex items-center justify-center">
      {value}
    </div>
    <div className="text-gray-600 mt-2 min-h-[24px]">{label}</div>
  </div>
)

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="text-center space-y-4 min-h-[200px]">
    <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-foreground min-h-[28px]">{title}</h3>
    <p className="text-muted-foreground min-h-[48px]">{description}</p>
  </div>
)

export default function HomePage() {
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false)

  // Memoize static data
  const stats = useMemo(() => [
    { value: '500+', label: 'Expert Doctors' },
    { value: '50k+', label: 'Happy Patients' },
    { value: '24/7', label: 'Support' },
  ], [])

  const features = useMemo(() => [
    { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock medical support and emergency services' },
    { icon: Shield, title: 'Secure & Private', description: 'Your medical data is protected with enterprise-grade security' },
    { icon: Award, title: 'Expert Care', description: 'Board-certified doctors with years of experience' },
  ], [])

  return (
    <div className="min-h-screen bg-grid-dots">
      <Header currentPath="/" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-background overflow-hidden">
        {/* Animated Background - Optimized */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl will-change-transform" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl will-change-transform" style={{ animation: 'float 8s ease-in-out infinite' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-primary">
                  Your Health, Our Priority
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
              <div className="grid grid-cols-3 gap-8 pt-8 min-h-[140px]">
                {stats.map((stat) => (
                  <StatCard key={stat.label} value={stat.value} label={stat.label} />
                ))}
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
              <div className="relative z-10 aspect-[3/2] bg-gradient-to-br from-primary/5 to-accent/5">
                <Image
                  src="/modern-medical-consultation-sketch.png"
                  alt="Medical consultation"
                  width={600}
                  height={400}
                  priority
                  fetchPriority="high"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-primary to-accent rounded-2xl -z-10" aria-hidden="true"></div>
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
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary rounded-lg shadow-sm">
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
      <SectionContainer background="dots">
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
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
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
            <Button 
              size="lg" 
              className="!bg-white !text-black hover:!bg-white/90 hover:!text-black shadow-lg !border-white"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your First Appointment
            </Button>
            <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:!bg-white hover:!text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <Suspense fallback={null}>
        <EmergencyModal open={emergencyModalOpen} onOpenChange={setEmergencyModalOpen} />
      </Suspense>
    </div>
  )
}
