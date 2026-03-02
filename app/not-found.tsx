'use client'

import Link from 'next/link'
import { Home, Search, ArrowLeft, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="floating-circle absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="floating-circle absolute top-1/2 left-1/2 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className={`relative z-10 text-center max-w-2xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-primary/20 leading-none select-none animate-pulse-slow">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-16 h-16 md:w-24 md:h-24 text-destructive animate-heartbeat" />
          </div>
        </div>

        {/* Error message */}
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-delayed">
            Oops! The page you're looking for seems to have taken a sick day.
            <br />
            Don't worry, our doctors are here to help you find your way back.
          </p>
        </div>

        {/* Animated search icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-ping-slow" />
            <div className="relative bg-primary/10 p-6 rounded-full animate-bounce-slow">
              <Search className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Link href="/">
            <Button size="lg" className="gap-2 group">
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Back to Home
            </Button>
          </Link>
          <Link href="/doctors">
            <Button size="lg" variant="outline" className="gap-2 group">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Find a Doctor
            </Button>
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/appointments" className="text-primary hover:underline transition-colors">
              My Appointments
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/contact" className="text-primary hover:underline transition-colors">
              Contact Support
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/patient-portal" className="text-primary hover:underline transition-colors">
              Patient Portal
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.2s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
