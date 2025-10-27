interface ToggleSwitchProps {
  value: 'creator' | 'brand';
  onChange: (value: 'creator' | 'brand') => void;
  isDark?: boolean;
}

export function ToggleSwitch({ value, onChange, isDark = false }: ToggleSwitchProps) {
  return (
    <div className={`inline-flex items-center rounded-full p-1 shadow-md border transition-colors duration-300 ${
      isDark 
        ? 'bg-[#1e3847] border-[#CC9E00]/30' 
        : 'bg-white border-[#172D3F]/10'
    }`}>
      <button
        onClick={() => onChange('brand')}
        className={`px-6 py-2 rounded-full transition-all duration-300 ${
          value === 'brand'
            ? 'bg-[#CC9E00] text-white'
            : isDark
            ? 'bg-transparent text-[#F6F6F6] hover:bg-[#285961]'
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
            : isDark
            ? 'bg-transparent text-[#F6F6F6] hover:bg-[#285961]'
            : 'bg-transparent text-[#101010] hover:bg-[#F6F6F6]'
        }`}
      >
        Creator
      </button>
    </div>
  );
}