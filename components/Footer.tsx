import React from 'react';
import { Building2, Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-gray-300 py-20 border-t border-brand-navy/90 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-10 h-10 text-brand-gold" />
              <span className="font-display font-bold text-3xl text-white tracking-tight">Алексей Иванов</span>
            </div>
            <p className="text-gray-400 mb-10 max-w-md text-lg leading-relaxed">
              Профессиональный брокер по коммерческой недвижимости. Ваш надежный партнер в сделках купли-продажи и аренды в Санкт-Петербурге и области.
            </p>
            <h3 className="text-white font-bold text-xl mb-6">Готовы обсудить ваш объект?</h3>
            <div className="flex gap-4">
              {/* Using Telegram link as placeholder, applying brand colors */}
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="bg-brand-gold hover:bg-yellow-500 text-brand-navy p-4 rounded-xl transition-all shadow-lg shadow-brand-gold/10 hover:-translate-y-1 flex items-center justify-center">
                <Send size={24} className="ml-[-2px]" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Навигация</h4>
            <ul className="space-y-4 font-medium text-gray-400">
              <li><a href="#expertise" className="hover:text-brand-gold transition-colors inline-block hover:-translate-x-1 transform duration-300">Обо мне / Экспертиза</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors inline-block hover:-translate-x-1 transform duration-300">Услуги и решения</a></li>
              <li><a href="#cases" className="hover:text-brand-gold transition-colors inline-block hover:-translate-x-1 transform duration-300">Кейсы (Портфолио)</a></li>
              <li><a href="#reviews" className="hover:text-brand-gold transition-colors inline-block hover:-translate-x-1 transform duration-300">Отзывы клиентов</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Контакты</h4>
            <ul className="space-y-5 font-medium text-gray-400">
              <li className="flex items-start gap-4 group">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-1 transition-transform group-hover:scale-110" />
                <a href="tel:+79991234567" className="hover:text-white transition-colors text-lg">+7 (999) 123-45-67</a>
              </li>
              <li className="flex items-start gap-4 group">
                <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-1 transition-transform group-hover:scale-110" />
                <a href="mailto:info@broker-ivanov.ru" className="hover:text-white transition-colors">info@broker-ivanov.ru</a>
              </li>
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1 transition-transform group-hover:scale-110" />
                <span className="text-sm leading-relaxed">г. Санкт-Петербург, БЦ "Невская Ратуша", Дегтярный пер., 11</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-500">
          <p>&copy; {new Date().getFullYear()} Алексей Иванов. Все права защищены.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
