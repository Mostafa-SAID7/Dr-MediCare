'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-destructive/5 via-background to-destructive/10 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle absolute top-20 left-10 w-64 h-64 bg-destructive/10 rounded-full blur-3xl animate-float" />
        <div className="floating-circle absolute bottom-20 right-10 w-96 h-96 bg-destructive/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="bg-card border border-destructive/20 rounded-2xl shadow-2xl p-8 md:p-12 text-center space-y-6 animate-fade-in">
          {/* Error Icon */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-destructive/20 rounded-full blur-2xl animate-pulse-slow" />
            <div className="relative bg-destructive/10 p-6 rounded-full inline-block animate-shake">
              <AlertTriangle className="w-16 h-16 text-destructive" />
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Something went wrong!
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              We encountered an unexpected error while processing your request. 
              Our medical team is on it!
            </p>
          </div>

          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-muted/50 border border-destructive/20 rounded-lg p-4 text-left space-y-2">
              <div className="flex items-center gap-2 text-destructive font-semibold text-sm">
                <Bug className="w-4 h-4" />
                <span>Development Error Details:</span>
              </div>
              <p className="text-sm font-mono text-foreground break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-muted-foreground">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={reset}
              className="gap-2 group"
            >
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Try Again
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto group">
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Additional Help */}
          <div className="pt-6 border-t border-border/50 space-y-3">
            <p className="text-sm text-muted-foreground">
              Need immediate assistance?
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/contact" className="text-primary hover:underline transition-colors">
                Contact Support
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/doctors" className="text-primary hover:underline transition-colors">
                Find a Doctor
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/appointments" className="text-primary hover:underline transition-colors">
                My Appointments
              </Link>
            </div>
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

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(5px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  )
}
