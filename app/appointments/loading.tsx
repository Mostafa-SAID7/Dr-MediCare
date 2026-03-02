import { PageSkeleton, PageHeaderSkeleton } from '@/components/skeletons/page-skeleton'
import { AppointmentCardSkeleton } from '@/components/skeletons/appointment-card-skeleton'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function AppointmentsLoading() {
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

      {/* Quick Stats Skeleton */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="rounded-lg shadow-sm">
            <CardContent className="p-6 text-center">
              <Skeleton className="h-8 w-16 mx-auto mb-2" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Appointments List Skeleton */}
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <AppointmentCardSkeleton key={i} />
        ))}
      </div>
    </PageSkeleton>
  )
}
