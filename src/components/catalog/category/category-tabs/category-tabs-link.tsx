import { memo } from 'react';

import { Link } from '@/i18n/routing';

type Props = {
  name: string;
  active: boolean;
  itemgrade: string;
  order: number;
};

export function CategoryTabsLink({ name, active, itemgrade, order }: Props) {
  const href = {
    pathname: '/catalog/[itemgrade]',
    params: { itemgrade: itemgrade },
  } as { pathname: '/catalog/[itemgrade]'; params: { itemgrade: string } };
  return (
    <Link
      href={href}
      role="tablist"
      data-state={active ? 'active' : 'not-active'}
      aria-orientation="horizontal"
      className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
      data-orientation="horizontal"
    >
      {name}
    </Link>
  );
}
