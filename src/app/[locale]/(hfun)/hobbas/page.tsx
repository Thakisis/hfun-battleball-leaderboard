import { Suspense } from 'react';

import { HobbasList } from '@/components/auth/hobbas/hobbas-list';
import { getCurrentUser } from '@/lib/session';

export default async function HobbaPage() {
  const user = await getCurrentUser();
  const isAdmin = user?.role === 'admin';

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Habbo Hobbas</h1>
        <Suspense
          fallback={<div className="text-center">Loading hobbas data...</div>}
        >
          <HobbasList />
        </Suspense>
        {isAdmin && (
          <div className="mt-12">
            <p>Hobba management</p>
          </div>
        )}
      </main>
    </div>
  );
}
