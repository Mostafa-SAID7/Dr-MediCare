'use client'

import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-primary/10 to-accent/10 border-t border-primary/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MediCare
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted healthcare partner providing quality medical services and professional care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/doctors" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  My Appointments
                </Link>
              </li>
              <li>
                <Link href="/patient-portal" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Diagnosis
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Treatment
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Follow-up Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@medicare.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@medicare.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Medical Center Dr, City
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-center">
              &copy; {currentYear} MediCare. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
