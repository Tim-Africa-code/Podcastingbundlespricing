import { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { ToggleSwitch } from './components/ToggleSwitch';
import { ThemeToggle } from './components/ThemeToggle';
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
      { episodes: 2, price: 'R7 999pm' }
    ],
    deliverables: [
      '1 x 90mins studio recording (2hr slot)',
      'Colour grading',
      'Royalty-Free Music',
      { item: 'Custom Intro/Outro with branding', included: false },
      { item: 'Up to 1 x Social media reels (15-60s)', included: false },
      { item: 'Up to 2 x Quote graphics & Stills', included: false },
      { item: 'Captions for Social Media Clips', included: false },
      { item: 'Social Media Post Copy Recommendations', included: false },
      { item: 'Cover image design', included: false },
      { item: 'Titles & Descriptions for episode/s', included: false },
      { item: 'Full transcript', included: false },
      { item: 'Distribution audio & Video (YouTube) podcast', included: false },
      'Podcast website set-up',
      { item: 'Analytics & performance tracking', included: false },
      'No revisions included'
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
      'Colour grading and post-production editing',
      'Royalty-Free Music',
      'Custom Intro/Outro with branding',
      'Up to 1 x Social media reels (15-60s)',
      'Up to 2 x Quote graphics & Stills',
      'Captions for Social Media Clips',
      'Social Media Post Copy Recommendations',
      'Cover image design',
      { item: 'Titles & Descriptions for episode/s', included: false },
      { item: 'Full transcript', included: false },
      { item: 'Distribution audio & Video (YouTube) podcast', included: false },
      'Podcast website set-up',
      { item: 'Analytics & performance tracking', included: false },
      '1 revisions included'
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
      'Colour grading and post-production editing',
      'Royalty-Free Music',
      'Custom Intro/Outro with branding',
      'Up to 4 x Social media reels (15-60s)',
      'Up to 3 x Quote graphics & Stills',
      'Captions for Social Media Clips',
      'Social Media Post Copy Recommendations',
      'Cover image design',
      'Titles & Descriptions for episode/s',
      'Full transcript',
      'Distribution audio & Video (YouTube) podcast',
      'Podcast website set-up',
      'Analytics & performance tracking',
      '2 revisions included'
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
      { episodes: 1, price: 'R15 999' },
      { episodes: 2, price: 'R29 999' }
    ],
    deliverables: [
      'Up to 90-min video recording',
      'Producer on set',
      'Premium editing',
      'Custom Intro/Outro with branding',
      'Up to 5 x Social media reels (15-60s)',
      'Up to 7 x Quote graphics & Stills',
      '2 x Thumbnail designs',
      'Captions for Social Media Clips',
      'Royalty-Free Music',
      'Titles & Descriptions',
      'Full transcript',
      'SEO-optimized article ( up to 800 words)',
      'Distribution to YouTube & podcast platforms',
      'Social media post suggestions',
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
      { episodes: 1, price: 'R10 999' },
      { episodes: 2, price: 'R19 999' }
    ],
    deliverables: [
      'Up to 90-min video recording',
      'Video Technician on set',
      'Basic editing & Colour grading',
      'Custom Intro/Outro with branding',
      'Up to 3 x Social media reels (15-60s)',
      'Up to 2 x Quote graphics & Stills',
      '1 x Thumbnail designs',
      'Captions for Social Media Clips',
      'Royalty-Free Music',
      'Titles & Descriptions',
      { item: 'Full transcript', included: false },
      { item: 'SEO-optimized article ( up to 800 words)', included: false },
      { item: 'Distribution to YouTube & podcast platforms', included: false },
      { item: 'Social media post suggestions', included: false },
      { item: 'Analytics & performance tracking', included: false },
      '1 revisions included'
    ],
    turnaround: '10 working days'
  },
  {
    tier: 'Novice',
    level: 1,
    prices: [
      { episodes: 1, price: 'R6 999' },
      { episodes: 2, price: 'R11 999' }
    ],
    deliverables: [
      '90-min studio recording & editing',
      'Video Technician on set',
      { item: 'Intro/Outro editing', included: false },
      { item: '3 x Social media teasers', included: false },
      { item: '3 x Quote graphics', included: false },
      { item: '1 x Thumbnail design', included: false },
      { item: 'Captions for Social Media Clips', included: false },
      { item: 'Full transcript', included: false },
      'Audio + Video distribution',
      'Download link supplied'
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
  const [isDark, setIsDark] = useState(false);

  // Load saved preferences from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('tim-africa-view');
    if (saved === 'creator' || saved === 'brand') {
      setView(saved);
    }
    
    const savedTheme = localStorage.getItem('tim-africa-theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  // Save preference to localStorage
  const handleViewChange = (newView: 'creator' | 'brand') => {
    setView(newView);
    localStorage.setItem('tim-africa-view', newView);
  };

  // Save theme preference to localStorage
  const handleThemeChange = (dark: boolean) => {
    setIsDark(dark);
    localStorage.setItem('tim-africa-theme', dark ? 'dark' : 'light');
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-[#101010]' : 'bg-[#F6F6F6]'
      }`} 
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Header Navigation */}
      <HeaderNav isDark={isDark} />
      
      {/* Toggle Bar */}
      <div className={`sticky top-20 shadow-sm z-10 py-6 transition-colors duration-300 ${
        isDark ? 'bg-[#172D3F]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-4 flex-wrap">
          <ToggleSwitch value={view} onChange={handleViewChange} isDark={isDark} />
          <ThemeToggle isDark={isDark} onChange={handleThemeChange} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <HeadingBlock view={view} isDark={isDark} />

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
                  isDark={isDark}
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
                  isDark={isDark}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer isDark={isDark} />
    </div>
  );
}