import { PageSkeleton } from '@/components/skeletons/page-skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function BookAppointmentLoading() {
  return (
    <PageSkeleton>
      {/* Page Header Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-9 w-64 mb-2" />
        <Skeleton className="h-5 w-96" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Doctor Info Sidebar Skeleton */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8 rounded-lg shadow-sm">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <Skeleton className="w-24 h-24 rounded-full mx-auto" />
                <div>
                  <Skeleton className="h-6 w-40 mx-auto mb-2" />
                  <Skeleton className="h-5 w-32 mx-auto mb-1" />
                  <Skeleton className="h-4 w-28 mx-auto" />
                </div>
                <Skeleton className="h-6 w-32 mx-auto" />
                <div className="pt-4 border-t space-y-2">
                  <Skeleton className="h-4 w-32 mx-auto" />
                  <Skeleton className="h-8 w-24 mx-auto" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Form Skeleton */}
        <div className="lg:col-span-2 space-y-8">
          {/* Date Selection */}
          <Card className="rounded-lg shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full rounded-lg" />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time Selection */}
          <Card className="rounded-lg shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full rounded-lg" />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Appointment Type */}
          <Card className="rounded-lg shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-64" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Patient Information */}
          <Card className="rounded-lg shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-24 w-full" />
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="rounded-lg shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-48" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Terms and Submit */}
          <Card className="rounded-lg shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start space-x-2 mb-4">
                <Skeleton className="h-4 w-4 rounded" />
                <Skeleton className="h-4 w-full" />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Skeleton className="h-12 w-48" />
          </div>
        </div>
      </div>
    </PageSkeleton>
  )
}
