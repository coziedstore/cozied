'use client';

import { Deal } from '@/lib/types';
import { useEffect, useState } from 'react';

interface DealOfDayProps {
  deal: Deal;
}

export default function DealOfDay({ deal }: DealOfDayProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const updateTimer = () => {
      const expiresAt = new Date(deal.expiresAt).getTime();
      const now = Date.now();
      const diff = expiresAt - now;

      if (diff > 0) {
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [deal.expiresAt]);

  const discount = Math.round(((deal.priceWas - deal.priceNow) / deal.priceWas) * 100);

  return (
    <aside className="border border-[var(--rule)] rounded-[var(--radius)] p-[18px] bg-gradient-to-b from-[var(--paper)] to-[var(--sage-soft)] relative overflow-hidden">
      {/* Decorative circle */}
      <div
        className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-[var(--sage)] opacity-12"
        style={{ transform: 'translate(30%, 30%)' }}
      />

      {/* Deal label */}
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="w-1.5 h-1.5 bg-[var(--sage)] rounded-full pulse" />
        <span className="text-[10.5px] font-600 uppercase text-[var(--sage-dark)] tracking-[0.08em]">
          Deal of the day
        </span>
      </div>

      {/* Product */}
      <div className="flex gap-3 mb-3 relative z-10">
        <div className="w-16 h-16 bg-[var(--clay)] rounded-[10px] flex-shrink-0" />
        <div className="min-w-0">
          <h3 className="font-serif text-[17px] font-500 text-[var(--ink)]">
            {deal.product.productTitle}
          </h3>
          <p className="text-[12.5px] text-[var(--ink-3)]">
            From '{deal.guideSlug}' · #{deal.rankInGuide}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-3 relative z-10">
        <span className="font-serif text-[32px] font-600 text-[var(--sage-dark)]">
          ${deal.priceNow}
        </span>
        <span className="text-[14px] font-500 text-[var(--ink-3)] line-through">
          ${deal.priceWas}
        </span>
        <span className="text-[10.5px] font-600 text-[var(--sage-dark)] bg-white px-1.5 py-0.5 rounded-[4px]">
          -{discount}%
        </span>
      </div>

      {/* Timer */}
      <div className="flex gap-1 mb-3 relative z-10">
        {[
          { label: 'hrs', value: timeLeft.hours },
          { label: 'min', value: timeLeft.minutes },
          { label: 'sec', value: timeLeft.seconds },
        ].map((segment) => (
          <div
            key={segment.label}
            className="flex-1 border border-[var(--rule)] rounded-[6px] p-1 text-center"
          >
            <div className="font-serif text-[20px] font-600 text-[var(--ink)]">
              {String(segment.value).padStart(2, '0')}
            </div>
            <div className="text-[9px] font-500 text-[var(--ink-3)] uppercase tracking-wider">
              {segment.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href={deal.product.affiliateUrl}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="w-full bg-[var(--ink)] text-[var(--cream)] rounded-full py-3 px-4 text-[14px] font-600 flex items-center justify-center gap-2 hover:bg-[var(--sage-dark)] transition-colors relative z-10 mb-3"
      >
        Get the deal on Amazon
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7v10" />
        </svg>
      </a>

      {/* Footer */}
      <div className="text-[10.5px] text-[var(--ink-3)] text-center font-500 relative z-10">
        Prime eligible · we earn a commission
      </div>
    </aside>
  );
}
