'use client';

import { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useUsers } from '@/hooks/useApi';
import { applyUserFilters } from '@/lib/users';
import { UserFilters } from '@/components/UserFilters';
import { UserTable } from '@/components/UserTable';
import { ColumnToggle, type ColumnKey } from '@/components/ColumnToggle';
import { UserCard } from '@/components/UserCard';
import { UserCardsSkeleton, UserTableSkeleton } from '@/components/Skeleton';
import { EmptyState } from '@/components/EmptyState';
import { ErrorState } from '@/components/ErrorState';

function UsersListContent() {
  const searchParams = useSearchParams();
  const { data: users, isLoading, error } = useUsers();
  const [visibleColumns, setVisibleColumns] = useState<ColumnKey[]>(['name', 'email', 'city', 'posts', 'todos']);

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
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <UserFilters searchTerm={searchTerm} sortBy={sortBy} sortOrder={sortOrder} />
        <div className="hidden sm:block">
          <ColumnToggle visibleColumns={visibleColumns} onColumnsChange={setVisibleColumns} />
        </div>
      </div>

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
            <UserTable users={filteredUsers} visibleColumns={visibleColumns} />
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
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 py-12 px-4 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Users Directory
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage and explore all users, their posts and todos
          </p>
        </div>

        <Suspense fallback={<UserTableSkeleton />}>
          <UsersListContent />
        </Suspense>
      </div>
    </div>
  );
}
