import { memoize } from 'nextjs-better-unstable-cache';

import { prisma } from '@/lib/db';
import { CatalogData, CatalogItem } from '@/types/habbo';

export async function rawfetchItemsCategory({
  page = 1,
  pageSize = 50,
  category,
}: {
  page?: number;
  pageSize?: number;
  category: string;
}): Promise<CatalogData> {
  let items: CatalogItem[] = [];
  let totalItems = 0;
  let totalPages = 0;

  try {
    // Fetch items for the current page
    items = (await prisma.catalogItem.findMany({
      where: { category },
      skip: (page - 1) * pageSize,
      take: pageSize,

      // Add any additional options like 'orderBy' if needed
    })) as CatalogItem[];

    // Get the total count of items
    totalItems = await prisma.catalogItem.count();

    // Calculate total pages
    totalPages = Math.ceil(totalItems / pageSize);
  } catch (error) {
    console.error('Error fetching catalog items:', error);
    throw new Error('Failed to fetch catalog items');
  } finally {
    console.log(
      `Fetch operation completed. Retrieved ${items.length} items out of ${totalItems} total.`,
    );
  }
  console.log(items);
  // Construct and return the CatalogData object
  const catalogData: CatalogData = {
    items,
    totalPages,
    currentPage: page,
    pageSize,
    totalItems,
  };
  console.log('fetched');

  return catalogData;
}
export const fetchItemsCategory = memoize(rawfetchItemsCategory, {
  persist: true,
  // Invalidation period, default Infinity
});
