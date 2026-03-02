export default function DoctorDetailLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="bg-gradient-to-r from-primary to-accent h-16 shadow-lg animate-pulse" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4 animate-pulse">
              <div className="w-48 h-48 rounded-lg mx-auto bg-gray-200" />
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto" />
              <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto" />
              <div className="h-10 bg-gray-200 rounded w-full" />
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                  <div className="h-4 bg-gray-200 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
