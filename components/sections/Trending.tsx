'use client';

import { Guide } from '@/lib/types';
import Link from 'next/link';

interface TrendingProps {
  guides: Guide[];
}

export default function Trending({ guides }: TrendingProps) {
  return (
    <aside className="border border-[var(--rule)] rounded-[var(--radius)] p-[18px] bg-[var(--paper)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-[14px]">
        <div className="w-[22px] h-[22px] rounded bg-[var(--sage-soft)] flex items-center justify-center flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--sage-dark)" strokeWidth="2.5">
            <path d="M6 10c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm6-8v4m0 8v4" />
          </svg>
        </div>
        <h2 className="font-serif text-[20px] font-600 text-[var(--ink)]">Trending</h2>
      </div>

      {/* Trend list */}
      <div className="space-y-0">
        {guides.slice(0, 7).map((guide, idx) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="flex gap-[10px] py-[11px] px-0 border-b border-[var(--rule-2)] hover:pl-1 transition-all duration-150 last:border-0 group"
          >
            {/* Rank */}
            <div
              className={`w-[22px] h-[22px] flex items-center justify-center text-[11px] font-600 flex-shrink-0 rounded-[5px] ${
                idx < 3
                  ? 'bg-[var(--sage)] text-white'
                  : 'bg-[var(--cream)] text-[var(--ink-2)] border border-[var(--rule)]'
              }`}
            >
              {idx + 1}
            </div>

            {/* Thumb */}
            <div className="w-[38px] h-[38px] bg-[var(--sand)] rounded-[6px] flex-shrink-0" />

            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-500 leading-[1.25] line-clamp-2 group-hover:text-[var(--sage-dark)]">
                {guide.title}
                {idx === 0 && <span className="ml-1 inline-block bg-[var(--sage)] text-white text-[9px] font-600 px-1.5 py-0.5 rounded-[3px]">NEW</span>}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* See more */}
      <div className="pt-[14px] border-t border-[var(--rule-2)]">
        <Link href="/trending" className="text-center block text-[13px] font-500 text-[var(--sage-dark)] hover:text-[var(--ink)]">
          See top 100 →
        </Link>
      </div>
    </aside>
  );
}
