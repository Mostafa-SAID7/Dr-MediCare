export default function AppointmentsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header Skeleton */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="hidden md:flex space-x-8">
              <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-14 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="w-24 h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header Skeleton */}
        <div className="mb-8">
          <div className="w-64 h-10 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="w-96 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Search and Filters Skeleton */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Quick Stats Skeleton */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-center">
                <div className="w-12 h-8 bg-gray-200 rounded animate-pulse mx-auto mb-2"></div>
                <div className="w-16 h-4 bg-gray-200 rounded animate-pulse mx-auto"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Appointments List Skeleton */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="w-32 h-5 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-48 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center space-y-2">
                    <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  
                  <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
