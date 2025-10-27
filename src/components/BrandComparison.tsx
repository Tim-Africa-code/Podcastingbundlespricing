import { Button } from './ui/button';
import { Check } from 'lucide-react';

interface BrandTier {
  tier: string;
  level: string;
  priceOneEpisode: string;
  priceTwoEpisodes: string;
  deliverables: string[];
  turnaround: string;
  notes?: string;
}

interface BrandComparisonProps {
  tiers: BrandTier[];
}

export function BrandComparison({ tiers }: BrandComparisonProps) {
  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#172D3F] text-white">
              <th className="p-4 text-left rounded-tl-lg">Package</th>
              <th className="p-4 text-left">1 Episode/Month</th>
              <th className="p-4 text-left">2 Episodes/Month</th>
              <th className="p-4 text-left">Deliverables</th>
              <th className="p-4 text-left rounded-tr-lg">Turnaround</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, idx) => (
              <tr 
                key={idx} 
                className={`${idx % 2 === 0 ? 'bg-white' : 'bg-[#F6F6F6]'} hover:bg-[#CC9E00]/5 transition-colors`}
              >
                <td className="p-4 border-b border-[#F6F6F6]">
                  <div>
                    <div className="text-[#172D3F]">{tier.tier}</div>
                    <div className="text-[#101010]/60">{tier.level}</div>
                  </div>
                </td>
                <td className="p-4 border-b border-[#F6F6F6]">
                  <span className="text-[#CC9E00]">{tier.priceOneEpisode}</span>
                </td>
                <td className="p-4 border-b border-[#F6F6F6]">
                  <span className="text-[#CC9E00]">{tier.priceTwoEpisodes}</span>
                </td>
                <td className="p-4 border-b border-[#F6F6F6]">
                  <ul className="space-y-1">
                    {tier.deliverables.slice(0, 3).map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-[#101010]">
                        <Check className="w-4 h-4 text-[#CC9E00] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {tier.deliverables.length > 3 && (
                      <li className="text-[#101010]/70">
                        +{tier.deliverables.length - 3} more...
                      </li>
                    )}
                  </ul>
                </td>
                <td className="p-4 border-b border-[#F6F6F6]">
                  <span className="text-[#285961]">{tier.turnaround}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl shadow-lg p-6 border border-[#F6F6F6]"
          >
            <div className="mb-4">
              <div className="inline-block bg-[#172D3F] text-white px-3 py-1 rounded-full mb-2">
                {tier.level}
              </div>
              <h3 className="text-[#172D3F] mb-4">{tier.tier}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center bg-[#F6F6F6] rounded-lg p-3">
                  <span className="text-[#101010]/70">1 episode/month</span>
                  <span className="text-[#CC9E00]">{tier.priceOneEpisode}</span>
                </div>
                <div className="flex justify-between items-center bg-[#F6F6F6] rounded-lg p-3">
                  <span className="text-[#101010]/70">2 episodes/month</span>
                  <span className="text-[#CC9E00]">{tier.priceTwoEpisodes}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-[#172D3F] mb-3">Deliverables</h4>
              <ul className="space-y-2">
                {tier.deliverables.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-[#101010]">
                    <Check className="w-5 h-5 text-[#CC9E00] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {tier.notes && (
              <div className="mb-4 p-3 bg-[#F6F6F6] rounded-lg">
                <p className="text-[#101010]/70">{tier.notes}</p>
              </div>
            )}

            <div className="flex justify-between items-center mb-4">
              <span className="text-[#101010]/70">Turnaround</span>
              <span className="text-[#285961]">{tier.turnaround}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button 
          className="bg-[#CC9E00] hover:bg-[#b38a00] text-white px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          asChild
        >
          <a href="https://www.tim.africa/contact">Get Package</a>
        </Button>
      </div>
    </div>
  );
}