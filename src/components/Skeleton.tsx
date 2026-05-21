export interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${className}`}
      aria-hidden="true"
    />
  );
}

export function UserTableSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  );
}

export function UserCardSkeleton() {
  return (
    <div className="space-y-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

export function UserCardsSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <UserCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function UserDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Button Skeleton */}
        <Skeleton className="mb-6 h-6 w-32" />

        {/* User Info Section */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          {/* Title */}
          <Skeleton className="mb-4 h-10 w-2/3" />

          {/* Basic Info Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <Skeleton className="h-6 w-1/2" />
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
            <div className="space-y-3">
              <Skeleton className="h-6 w-1/2" />
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
            <Skeleton className="mb-3 h-6 w-1/4" />
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="mb-2 h-4 w-full" />
            ))}
          </div>
        </div>

        {/* Activity Signals */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <Skeleton className="mb-2 h-4 w-2/3" />
              <Skeleton className="h-8 w-1/2" />
            </div>
          ))}
        </div>

        {/* Posts Section */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <Skeleton className="mb-4 h-8 w-1/3" />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <Skeleton className="mb-2 h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Todos Section */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <Skeleton className="mb-4 h-8 w-1/3" />
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
