import React, { ReactNode } from 'react';
import { Key, TrendingUp, FileCheck, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardData {
  title: string;
  icon: ReactNode;
  items: string[];
}

const Services: React.FC = () => {
  const serviceCards: ServiceCardData[] = [
    {
      title: 'Для владельцев',
      icon: <Key className="w-8 h-8" />,
      items: [
        'Точная оценка рыночной стоимости',
        'Разработка стратегии продаж/сдачи',
        'Упаковка объекта и поиск клиентов'
      ]
    },
    {
      title: 'Для инвесторов',
      icon: <TrendingUp className="w-8 h-8" />,
      items: [
        'Подбор рентабельных помещений',
        'Детальный расчет сроков окупаемости',
        'Анализ трафика и конкурентов локации'
      ]
    },
    {
      title: 'Сопровождение',
      icon: <FileCheck className="w-8 h-8" />,
      items: [
        'Полная юридическая проверка (Due Diligence)',
        'Составление безопасных договоров',
        'Контроль взаиморасчетов и регистрация'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50 transform skew-x-12 translate-x-32 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">Решаю задачи любой сложности</h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Подбираю индивидуальную стратегию в зависимости от ваших целей: максимизация прибыли, быстрый выход в кэш или создание пассивного дохода.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {serviceCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-xl shadow-brand-navy/5 hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Card hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="w-16 h-16 bg-blue-50 text-brand-navy rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500 shadow-sm relative z-10">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">{card.title}</h3>
              <ul className="space-y-4 relative z-10">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 font-medium leading-relaxed">
                    <div className="bg-brand-gold/10 rounded-full p-1 mt-1 shrink-0">
                      <Check size={14} className="text-brand-gold" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
