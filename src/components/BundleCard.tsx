import { Button } from './ui/button';
import { Check, Star, X } from 'lucide-react';

interface PriceOption {
  episodes: number;
  price: string;
}

interface Deliverable {
  item: string;
  included: boolean;
}

interface BundleCardProps {
  tier: string;
  level: number | string;
  prices: PriceOption[];
  deliverables: (string | Deliverable)[];
  turnaround: string;
  featured?: boolean;
  note?: string;
  isDark?: boolean;
}

export function BundleCard({ 
  tier, 
  level, 
  prices, 
  deliverables, 
  turnaround,
  featured = false,
  note,
  isDark = false
}: BundleCardProps) {
  return (
    <div className={`rounded-xl shadow-lg p-6 flex flex-col h-full border-2 relative transition-all duration-300 ${
      isDark 
        ? `${featured ? 'border-[#CC9E00] bg-[#172D3F]' : 'border-[#285961] bg-[#1e3847]'} hover:shadow-2xl` 
        : `${featured ? 'border-[#CC9E00] bg-white' : 'border-transparent bg-white'} hover:shadow-xl`
    }`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#CC9E00] text-white px-4 py-1 rounded-full flex items-center gap-1 shadow-md">
            <Star className="w-4 h-4 fill-current" />
            <span>Popular</span>
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <div className={`inline-block px-3 py-1 rounded-full mb-2 transition-colors duration-300 ${
          isDark ? 'bg-[#285961] text-white' : 'bg-[#172D3F] text-white'
        }`}>
          {typeof level === 'number' ? `Level ${level}` : level}
        </div>
        
        {level !== 'Custom' && (
          <div className="space-y-2 mb-4">
            {prices.map((priceOption, idx) => (
              <div key={idx} className={`flex justify-between items-center rounded-lg p-3 transition-colors duration-300 ${
                isDark ? 'bg-[#101010]' : 'bg-[#F6F6F6]'
              }`}>
                <span className={`text-[14px] transition-colors duration-300 ${
                  isDark ? 'text-[#F6F6F6]/70' : 'text-[#101010]/70'
                }`}>
                  {priceOption.episodes} episode{priceOption.episodes > 1 ? 's' : ''}/month
                </span>
                <span className="text-[#CC9E00]">
                  {priceOption.price}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 mb-4">
        <h4 className={`mb-3 transition-colors duration-300 ${
          isDark ? 'text-[#CC9E00]' : 'text-[#172D3F]'
        }`}>Deliverables per recording</h4>
        <ul className="space-y-2">
          {deliverables.map((item, idx) => {
            const isIncluded = typeof item === 'string' || item.included;
            const text = typeof item === 'string' ? item : item.item;
            
            return (
              <li key={idx} className="flex items-start gap-2">
                {isIncluded ? (
                  <Check className="w-5 h-5 text-[#CC9E00] flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="w-5 h-5 text-[#CC9E00] flex-shrink-0 mt-0.5" />
                )}
                <span className={`text-[15px] transition-colors duration-300 ${
                  isDark ? 'text-[#F6F6F6]' : 'text-[#101010]'
                }`}>{text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {note && (
        <div className={`mb-4 p-3 rounded-lg transition-colors duration-300 ${
          isDark ? 'bg-[#101010]' : 'bg-[#F6F6F6]'
        }`}>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-[#F6F6F6]/70' : 'text-[#101010]/70'
          }`}>{note}</p>
        </div>
      )}

      <div className={`mt-auto pt-4 border-t transition-colors duration-300 ${
        isDark ? 'border-[#285961]' : 'border-[#F6F6F6]'
      }`}>
        <div className="flex justify-between items-center mb-4">
          <span className={`transition-colors duration-300 ${
            isDark ? 'text-[#F6F6F6]/70' : 'text-[#101010]/70'
          }`}>Turnaround</span>
          <span className="text-[rgb(204,158,0)] text-[14px]">{turnaround}</span>
        </div>
        <Button 
          className="w-full bg-[#CC9E00] hover:bg-[#b38a00] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          asChild
        >
          <a href="https://www.tim.africa/contact">Get Package</a>
        </Button>
      </div>
    </div>
  );
}