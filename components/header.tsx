'use client'

import { Heart } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MobileMenu } from '@/components/mobile-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import { ReactNode } from 'react'

interface HeaderProps {
  currentPath?: string
  rightContent?: ReactNode
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/doctors", label: "Doctors" },
  { href: "/appointments", label: "Appointments" },
  { href: "/contact", label: "Contact" },
  { href: "/patient-portal", label: "Patient Portal" },
]

export function Header({ currentPath = '/', rightContent }: HeaderProps) {
  return (
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
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-white/90 hover:text-white transition-colors font-medium ${
                  link.href === currentPath ? 'font-bold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {rightContent || (
              <>
                <Button variant="outline" className="hidden sm:inline-flex bg-foreground text-background hover:bg-foreground/90">
                  Sign In
                </Button>
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  Book Now
                </Button>
              </>
            )}
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </div>
    </header>
  )
}
