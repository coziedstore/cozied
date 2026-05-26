'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="border-b border-[var(--rule)] sticky top-0 bg-[var(--cream)] z-40">
      <div className="max-w-[1280px] mx-auto px-7">
        <nav className="flex items-center gap-5 py-[18px]">
          {/* Brand */}
          <Link href="/" className="flex items-baseline gap-0.5 flex-shrink-0">
            <span className="font-serif text-[30px] font-600 text-[var(--ink)] leading-none tracking-[-0.01em]">
              cozied
            </span>
            <span className="w-[7px] h-[7px] bg-[var(--sage)] rounded-full inline-block ml-0.5 mb-1" />
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-[640px] flex items-center gap-2 px-4 py-2 bg-[var(--paper)] border border-[var(--rule)] rounded-full transition-all duration-150 focus-within:border-[var(--sage)] focus-within:shadow-[0_0_0_3px_var(--sage-soft)]">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[14.5px] placeholder-[var(--ink-3)] font-400"
            />
            <button className="w-9 h-9 bg-[var(--sage)] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[var(--sage-dark)] transition-colors">
              <ArrowIcon />
            </button>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex gap-[22px]">
            {['Skincare', 'Hair', 'Wellness', 'Sleep', 'More'].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-[14.5px] font-500 relative pb-0.5 ${
                  item === 'Skincare'
                    ? 'text-[var(--sage)] border-b-2 border-[var(--sage)]'
                    : 'text-[var(--ink)] hover:text-[var(--sage-dark)]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
