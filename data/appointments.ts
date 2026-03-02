export interface Appointment {
  id: number
  doctor: string
  specialty: string
  date: string
  time: string
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled'
  type: string
  location: string
  image: string
  reason: string
}

export const appointments: Appointment[] = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "2024-01-15",
    time: "14:00",
    status: "confirmed",
    type: "consultation",
    location: "Downtown Medical Center",
    image: "/placeholder-lerxs.png",
    reason: "Regular checkup and blood pressure monitoring"
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Neurologist",
    date: "2024-01-16",
    time: "10:00",
    status: "pending",
    type: "followup",
    location: "Central Hospital",
    image: "/male-neurologist.png",
    reason: "Follow-up for migraine treatment"
  },
  {
    id: 3,
    doctor: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    date: "2024-01-12",
    time: "16:30",
    status: "completed",
    type: "consultation",
    location: "Children's Medical Center",
    image: "/placeholder-gi9iv.png",
    reason: "Child vaccination and health assessment"
  },
  {
    id: 4,
    doctor: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    date: "2024-01-20",
    time: "09:00",
    status: "confirmed",
    type: "consultation",
    location: "Sports Medicine Clinic",
    image: "/male-orthopedic-surgeon.png",
    reason: "Knee pain evaluation and treatment options"
  }
]

export const statusColors = {
  confirmed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  completed: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800"
} as const

// Patient-specific appointments
export const patientAppointments: Appointment[] = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "2024-08-10",
    time: "14:00",
    status: "confirmed",
    type: "consultation",
    location: "Downtown Medical Center",
    image: "/sketch-cardiologist-sarah.jpg",
    reason: "Annual checkup"
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Neurologist",
    date: "2024-08-05",
    time: "10:00",
    status: "completed",
    type: "followup",
    location: "Central Hospital",
    image: "/male-neurologist.png",
    reason: "Migraine follow-up"
  },
  {
    id: 3,
    doctor: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    date: "2024-08-20",
    time: "16:30",
    status: "pending",
    type: "consultation",
    location: "Children's Medical Center",
    image: "/placeholder-gi9iv.png",
    reason: "Child vaccination"
  }
]
