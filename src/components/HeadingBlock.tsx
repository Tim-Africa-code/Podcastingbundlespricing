interface HeadingBlockProps {
  view: 'creator' | 'brand';
  isDark?: boolean;
}

export function HeadingBlock({ view, isDark = false }: HeadingBlockProps) {
  const tagline = view === 'creator' 
    ? 'Built for the Serious Creative' 
    : 'Designed for Brand Impact';
  
  const subtitle = view === 'creator'
    ? 'All packages based on 6-month contracts. Pricing per month.'
    : 'Monthly pricing based on 6-month contracts. Episode frequency flexible.';

  return (
    <div className="text-center mb-12 px-4">
      <h1 className={`mb-3 font-bold text-6xl transition-colors duration-300 ${
        isDark ? 'text-[#F6F6F6]' : 'text-[#172D3F]'
      }`}>
        🎙️ Podcasting Bundles
      </h1>
      <p className="text-[#CC9E00] mb-2 font-bold">
        {tagline}
      </p>
      <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
        isDark ? 'text-[#F6F6F6]/70' : 'text-[#101010]/70'
      }`}>
        {subtitle}
      </p>
    </div>
  );
}