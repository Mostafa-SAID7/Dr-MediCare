'use client'

import { useState, lazy, Suspense, memo, useMemo } from 'react'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MobileMenu } from '@/components/mobile-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import { ReactNode } from 'react'

// Lazy load modals
const AuthModal = lazy(() => import('@/components/auth-modal').then(mod => ({ default: mod.AuthModal })))
const QuickBookingModal = lazy(() => import('@/components/quick-booking-modal').then(mod => ({ default: mod.QuickBookingModal })))

interface HeaderProps {
  currentPath?: string
  rightContent?: ReactNode
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/doctors", label: "Doctors" },
  { href: "/appointments", label: "Appointments" },
  { href: "/contact", label: "Contact" },
]

// Memoized nav link component
const NavLink = memo(({ href, label, isActive }: { href: string; label: string; isActive: boolean }) => (
  <Link 
    href={href}
    prefetch={true}
    className={`text-white/90 hover:text-white transition-colors font-medium ${
      isActive ? 'text-white font-bold border-b-2 border-white' : ''
    }`}
  >
    {label}
  </Link>
))
NavLink.displayName = 'NavLink'

export const Header = memo(function Header({ currentPath = '/', rightContent }: HeaderProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)

  // Memoize active states
  const activeStates = useMemo(() => 
    navLinks.map(link => ({
      ...link,
      isActive: currentPath === link.href || (link.href !== '/' && currentPath?.startsWith(link.href))
    })),
    [currentPath]
  )

  return (
    <>
      <header className="bg-gradient-to-r from-primary to-accent shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MediCare</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {activeStates.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {rightContent || (
                <>
                  <Button 
                    variant="outline" 
                    className="hidden sm:inline-flex !bg-white !text-primary hover:!bg-white/90 !border-white"
                    onClick={() => setAuthModalOpen(true)}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="!bg-white !text-primary hover:!bg-white/90"
                    onClick={() => setBookingModalOpen(true)}
                  >
                    Book Now
                  </Button>
                </>
              )}
              <MobileMenu links={navLinks} />
            </div>
          </div>
        </div>
      </header>

      <Suspense fallback={null}>
        <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
        <QuickBookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
      </Suspense>
    </>
  )
})
