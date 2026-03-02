'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white border border-red-200 rounded-2xl shadow-2xl p-8 md:p-12 text-center space-y-6">
              {/* Error Icon */}
              <div className="relative inline-block">
                <div className="bg-red-100 p-6 rounded-full inline-block">
                  <AlertTriangle className="w-16 h-16 text-red-600" />
                </div>
              </div>

              {/* Error Message */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Critical Error
                </h1>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  We encountered a critical error. Please try refreshing the page.
                </p>
              </div>

              {/* Error Details (Development only) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-left">
                  <p className="text-sm font-mono text-red-600 break-all">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs text-gray-500 mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  <RefreshCw className="w-5 h-5" />
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
