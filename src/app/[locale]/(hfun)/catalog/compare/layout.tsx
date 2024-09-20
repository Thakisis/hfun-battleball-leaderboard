import type * as React from 'react';

type Props = {
  children: React.ReactNode;
  selectItem: React.ReactNode;
};

export default function CatalogLayout({ children, selectItem }: Props) {
  return (
    <div>
      {selectItem}
      {children}
    </div>
  );
}
