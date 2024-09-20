import { CatalogCategory, CategoryList } from '@/components/catalog/category';
import { ItemGrades } from '@/constants';

export const revalidate = 3600; // Revalidate every hour
type props = { params: { itemgrade: string; locale: string } };

export default async function ItemgradePage({
  params: { itemgrade, locale },
}: props) {
  const category =
    ItemGrades.find((item) => item.itemgrade === itemgrade)?.name ?? 'Rares';

  return (
    <CatalogCategory category={category}>
      <CategoryList category={category} />
    </CatalogCategory>
  );
}
