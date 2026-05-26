'use client';

import { Guide } from '@/lib/types';
import Link from 'next/link';

interface ICYMISectionProps {
  featured: Guide;
  guides: Guide[];
}

export default function ICYMISection({ featured, guides }: ICYMISectionProps) {
  const left = [guides[0], guides[1], guides[2]];
  const right = [guides[3], guides[4], guides[5]];

  return (
    <section className="max-w-[1280px] mx-auto px-7 mt-11">
      {/* Header */}
      <div className="flex items-baseline justify-between pb-[14px] border-b border-[var(--rule)] mb-[18px]">
        <div>
          <h2 className="font-serif text-[32px] font-600 text-[var(--ink)] tracking-[-0.02em]">
            ICYMI ·{' '}
            <span className="font-500 italic text-[var(--sage-dark)]">weekend recap</span>
          </h2>
        </div>
        <div className="text-[13px] font-500 uppercase text-[var(--ink-3)] tracking-[0.06em]">
          5 new guides this week
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-[18px]">
        {/* Feature */}
        <Link href={`/guides/${featured.slug}`} className="group">
          <div className="aspect-video rounded-[var(--radius)] bg-[var(--rose)] mb-4" />
          <h3 className="font-serif text-[26px] font-600 leading-[1.1] mb-2 group-hover:text-[var(--sage-dark)]">
            {featured.title}
          </h3>
          <p className="text-[15px] text-[var(--ink-2)] leading-[1.5] mb-3 max-w-[50ch]">
            {featured.excerpt || 'Read this guide for our latest testing insights.'}
          </p>
          <div className="text-[11.5px] text-[var(--ink-3)] font-500">
            ★ {featured.rating.toFixed(1)} · {featured.reviewCount?.toLocaleString() || featured.picksTestedCount?.toLocaleString()} readers shopping this guide
          </div>
        </Link>

        {/* Lists */}
        <div className="space-y-0">
          {left.map((guide, idx) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="flex gap-4 pb-4 border-b border-[var(--rule-2)] last:border-0 group"
            >
              <div className="w-[84px] h-16 bg-[var(--sand)] rounded-lg flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-[10.5px] font-600 uppercase text-[var(--sage-dark)] tracking-[0.08em]">
                  {guide.category} · {new Date(guide.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <h4 className="font-serif text-base font-500 leading-[1.2] group-hover:text-[var(--sage-dark)]">
                  {guide.title}
                </h4>
                <div className="text-[11.5px] text-[var(--ink-3)] font-500 mt-1">
                  ★ {guide.rating.toFixed(1)} · {guide.readMinutes} min · {guide.picksTestedCount || guide.reviewCount} {guide.picksTestedCount ? 'picks tested' : 'reviews'}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-0">
          {right.map((guide, idx) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="flex gap-4 pb-4 border-b border-[var(--rule-2)] last:border-0 group"
            >
              <div className="w-[84px] h-16 bg-[var(--rose)] rounded-lg flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-[10.5px] font-600 uppercase text-[var(--sage-dark)] tracking-[0.08em]">
                  {guide.category} · {new Date(guide.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <h4 className="font-serif text-base font-500 leading-[1.2] group-hover:text-[var(--sage-dark)]">
                  {guide.title}
                </h4>
                <div className="text-[11.5px] text-[var(--ink-3)] font-500 mt-1">
                  ★ {guide.rating.toFixed(1)} · {guide.readMinutes} min · {guide.picksTestedCount || guide.reviewCount} {guide.picksTestedCount ? 'picks tested' : 'reviews'}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
