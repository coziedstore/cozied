'use client';

import { Guide, Deal } from '@/lib/types';
import Trending from './sections/Trending';
import Hero from './sections/Hero';
import DealOfDay from './sections/DealOfDay';

interface MainGridProps {
  trending: Guide[];
  featured: Guide;
  subStories: Guide[];
  deal: Deal;
}

export default function MainGrid({ trending, featured, subStories, deal }: MainGridProps) {
  return (
    <main className="max-w-[1280px] mx-auto px-7 mt-[18px] grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-[18px] auto-rows-max">
      {/* Left: Trending */}
      <Trending guides={trending} />

      {/* Center: Hero + Subs */}
      <Hero featured={featured} subStories={subStories} />

      {/* Right: Deal */}
      <DealOfDay deal={deal} />
    </main>
  );
}
