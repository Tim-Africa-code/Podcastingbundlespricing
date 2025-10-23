import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';

interface PriceOption {
  episodes: number;
  price: string;
}

interface BundleCardProps {
  tier: string;
  level: number | string;
  prices: PriceOption[];
  deliverables: string[];
  turnaround: string;
  featured?: boolean;
  note?: string;
}

export function BundleCard({ 
  tier, 
  level, 
  prices, 
  deliverables, 
  turnaround,
  featured = false,
  note
}: BundleCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border-2 relative ${
      featured ? 'border-[#CC9E00] shadow-2xl' : 'border-transparent'
    } hover:shadow-xl transition-shadow duration-300`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#CC9E00] text-white px-4 py-1 rounded-full flex items-center gap-1 shadow-md">
            <Star className="w-4 h-4 fill-current" />
            <span>Popular</span>
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <div className="inline-block bg-[#172D3F] text-white px-3 py-1 rounded-full mb-2">
          {typeof level === 'number' ? `Level ${level}` : level}
        </div>
        
        {level !== 'Custom' && (
          <div className="space-y-2 mb-4">
            {prices.map((priceOption, idx) => (
              <div key={idx} className="flex justify-between items-center bg-[#F6F6F6] rounded-lg p-3">
                <span className="text-[#101010]/70 text-[14px]">
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
        <h4 className="text-[#172D3F] mb-3">Deliverables</h4>
        <ul className="space-y-2">
          {deliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-[#101010]">
              <Check className="w-5 h-5 text-[#CC9E00] flex-shrink-0 mt-0.5" />
              <span className="text-[15px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {note && (
        <div className="mb-4 p-3 bg-[#F6F6F6] rounded-lg">
          <p className="text-[#101010]/70">{note}</p>
        </div>
      )}

      <div className="mt-auto pt-4 border-t border-[#F6F6F6]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#101010]/70">Turnaround</span>
          <span className="text-[#285961] text-[14px]">{turnaround}</span>
        </div>
        <Button 
          className="w-full bg-[#CC9E00] hover:bg-[#CC9E00]/90 text-white"
          asChild
        >
          <a href="https://www.tim.africa/contact">Get Package</a>
        </Button>
      </div>
    </div>
  );
}