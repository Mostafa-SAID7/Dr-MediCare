import { PageSkeleton } from '@/components/skeletons/page-skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function DoctorDetailLoading() {
  return (
    <PageSkeleton>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Doctor Info Sidebar Skeleton */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8 rounded-lg shadow-sm">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <Skeleton className="w-48 h-48 rounded-lg mx-auto" />
                <div>
                  <Skeleton className="h-7 w-3/4 mx-auto mb-2" />
                  <Skeleton className="h-5 w-1/2 mx-auto mb-1" />
                </div>
                <div className="flex items-center justify-center space-x-2 py-2">
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-10 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Doctor Details Skeleton */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <Card className="rounded-lg shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-24" />
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>

          {/* Experience & Education */}
          <Card className="rounded-lg shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Skeleton className="w-5 h-5 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Skeleton className="w-5 h-5 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="rounded-lg shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-48" />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="rounded-lg shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Skeleton className="w-5 h-5 rounded" />
                  <Skeleton className="h-4 w-48" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="rounded-lg shadow-sm">
            <CardHeader>
              <Skeleton className="h-6 w-24" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 2 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-20" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageSkeleton>
  )
}
