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
