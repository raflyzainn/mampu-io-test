import { User, Post, Todo, UserActivitySignals } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://jsonplaceholder.typicode.com';

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_BASE}/users`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function fetchUserById(id: number): Promise<User> {
  try {
    const response = await fetch(`${API_BASE}/users/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export async function fetchPostsByUserId(userId: number): Promise<Post[]> {
  try {
    const response = await fetch(`${API_BASE}/posts?userId=${userId}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function fetchTodosByUserId(userId: number): Promise<Todo[]> {
  try {
    const response = await fetch(`${API_BASE}/todos?userId=${userId}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error('Failed to fetch todos');
    return response.json();
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
}

export async function fetchUserActivitySignals(userId: number): Promise<UserActivitySignals> {
  try {
    const [posts, todos] = await Promise.all([
      fetchPostsByUserId(userId),
      fetchTodosByUserId(userId),
    ]);

    const completedTodos = todos.filter((todo) => todo.completed).length;
    const pendingTodos = todos.filter((todo) => !todo.completed).length;

    return {
      totalPosts: posts.length,
      completedTodos,
      pendingTodos,
    };
  } catch (error) {
    console.error('Error fetching user activity signals:', error);
    throw error;
  }
}
