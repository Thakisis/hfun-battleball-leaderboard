import type { Hobba } from '@prisma/client';

import type { CatalogItem } from './habbo';

export interface HobbaState {
  loading: boolean;
  hobbasList: [string, Hobba[]][];
  compareItems: { first: CatalogItem | null; second: CatalogItem | null };
  Actions: {
    addCompare: (item: string, slot: 'first' | 'second') => void;
    removeCompare: (item: string, slot: 'first' | 'second') => void;
  };
  fetchHobbas: () => Promise<void>;
}
export type CompareItems = {
  first: CatalogItem | null;
  second: CatalogItem | null;
};
