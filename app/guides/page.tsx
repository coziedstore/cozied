import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guides } from '@/lib/data';
import Link from 'next/link';

export const metadata = {
  title: 'All Guides | Cozied',
  description: 'Browse all beauty & wellness guides',
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Header />

      <div className="max-w-[1280px] mx-auto px-7 py-12">
        <h1 className="font-serif text-5xl font-600 mb-4 text-[var(--ink)]">
          All Guides
        </h1>
        <p className="text-[18px] text-[var(--ink-2)] mb-12">
          Explore our complete collection of {guides.length} curated shopping guides
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.slug}
              className="border border-[var(--rule)] rounded-[var(--radius)] p-6 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="text-[11px] font-600 uppercase text-[var(--sage-dark)] tracking-[0.08em] mb-3">
                {guide.category}
              </div>

              <h3 className="font-serif text-[20px] font-600 mb-3 text-[var(--ink)]">
                {guide.title}
              </h3>

              <p className="text-[14px] text-[var(--ink-2)] mb-4 leading-relaxed">
                {guide.excerpt || 'A curated selection of the best products in this category.'}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="text-[12px] text-[var(--ink-3)]">
                  ★ {guide.rating.toFixed(1)} · {guide.readMinutes} min read
                </div>
              </div>

              <Link
                href={`/guides/${guide.slug}`}
                className="inline-block w-full text-center bg-[var(--ink)] text-[var(--cream)] rounded-full py-3 px-4 font-600 hover:bg-[var(--sage-dark)] transition-colors"
              >
                Read Guide
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
