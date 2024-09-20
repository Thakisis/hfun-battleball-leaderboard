'use client';

import { Children, useEffect } from 'react';

import { useParams } from 'next/navigation';

import { ItemGrades } from '@/constants';
import { Pathnames } from '@/i18n/routing';
import { cn } from '@/lib/utils';

type Props = { children: React.ReactNode; itemgrade?: string };

export function CategoryTabsClient({ children }: Props) {
  const totalChild = Children.count(children) - 1;
  const itemgrade = useParams()?.itemgrade ?? 'rares';
  const selected =
    ItemGrades.find((item) => item.itemgrade === itemgrade)?.order ?? 0;

  const colClassName = [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
  ];
  const pathname = useParams();
  useEffect(() => {
    console.log('rerender');
  }, []);
  console.log(selected, pathname);
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={cn(
        `h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full `,
        colClassName[totalChild],
      )}
      data-active={selected}
      data-orientation="horizontal"
    >
      {children}
    </div>
  );
}
