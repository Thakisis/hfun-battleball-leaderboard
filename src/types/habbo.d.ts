import { CatalogCategory } from '@/components/catalog-category';

import { CatalogItemHistory } from './habbo';
import { CatalogItem } from './habbo.d';

export interface HabboUserInfo {
  uniqueId: string;
  name: string;
  figureString: string;
  motto: string;
  online: boolean;
  lastAccessTime: string;
  memberSince: string;
  profileVisible: boolean;
  currentLevel: number;
  currentLevelCompletePercent: number;
  totalExperience: number;
  starGemCount: number;
  selectedBadges: Badge[];
  bouncerPlayerId: string;
}

interface Badge {
  badgeIndex: number;
  code: string;
  name: string;
  description: string;
}

export interface HabboErrorResponse {
  error: string;
}

export interface CatalogItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  releaseDate?: Date;
  category: string;
  CatalogCategory: string;
}

export type ItemPriceHistory = PriceHistoryEntry[];

export interface PriceHistoryEntry {
  date: string;
  price: number;
}

export interface CatalogItemHistory extends CatalogItem {
  priceHistory: ItemPriceHistory;
}
export interface CatalogItemHistorya {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  priceHistory: ItemPriceHistory;
  releaseDate?: Date;
}

export interface CatalogData {
  items: CatalogItem[];
  totalPages: number;
  currentPage: number;
  pageSize: number;
  totalItems: number;
}
