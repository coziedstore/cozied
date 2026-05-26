'use client';

import { Guide } from '@/lib/types';
import Link from 'next/link';
import { useState } from 'react';

const toneBackgrounds: Record<string, string> = {
  clay: 'linear-gradient(135deg, #c69884 0%, #f0d8c1 100%)',
  sage: 'linear-gradient(135deg, #7a9b6e 0%, #c5d5bd 100%)',
  rose: 'linear-gradient(135deg, #e9c8c2 0%, #f5e8e5 100%)',
  slate: 'linear-gradient(135deg, #b6bdb3 0%, #dbe1da 100%)',
  ink: 'linear-gradient(135deg, #1f1812 0%, #5a4e42 100%)',
  sand: 'linear-gradient(135deg, #efe3c8 0%, #f7f2e8 100%)',
};

interface HeroProps {
  featured: Guide;
  subStories: Guide[];
}

export default function Hero({ featured, subStories }: HeroProps) {
  const [heroIdx, setHeroIdx] = useState(0);

  const tone = featured.heroImage.tone || 'clay';
  const bg = toneBackgrounds[tone] || toneBackgrounds.clay;

  return (
    <section className="flex flex-col gap-[14px]">
      {/* Hero Card */}
      <article className="relative rounded-[var(--radius)] overflow-hidden shadow-[var(--shadow-card)] aspect-video">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{ background: bg }}
        />

        {/* Shade overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 35%, rgba(31,24,18,0.55) 100%)',
          }}
        />

        {/* Meta - top left */}
        <div className="absolute top-4 left-4 flex gap-[10px] z-10">
          <div className="bg-white/90 text-[11px] font-600 uppercase px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="w-[6px] h-[6px] bg-[var(--sage)] rounded-full" />
            Featured · Skincare
          </div>
          <div className="bg-black/40 text-white text-[11px] font-500 px-3 py-1.5 rounded-full">
            {featured.readMinutes} min read
          </div>
        </div>

        {/* Counter - top right */}
        <div className="absolute top-4 right-4 bg-black/40 text-white text-[11px] font-mono px-2.5 py-1 rounded-[4px]">
          3 / 15
        </div>

        {/* Body - bottom left */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="text-white text-[11px] font-600 uppercase mb-2 opacity-90 tracking-[0.08em]">
            The Top 10 List
          </div>
          <h1 className="text-white text-[42px] font-600 leading-[1.02] tracking-[-0.015em] mb-3 lg:text-2xl">
            {featured.title}
          </h1>
          <p className="text-white text-[13.5px] opacity-92">
            By <strong>{featured.author.name}</strong> · Updated {new Date(featured.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {featured.reviewCount?.toLocaleString()} readers shopping this guide
          </p>
        </div>

        {/* Navigation arrows - bottom right */}
        <div className="absolute bottom-6 right-6 flex gap-3 z-10">
          <button className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9 19l7-7-7-7" />
            </svg>
          </button>
        </div>
      </article>

      {/* Sub-stories */}
      <div className="grid grid-cols-3 gap-[14px]">
        {subStories.map((story) => (
          <Link
            key={story.slug}
            href={`/guides/${story.slug}`}
            className="group"
          >
            {/* Image */}
            <div
              className="relative aspect-video rounded-[var(--radius-sm)] mb-2 bg-[var(--sand)] group-hover:-translate-y-0.5 transition-transform"
            />

            {/* Content */}
            <div className="text-[10.5px] font-600 uppercase text-[var(--sage-dark)] tracking-[0.08em] mb-1">
              {story.category} · {story.readMinutes} min
            </div>
            <h3 className="font-serif text-[17px] font-500 leading-[1.2] mb-1.5 group-hover:text-[var(--sage-dark)]">
              {story.title}
            </h3>
            <div className="flex items-center gap-1 text-[11.5px] text-[var(--ink-3)] font-500">
              <span>★ {story.rating.toFixed(1)}</span>
              <span>·</span>
              <span>{story.reviewCount?.toLocaleString() || story.picksTestedCount?.toLocaleString()} {story.picksTestedCount ? 'picks tested' : 'reviews'}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
