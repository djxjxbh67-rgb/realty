import React from 'react';
import { motion } from 'framer-motion';

const Expertise: React.FC = () => {
  const stats = [
    { label: 'Успешной работы на рынке КН', value: '> 8 лет' },
    { label: 'Сумма закрытых сделок за 2025 год', value: '1.2 млрд ₽' },
    { label: 'Узкая специализация и фокус', value: 'Стрит-ритейл и ПСН' },
  ];

  return (
    <section id="expertise" className="py-16 bg-brand-navy text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="py-6 md:px-8"
            >
              <div className="font-display text-4xl lg:text-5xl font-black text-brand-gold mb-4 tracking-tight drop-shadow-lg">{stat.value}</div>
              <div className="text-gray-300 font-medium text-lg leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
