import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onChange: (isDark: boolean) => void;
}

export function ThemeToggle({ isDark, onChange }: ThemeToggleProps) {
  return (
    <button
      onClick={() => onChange(!isDark)}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 border-2 ${
        isDark
          ? 'bg-[#172D3F] border-[#CC9E00] text-[#CC9E00] hover:bg-[#1e3847]'
          : 'bg-white border-[#172D3F]/10 text-[#172D3F] hover:bg-[#F6F6F6]'
      }`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4" />
          <span className="text-sm">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4" />
          <span className="text-sm">Dark</span>
        </>
      )}
    </button>
  );
}
