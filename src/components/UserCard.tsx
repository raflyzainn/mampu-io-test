'use client';

import { User, UserActivitySignals } from '@/types';
import Link from 'next/link';

interface UserCardProps {
  user: User;
  activitySignals?: UserActivitySignals;
}

export function UserCard({ user, activitySignals }: UserCardProps) {
  return (
    <Link href={`/users/${user.id}`}>
      <div className="group h-full rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-blue-400 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600">
        <h3 className="mb-1 font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {user.name}
        </h3>
        <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
          {user.email}
        </p>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {user.address.city}
        </p>

        {activitySignals && (
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2.5 dark:bg-gray-700/50">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Posts</span>
              </div>
              <p className="font-bold text-gray-900 dark:text-white">
                {activitySignals.totalPosts}
              </p>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-green-50 px-3 py-2.5 dark:bg-green-900/20">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Done</span>
              </div>
              <p className="font-bold text-green-700 dark:text-green-400">
                {activitySignals.completedTodos}
              </p>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-amber-50 px-3 py-2.5 dark:bg-amber-900/20">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-medium text-amber-700 dark:text-amber-400">Pending</span>
              </div>
              <p className="font-bold text-amber-700 dark:text-amber-400">
                {activitySignals.pendingTodos}
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
