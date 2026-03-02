export interface Doctor {
  id: number
  name: string
  specialty: string
  rating: number
  reviews: number
  experience: string
  location: string
  image: string
  nextAvailable: string
  consultationFee: string
  languages?: string[]
  education?: string
  bio?: string
  certifications?: string[]
  description?: string
}
