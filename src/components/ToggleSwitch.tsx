interface ToggleSwitchProps {
  value: 'creator' | 'brand';
  onChange: (value: 'creator' | 'brand') => void;
}

export function ToggleSwitch({ value, onChange }: ToggleSwitchProps) {
  return (
    <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md border border-[#172D3F]/10">
      <button
        onClick={() => onChange('brand')}
        className={`px-6 py-2 rounded-full transition-all duration-300 ${
          value === 'brand'
            ? 'bg-[#CC9E00] text-white'
            : 'bg-transparent text-[#101010] hover:bg-[#F6F6F6]'
        }`}
      >
        Brand
      </button>
      <button
        onClick={() => onChange('creator')}
        className={`px-6 py-2 rounded-full transition-all duration-300 ${
          value === 'creator'
            ? 'bg-[#CC9E00] text-white'
            : 'bg-transparent text-[#101010] hover:bg-[#F6F6F6]'
        }`}
      >
        Creator
      </button>
    </div>
  );
}