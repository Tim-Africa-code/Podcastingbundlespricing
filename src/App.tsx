import { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { ToggleSwitch } from './components/ToggleSwitch';
import { HeadingBlock } from './components/HeadingBlock';
import { BundleCard } from './components/BundleCard';
import { Footer } from './components/Footer';

// Creator bundle data
const creatorBundles = [
  {
    tier: '',
    level: 1,
    prices: [
      { episodes: 1, price: 'R4 999pm' },
      { episodes: 2, price: 'R8 999pm' }
    ],
    deliverables: [
      '1 x 90mins studio recording (2hr slot)',
      'Colour grading',
      'Royalty-Free Music',
      'Animated Logo',
      'Cover image design',
      'Audio + Video distribution',
      'Titles & Descriptions',
      '1 revision included'
    ],
    turnaround: '14 working days'
  },
  {
    tier: '',
    level: 2,
    prices: [
      { episodes: 1, price: 'R6 999pm' },
      { episodes: 2, price: 'R11 999pm' }
    ],
    deliverables: [
      '1 x 90mins studio recording (2hr slot)',
      'Up to 3 deliverables per episode',
      'Colour grading',
      'Royalty-Free Music',
      'Animated Logo',
      'Cover image design',
      'Subtitles',
      'Audio + Video distribution',
      'Titles & Descriptions',
      '1 revision included'
    ],
    turnaround: '12 working days'
  },
  {
    tier: '',
    level: 3,
    prices: [
      { episodes: 1, price: 'R8 999pm' },
      { episodes: 2, price: 'R14 999pm' }
    ],
    deliverables: [
      '1 x 90mins studio recording (2hr slot)',
      'Up to 5 deliverables per episode',
      'Colour grading & Advanced editing',
      'Royalty-Free Music',
      'Animated Logo & Intro/Outro',
      'Cover image & Thumbnail design',
      'Subtitles & Captions',
      'Audio + Video distribution',
      'Titles & Descriptions (SEO optimized)',
      '2 revisions included',
      'Social media teaser clips'
    ],
    turnaround: '10 working days',
    featured: true
  }
];

// Brand bundle data
const brandBundles = [
  {
    tier: 'Elite',
    level: 3,
    prices: [
      { episodes: 1, price: 'R13 999' },
      { episodes: 2, price: 'R24 999' }
    ],
    deliverables: [
      '90-min video recording & premium editing',
      'Custom Intro/Outro with branding',
      '5 x Social media reels (15-60s)',
      '7 x Quote graphics & Stills',
      '2 x Thumbnail designs',
      'Subtitles & Captions',
      'Full transcript',
      'SEO-optimized article (800 words)',
      'Audio + Video distribution to all platforms',
      'Social media content calendar',
      'Analytics & performance tracking',
      '2 revisions included'
    ],
    turnaround: '10 working days',
    featured: true
  },
  {
    tier: 'Initiate',
    level: 2,
    prices: [
      { episodes: 1, price: 'R11 999' },
      { episodes: 2, price: 'R21 999' }
    ],
    deliverables: [
      '90-min video recording & advanced editing',
      'Custom Intro/Outro with branding',
      '4 x Social media teasers',
      '5 x Quote graphics',
      '2 x Thumbnail designs',
      'Subtitles & Captions',
      'Full transcript',
      'SEO-optimized article (500 words)',
      'Audio + Video distribution',
      'Social media recommendations'
    ],
    turnaround: '10 working days'
  },
  {
    tier: 'Novice',
    level: 1,
    prices: [
      { episodes: 1, price: 'R9 999' },
      { episodes: 2, price: 'R17 999' }
    ],
    deliverables: [
      '90-min studio recording & editing',
      'Intro/Outro editing',
      '3 x Social media teasers',
      '3 x Quote graphics',
      '1 x Thumbnail design',
      'Subtitles & Captions',
      'Full transcript',
      'Audio + Video distribution'
    ],
    turnaround: '12 working days'
  },
  {
    tier: 'End Game',
    level: 'Custom',
    prices: [
      { episodes: 1, price: 'Custom quote' },
      { episodes: 2, price: 'Custom quote' }
    ],
    deliverables: [
      'Full-service podcast production',
      'Dedicated production team',
      'Unlimited revisions',
      'Custom deliverables based on needs',
      'Premium studio access',
      'Guest coordination & booking',
      'Multi-camera setup',
      'Professional sound design',
      'Complete social media management',
      'Monthly strategy sessions',
      'Priority support & rush delivery'
    ],
    turnaround: 'Custom timeline',
    note: 'Contact us for a bespoke package tailored to your brand requirements.'
  }
];

export default function App() {
  const [view, setView] = useState<'creator' | 'brand'>('brand');

  // Load saved preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('tim-africa-view');
    if (saved === 'creator' || saved === 'brand') {
      setView(saved);
    }
  }, []);

  // Save preference to localStorage
  const handleViewChange = (newView: 'creator' | 'brand') => {
    setView(newView);
    localStorage.setItem('tim-africa-view', newView);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6]" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header Navigation */}
      <HeaderNav />
      
      {/* Toggle Bar */}
      <div className="sticky top-20 bg-white shadow-sm z-10 py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <ToggleSwitch value={view} onChange={handleViewChange} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <HeadingBlock view={view} />

        {/* Animated content transition */}
        <div className="transition-opacity duration-300">
          {view === 'creator' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...creatorBundles].reverse().map((bundle, idx) => (
                <BundleCard
                  key={idx}
                  tier={bundle.tier}
                  level={bundle.level}
                  prices={bundle.prices}
                  deliverables={bundle.deliverables}
                  turnaround={bundle.turnaround}
                  featured={bundle.featured}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandBundles.filter(bundle => bundle.level !== 'Custom').map((bundle, idx) => (
                <BundleCard
                  key={idx}
                  tier={bundle.tier}
                  level={bundle.level}
                  prices={bundle.prices}
                  deliverables={bundle.deliverables}
                  turnaround={bundle.turnaround}
                  featured={bundle.featured}
                  note={bundle.note}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}