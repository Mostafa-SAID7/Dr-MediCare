import { useState } from 'react'
import { PatientInfo } from '@/types'

export function useBooking() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [appointmentType, setAppointmentType] = useState('consultation')
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    reason: '',
    symptoms: '',
    insurance: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)

  const updatePatientInfo = (field: keyof PatientInfo, value: string) => {
    setPatientInfo(prev => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    return (
      selectedDate &&
      selectedTime &&
      patientInfo.firstName &&
      patientInfo.lastName &&
      patientInfo.email &&
      patientInfo.phone &&
      patientInfo.dateOfBirth &&
      patientInfo.reason &&
      agreeTerms
    )
  }

  const submitBooking = async (onSubmit: () => Promise<void>) => {
    if (!isFormValid()) return

    setIsSubmitting(true)
    try {
      await onSubmit()
      setBookingComplete(true)
    } catch (error) {
      console.error('Booking error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setSelectedDate('')
    setSelectedTime('')
    setAppointmentType('consultation')
    setPatientInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      reason: '',
      symptoms: '',
      insurance: '',
    })
    setPaymentMethod('card')
    setAgreeTerms(false)
    setIsSubmitting(false)
    setBookingComplete(false)
  }

  return {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    appointmentType,
    setAppointmentType,
    patientInfo,
    updatePatientInfo,
    setPatientInfo,
    paymentMethod,
    setPaymentMethod,
    agreeTerms,
    setAgreeTerms,
    isSubmitting,
    bookingComplete,
    isFormValid,
    submitBooking,
    reset,
  }
}
