import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guides } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface GuidePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.excerpt,
  };
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = guides.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Header />

      <article className="max-w-[1280px] mx-auto px-7 py-12">
        {/* Hero section */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Link href="/" className="text-[var(--sage-dark)] hover:text-[var(--ink)]">
              ← Back home
            </Link>
          </div>

          {/* Meta */}
          <div className="mb-4 flex gap-4 items-center flex-wrap">
            <span className="text-[13px] font-600 uppercase text-[var(--sage-dark)] tracking-[0.08em]">
              {guide.category}
            </span>
            <span className="text-[13px] text-[var(--ink-3)]">·</span>
            <span className="text-[13px] text-[var(--ink-3)]">{guide.readMinutes} min read</span>
            <span className="text-[13px] text-[var(--ink-3)]">·</span>
            <span className="text-[13px] text-[var(--ink-3)]">
              Published {new Date(guide.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-600 mb-6 text-[var(--ink)]">
            {guide.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[var(--rule)]">
            <div>
              <p className="font-600 text-[var(--ink)]">{guide.author.name}</p>
              <p className="text-[13px] text-[var(--ink-3)]">
                ★ {guide.rating.toFixed(1)} · {guide.reviewCount ? `${guide.reviewCount.toLocaleString()} reviews` : `${guide.picksTestedCount} picks tested`}
              </p>
            </div>
          </div>

          {/* Excerpt */}
          {guide.excerpt && (
            <p className="text-[18px] text-[var(--ink-2)] mb-8 leading-relaxed max-w-[65ch]">
              {guide.excerpt}
            </p>
          )}
        </div>

        {/* Picks grid */}
        <div className="mb-12">
          <h2 className="font-serif text-[32px] font-600 mb-8 text-[var(--ink)]">
            The {guide.picks.length} Picks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guide.picks.map((pick) => (
              <div key={pick.rank} className="border border-[var(--rule)] rounded-[var(--radius)] p-6 hover:shadow-[var(--shadow-card)] transition-all">
                {/* Rank */}
                <div className="text-[11px] font-600 uppercase text-[var(--sage-dark)] tracking-[0.08em] mb-3">
                  #{pick.rank}
                </div>

                {/* Product image */}
                <div className="w-full aspect-video bg-[var(--sand)] rounded-[var(--radius-sm)] mb-4" />

                {/* Title */}
                <h3 className="font-serif text-[20px] font-600 mb-2 text-[var(--ink)]">
                  {pick.productTitle}
                </h3>

                {/* Price */}
                <p className="text-[18px] font-600 text-[var(--sage-dark)] mb-4">
                  From ${pick.priceFrom}
                </p>

                {/* CTA */}
                <a
                  href={pick.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="inline-block w-full text-center bg-[var(--ink)] text-[var(--cream)] rounded-full py-3 px-4 font-600 hover:bg-[var(--sage-dark)] transition-colors"
                >
                  Buy on Amazon →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div className="border border-dashed border-[var(--rule)] rounded-[10px] p-[18px] bg-[var(--paper)] text-[12.5px] text-[var(--ink-2)] leading-[1.5]">
          <strong>Affiliate disclosure.</strong> Cozied is supported by readers. Some links in our guides are affiliate links, which means we earn a small commission if you buy something we recommend. We only include products our editors have actually tested. As an Amazon Associate we earn from qualifying purchases.
        </div>

        {/* Related guides */}
        <div className="mt-12 pt-12 border-t border-[var(--rule)]">
          <h2 className="font-serif text-[32px] font-600 mb-8 text-[var(--ink)]">
            More from {guide.category}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides
              .filter((g) => g.category === guide.category && g.slug !== guide.slug)
              .slice(0, 3)
              .map((relatedGuide) => (
                <Link
                  key={relatedGuide.slug}
                  href={`/guides/${relatedGuide.slug}`}
                  className="group"
                >
                  <div className="aspect-video bg-[var(--rose)] rounded-[var(--radius)] mb-4 group-hover:-translate-y-0.5 transition-transform" />
                  <h3 className="font-serif text-[18px] font-600 mb-2 group-hover:text-[var(--sage-dark)]">
                    {relatedGuide.title}
                  </h3>
                  <p className="text-[13px] text-[var(--ink-3)]">
                    ★ {relatedGuide.rating.toFixed(1)} · {relatedGuide.readMinutes} min
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
