import { filterUsersBySearchTerm, sortUsersByName, sortUsersByEmail, applyUserFilters } from '@/lib/users';
import { User } from '@/types';

const mockUsers: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    username: 'alice',
    email: 'alice@example.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 1',
      city: 'New York',
      zipcode: '10001',
      geo: { lat: '40.7128', lng: '-74.0060' },
    },
    phone: '555-1234',
    website: 'alice.com',
    company: { name: 'Company A', catchPhrase: 'Test', bs: 'Business' },
  },
  {
    id: 2,
    name: 'Bob Smith',
    username: 'bob',
    email: 'bob@example.com',
    address: {
      street: '456 Elm St',
      suite: 'Apt 2',
      city: 'Los Angeles',
      zipcode: '90001',
      geo: { lat: '34.0522', lng: '-118.2437' },
    },
    phone: '555-5678',
    website: 'bob.com',
    company: { name: 'Company B', catchPhrase: 'Test', bs: 'Business' },
  },
  {
    id: 3,
    name: 'Charlie Brown',
    username: 'charlie',
    email: 'charlie@example.com',
    address: {
      street: '789 Oak St',
      suite: 'Apt 3',
      city: 'Chicago',
      zipcode: '60601',
      geo: { lat: '41.8781', lng: '-87.6298' },
    },
    phone: '555-9012',
    website: 'charlie.com',
    company: { name: 'Company C', catchPhrase: 'Test', bs: 'Business' },
  },
];

describe('User Filtering and Sorting', () => {
  describe('filterUsersBySearchTerm', () => {
    it('should filter users by name', () => {
      const result = filterUsersBySearchTerm(mockUsers, 'Alice');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Alice Johnson');
    });

    it('should filter users by email', () => {
      const result = filterUsersBySearchTerm(mockUsers, 'bob@');
      expect(result).toHaveLength(1);
      expect(result[0].email).toBe('bob@example.com');
    });

    it('should be case-insensitive', () => {
      const result = filterUsersBySearchTerm(mockUsers, 'CHARLIE');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Charlie Brown');
    });

    it('should return empty array when no match', () => {
      const result = filterUsersBySearchTerm(mockUsers, 'NonExistent');
      expect(result).toHaveLength(0);
    });

    it('should return all users when search term is empty', () => {
      const result = filterUsersBySearchTerm(mockUsers, '');
      expect(result).toHaveLength(3);
    });
  });

  describe('sortUsersByName', () => {
    it('should sort users by name ascending', () => {
      const result = sortUsersByName(mockUsers, 'asc');
      expect(result[0].name).toBe('Alice Johnson');
      expect(result[1].name).toBe('Bob Smith');
      expect(result[2].name).toBe('Charlie Brown');
    });

    it('should sort users by name descending', () => {
      const result = sortUsersByName(mockUsers, 'desc');
      expect(result[0].name).toBe('Charlie Brown');
      expect(result[1].name).toBe('Bob Smith');
      expect(result[2].name).toBe('Alice Johnson');
    });

    it('should not mutate original array', () => {
      const original = [...mockUsers];
      sortUsersByName(mockUsers, 'desc');
      expect(mockUsers).toEqual(original);
    });
  });

  describe('sortUsersByEmail', () => {
    it('should sort users by email ascending', () => {
      const result = sortUsersByEmail(mockUsers, 'asc');
      expect(result[0].email).toBe('alice@example.com');
      expect(result[1].email).toBe('bob@example.com');
      expect(result[2].email).toBe('charlie@example.com');
    });

    it('should sort users by email descending', () => {
      const result = sortUsersByEmail(mockUsers, 'desc');
      expect(result[0].email).toBe('charlie@example.com');
      expect(result[1].email).toBe('bob@example.com');
      expect(result[2].email).toBe('alice@example.com');
    });
  });

  describe('applyUserFilters', () => {
    it('should apply search filter', () => {
      const result = applyUserFilters(mockUsers, { searchTerm: 'Bob' });
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Bob Smith');
    });

    it('should apply sort filter', () => {
      const result = applyUserFilters(mockUsers, { sortBy: 'name', sortOrder: 'desc' });
      expect(result[0].name).toBe('Charlie Brown');
    });

    it('should apply both search and sort', () => {
      const users = [...mockUsers, { ...mockUsers[0], id: 4, name: 'Alice Cooper' }];
      const result = applyUserFilters(users, {
        searchTerm: 'Alice',
        sortBy: 'name',
        sortOrder: 'asc',
      });
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('Alice Cooper');
      expect(result[1].name).toBe('Alice Johnson');
    });

    it('should handle undefined filters', () => {
      const result = applyUserFilters(mockUsers, {});
      expect(result).toHaveLength(3);
    });
  });
});
