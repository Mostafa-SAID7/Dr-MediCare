import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DoctorAvatarProps {
  name: string
  specialty?: string
  image?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
}

const iconSizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
}

export function DoctorAvatar({ 
  name, 
  specialty, 
  image, 
  size = 'md',
  className 
}: DoctorAvatarProps) {
  // Generate initials from name
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  // Generate a consistent color based on name
  const colors = [
    'bg-primary/20 text-primary',
    'bg-accent/20 text-accent',
    'bg-secondary/20 text-secondary-foreground',
    'bg-destructive/20 text-destructive',
  ]
  const colorIndex = name.charCodeAt(0) % colors.length
  const colorClass = colors[colorIndex]

  if (image && !image.includes('simple-line-sketch')) {
    return (
      <img
        loading="lazy"
        src={image}
        alt={name}
        className={cn(
          sizeClasses[size],
          'rounded-full object-cover',
          className
        )}
      />
    )
  }

  return (
    <div
      className={cn(
        sizeClasses[size],
        'rounded-full flex items-center justify-center font-semibold',
        colorClass,
        className
      )}
      title={specialty ? `${name} - ${specialty}` : name}
    >
      {initials || <User className={iconSizes[size]} />}
    </div>
  )
}
