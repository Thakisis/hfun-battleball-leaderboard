import { ItemGrades } from '@/constants/ItemGrades';

import { CategoryTabsClient } from './category-tabs-client';
import { CategoryTabsLink } from './category-tabs-link';

type Props = { itemgrade: string };

export function CategoryTabs({ itemgrade }: Props) {
  const itemsLinks = ItemGrades.map((item) => (
    <CategoryTabsLink
      key={item.itemgrade}
      active={itemgrade === item.itemgrade}
      {...item}
    />
  ));
  return (
    <CategoryTabsClient itemgrade={itemgrade} key="ola">
      {itemsLinks}
    </CategoryTabsClient>
  );
}
