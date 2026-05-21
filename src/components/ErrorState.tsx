interface ErrorStateProps {
  title?: string;
  message: string;
}

export function ErrorState({ title = 'Error', message }: ErrorStateProps) {
  return (
    <div className="rounded-xl border border-red-200 bg-linear-to-r from-red-50 to-red-100/50 p-6 dark:border-red-900 dark:from-red-900/30 dark:to-red-800/20">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <svg
            className="h-6 w-6 text-red-600 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4v2m0 4v2m-6-12h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"
            />
          </svg>
        </div>
        <div>
          <h3 className="mb-1 font-bold text-red-900 dark:text-red-100">{title}</h3>
          <p className="text-sm text-red-800 dark:text-red-200">{message}</p>
        </div>
      </div>
    </div>
  );
}
