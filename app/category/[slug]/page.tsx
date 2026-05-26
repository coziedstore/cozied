import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guides, categor } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return categor.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = categor.find((c) => c.slug === params.slug);
  return {
    title: `${category?.name} Guides | Cozied`,
    description: `Browse all ${category?.name.toLowerCase()} guides`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categor.find((c) => c.slug === params.slug);
  const categoryGuides = guides.filter((g) => g.category === params.slug);

  if (!category || categoryGuides.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Header />

      <div className="max-w-[1280px] mx-auto px-7 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-[var(--sage-dark)] hover:text-[var(--ink)] mb-6 inline-block">
            ← Back home
          </Link>

          <h1 className="font-serif text-5xl font-600 text-[var(--ink)]">
            {category.name}
          </h1>
          <p className="text-[18px] text-[var(--ink-2)] mt-4">
            {categoryGuides.length} guide{categoryGuides.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        {/* Guides grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-[var(--radius)] bg-[var(--sage)] mb-4 group-hover:-translate-y-0.5 transition-transform overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.45), transparent 55%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="text-[10.5px] font-600 uppercase text-[var(--sage-dark)] tracking-[0.08em] mb-2">
                {guide.readMinutes} min read
              </div>

              <h3 className="font-serif text-[18px] font-600 mb-2 group-hover:text-[var(--sage-dark)] line-clamp-3">
                {guide.title}
              </h3>

              <div className="flex items-center gap-1 text-[11.5px] text-[var(--ink-3)] font-500">
                <span>By {guide.author.name}</span>
                <span>·</span>
                <span>★ {guide.rating.toFixed(1)}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Other categories */}
        <div className="mt-16 pt-12 border-t border-[var(--rule)]">
          <h2 className="font-serif text-[32px] font-600 mb-8 text-[var(--ink)]">
            Browse other categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categor
              .filter((c) => c.slug !== params.slug)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="p-4 bg-[var(--paper)] border border-[var(--rule)] rounded-[var(--radius-sm)] text-center hover:border-[var(--sage)] hover:shadow-[var(--shadow-card)] transition-all"
                >
                  <span className="font-serif text-[16px] font-600 text-[var(--ink)]">
                    {cat.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
