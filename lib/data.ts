import { Author } from './types';

// Keep just one author for now
export const authors: Record<string, Author> = {
  'cozied-team': {
    slug: 'cozied-team',
    name: 'Cozied Team',
    bio: 'Beauty & wellness experts at Cozied.',
    image: '/avatars/team.jpg',
  },
};

// Empty - we'll add pages one by one
export const guides = [];
export const todayCards = [];
export const deals = [];
export const trendingGuides = [];
export const categor = [
  { name: 'Skincare', slug: 'skincare' },
  { name: 'Hair', slug: 'hair' },
  { name: 'Wellness', slug: 'wellness' },
  { name: 'Sleep', slug: 'sleep' },
  { name: 'Body', slug: 'body' },
  { name: 'Self-care', slug: 'self-care' },
  { name: 'Home', slug: 'home' },
];
