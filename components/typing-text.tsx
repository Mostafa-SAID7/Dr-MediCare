'use client'

import { useState, useEffect, memo } from 'react'
import { cn } from '@/lib/utils'

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  neon?: boolean
}

export const TypingText = memo(function TypingText({ 
  text, 
  className, 
  speed = 100, 
  delay = 0,
  neon = false 
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, speed)

        return () => clearTimeout(timeout)
      } else {
        setIsComplete(true)
      }
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [currentIndex, text, speed, delay])

  return (
    <span className={cn('inline-block', className)}>
      <span 
        className={cn(
          'inline-block',
          neon && 'neon-text animate-neon-pulse'
        )}
      >
        {displayedText}
      </span>
      {!isComplete && (
        <span className="inline-block w-0.5 h-[1em] bg-current ml-1 animate-cursor-blink" />
      )}
      
      <style jsx>{`
        @keyframes cursor-blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        @keyframes neon-pulse {
          0%, 100% {
            text-shadow: 
              0 0 3px currentColor,
              0 0 6px currentColor;
          }
          50% {
            text-shadow: 
              0 0 2px currentColor,
              0 0 4px currentColor;
          }
        }

        .neon-text {
          text-shadow: 
            0 0 3px currentColor,
            0 0 6px currentColor,
            0 0 9px currentColor;
        }

        .animate-neon-pulse {
          animation: neon-pulse 2s ease-in-out infinite;
        }

        .animate-cursor-blink {
          animation: cursor-blink 1s step-end infinite;
        }
      `}</style>
    </span>
  )
})
