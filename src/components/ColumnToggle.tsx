'use client';

import { useState, useRef, useEffect } from 'react';

export type ColumnKey = 'name' | 'email' | 'city' | 'posts' | 'todos';

interface Column {
  key: ColumnKey;
  label: string;
  icon: React.ReactNode;
}

const COLUMNS: Column[] = [
  { 
    key: 'name', 
    label: 'Name',
    icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  },
  { 
    key: 'email', 
    label: 'Email',
    icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  { 
    key: 'city', 
    label: 'City',
    icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m4-4h1m-1 4h1m4-12h1m-1 4h1" /></svg>
  },
  { 
    key: 'posts', 
    label: 'Posts',
    icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-3l-4 4z" /></svg>
  },
  { 
    key: 'todos', 
    label: 'Todos',
    icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
  },
];

interface ColumnToggleProps {
  visibleColumns: ColumnKey[];
  onColumnsChange: (columns: ColumnKey[]) => void;
}

export function ColumnToggle({ visibleColumns, onColumnsChange }: ColumnToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleToggle = (columnKey: ColumnKey) => {
    if (visibleColumns.includes(columnKey)) {
      // Prevent unchecking if only one column is visible
      if (visibleColumns.length > 1) {
        onColumnsChange(visibleColumns.filter((col) => col !== columnKey));
      }
    } else {
      onColumnsChange([...visibleColumns, columnKey]);
    }
  };

  const handleSelectAll = () => {
    if (visibleColumns.length === COLUMNS.length) {
      onColumnsChange(['name']); // Keep at least name column
    } else {
      onColumnsChange(COLUMNS.map((col) => col.key));
    }
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-50 to-blue-100 px-4 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-200 hover:from-blue-100 hover:to-blue-200 hover:shadow-md dark:from-blue-900 dark:to-blue-800 dark:text-blue-100 dark:hover:from-blue-800 dark:hover:to-blue-700"
      >
        <svg
          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        <span>Columns</span>
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white dark:bg-blue-600">
          {visibleColumns.length}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-600 dark:bg-gray-800">
          {/* Header */}
          <div className="border-b border-gray-200 bg-linear-to-r from-gray-50 to-gray-100 px-4 py-3 dark:border-gray-700 dark:from-gray-700 dark:to-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                Display Columns
              </span>
              <button
                onClick={handleSelectAll}
                className="text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {visibleColumns.length === COLUMNS.length ? 'Clear' : 'All'}
              </button>
            </div>
          </div>

          {/* Column List */}
          <div className="max-h-72 space-y-1 overflow-y-auto p-2">
            {COLUMNS.map((column) => {
              const isChecked = visibleColumns.includes(column.key);
              const isDisabled = isChecked && visibleColumns.length === 1;
              
              return (
                <label
                  key={column.key}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 ${
                    isDisabled
                      ? 'cursor-not-allowed opacity-50'
                      : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleToggle(column.key)}
                    disabled={isDisabled}
                    className="h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-600 transition-colors focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-blue-600"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-400">{column.icon}</span>
                    <span className={`text-sm font-medium ${isChecked ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                      {column.label}
                    </span>
                  </div>
                  {isDisabled && (
                    <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">Required</span>
                  )}
                </label>
              );
            })}
          </div>

          {/* Footer Stats */}
          <div className="border-t border-gray-200 bg-gray-50 px-4 py-2 text-center text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400">
            {visibleColumns.length} of {COLUMNS.length} columns visible
          </div>
        </div>
      )}
    </div>
  );
}
