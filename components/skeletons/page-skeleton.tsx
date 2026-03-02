import { Skeleton } from '@/components/ui/skeleton'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface PageSkeletonProps {
  showHeader?: boolean
  showFooter?: boolean
  children: React.ReactNode
}

export function PageSkeleton({ showHeader = true, showFooter = true, children }: PageSkeletonProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      {showHeader && <Header />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  )
}

export function PageHeaderSkeleton() {
  return (
    <div className="mb-8">
      <Skeleton className="h-10 w-64 mb-4" />
      <Skeleton className="h-6 w-96" />
    </div>
  )
}
