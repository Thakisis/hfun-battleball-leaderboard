import type * as React from 'react';

import { fetchItemsCategory } from '@/server/querys/catalog';
import type { CatalogItem as CatalogItemType } from '@/types/habbo';

import { CatalogItem } from './catalog-item';
import { CatalogItemClient } from './catalog-item-client';

interface CatalogCategoryProps {
  category: string;
}

export async function CategoryList({ category }: CatalogCategoryProps) {
  const catalogData = await fetchItemsCategory({
    page: 1,
    pageSize: 50,
    category,
  });
  const { items } = catalogData;

  return items.map((item: CatalogItemType) => (
    <CatalogItemClient key={item.name}>
      <CatalogItem {...item} />
    </CatalogItemClient>
  ));
}
