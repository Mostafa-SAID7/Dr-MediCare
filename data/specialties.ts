import { LucideIcon, Heart, Shield, Award } from 'lucide-react'

export interface Specialty {
  name: string
  icon: LucideIcon
  count: string
}

export const specialties: Specialty[] = [
  { name: "Cardiology", icon: Heart, count: "12 doctors" },
  { name: "Neurology", icon: Shield, count: "8 doctors" },
  { name: "Pediatrics", icon: Award, count: "15 doctors" },
  { name: "Orthopedics", icon: Heart, count: "10 doctors" },
]

export const specialtyList: string[] = [
  "All Specialties",
  "Cardiologist",
  "Neurologist", 
  "Pediatrician",
  "Orthopedic Surgeon",
  "Dermatologist",
  "General Practitioner"
]
