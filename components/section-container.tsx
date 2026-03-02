import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  background?: 'default' | 'card' | 'muted'
}

export function SectionContainer({ 
  children, 
  className = '', 
  background = 'default' 
}: SectionContainerProps) {
  const bgClass = {
    default: '',
    card: 'bg-card',
    muted: 'bg-muted'
  }[background]

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
