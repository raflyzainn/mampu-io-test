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
      <div className="h-full rounded-lg border border-gray-200 p-4 transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
          {user.name}
        </h3>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
          {user.email}
        </p>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {user.address.city}
        </p>

        {activitySignals && (
          <div className="grid grid-cols-3 gap-2 rounded-md bg-gray-100 p-2 dark:bg-gray-700">
            <div className="text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400">Posts</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {activitySignals.totalPosts}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400">Done</p>
              <p className="font-semibold text-green-600">
                {activitySignals.completedTodos}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400">Pending</p>
              <p className="font-semibold text-orange-600">
                {activitySignals.pendingTodos}
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
