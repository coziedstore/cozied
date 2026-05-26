'use client';

import { TodayCard as TodayCardType } from '@/lib/types';
import Link from 'next/link';
import { useRef, useState } from 'react';

const toneColors: Record<string, string> = {
  clay: '#d9a890',
  sage: '#7a9b6e',
  sand: '#efe3c8',
  rose: '#e9c8c2',
  mauve: '#c9b6c5',
  slate: '#b6bdb3',
};

interface TodayStripProps {
  cards: TodayCardType[];
}

export default function TodayStrip({ cards }: TodayStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mt-[18px] flex gap-[10px] items-center max-w-[1280px] mx-auto px-7">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex-1 flex gap-[10px] overflow-x-auto scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {cards.map((card, idx) => (
          <Link
            key={idx}
            href={card.href}
            className="flex-1 min-w-[220px] lg:min-w-0 lg:flex-1 flex gap-[10px] items-center p-[10px] border border-[var(--rule)] rounded-[var(--radius-sm)] bg-[var(--paper)] hover:shadow-[var(--shadow-card)] hover:border-[var(--ink-3)] hover:translate-y-[-1px] transition-all duration-150"
          >
            {/* Thumbnail */}
            <div
              className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center relative"
              style={{ backgroundColor: toneColors[card.tone] }}
            >
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.45), transparent 55%)',
                }}
              />
            </div>

            {/* Content */}
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase font-600 text-[var(--ink-3)] tracking-[0.08em] truncate">
                {card.meta}
              </div>
              <h3 className="font-serif text-base font-500 leading-[1.15] line-clamp-2 text-[var(--ink)]">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={() => scroll('right')}
        className="w-9 h-9 flex items-center justify-center flex-shrink-0 border border-[var(--rule)] rounded-[var(--radius-sm)] hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-colors"
        aria-label="Scroll next"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </section>
  );
}
