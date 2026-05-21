import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-50 dark:bg-gray-900 px-4 py-12">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">
          404
        </h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Page Not Found
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            Go Home
          </Link>
          <Link
            href="/users"
            className="rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50 dark:hover:bg-gray-800"
          >
            View Users
          </Link>
        </div>

        <div className="mt-12 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Need help?
          </h3>
          <ul className="space-y-2 text-left text-gray-600 dark:text-gray-400">
            <li>• Check the URL for typos</li>
            <li>• Use the navigation menu</li>
            <li>• Visit the home page</li>
            <li>• Browse the users list</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
