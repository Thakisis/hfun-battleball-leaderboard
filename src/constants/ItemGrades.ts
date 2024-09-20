export type ItemGrade = {
  name: string;
  url: string;
  itemgrade: string;
  color: string;
  order: number;
};
export const ItemGrades: ItemGrade[] = [
  {
    name: 'Rares',
    url: '/catalog/rares',
    itemgrade: 'rares',
    color: 'pink',
    order: 0,
  },
  {
    name: 'Mega Rares',
    itemgrade: 'mega-rares',
    url: '/catalog/mega-rares',
    color: 'pink',
    order: 1,
  },
  {
    name: 'Funky Friday',
    url: '/catalog/funky-friday',
    itemgrade: 'funky-friday',
    color: 'pink',
    order: 2,
  },
  {
    name: 'HC',
    url: '/catalog/hc',
    itemgrade: 'hc',
    color: 'pink',
    order: 3,
  },
];
