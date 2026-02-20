
import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Александр Волков',
    role: 'Владелец сети пекарен',
    content: 'Помогли найти 3 помещения под новые точки. Все объекты с отличным трафиком и адекватными арендодателями. Сэкономили кучу времени на переговорах.',
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: 2,
    name: 'Марина Соколова',
    role: 'Инвестор',
    content: 'Профессиональный подход к оценке рисков. Александр отговорил от покупки одного объекта, который казался выгодным, но имел скрытые проблемы. Очень ценю честность.',
    avatar: 'https://picsum.photos/id/65/100/100'
  },
  {
    id: 3,
    name: 'Дмитрий Петров',
    role: 'Собственник БЦ',
    content: 'Лучший брокер, с которым я работал. Заполнили вакантные площади за рекордные сроки. Рекомендую всем коллегам по рынку.',
    avatar: 'https://picsum.photos/id/66/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Отзывы клиентов</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Реальные отзывы от владельцев бизнеса и инвесторов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-[2rem] relative border border-slate-100 hover:border-indigo-200 transition-all group">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <MessageSquare size={20} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500 font-medium uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
