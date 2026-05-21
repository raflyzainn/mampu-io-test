'use client';

import { Suspense, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useUsers } from '@/hooks/useApi';
import { applyUserFilters } from '@/lib/users';
import { UserFilters } from '@/components/UserFilters';
import { UserTable } from '@/components/UserTable';
import { UserCard } from '@/components/UserCard';
import { UserCardsSkeleton, UserTableSkeleton } from '@/components/Skeleton';
import { EmptyState } from '@/components/EmptyState';
import { ErrorState } from '@/components/ErrorState';

function UsersListContent() {
  const searchParams = useSearchParams();
  const { data: users, isLoading, error } = useUsers();

  const searchTerm = searchParams.get('search') || '';
  const sortBy = (searchParams.get('sortBy') || 'name') as 'name' | 'email';
  const sortOrder = (searchParams.get('sortOrder') || 'asc') as 'asc' | 'desc';

  const filteredUsers = useMemo(() => {
    if (!users) return [];
    return applyUserFilters(users, { searchTerm, sortBy, sortOrder });
  }, [users, searchTerm, sortBy, sortOrder]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (error) {
    return <ErrorState message="Failed to load users. Please try again later." />;
  }

  return (
    <div>
      <UserFilters searchTerm={searchTerm} sortBy={sortBy} sortOrder={sortOrder} />

      {isLoading ? (
        isMobile ? (
          <UserCardsSkeleton count={3} />
        ) : (
          <UserTableSkeleton />
        )
      ) : filteredUsers.length === 0 ? (
        <EmptyState
          title="No users found"
          description={
            searchTerm
              ? 'Try adjusting your search or filters'
              : 'No users available'
          }
        />
      ) : (
        <>
          {/* Desktop: Table View */}
          <div className="hidden md:block">
            <UserTable users={filteredUsers} />
          </div>

          {/* Mobile: Card View */}
          <div className="grid gap-4 md:hidden">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Users
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Browse and manage users, view their posts and todos
          </p>
        </div>

        <Suspense fallback={<UserTableSkeleton />}>
          <UsersListContent />
        </Suspense>
      </div>
    </div>
  );
}
