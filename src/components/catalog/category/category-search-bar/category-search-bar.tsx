'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from '@/i18n/routing';

type Props = {};

export function CategorySearch({}: Props) {
  const searchTerm = 'a';
  return (
    <div className="flex items-end space-x-4">
      <div className="flex-grow">
        <Label htmlFor="item-filter" className="block mb-2">
          Search
        </Label>
        <Input
          id="item-filter"
          placeholder="Enter item name to filter in this category"
          value={searchTerm}
        />
      </div>
      <Link href="/catalog/compare" passHref>
        <Button variant="outline">Compare Items</Button>
      </Link>
      <Link href="/catalog/calculate" passHref>
        <Button>Trading Calculator</Button>
      </Link>
    </div>
  );
}
//onChange={(event) => setSearchTerm(event.target.value)}
