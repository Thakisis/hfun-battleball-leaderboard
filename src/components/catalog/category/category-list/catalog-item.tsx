import Image from 'next/image';
import Link from 'next/link';

import { PriceDisplay } from '@/components/habbo/catalog/price-display';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CatalogItem as CatalogItemType } from '@/types/habbo';

interface CatalogItemProps extends CatalogItemType {}

export function CatalogItem({
  id,
  name,
  description,
  category,
  price,
  imageUrl,
}: CatalogItemType) {
  return (
    <Link
      className="relative z-5 "
      href={`/catalog/item/${encodeURIComponent(name)}`}
      passHref
    >
      <Button
        variant="ghost"
        className="w-full justify-between h-auto cursor-pointer hover:bg-transparent bg-transparent"
        data-item={id}
      >
        <div className="flex items-center w-full p-4">
          <div className="flex items-center flex-grow overflow-hidden">
            <div className="w-[64px] h-[64px] mr-4 flex-shrink-0 relative">
              {imageUrl && (
                <Image
                  src={imageUrl || '/catalog/missing.png'}
                  alt={name}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              )}
            </div>
            <div className="text-left min-w-0">
              <h3 className="font-bold truncate">{name}</h3>
              <p className="text-sm text-muted-foreground truncate">
                {description}
              </p>
              <Badge variant="secondary" className="mt-1">
                {category}
              </Badge>
            </div>
          </div>
          <div className="flex items-center flex-shrink-0 ml-2">
            <PriceDisplay price={price} />
          </div>
        </div>
      </Button>
    </Link>
  );
}
