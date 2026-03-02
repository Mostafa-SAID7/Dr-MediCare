'use client'

import React from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-destructive/5 via-background to-destructive/10 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-card border border-destructive/20 rounded-2xl shadow-xl p-8 md:p-12 text-center space-y-6 animate-fade-in">
              {/* Error Icon */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-destructive/20 rounded-full blur-2xl animate-pulse-slow" />
                <div className="relative bg-destructive/10 p-6 rounded-full inline-block animate-bounce-slow">
                  <AlertTriangle className="w-16 h-16 text-destructive" />
                </div>
              </div>

              {/* Error Message */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Oops! Something went wrong
                </h1>
                <p className="text-lg text-muted-foreground">
                  We encountered an unexpected error. Don't worry, our team has been notified.
                </p>
              </div>

              {/* Error Details (Development only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-muted/50 border border-border rounded-lg p-4 text-left">
                  <p className="text-sm font-mono text-destructive break-all">
                    {this.state.error.message}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  onClick={() => {
                    this.setState({ hasError: false, error: null })
                    window.location.reload()
                  }}
                  className="gap-2 group"
                >
                  <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  Try Again
                </Button>
                <Link href="/">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    <Home className="w-5 h-5" />
                    Back to Home
                  </Button>
                </Link>
              </div>

              {/* Help Text */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  If this problem persists, please{' '}
                  <Link href="/contact" className="text-primary hover:underline">
                    contact our support team
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <style jsx>{`
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

            @keyframes bounce-slow {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            .animate-fade-in {
              animation: fade-in 0.6s ease-out forwards;
            }

            .animate-pulse-slow {
              animation: pulse-slow 3s ease-in-out infinite;
            }

            .animate-bounce-slow {
              animation: bounce-slow 3s ease-in-out infinite;
            }
          `}</style>
        </div>
      )
    }

    return this.props.children
  }
}
