import { useQuery } from '@tanstack/react-query';
import { fetchUsers, fetchPostsByUserId, fetchTodosByUserId, fetchUserActivitySignals } from '@/services/api';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
}

export function usePostsByUserId(userId: number) {
  return useQuery({
    queryKey: ['posts', userId],
    queryFn: () => fetchPostsByUserId(userId),
    enabled: !!userId,
  });
}

export function useTodosByUserId(userId: number) {
  return useQuery({
    queryKey: ['todos', userId],
    queryFn: () => fetchTodosByUserId(userId),
    enabled: !!userId,
  });
}

export function useUserActivitySignals(userId: number) {
  return useQuery({
    queryKey: ['userActivitySignals', userId],
    queryFn: () => fetchUserActivitySignals(userId),
    enabled: !!userId,
  });
}
