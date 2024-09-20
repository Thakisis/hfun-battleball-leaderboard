import { Terminal } from 'lucide-react';

import { CategorySearch, CategoryTabs } from '@/components/catalog/category';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export const revalidate = 3600; // Revalidate every hour

export default function ItemgradeLayout({
  children,
  params: { itemgrade, locale },
}: {
  children: React.ReactNode;
  params: { itemgrade: string; locale: string };
}) {
  return (
    <div className="container mx-auto p-4 noShift space-y-4">
      <Alert className="p-4 rounded-md mb-4">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Warning!</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          Some data might be test data yet.
        </AlertDescription>
      </Alert>
      <CategorySearch />
      <CategoryTabs itemgrade={itemgrade} />
      {children}
    </div>
  );
}
