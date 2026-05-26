import Header from '@/components/Header';
import TodayStrip from '@/components/TodayStrip';
import MainGrid from '@/components/MainGrid';
import Footer from '@/components/Footer';
import ICYMISection from '@/components/sections/ICYMISection';
import ForYou from '@/components/sections/ForYou';
import { guides, todayCards, deals } from '@/lib/data';

export const metadata = {
  title: 'Cozied — for the cozy life',
  description: 'Beauty & wellness top-10 lists, tested and recommended by our editors.',
};

export default function Home() {
  const featured = guides[0];
  const subStories = guides.slice(1, 4);
  const trending = guides;
  const deal = deals[0];
  const icymiGuides = guides.slice(1);

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Header />
      <TodayStrip cards={todayCards} />
      <MainGrid
        trending={trending}
        featured={featured}
        subStories={subStories}
        deal={deal}
      />
      <ICYMISection featured={featured} guides={icymiGuides.slice(0, 6)} />
      <ForYou guides={guides} />
      <Footer />
    </div>
  );
}
