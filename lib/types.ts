export type Category = 'skincare' | 'hair' | 'wellness' | 'sleep' | 'body' | 'self-care' | 'home';

export type Tone = 'clay' | 'sage' | 'sand' | 'rose' | 'mauve' | 'slate' | 'ink';

export type Badge = 'editor-pick' | 'best-value' | 'new';

export interface Pick {
  rank: number;
  productTitle: string;
  productImage: { src: string; alt: string };
  affiliateUrl: string;
  priceFrom: number;
  badge?: Badge;
}

export interface Guide {
  slug: string;
  title: string;
  category: Category;
  subCategory?: string;
  heroImage: { src: string; alt: string; tone?: Tone };
  readMinutes: number;
  publishedAt: string;
  updatedAt: string;
  author: { name: string; slug: string };
  rating: number;
  reviewCount?: number;
  picksTestedCount?: number;
  picks: Pick[];
  excerpt?: string;
}

export interface Deal {
  product: Pick;
  guideSlug: string;
  rankInGuide: number;
  priceNow: number;
  priceWas: number;
  expiresAt: string;
}

export interface TodayCard {
  meta: string;
  title: string;
  href: string;
  tone: Tone;
}

export interface Author {
  slug: string;
  name: string;
  bio: string;
  image?: string;
}
