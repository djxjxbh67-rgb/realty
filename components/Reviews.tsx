import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  author: string;
  role: string;
  platform: string;
  time: string;
  color: string;
  content: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Михаил',
    role: 'Собственник',
    platform: 'WhatsApp',
    time: '14:30',
    color: 'bg-green-500',
    content: 'Алексей, добрый день! Спасибо большое за проведенную сделку. Честно, не ожидал, что удастся сдать подвал по такой ставке. Отдельное спасибо вашим юристам за правки в договоре, спасли от рисков. Буду рекомендовать вас партнерам! 🤝',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    author: 'Елена',
    role: 'Инвестор',
    platform: 'Telegram',
    time: 'Вчера',
    color: 'bg-blue-500',
    content: 'Супер, документы из Росреестра получили. Спасибо за оперативность! Вы единственный брокер, который отговорил меня от покупки того первого помещения из-за скрытых проблем с электричеством. Очень ценю такой подход.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    author: 'Дмитрий',
    role: 'Сеть пекарен',
    platform: 'WhatsApp',
    time: '10 Мая',
    color: 'bg-purple-500',
    content: 'Алексей, точка на Невском бьет все рекорды по выручке 🔥 Отличная локация, трафик именно тот, что вы и прогнозировали. Ищем еще 2 помещения в спальных районах, скинул ТЗ на почту. Жду подборку!',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">Что говорят клиенты</h2>
          <p className="text-xl text-gray-600 font-medium">Скриншоты из рабочих переписок — лучшая оценка моей работы.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              className="bg-brand-light/50 rounded-[2rem] p-8 shadow-sm border border-gray-100/80 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-gray-200/60 pb-5">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm border-2 border-white shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    {review.author}
                    <span className="text-sm font-medium text-gray-500">({review.role})</span>
                  </div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-widest mt-0.5">{review.platform} • {review.time}</div>
                </div>
              </div>

              {/* Chat Bubble Style Content */}
              <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-md border border-gray-100 text-gray-700 font-medium leading-relaxed relative text-[15px]">
                {review.content}
                <div className="absolute top-0 left-[-10px] w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent drop-shadow-sm"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
