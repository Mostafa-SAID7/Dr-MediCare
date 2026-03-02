import { Doctor } from '@/types'

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 156,
    experience: "15 years",
    location: "Downtown Medical Center",
    image: "/sketch-cardiologist-sarah.png",
    nextAvailable: "Today 2:00 PM",
    consultationFee: "$150",
    languages: ["English", "Spanish"],
    education: "Harvard Medical School",
    bio: "Dr. Sarah Johnson is an accomplished cardiologist with 15 years of experience in cardiovascular health. She specializes in preventive cardiology and interventional procedures.",
    certifications: ["Board Certified Cardiologist", "American Heart Association", "Interventional Cardiology Specialist"],
    description: "Dedicated to providing comprehensive cardiac care with a focus on patient education and preventive medicine."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.8,
    reviews: 203,
    experience: "12 years",
    location: "Central Hospital",
    image: "/sketch-neurologist-michael.png",
    nextAvailable: "Tomorrow 10:00 AM",
    consultationFee: "$180",
    languages: ["English", "Mandarin"],
    education: "Johns Hopkins University",
    bio: "Dr. Michael Chen is a highly skilled neurologist specializing in neurodegenerative diseases and movement disorders.",
    certifications: ["Board Certified Neurologist", "Neurodegenerative Disease Specialist", "Sleep Medicine Certified"],
    description: "Expert in diagnosing and treating complex neurological conditions with advanced treatment modalities."
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 4.9,
    reviews: 189,
    experience: "10 years",
    location: "Children's Medical Center",
    image: "/sketch-pediatrician-emily.png",
    nextAvailable: "Today 4:30 PM",
    consultationFee: "$120",
    languages: ["English", "Spanish"],
    education: "Stanford Medical School",
    bio: "Dr. Emily Rodriguez is a compassionate pediatrician dedicated to the health and wellbeing of children from infancy through adolescence.",
    certifications: ["Board Certified Pediatrician", "Pediatric Emergency Medicine", "Child Development Specialist"],
    description: "Providing comprehensive pediatric care with a focus on child development, vaccination, and preventive health."
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    rating: 4.7,
    reviews: 142,
    experience: "18 years",
    location: "Sports Medicine Clinic",
    image: "/sketch-orthopedic-james.png",
    nextAvailable: "Monday 9:00 AM",
    consultationFee: "$200",
    languages: ["English"],
    education: "Mayo Clinic",
    bio: "Dr. James Wilson is an experienced orthopedic surgeon specializing in sports medicine and joint replacement.",
    certifications: ["Board Certified Orthopedic Surgery", "Sports Medicine Fellowship", "Joint Preservation Specialist"],
    description: "Specializing in surgical and non-surgical treatment of orthopedic injuries and conditions."
  },
  {
    id: 5,
    name: "Dr. Lisa Park",
    specialty: "Dermatologist",
    rating: 4.8,
    reviews: 167,
    experience: "8 years",
    location: "Skin Care Center",
    image: "/sketch-dermatologist-lisa.png",
    nextAvailable: "Today 3:15 PM",
    consultationFee: "$140",
    languages: ["English", "Korean"],
    education: "UCLA Medical School",
    bio: "Dr. Lisa Park is a board-certified dermatologist specializing in cosmetic and medical dermatology.",
    certifications: ["Board Certified Dermatologist", "Cosmetic Dermatology", "Laser Surgery Specialist"],
    description: "Expert in treating skin conditions and offering advanced cosmetic dermatology procedures."
  },
  {
    id: 6,
    name: "Dr. Robert Taylor",
    specialty: "General Practitioner",
    rating: 4.6,
    reviews: 234,
    experience: "20 years",
    location: "Family Health Clinic",
    image: "/sketch-gp-robert.png",
    nextAvailable: "Today 1:00 PM",
    consultationFee: "$100",
    languages: ["English", "French"],
    education: "University of Pennsylvania",
    bio: "Dr. Robert Taylor is a seasoned general practitioner with 20 years of experience in primary care medicine.",
    certifications: ["Board Certified Family Medicine", "Preventive Medicine", "Chronic Disease Management"],
    description: "Committed to providing comprehensive primary care and building long-term patient relationships."
  }
]

// Helper function to get doctor by slug
export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find(doctor => 
    doctor.name.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-') === slug
  )
}

// Helper function to get doctor by ID
export function getDoctorById(id: number): Doctor | undefined {
  return doctors.find(doctor => doctor.id === id)
}
