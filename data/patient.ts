export interface Patient {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  insuranceProvider: string
  medicalHistory: string
  profileImage: string
}

export const samplePatient: Patient = {
  id: "patient-123",
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  phone: "+1 (555) 987-6543",
  dateOfBirth: "1990-05-15",
  address: "123 Health St, Medical City",
  insuranceProvider: "MediCare Insurance",
  medicalHistory: "No significant medical history. Allergies: Penicillin.",
  profileImage: "/placeholder-user.jpg"
}

// Export as patient for convenience
export const patient = samplePatient
