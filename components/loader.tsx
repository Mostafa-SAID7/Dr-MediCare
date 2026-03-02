"use client"

import { useEffect, useState } from "react"
import { Heart, Activity } from 'lucide-react'

export function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Heart className="w-10 h-10 text-white animate-bounce" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-ping">
            <Activity className="w-3 h-3 text-white" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">
            Medi<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Care</span>
          </h1>
          <p className="text-gray-600 text-lg">Loading your healthcare experience...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-green-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Initializing...</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Loading Messages */}
        <div className="text-gray-600">
          {progress < 30 && "Connecting to healthcare network..."}
          {progress >= 30 && progress < 60 && "Loading doctor profiles..."}
          {progress >= 60 && progress < 90 && "Preparing appointment system..."}
          {progress >= 90 && "Almost ready!"}
        </div>
      </div>
    </div>
  )
}
