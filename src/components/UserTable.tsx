'use client';

import { User, UserActivitySignals } from '@/types';
import Link from 'next/link';

interface UserTableProps {
  users: User[];
  activitySignals?: Record<number, UserActivitySignals>;
}

export function UserTable({ users, activitySignals }: UserTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold dark:border-gray-700">
              Name
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold dark:border-gray-700">
              Email
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold dark:border-gray-700">
              City
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold dark:border-gray-700">
              Posts
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold dark:border-gray-700">
              Todos
            </th>
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold dark:border-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border border-gray-200 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
            >
              <td className="border border-gray-200 px-4 py-3 dark:border-gray-700">
                {user.name}
              </td>
              <td className="border border-gray-200 px-4 py-3 dark:border-gray-700">
                {user.email}
              </td>
              <td className="border border-gray-200 px-4 py-3 dark:border-gray-700">
                {user.address.city}
              </td>
              <td className="border border-gray-200 px-4 py-3 dark:border-gray-700">
                {activitySignals?.[user.id]?.totalPosts ?? '-'}
              </td>
              <td className="border border-gray-200 px-4 py-3 dark:border-gray-700">
                <span className="inline-flex items-center gap-1">
                  {activitySignals?.[user.id]?.completedTodos ?? '-'}
                  <span className="text-xs text-gray-500">/</span>
                  {activitySignals?.[user.id]?.pendingTodos ?? '-'}
                </span>
              </td>
              <td className="border border-gray-200 px-4 py-3 dark:border-gray-700">
                <Link
                  href={`/users/${user.id}`}
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
