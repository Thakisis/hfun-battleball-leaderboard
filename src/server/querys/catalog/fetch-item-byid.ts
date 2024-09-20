import { memoize } from 'nextjs-better-unstable-cache';

import { prisma } from '@/lib/db';
import { CatalogItemHistory } from '@/types/habbo';

export async function rawfetchItem({
  itemId,
}: {
  itemId: string;
}): Promise<CatalogItemHistory> {
  const id = Number(itemId);
  let item;
  try {
    // Fetch items for the current page

    const item = await prisma.catalogItem.findUnique({
      where: { id },
      include: {
        priceHistory: {
          orderBy: {
            date: 'asc',
          },
        },
      },
    });
  } catch (error) {
    console.error('Error fetching catalog item:', error);
    throw new Error(`Failed to fetch catalog item with id: ${id} `);
  } finally {
    console.log(`Fetch operation completed. Retrieved  item with id ${id} `);
  }

  // Construct and return the CatalogData object

  console.log('fetched');

  if (!item) {
    throw new Error(`Failed to fetch catalog item with id: ${id} `);
  }
  return item;
}
export const fetchItem = memoize(rawfetchItem, {
  persist: true,
  // Invalidation period, default Infinity
});
