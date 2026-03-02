import { PageSkeleton, PageHeaderSkeleton } from '@/components/skeletons/page-skeleton'
import { DoctorCardSkeleton } from '@/components/skeletons/doctor-card-skeleton'
import { Skeleton } from '@/components/ui/skeleton'

export default function DoctorsLoading() {
  return (
    <PageSkeleton>
      <PageHeaderSkeleton />
      
      {/* Search and Filters Skeleton */}
      <div className="bg-card rounded-lg shadow-sm border p-6 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      {/* Results Count Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-5 w-48" />
      </div>

      {/* Doctors Grid Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <DoctorCardSkeleton key={i} />
        ))}
      </div>
    </PageSkeleton>
  )
}
