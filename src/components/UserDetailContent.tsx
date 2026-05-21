import Link from 'next/link';
import { User, Post, Todo } from '@/types';

interface UserDetailContentProps {
  user: User;
  posts: Post[];
  todos: Todo[];
}

export function UserDetailContent({ user, posts, todos }: UserDetailContentProps) {
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 py-12 px-4 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/users"
          className="mb-8 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Users
        </Link>

        {/* User Info Section */}
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          {/* Header with gradient background */}
          <div className="bg-linear-to-r from-blue-50 to-blue-100/50 p-8 dark:from-blue-900/20 dark:to-blue-800/20">
            <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              {user.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">@{user.username}</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Basic Info */}
              <div>
                <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  Basic Information
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500">Email</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500">Phone</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{user.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500">Website</p>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{user.website}</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  Address
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500">Street</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{user.address.street}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500">City</p>
                    <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {user.address.city}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500">Zip Code</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{user.address.zipcode}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                Company
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500">Name</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{user.company.name}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500">Catch Phrase</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{user.company.catchPhrase}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Signals */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-blue-200 bg-linear-to-br from-blue-50 to-blue-100/50 p-6 dark:border-blue-800 dark:from-blue-900/20 dark:to-blue-800/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Total Posts</p>
                <p className="mt-1 text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {posts.length}
                </p>
              </div>
              <svg className="h-8 w-8 text-blue-600 opacity-20 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>

          <div className="rounded-xl border border-green-200 bg-linear-to-br from-green-50 to-green-100/50 p-6 dark:border-green-800 dark:from-green-900/20 dark:to-green-800/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Completed</p>
                <p className="mt-1 text-3xl font-bold text-green-700 dark:text-green-400">
                  {completedTodos}
                </p>
              </div>
              <svg className="h-8 w-8 text-green-600 opacity-20 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 bg-linear-to-br from-amber-50 to-amber-100/50 p-6 dark:border-amber-800 dark:from-amber-900/20 dark:to-amber-800/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Pending</p>
                <p className="mt-1 text-3xl font-bold text-amber-700 dark:text-amber-400">
                  {pendingTodos}
                </p>
              </div>
              <svg className="h-8 w-8 text-amber-600 opacity-20 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="border-b border-gray-200 bg-linear-to-r from-gray-50 to-gray-100/50 px-8 py-4 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Posts <span className="text-sm font-normal text-gray-600 dark:text-gray-400">({posts.length})</span>
            </h2>
          </div>
          <div className="p-8">
            {posts.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">No posts yet</p>
            ) : (
              <div className="space-y-3">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-400 hover:shadow-md dark:border-gray-700 dark:hover:border-blue-600"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{post.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Todos Section */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="border-b border-gray-200 bg-linear-to-r from-gray-50 to-gray-100/50 px-8 py-4 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Todos <span className="text-sm font-normal text-gray-600 dark:text-gray-400">({todos.length})</span>
            </h2>
          </div>
          <div className="p-8">
            {todos.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">No todos yet</p>
            ) : (
              <div className="space-y-2">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`flex items-center gap-4 rounded-lg px-4 py-3 transition-all ${
                      todo.completed
                        ? 'bg-green-50 dark:bg-green-900/10'
                        : 'bg-amber-50 dark:bg-amber-900/10'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      disabled
                      className="h-4 w-4 rounded"
                      aria-label={`Todo: ${todo.title}`}
                    />
                    <span
                      className={`flex-1 text-sm ${
                        todo.completed
                          ? 'text-gray-500 line-through dark:text-gray-500'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {todo.title}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        todo.completed
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                      }`}
                    >
                      {todo.completed ? (
                        <>
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Done
                        </>
                      ) : (
                        <>
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Pending
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
