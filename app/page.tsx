import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cozied — for the cozy life',
  description: 'Beauty & wellness top-10 lists, tested and recommended by our editors.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Header />

      {/* Hero Section */}
      <div className="max-w-[1280px] mx-auto px-7 py-20">
        <div className="text-center mb-20">
          <h1 className="font-serif text-6xl font-600 mb-6 text-[var(--ink)]">
            Welcome to Cozied
          </h1>
          <p className="text-[20px] text-[var(--ink-2)] max-w-[65ch] mx-auto leading-relaxed">
            Beauty & wellness top-10 lists, slowly and honestly. We test, we re-test, we tell you which three of the ten are actually worth your shelf.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-20">
          <button className="bg-[var(--ink)] text-[var(--cream)] px-8 py-4 rounded-full font-600 hover:bg-[var(--sage-dark)] transition-colors">
            View All Guides
          </button>
          <button className="border border-[var(--rule)] text-[var(--ink)] px-8 py-4 rounded-full font-600 hover:bg-[var(--sage-soft)] transition-colors">
            Learn More
          </button>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 border-t border-b border-[var(--rule)]">
          <div className="text-center">
            <div className="text-4xl font-600 text-[var(--sage)] mb-2">0</div>
            <p className="text-[var(--ink-2)]">Guides Published</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-600 text-[var(--sage)] mb-2">100%</div>
            <p className="text-[var(--ink-2)]">Honestly Tested</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-600 text-[var(--sage)] mb-2">0</div>
            <p className="text-[var(--ink-2)]">Products Reviewed</p>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="py-20 text-center">
          <h2 className="font-serif text-3xl font-600 mb-6 text-[var(--ink)]">
            Coming Soon
          </h2>
          <p className="text-[var(--ink-2)] max-w-[50ch] mx-auto">
            We're building beautiful guides with curated products. Check back soon for our first article.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
