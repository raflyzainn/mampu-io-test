import { Suspense } from 'react';
import { fetchUserById, fetchPostsByUserId, fetchTodosByUserId } from '@/services/api';
import { UserDetailContent } from '@/components/UserDetailContent';
import { UserDetailSkeleton } from '@/components/Skeleton';
import { notFound } from 'next/navigation';

interface UserDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: UserDetailPageProps) {
  try {
    const { id } = await params;
    const user = await fetchUserById(parseInt(id));
    return {
      title: `${user.name} | User Operations Workspace`,
      description: `View details for ${user.name}`,
    };
  } catch {
    return {
      title: 'User Not Found',
    };
  }
}

async function loadUserData(userId: number) {
  const [user, posts, todos] = await Promise.all([
    fetchUserById(userId),
    fetchPostsByUserId(userId),
    fetchTodosByUserId(userId),
  ]);
  return { user, posts, todos };
}

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { id } = await params;
  const userId = parseInt(id);

  if (isNaN(userId)) {
    notFound();
  }

  let data;
  try {
    data = await loadUserData(userId);
  } catch {
    notFound();
  }

  return (
    <Suspense fallback={<UserDetailSkeleton />}>
      <UserDetailContent
        user={data.user}
        posts={data.posts}
        todos={data.todos}
      />
    </Suspense>
  );
}
