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
    <div className="fixed inset-0 bg-gradient-to-br from-secondary to-background flex items-center justify-center z-50">
      <div className="text-center space-y-8 px-4">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto animate-pulse shadow-2xl">
            <Heart className="w-12 h-12 text-white animate-[heartbeat_1.5s_ease-in-out_infinite]" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-destructive rounded-full flex items-center justify-center animate-ping">
            <Activity className="w-4 h-4 text-white" />
          </div>
          {/* Rotating ring */}
          <div className="absolute inset-0 border-4 border-primary/20 rounded-2xl animate-spin" style={{ animationDuration: '3s' }}></div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-foreground">
            Medi<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Care</span>
          </h1>
          <p className="text-muted-foreground text-lg font-medium">Loading your healthcare experience...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="bg-muted rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground mt-3 font-medium">
            <span>Initializing...</span>
            <span className="text-primary font-bold">{progress}%</span>
          </div>
        </div>

        {/* Loading Animation Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce shadow-lg" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-destructive rounded-full animate-bounce shadow-lg" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Loading Messages */}
        <div className="text-muted-foreground font-medium min-h-[24px] animate-pulse">
          {progress < 30 && "Connecting to healthcare network..."}
          {progress >= 30 && progress < 60 && "Loading doctor profiles..."}
          {progress >= 60 && progress < 90 && "Preparing appointment system..."}
          {progress >= 90 && "Almost ready!"}
        </div>
      </div>
    </div>
  )
}
