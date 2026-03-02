# Project Structure

This document outlines the organization and architecture of the Dr. MediCare application.

## Directory Overview

```
Dr-MediCare/
├── app/                      # Next.js App Router
│   ├── (routes)/            # Route groups
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── loading.tsx          # Loading UI
│   ├── error.tsx            # Error boundary
│   └── not-found.tsx        # 404 page
├── components/              # React components
│   ├── ui/                  # Shadcn UI components
│   ├── skeletons/           # Loading skeletons
│   └── *.tsx                # Feature components
├── lib/                     # Utility functions
├── data/                    # Mock data & types
├── types/                   # TypeScript types
├── public/                  # Static assets
├── docs/                    # Documentation
└── config files             # Configuration
```

## Detailed Structure

### `/app` Directory

Next.js 14 App Router with file-based routing:

```
app/
├── layout.tsx              # Root layout with providers
├── page.tsx                # Home page (/)
├── loading.tsx             # Global loading state
├── error.tsx               # Error boundary
├── global-error.tsx        # Global error handler
├── not-found.tsx           # 404 page
├── robots.ts               # Robots.txt generator
├── sitemap.ts              # Sitemap generator
│
├── about/                  # About page
│   └── page.tsx
│
├── doctors/                # Doctors listing
│   ├── page.tsx           # List view
│   ├── layout.tsx         # Doctors layout
│   ├── loading.tsx        # Loading state
│   └── [slug]/            # Doctor detail
│       ├── page.tsx
│       └── loading.tsx
│
├── appointments/           # Appointments
│   ├── page.tsx
│   ├── layout.tsx
│   └── loading.tsx
│
├── book/                   # Booking flow
│   ├── layout.tsx
│   └── [id]/
│       └── page.tsx
│
├── patient-portal/         # Patient dashboard
│   ├── page.tsx
│   ├── layout.tsx
│   └── loading.tsx
│
├── services/               # Services page
│   ├── page.tsx
│   ├── layout.tsx
│   └── loading.tsx
│
├── contact/                # Contact page
│   ├── page.tsx
│   ├── layout.tsx
│   └── loading.tsx
│
├── faq/                    # FAQ page
│   └── page.tsx
│
├── terms/                  # Terms & Conditions
│   └── page.tsx
│
└── privacy/                # Privacy Policy
    └── page.tsx
```

### `/components` Directory

Reusable React components:

```
components/
├── ui/                     # Shadcn UI components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── dialog.tsx
│   ├── dropdown-menu.tsx
│   ├── calendar.tsx
│   ├── date-picker.tsx
│   └── ... (50+ components)
│
├── skeletons/              # Loading skeletons
│   ├── doctor-card-skeleton.tsx
│   ├── appointment-card-skeleton.tsx
│   └── page-skeleton.tsx
│
├── header.tsx              # Site header
├── footer.tsx              # Site footer
├── mobile-menu.tsx         # Mobile navigation
├── theme-toggle.tsx        # Dark mode toggle
├── theme-provider.tsx      # Theme context
├── page-header.tsx         # Page title component
├── section-container.tsx   # Section wrapper
├── doctor-card.tsx         # Doctor card
├── doctor-avatar.tsx       # Doctor avatar
├── auth-modal.tsx          # Authentication modal
├── quick-booking-modal.tsx # Quick booking
├── emergency-modal.tsx     # Emergency contacts
├── error-boundary.tsx      # Error boundary
├── loader.tsx              # Loading spinner
└── typing-text.tsx         # Typing animation
```

### `/lib` Directory

Utility functions and helpers:

```
lib/
├── utils.ts                # General utilities
└── cn.ts                   # Class name merger
```

### `/data` Directory

Mock data and data models:

```
data/
├── index.ts                # Data exports
├── doctors.ts              # Doctor data
├── appointments.ts         # Appointment data
├── specialties.ts          # Medical specialties
├── patient.ts              # Patient data
└── services.ts             # Services data
```

### `/types` Directory

TypeScript type definitions:

```
types/
├── index.ts                # Type exports
├── doctor.ts               # Doctor types
├── appointment.ts          # Appointment types
├── booking.ts              # Booking types
└── patient.ts              # Patient types
```

### `/public` Directory

Static assets:

```
public/
├── favicon.svg             # Favicon
├── icon.svg                # App icon
├── *.png                   # Images
└── *.jpg                   # Photos
```

### `/docs` Directory

Project documentation:

```
docs/
├── CHANGELOG.md            # Version history
├── CODE_OF_CONDUCT.md      # Community guidelines
├── CONTRIBUTING.md         # Contribution guide
├── FEATURES.md             # Feature list
├── SECURITY.md             # Security policy
├── STRUCTURE.md            # This file
├── PROJECT_SETUP.md        # Setup guide
├── STYLES.md               # Styling guide
├── DEPLOYMENT.md           # Deployment guide
├── TECHNOLOGIES.md         # Tech stack
├── CONTRIBUTORS.md         # Contributors
└── USE_CASES.md            # Use cases
```

## Configuration Files

### Root Level

```
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS config
├── postcss.config.mjs      # PostCSS config
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
├── .eslintrc.json          # ESLint rules
├── .gitignore              # Git ignore
├── .npmrc                  # NPM config
├── vercel.json             # Vercel config
└── README.md               # Project readme
```

## Architecture Patterns

### Component Organization

1. **UI Components** (`/components/ui`)
   - Atomic design principles
   - Reusable primitives
   - Shadcn/ui library

2. **Feature Components** (`/components`)
   - Business logic components
   - Page-specific components
   - Composite components

3. **Layout Components**
   - Header, Footer
   - Page wrappers
   - Section containers

### Data Flow

```
User Action
    ↓
Component Event Handler
    ↓
State Update (useState/Context)
    ↓
Re-render
    ↓
UI Update
```

### Routing Strategy

- File-based routing (Next.js App Router)
- Dynamic routes with `[param]`
- Route groups with `(group)`
- Parallel routes for modals
- Loading and error boundaries

### State Management

- Local state with `useState`
- Context API for theme
- URL state for filters
- Form state with controlled inputs

### Styling Approach

- Tailwind CSS utility classes
- CSS variables for theming
- Component-scoped styles
- Responsive design utilities
- Dark mode support

## Code Organization Principles

### File Naming
- Components: PascalCase (`DoctorCard.tsx`)
- Utilities: camelCase (`utils.ts`)
- Pages: lowercase (`page.tsx`)
- Types: PascalCase (`Doctor.ts`)

### Import Order
1. React imports
2. Third-party libraries
3. Internal components
4. Utilities and helpers
5. Types
6. Styles

### Component Structure
```typescript
// Imports
import { ... } from '...'

// Types
interface ComponentProps { ... }

// Component
export function Component({ props }: ComponentProps) {
  // Hooks
  // Event handlers
  // Render logic
  return (...)
}
```

## Performance Optimizations

### Code Splitting
- Dynamic imports for modals
- Lazy loading for heavy components
- Route-based code splitting

### Image Optimization
- Next.js Image component
- AVIF/WebP formats
- Lazy loading
- Responsive images

### Bundle Optimization
- Tree shaking
- Minification
- Compression
- Modular imports

## Best Practices

1. **Component Design**
   - Single responsibility
   - Reusability
   - Prop typing
   - Error boundaries

2. **Performance**
   - Lazy loading
   - Memoization
   - Optimized images
   - Code splitting

3. **Accessibility**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation
   - Screen reader support

4. **Type Safety**
   - TypeScript everywhere
   - Strict mode enabled
   - Proper type definitions
   - No `any` types

5. **Code Quality**
   - ESLint rules
   - Consistent formatting
   - Code reviews
   - Documentation
