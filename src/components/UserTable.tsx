'use client';

import { User, UserActivitySignals } from '@/types';
import Link from 'next/link';
import type { ColumnKey } from './ColumnToggle';

interface UserTableProps {
  users: User[];
  activitySignals?: Record<number, UserActivitySignals>;
  visibleColumns?: ColumnKey[];
}

export function UserTable({ users, activitySignals, visibleColumns = ['name', 'email', 'city', 'posts', 'todos'] }: UserTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-linear-to-r from-gray-50 to-gray-100 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
              {visibleColumns.includes('name') && (
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  Name
                </th>
              )}
              {visibleColumns.includes('email') && (
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  Email
                </th>
              )}
              {visibleColumns.includes('city') && (
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  City
                </th>
              )}
              {visibleColumns.includes('posts') && (
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  Posts
                </th>
              )}
              {visibleColumns.includes('todos') && (
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  Todos
                </th>
              )}
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr
                key={user.id}
                className="transition-colors hover:bg-blue-50 dark:hover:bg-gray-800/50"
              >
                {visibleColumns.includes('name') && (
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </span>
                  </td>
                )}
                {visibleColumns.includes('email') && (
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {user.email}
                    </span>
                  </td>
                )}
                {visibleColumns.includes('city') && (
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {user.address.city}
                    </span>
                  </td>
                )}
                {visibleColumns.includes('posts') && (
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {activitySignals?.[user.id]?.totalPosts ?? '-'}
                      </span>
                    </div>
                  </td>
                )}
                {visibleColumns.includes('todos') && (
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                          {activitySignals?.[user.id]?.completedTodos ?? '-'}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">/</span>
                      <div className="flex items-center gap-1">
                        <svg className="h-4 w-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                          {activitySignals?.[user.id]?.pendingTodos ?? '-'}
                        </span>
                      </div>
                    </div>
                  </td>
                )}
                <td className="px-6 py-4">
                  <Link
                    href={`/users/${user.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-md"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
