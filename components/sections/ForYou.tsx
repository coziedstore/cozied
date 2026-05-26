'use client';

import { Guide } from '@/lib/types';
import Link from 'next/link';
import { useState } from 'react';

interface ForYouProps {
  guides: Guide[];
}

export default function ForYou({ guides }: ForYouProps) {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <section className="max-w-[1280px] mx-auto px-7 mt-11">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-[32px] font-600 text-[var(--ink)] tracking-[-0.02em]">
          For <span className="italic font-500 text-[var(--sage-dark)]">you</span>
        </h2>

        {/* Grid/List toggle */}
        <div className="bg-[var(--paper)] rounded-full p-0.5 flex gap-0 border border-[var(--rule)]">
          <button
            onClick={() => setIsGrid(true)}
            className={`px-4 py-2 rounded-full text-[13px] font-600 transition-colors ${
              isGrid
                ? 'bg-[var(--ink)] text-[var(--cream)]'
                : 'text-[var(--ink)] hover:text-[var(--sage-dark)]'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setIsGrid(false)}
            className={`px-4 py-2 rounded-full text-[13px] font-600 transition-colors ${
              !isGrid
                ? 'bg-[var(--ink)] text-[var(--cream)]'
                : 'text-[var(--ink)] hover:text-[var(--sage-dark)]'
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Sub text */}
      <p className="text-[13px] text-[var(--ink-3)] font-500 uppercase tracking-[0.08em] mb-6">
        Based on your saves
      </p>

      {/* Grid */}
      {isGrid && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-[var(--radius)] bg-[var(--sage)] mb-3 group-hover:-translate-y-0.5 transition-transform overflow-hidden">
                {/* Badge */}
                {guide.picks[0]?.badge && (
                  <div className="absolute top-3 left-3 bg-white/90 text-[10px] font-600 uppercase px-2 py-1 rounded-full z-10">
                    {guide.picks[0].badge.replace('-', ' ')}
                  </div>
                )}

                {/* Save button */}
                <button className="absolute top-3 right-3 w-[30px] h-[30px] bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="text-[10.5px] font-600 uppercase text-[var(--sage-dark)] tracking-[0.08em] mb-1">
                {guide.category} · {guide.picks.length} picks
              </div>
              <h3 className="font-serif text-[17px] font-500 leading-[1.2] mb-2 group-hover:text-[var(--sage-dark)]">
                {guide.title}
              </h3>
              <div className="flex items-center gap-1 text-[11.5px] text-[var(--ink-3)] font-500">
                <span>From ${Math.min(...guide.picks.map(p => p.priceFrom))}</span>
                <span>·</span>
                <span>★ {guide.rating.toFixed(1)}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
