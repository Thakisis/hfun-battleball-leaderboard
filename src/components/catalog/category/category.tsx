import type * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { CategoryClient } from './category-client';

interface CatalogCategoryProps {
  children: React.ReactNode;
  category: string;
}

export async function CatalogCategory({
  children,
  category,
}: CatalogCategoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{category}</CardTitle>
        <CardDescription>
          {category === 'Rares'
            ? 'Catalogue Rares'
            : category === 'Mega Rares'
              ? 'Mega rares! OMG!'
              : category === 'Funky Friday'
                ? 'Funky friday catalogue items'
                : 'Habbo Club monthly items'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <CategoryClient>{children}</CategoryClient>
      </CardContent>
    </Card>
  );
}
