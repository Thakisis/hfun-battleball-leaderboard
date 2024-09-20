import type * as React from 'react';

type Props = {
  children: React.ReactNode;
  modalitem: React.ReactNode;
};

export default function CatalogLayout({ children, modalitem }: Props) {
  return (
    <>
      {modalitem}
      {children}
    </>
  );
}
