import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: number;
  title: string;
  tag: string;
  task: string;
  solution: string;
  result: string;
  image: string;
}

const cases: CaseStudy[] = [
  {
    id: 1,
    title: 'Аренда ПСН, 240 м²',
    tag: 'Сдача объекта',
    task: 'Собственник не мог сдать помещение свободного назначения на окраине города в течение 6 месяцев. Старые арендаторы съехали, объект простаивал.',
    solution: 'Провели переоценку ставки. Разделили площадь визуально на 2 зоны. Изменили позиционирование под конкретный тип бизнеса (даркстор/доставка) и запустили таргет на профильные компании.',
    result: 'Нашли долгосрочного федерального арендатора за 14 дней по ставке на 12% выше рынка. Договор подписан на 5 лет.',
    image: '/images/custom/warehouse.jpg'
  },
  {
    id: 2,
    title: 'Продажа стрит-ритейл, 110 м²',
    tag: 'Продажа ГАБ',
    task: 'Инвестор хотел срочно продать помещение с действующим сетевым арендатором (аптека) для перевложения средств, но получал предложения с огромным дисконтом.',
    solution: 'Упаковали объект как готовый арендный бизнес (ГАБ) с подтвержденной доходностью 11% годовых. Разослали презентацию по собственной закрытой базе инвесторов.',
    result: 'Вышли на сделку за 28 дней без торга. Собственник получил желаемую сумму кэшем, покупатель — надежный актив.',
    image: '/images/custom/retail.jpg'
  }
];

const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-24 bg-gray-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">Недвижимость продается историями успеха</h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">Посмотрите, как правильная стратегия помогает сдавать сложную недвижимость дорого и быстро.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cases.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              className="bg-white rounded-[2rem] shadow-lg shadow-brand-navy/5 border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="h-64 sm:h-72 bg-gray-200 relative overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold text-brand-navy shadow-lg border border-white/50">
                  {item.title}
                </div>
              </div>

              <div className="p-8 sm:p-10 flex flex-col grow">
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-rose-500 font-bold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                    Задача (Дано)
                  </h4>
                  <p className="text-gray-700 font-medium leading-relaxed">{item.task}</p>
                </div>

                <div className="mb-8 grow">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-brand-navy font-bold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy"></span>
                    Решение (Что сделали)
                  </h4>
                  <p className="text-gray-700 font-medium leading-relaxed">{item.solution}</p>
                </div>

                <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-6 mt-auto">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-emerald-700 font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Результат
                  </h4>
                  <p className="text-emerald-900 font-bold text-lg leading-snug">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
