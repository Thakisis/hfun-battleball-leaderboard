import { create } from 'zustand';

import { fetchAndSortHobbas } from '@/services/hobba';
import type { CatalogItem } from '@/types/habbo';
import type { HobbaState } from '@/types/hobba';

export const useHobbasStore = create<HobbaState>((set) => ({
  loading: false,
  hobbasList: [],
  compareItems: { first: null, second: null },

  Actions: {
    addCompare({
      item,
      slot,
    }: {
      item: CatalogItem;
      slot: 'first' | 'second';
    }) {
      console.log(item, slot);

      if (slot !== 'first' && slot !== 'second') return;
      console.log('slot valido');
      set(({ compareItems }) => ({
        compareItems: { ...compareItems, [slot]: item },
      }));
    },
    removeCompare(item, slot) {
      set(({ compareItems }) => ({
        ...compareItems,
        [slot]: null,
      }));
    },
  },

  fetchHobbas: async () => {
    set({ loading: true });

    try {
      const sortedHobbas = await fetchAndSortHobbas();
      set({ hobbasList: sortedHobbas, loading: false });
    } catch (error) {
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));
