import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import logoImage from 'figma:asset/23f999cacae9ef1e88245e45a4a5ae4be3c91cc9.png';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Podcasts', href: '/podcasts' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact us', href: '/contact' },
];

export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Black BBBEE Status Band */}
      <div className="w-full bg-[#101010] py-2">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-[#CC9E00]">
            BBBEE Status: Tim Africa (PTY) LTD is a proudly BEE Level 1 company
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-[#F6F6F6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-20 relative">
            {/* Logo */}
            <a href="https://www.tim.africa" className="absolute left-0 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#CC9E00] rounded">
              <img src={logoImage} alt="Tim Africa Logo" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center space-x-1">
              <ul className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={
                        item.label === 'About Us' 
                          ? 'https://www.tim.africa/about' 
                          : item.label === 'Podcasts'
                          ? 'https://www.tim.africa/services/podcast-service'
                          : item.label === 'Pricing'
                          ? 'https://www.pricing.tim.africa'
                          : `https://www.tim.africa${item.href}`
                      }
                      className="inline-flex items-center justify-center px-4 py-2 text-[#101010] hover:text-[#CC9E00] transition-colors relative group focus:outline-none focus:ring-2 focus:ring-[#CC9E00] rounded"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CC9E00] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden absolute right-0">
                <button
                  className="p-2 text-[#101010] hover:text-[#CC9E00] focus:outline-none focus:ring-2 focus:ring-[#CC9E00] rounded"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-white p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile navigation menu with links to all pages
                </SheetDescription>
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="p-6 border-b border-[#F6F6F6]">
                    <img src={logoImage} alt="Tim Africa Logo" className="h-8 w-auto" />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 overflow-y-auto p-6">
                    <ul className="space-y-2">
                      {navItems.map((item) => (
                        <li key={item.label}>
                          <a
                            href={
                              item.label === 'About Us' 
                                ? 'https://www.tim.africa/about' 
                                : item.label === 'Podcasts'
                                ? 'https://www.tim.africa/services/podcast-service'
                                : item.label === 'Pricing'
                                ? 'https://www.pricing.tim.africa'
                                : `https://www.tim.africa${item.href}`
                            }
                            className="block px-4 py-3 text-[#101010] hover:text-[#CC9E00] hover:bg-[#F6F6F6] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#CC9E00]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}