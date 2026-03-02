# Data Organization

This folder contains all centralized data and business logic for the Dr-MediCare application.

## Structure

```
data/
├── doctors.ts          # Doctor profiles and helper functions
├── specialties.ts      # Medical specialties and categories
├── appointments.ts     # Appointment data and status colors
├── patient.ts          # Patient profile data
├── booking.ts          # Booking-related data (time slots, dates, etc.)
└── index.ts           # Central export point
```

## Type Definitions

All interfaces are defined in the `types/` folder:

```
types/
├── doctor.ts          # Doctor interface
├── specialty.ts       # Specialty interface
├── appointment.ts     # Appointment interface
├── patient.ts         # Patient interface
├── booking.ts         # Booking-related interfaces
└── index.ts          # Central export point
```

## Usage

### Importing Data

```typescript
// Import specific data
import { doctors, getDoctorBySlug } from '@/data'

// Import multiple items
import { appointments, statusColors, patient } from '@/data'

// Import everything
import * as data from '@/data'
```

### Importing Types

```typescript
// Import specific types
import { Doctor, Appointment } from '@/types'

// Import multiple types
import type { Doctor, Patient, Specialty } from '@/types'
```

## Data Files

### doctors.ts
- `doctors: Doctor[]` - Array of all doctors
- `getDoctorBySlug(slug: string)` - Find doctor by URL slug
- `getDoctorById(id: number)` - Find doctor by ID

### specialties.ts
- `specialties: Specialty[]` - Medical specialties with icons
- `specialtyList: string[]` - List of specialty names for filters

### appointments.ts
- `appointments: Appointment[]` - General appointments
- `patientAppointments: Appointment[]` - Patient-specific appointments
- `statusColors` - Status badge color mappings

### patient.ts
- `patient: Patient` - Sample patient data
- `samplePatient: Patient` - Alias for patient data

### booking.ts
- `timeSlots: string[]` - Available appointment time slots
- `getAvailableDates()` - Generate next 5 days dynamically
- `appointmentTypes` - Consultation types with pricing
- `paymentMethods` - Available payment options

## Best Practices

1. **Always import from `@/data`** - Never import directly from individual files
2. **Use TypeScript interfaces** - Import types from `@/types`
3. **Keep data immutable** - Don't modify exported arrays directly
4. **Add helper functions** - Put data manipulation logic in data files
5. **Document changes** - Update this README when adding new data

## Adding New Data

1. Create interface in `types/` folder
2. Create data file in `data/` folder
3. Export from `types/index.ts`
4. Export from `data/index.ts`
5. Update this README

### Example

```typescript
// types/service.ts
export interface Service {
  id: number
  name: string
  description: string
  price: number
}

// data/services.ts
import { Service } from '@/types'

export const services: Service[] = [
  { id: 1, name: "Consultation", description: "...", price: 150 }
]

// types/index.ts
export * from './service'

// data/index.ts
export * from './services'
```

## Data Flow

```
Page Component
    ↓
Import from @/data
    ↓
Data File (data/*.ts)
    ↓
Type Definition (types/*.ts)
```

## Benefits

✅ Single source of truth for all data
✅ Type safety with TypeScript interfaces
✅ Easy to maintain and update
✅ Reusable across components
✅ Better code organization
✅ Easier testing and mocking
✅ Consistent data structure

## Migration Status

✅ Doctor data - Centralized
✅ Specialty data - Centralized
✅ Appointment data - Centralized
✅ Patient data - Centralized
✅ Booking data - Centralized
✅ Status colors - Centralized
✅ All inline data removed from pages
