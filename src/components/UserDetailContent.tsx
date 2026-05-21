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
    <div className="min-h-screen bg-gray-50 py-8 px-4 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/users"
          className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Users
        </Link>

        {/* User Info Section */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Basic Info */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Basic Information
              </h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Username:
                  </span>{' '}
                  {user.username}
                </p>
                <p>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Email:
                  </span>{' '}
                  {user.email}
                </p>
                <p>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Phone:
                  </span>{' '}
                  {user.phone}
                </p>
                <p>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Website:
                  </span>{' '}
                  {user.website}
                </p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                Address
              </h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>
                  {user.address.city}, {user.address.zipcode}
                </p>
                <p className="text-sm text-gray-500">
                  Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
            <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Company
            </h2>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-medium text-gray-900 dark:text-white">
                  Name:
                </span>{' '}
                {user.company.name}
              </p>
              <p>
                <span className="font-medium text-gray-900 dark:text-white">
                  Catch Phrase:
                </span>{' '}
                {user.company.catchPhrase}
              </p>
              <p>
                <span className="font-medium text-gray-900 dark:text-white">
                  BS:
                </span>{' '}
                {user.company.bs}
              </p>
            </div>
          </div>
        </div>

        {/* Activity Signals */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Posts
            </p>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {posts.length}
            </p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Completed Todos
            </p>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {completedTodos}
            </p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Pending Todos
            </p>
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              {pendingTodos}
            </p>
          </div>
        </div>

        {/* Posts Section */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Posts ({posts.length})
          </h2>
          {posts.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No posts yet</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                >
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Todos Section */}
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Todos ({todos.length})
          </h2>
          {todos.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No todos yet</p>
          ) : (
            <div className="space-y-2">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-start gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    disabled
                    className="mt-1"
                    aria-label={`Todo: ${todo.title}`}
                  />
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? 'text-gray-400 line-through'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {todo.title}
                  </span>
                  <span
                    className={`ml-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      todo.completed
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                    }`}
                  >
                    {todo.completed ? 'Done' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
