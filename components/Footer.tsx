'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="max-w-[1280px] mx-auto px-7 mt-[60px] pt-[30px] border-t border-[var(--rule)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] mb-8">
          {/* About */}
          <div>
            <div className="flex items-baseline gap-0.5 mb-4">
              <span className="font-serif text-[30px] font-600 text-[var(--ink)] leading-none tracking-[-0.01em]">
                cozied
              </span>
              <span className="w-[7px] h-[7px] bg-[var(--sage)] rounded-full inline-block ml-0.5 mb-1" />
            </div>
            <p className="text-[14px] text-[var(--ink-2)] mb-4 max-w-[38ch] leading-relaxed">
              Beauty & wellness top-10 lists, slowly and honestly. We test, we re-test, we tell you which three of the ten are actually worth your shelf.
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-[12px] font-600 uppercase rounded-full border border-[var(--rule)] text-[var(--ink-3)] hover:text-[var(--ink)]">
                EN
              </button>
              <button className="px-3 py-1 text-[12px] font-600 uppercase rounded-full border border-[var(--rule)] text-[var(--ink-3)] hover:text-[var(--ink)]">
                USD
              </button>
            </div>
          </div>

          {/* Guides */}
          <div>
            <h6 className="font-mono text-[11px] font-600 uppercase text-[var(--ink-3)] tracking-[0.1em] mb-3">
              Guides
            </h6>
            <ul className="space-y-2">
              {['Skincare', 'Hair', 'Wellness', 'Sleep', 'Self-care'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[14px] text-[var(--ink)] hover:text-[var(--sage-dark)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h6 className="font-mono text-[11px] font-600 uppercase text-[var(--ink-3)] tracking-[0.1em] mb-3">
              About
            </h6>
            <ul className="space-y-2">
              {['How we test', 'Editorial team', 'Reader letters', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[14px] text-[var(--ink)] hover:text-[var(--sage-dark)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fine print */}
          <div>
            <h6 className="font-mono text-[11px] font-600 uppercase text-[var(--ink-3)] tracking-[0.1em] mb-3">
              Fine print
            </h6>
            <ul className="space-y-2">
              {['Affiliate disclosure', 'Privacy', 'Terms', 'Accessibility'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[14px] text-[var(--ink)] hover:text-[var(--sage-dark)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      {/* Affiliate disclosure */}
      <div className="max-w-[1280px] mx-auto px-7 mt-[30px]">
        <div className="border border-dashed border-[var(--rule)] rounded-[10px] p-[14px_18px] bg-[var(--paper)] text-[12.5px] text-[var(--ink-2)] leading-[1.5]">
          <strong>Affiliate disclosure.</strong> Cozied is supported by readers. Some links in our guides — including the "buy" buttons — are affiliate links, which means we earn a small commission if you buy something we recommend. We only include products our editors have actually tested. As an Amazon Associate we earn from qualifying purchases.
        </div>
      </div>

      {/* Colophon */}
      <div className="max-w-[1280px] mx-auto px-7 mt-6 mb-8 flex justify-between items-center text-[11.5px] font-500 text-[var(--ink-3)] font-mono">
        <div>© 2026 Cozied · made slowly in Chicago</div>
        <div>v1.0.0</div>
      </div>
    </>
  );
}
