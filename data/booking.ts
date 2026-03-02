import { AvailableDate } from '@/types/booking'

export const timeSlots: string[] = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
]

// Generate dates dynamically based on current date
export function getAvailableDates(): AvailableDate[] {
  const dates: AvailableDate[] = []
  const today = new Date()
  
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  for (let i = 0; i < 5; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    const dateStr = date.toISOString().split('T')[0]
    const dayName = dayNames[date.getDay()]
    const monthName = monthNames[date.getMonth()]
    const dayNum = date.getDate()
    
    let dayLabel: string
    if (i === 0) {
      dayLabel = 'Today'
    } else if (i === 1) {
      dayLabel = 'Tomorrow'
    } else {
      dayLabel = `${monthName} ${dayNum}`
    }
    
    dates.push({
      date: dateStr,
      day: dayLabel,
      dayName: dayName
    })
  }
  
  return dates
}

export const appointmentTypes = [
  { value: 'consultation', label: 'General Consultation', priceModifier: 0 },
  { value: 'followup', label: 'Follow-up Visit', priceModifier: -30 },
  { value: 'emergency', label: 'Emergency Consultation', priceModifier: 50 }
] as const

export const paymentMethods = [
  { value: 'card', label: 'Credit/Debit Card' },
  { value: 'insurance', label: 'Insurance Coverage' },
  { value: 'cash', label: 'Pay at Clinic' }
] as const
