import { Suspense } from 'react';

import Link from 'next/link';

import { TeamList } from '@/components/habbo/team/team-list';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { getUserAndSession } from '@/lib/session';

export async function generateMetadata() {
  return generatePageMetadata({
    description: 'Team',
  });
}

export default async function TeamPage() {
  const { user, session } = await getUserAndSession();

  const isAdmin = user?.role === 'admin';

  return (
    <div className="flex flex-col flex-1">
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Team Members</h1>
          {session && isAdmin && (
            <Link href="/team/admin">
              <Button>Admin</Button>
            </Link>
          )}
        </div>
        <Suspense fallback={<Loader />}>
          <TeamList />
        </Suspense>
      </main>
    </div>
  );
}
