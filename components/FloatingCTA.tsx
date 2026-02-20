import React from 'react';
import { Send } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <a
      href="https://t.me/username"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-brand-gold text-brand-navy p-5 rounded-full shadow-2xl shadow-brand-gold/20 hover:bg-yellow-500 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      <Send size={32} className="ml-[-2px]" />
      <span className="absolute right-full mr-6 bg-brand-navy text-white text-sm font-bold px-5 py-3 rounded-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl pointer-events-none translate-x-4 group-hover:translate-x-0 border border-white/10">
        Написать в Telegram
      </span>
    </a>
  );
};

export default FloatingCTA;
