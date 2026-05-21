'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-50 dark:bg-gray-900 px-4 py-12">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-6xl font-bold text-red-600 dark:text-red-400">
          ⚠️
        </h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Something went wrong!
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          An error occurred while loading the page. Please try again or go back.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            Try Again
          </button>
          <Link
            href="/users"
            className="rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50 dark:hover:bg-gray-800"
          >
            Back to Users
          </Link>
        </div>

        <div className="mt-12 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            What happened?
          </h3>
          <p className="text-left text-sm text-gray-600 dark:text-gray-400">
            The page encountered an unexpected error. This might be temporary.
            Try refreshing or contact support if the problem persists.
          </p>
        </div>
      </div>
    </div>
  );
}
