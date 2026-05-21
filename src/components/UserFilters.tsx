'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface UserFiltersProps {
  searchTerm: string;
  sortBy: 'name' | 'email';
  sortOrder: 'asc' | 'desc';
}

export function UserFilters({ searchTerm, sortBy, sortOrder }: UserFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParams = useCallback(
    (updates: Partial<UserFiltersProps>) => {
      const params = new URLSearchParams(searchParams);

      if (updates.searchTerm !== undefined) {
        if (updates.searchTerm) {
          params.set('search', updates.searchTerm);
        } else {
          params.delete('search');
        }
      }

      if (updates.sortBy !== undefined) {
        params.set('sortBy', updates.sortBy);
      }

      if (updates.sortOrder !== undefined) {
        params.set('sortOrder', updates.sortOrder);
      }

      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className="mb-6 flex flex-col gap-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900 md:flex-row md:items-end">
      {/* Search Input */}
      <div className="flex-1">
        <label
          htmlFor="search"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Search by name or email
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => updateParams({ searchTerm: e.target.value })}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
        />
      </div>

      {/* Sort By */}
      <div>
        <label
          htmlFor="sortBy"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Sort by
        </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => updateParams({ sortBy: e.target.value as 'name' | 'email' })}
          className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
      </div>

      {/* Sort Order */}
      <div>
        <label
          htmlFor="sortOrder"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Order
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => updateParams({ sortOrder: e.target.value as 'asc' | 'desc' })}
          className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}
