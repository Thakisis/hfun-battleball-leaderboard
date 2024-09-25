'use client';

import type * as React from 'react';

import {
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from '@/components/ui/context-menu';
import { useHobbasStore } from '@/store/hobbas';
import type { CatalogItem } from '@/types/habbo';
import { HobbaState } from '@/types/hobba';

export function CatalogItemMenu({ item }: { item: CatalogItem }) {
  const compareItems = useHobbasStore(
    (state: HobbaState) => state.compareItems,
  );
  const { addCompare, removeCompare } = useHobbasStore(
    (state: HobbaState) => state.Actions,
  );
  const numberOfCompares: number = Object.values(compareItems)

    .filter((itemCompare: CatalogItem | null) => itemCompare !== null).length;

  const addCompareHandler = () => {
    if (numberOfCompares === 0) addCompare({ item, slot: 'first' });

    if (numberOfCompares === 1) addCompare({ item, slot: 'second' });
  };
  if (numberOfCompares < 2)
    return (
      <ContextMenuItem onSelect={addCompareHandler}>
        Add to Compare {numberOfCompares === 0 ? 'first Item' : 'second Item'}
      </ContextMenuItem>
    );

  return (
    <ContextMenuSub>
      <ContextMenuSubTrigger inset>Replace in Compare</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>{compareItems?.first?.name}</ContextMenuItem>
        <ContextMenuItem>{compareItems?.second?.name}</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  );
}
