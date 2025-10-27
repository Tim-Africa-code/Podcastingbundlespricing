import { Mail, Globe, Phone } from 'lucide-react';

interface FooterProps {
  isDark?: boolean;
}

export function Footer({ isDark = false }: FooterProps) {
  const footerLinks = [
    { label: 'Home', href: 'https://www.tim.africa/' },
    { label: 'About Us', href: 'https://www.tim.africa/about' },
    { label: 'Podcasts', href: 'https://www.tim.africa/services/podcast-service' },
    { label: 'Services', href: 'https://www.tim.africa/services' },
    { label: 'Pricing', href: 'https://www.pricing.tim.africa' },
    { label: 'Shop', href: 'https://www.tim.africa/shop' },
    { label: 'Insights', href: 'https://www.tim.africa/insights' },
    { label: 'Contact us', href: 'https://www.tim.africa/contact' },
  ];

  return (
    <footer className={`text-white py-8 mt-16 transition-colors duration-300 ${
      isDark ? 'bg-[#101010]' : 'bg-[#172D3F]'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation Links */}
        <div className="mb-6">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#F6F6F6]/80 hover:text-[#CC9E00] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-[#F6F6F6]/80 hover:text-[#CC9E00] transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@tim.africa</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#CC9E00]" />
              <span>+27 (0) 72 764 3174</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#CC9E00]" />
            <a href="https://tim.africa" className="hover:text-[#CC9E00] transition-colors">
              tim.africa
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-white/60">
          <p>© 2025 Tim Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}