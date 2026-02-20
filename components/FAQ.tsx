import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Кто оплачивает ваши услуги?',
    answer: 'В большинстве случаев комиссию оплачивает собственник помещения. Если вы обращаетесь ко мне как арендатор или покупатель для целевого подбора (когда я ищу объект по вашему ТЗ по всему рынку), условия обсуждаются индивидуально.'
  },
  {
    id: 2,
    question: 'Как быстро вы найдете арендатора/покупателя?',
    answer: 'Срок зависит от ликвидности объекта и адекватности цены. При правильной оценке и качественной упаковке, в среднем сдача помещения занимает от 2 до 4 недель, продажа — от 1 до 3 месяцев.'
  },
  {
    id: 3,
    question: 'Работаете ли вы с объектами в залоге или с обременениями?',
    answer: 'Да. Мы с командой юристов проводим сделки любой сложности, включая продажу залоговых объектов, снятие обременений и согласование перепланировок перед сделкой.'
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-brand-light border-t border-gray-200/60 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-display font-bold text-center text-brand-navy mb-16"
        >
          Частые вопросы
        </motion.h2>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${openId === item.id ? 'border-brand-gold/30 ring-1 ring-brand-gold/10' : 'border-gray-200/80 hover:border-brand-navy/30'}`}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full text-left px-8 py-6 font-bold text-gray-900 flex justify-between items-center focus:outline-none hover:bg-gray-50/50 transition-colors"
              >
                <span className="text-lg pr-8 leading-snug">{item.question}</span>
                <ChevronDown className={`w-6 h-6 shrink-0 text-brand-gold transition-transform duration-500 ${openId === item.id ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2 text-gray-600 font-medium leading-relaxed text-base border-t border-gray-100 mx-8">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
