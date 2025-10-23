interface HeadingBlockProps {
  view: 'creator' | 'brand';
}

export function HeadingBlock({ view }: HeadingBlockProps) {
  const tagline = view === 'creator' 
    ? 'Built for the Serious Creative' 
    : 'Designed for Brand Impact';
  
  const subtitle = view === 'creator'
    ? 'All packages based on 6-month contracts. Pricing per month.'
    : 'Monthly pricing based on 6-month contracts. Episode frequency flexible.';

  return (
    <div className="text-center mb-12 px-4">
      <h1 className="mb-3 text-[#172D3F] font-bold text-[36px]">
        🎙️ Podcasting Bundles
      </h1>
      <p className="text-[#CC9E00] mb-2 font-bold text-[20px]">
        {tagline}
      </p>
      <p className="text-[#101010]/70 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
