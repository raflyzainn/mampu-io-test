interface ErrorStateProps {
  title?: string;
  message: string;
}

export function ErrorState({ title = 'Error', message }: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-900/20">
      <h3 className="mb-2 font-semibold text-red-800 dark:text-red-200">{title}</h3>
      <p className="text-red-700 dark:text-red-300">{message}</p>
    </div>
  );
}
