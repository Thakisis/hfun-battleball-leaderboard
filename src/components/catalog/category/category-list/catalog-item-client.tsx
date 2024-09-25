import type * as React from 'react';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import type { CatalogItem as CatalogItemType } from '@/types/habbo';

import { CatalogItemMenu } from './catalog-item-menu';

export function CatalogItemClient({
  children,
  item,
}: {
  children: React.ReactNode;
  item: CatalogItemType;
}) {
  return (
    <ContextMenu modal={false}>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Add to Favorites
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Open Price Histroy
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <CatalogItemMenu item={item} />
        <ContextMenuSeparator />
      </ContextMenuContent>
    </ContextMenu>
  );
}
