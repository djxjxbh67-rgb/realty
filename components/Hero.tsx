import React from 'react';
import { ArrowRight, Send, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

import brokerImg from '../src/assets/images/custom/broker.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-blue-100 opacity-40 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brand-gold opacity-10 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left mb-16 lg:mb-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-brand-navy mb-8 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              Работаю в Санкт-Петербурге и ЛО
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-navy leading-tight mb-6">
              Помогу выгодно продать, купить или сдать <span className="text-brand-gold italic">коммерческую недвижимость</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Провожу глубокий анализ рынка. Беру на себя оценку объектов, поиск платежеспособных арендаторов и полное юридическое сопровождение сделки под ключ.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#lead-magnet" className="bg-brand-gold text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3">
                Бесплатная консультация
                <ArrowRight size={20} />
              </a>
              <a href="https://t.me/username" target="_blank" className="bg-white text-brand-navy border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-md transition-all flex items-center justify-center gap-3">
                <Send size={20} className="text-blue-500" />
                Написать в Telegram
              </a>
            </div>
          </motion.div>

          {/* Realtor Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4] group">
              <img
                src={brokerImg}
                alt="Алексей Иванов - Брокер по недвижимости"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Trust Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-5 rounded-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-navy rounded-xl p-3 text-white shadow-md">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base">Гарантия безопасности</p>
                    <p className="text-xs text-gray-600 font-medium mt-0.5">Полная проверка контрагентов</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
