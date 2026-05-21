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
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:flex-row md:items-end md:gap-4">
      {/* Search Input */}
      <div className="flex-1">
        <label
          htmlFor="search"
          className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400"
        >
          Search
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            id="search"
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => updateParams({ searchTerm: e.target.value })}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm transition-colors placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:bg-gray-600"
          />
        </div>
      </div>

      {/* Sort By */}
      <div className="md:w-40">
        <label
          htmlFor="sortBy"
          className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400"
        >
          Sort By
        </label>
        <div className="relative">
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => updateParams({ sortBy: e.target.value as 'name' | 'email' })}
            className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-3 pr-8 text-sm transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:bg-gray-600"
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
          </select>
          <svg
            className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Sort Order */}
      <div className="md:w-40">
        <label
          htmlFor="sortOrder"
          className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400"
        >
          Order
        </label>
        <div className="relative">
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => updateParams({ sortOrder: e.target.value as 'asc' | 'desc' })}
            className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-3 pr-8 text-sm transition-colors focus:border-blue-500 focus:bg-white focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:bg-gray-600"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <svg
            className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
