'use client';

import { Card } from '@/components/ui/card';

export default function DoctorsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="h-10 bg-blue-500/30 rounded-lg w-64 mb-4 animate-pulse" />
          <div className="h-6 bg-blue-500/30 rounded-lg w-96 animate-pulse" />
        </div>
      </div>

      {/* Search and Filter Skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
        </div>

        {/* Doctors Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200" />
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-48 mb-3" />
                <div className="h-4 bg-gray-100 rounded w-32 mb-4" />
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-100 rounded w-full" />
                  <div className="h-4 bg-gray-100 rounded w-5/6" />
                </div>
                <div className="flex gap-2">
                  <div className="h-10 bg-gray-200 rounded flex-1" />
                  <div className="h-10 bg-gray-200 rounded flex-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
