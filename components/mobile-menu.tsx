"use client"

import { useState } from "react"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileMenuProps {
  links: { href: string; label: string }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:bg-white/10">
        <Menu className="w-6 h-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-background z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <X className="w-6 h-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Sign In
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}
