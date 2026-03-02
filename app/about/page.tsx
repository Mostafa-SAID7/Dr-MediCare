"use client"

import { Heart, Users, Award, Target, Shield, Clock, Calendar, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { SectionContainer } from "@/components/section-container"

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "500+", label: "Expert Doctors" },
  { value: "50k+", label: "Happy Patients" },
  { value: "24/7", label: "Medical Support" }
]

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, respect, and dignity, ensuring comfort throughout their healthcare journey."
  },
  {
    icon: Shield,
    title: "Excellence",
    description: "We maintain the highest standards of medical care through continuous learning and state-of-the-art facilities."
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Your health and wellbeing are at the center of everything we do, with personalized care plans for each patient."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We embrace cutting-edge medical technology and innovative treatments to provide the best possible outcomes."
  }
]

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    specialty: "Internal Medicine",
    description: "Leading our medical team with 25+ years of experience in healthcare management."
  },
  {
    name: "Dr. Michael Chen",
    role: "Head of Surgery",
    specialty: "General Surgery",
    description: "Renowned surgeon specializing in minimally invasive surgical techniques."
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Director of Pediatrics",
    specialty: "Pediatric Care",
    description: "Dedicated to providing exceptional care for children and adolescents."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      <Header 
        currentPath="/about"
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
            About MediCare
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Committed to providing exceptional healthcare services with compassion, innovation, and excellence since 2004
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <SectionContainer background="background">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 neon-stat border-2 border-primary/30 rounded-lg p-6 bg-primary/5 hover:border-primary/60 transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </div>
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
      </SectionContainer>

      {/* Our Story */}
      <SectionContainer background="card">
        <div className="max-w-4xl mx-auto">
          <PageHeader 
            title="Our Story"
            description="Two decades of healthcare excellence"
            centered
          />
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Founded in 2004, MediCare began with a simple yet powerful vision: to make quality healthcare accessible to everyone. What started as a small clinic with a handful of dedicated doctors has grown into a comprehensive healthcare facility serving thousands of patients annually.
            </p>
            <p>
              Over the years, we've expanded our services, invested in cutting-edge medical technology, and assembled a team of over 500 expert healthcare professionals. Despite our growth, we've never lost sight of what matters most – providing compassionate, patient-centered care.
            </p>
            <p>
              Today, MediCare stands as a beacon of healthcare excellence, offering everything from routine check-ups to specialized treatments, all under one roof. Our commitment to innovation, combined with our dedication to traditional values of care and compassion, makes us the trusted choice for families across the region.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Our Values */}
      <SectionContainer background="muted">
        <PageHeader 
          title="Our Core Values"
          description="The principles that guide everything we do"
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Leadership Team */}
      <SectionContainer background="card">
        <PageHeader 
          title="Our Leadership Team"
          description="Meet the experts leading our healthcare mission"
          centered
        />
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {member.specialty}
                </p>
                <p className="text-muted-foreground">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Mission & Vision */}
      <SectionContainer background="muted">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide accessible, high-quality healthcare services that improve the health and wellbeing of our community through compassionate care, medical excellence, and innovative solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the leading healthcare provider recognized for excellence in patient care, medical innovation, and community health, setting the standard for healthcare delivery in the region.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Healthcare Family
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Experience the MediCare difference – where your health is our priority
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/doctors">
              <Button size="lg" className="!bg-white !text-black hover:!bg-white/90 hover:!text-black shadow-lg !border-white">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:!bg-white hover:!text-primary">
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
