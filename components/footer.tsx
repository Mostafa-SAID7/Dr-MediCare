'use client'

import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import { memo, useMemo } from 'react'

// Memoized link component
const FooterLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="hover:text-white transition-colors">
      {children}
    </Link>
  </li>
))
FooterLink.displayName = 'FooterLink'

export const Footer = memo(function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gradient-to-r from-primary to-accent text-white py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">MediCare</span>
              </div>
              <p className="text-white/80 text-sm">
                Your trusted healthcare partner providing quality medical services and professional care.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:pl-8 lg:border-l border-white/20">
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/doctors">Find Doctors</FooterLink>
                <FooterLink href="/appointments">Book Appointment</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
              </ul>
            </div>

            {/* Support */}
            <div className="lg:pl-8 lg:border-l border-white/20">
              <h3 className="font-bold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-white/80">
                <FooterLink href="/faq">FAQ</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
                <FooterLink href="/terms">Terms & Conditions</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:pl-8 lg:border-l border-white/20">
              <h3 className="font-bold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  support@medicare.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  123 Health Street, Medical City
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            &copy; 2024 - {currentYear}{' '}
            <a 
              href="https://m-said-portfolio.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors font-semibold"
            >
              M.Said
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
})
