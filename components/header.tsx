'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MobileMenu } from '@/components/mobile-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import { AuthModal } from '@/components/auth-modal'
import { QuickBookingModal } from '@/components/quick-booking-modal'
import { ReactNode } from 'react'

interface HeaderProps {
  currentPath?: string
  rightContent?: ReactNode
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/doctors", label: "Doctors" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/appointments", label: "Appointments" },
  { href: "/contact", label: "Contact" },
]

export function Header({ currentPath = '/', rightContent }: HeaderProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)

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
              {navLinks.map((link) => {
                const isActive = currentPath === link.href || 
                  (link.href !== '/' && currentPath?.startsWith(link.href))
                
                return (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`text-white/90 hover:text-white transition-colors font-medium ${
                      isActive ? 'text-white font-bold border-b-2 border-white' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {rightContent || (
                <>
                  <Button 
                    variant="outline" 
                    className="hidden sm:inline-flex bg-foreground text-background hover:bg-foreground/90"
                    onClick={() => setAuthModalOpen(true)}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="bg-foreground text-background hover:bg-foreground/90"
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

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      <QuickBookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </>
  )
}
