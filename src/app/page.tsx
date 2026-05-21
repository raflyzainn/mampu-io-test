import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 py-12 px-4 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 dark:bg-blue-900/30">
            <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Welcome to the User Operations Workspace</span>
          </div>

          <h1 className="mb-4 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:via-gray-200 dark:to-white md:text-6xl">
            Manage Users & Operations
          </h1>

          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A modern workspace to browse users, manage their posts and todos, with powerful search and filtering capabilities.
          </p>

          <Link
            href="/users"
            className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Explore Users
          </Link>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:border-blue-400 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-blue-600">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
              <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              Users List
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Browse all users with powerful search and sorting capabilities
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:border-blue-400 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-blue-600">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
              <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              Posts & Todos
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              View all posts and todos associated with each user
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:border-blue-400 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-blue-600">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
              <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              Detailed Analytics
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Track activity signals including completed and pending todos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}