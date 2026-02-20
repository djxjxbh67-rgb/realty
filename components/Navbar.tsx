import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Экспертиза', href: '#expertise' },
    { name: 'Услуги', href: '#services' },
    { name: 'Кейсы', href: '#cases' },
    { name: 'Отзывы', href: '#reviews' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-brand-navy" />
            <div>
              <span className="font-display font-bold text-xl text-brand-navy block leading-tight">Алексей Иванов</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Брокер по недвижимости</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-navy font-medium transition-colors text-sm tracking-wide">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+79991234567" className="font-semibold text-brand-navy text-lg hover:text-brand-gold transition-colors">+7 (999) 123-45-67</a>
            <a href="#lead-magnet" className="bg-brand-navy text-white px-6 py-2.5 rounded hover:bg-opacity-90 transition-all font-medium text-sm shadow-md">
              Обсудить задачу
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-navy focus:outline-none p-2">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden shadow-xl ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-lg font-medium text-gray-800 hover:text-brand-navy hover:bg-gray-50 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 mt-4 border-t border-gray-100">
            <a href="tel:+79991234567" className="block px-4 py-2 text-xl font-bold text-brand-navy mb-4">+7 (999) 123-45-67</a>
            <a href="#lead-magnet" onClick={() => setIsMenuOpen(false)} className="block w-full bg-brand-navy text-white text-center py-4 rounded-lg font-semibold shadow-md">
              Обсудить задачу
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
