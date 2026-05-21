import { User } from '@/types';

export function filterUsersBySearchTerm(users: User[], searchTerm: string): User[] {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(lowerSearchTerm) ||
      user.email.toLowerCase().includes(lowerSearchTerm)
  );
}

export function sortUsersByName(users: User[], order: 'asc' | 'desc' = 'asc'): User[] {
  return [...users].sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return order === 'asc' ? comparison : -comparison;
  });
}

export function sortUsersByEmail(users: User[], order: 'asc' | 'desc' = 'asc'): User[] {
  return [...users].sort((a, b) => {
    const comparison = a.email.localeCompare(b.email);
    return order === 'asc' ? comparison : -comparison;
  });
}

export function applyUserFilters(
  users: User[],
  filters: {
    searchTerm?: string;
    sortBy?: 'name' | 'email';
    sortOrder?: 'asc' | 'desc';
  }
): User[] {
  let filtered = users;

  if (filters.searchTerm) {
    filtered = filterUsersBySearchTerm(filtered, filters.searchTerm);
  }

  if (filters.sortBy === 'name') {
    filtered = sortUsersByName(filtered, filters.sortOrder || 'asc');
  } else if (filters.sortBy === 'email') {
    filtered = sortUsersByEmail(filtered, filters.sortOrder || 'asc');
  }

  return filtered;
}
