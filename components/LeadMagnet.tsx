import React, { useState } from 'react';
import { Clock, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LeadMagnet: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="lead-magnet" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block bg-brand-gold/10 text-yellow-600 px-5 py-2.5 rounded-full text-sm font-bold mb-8 uppercase tracking-widest border border-brand-gold/20"
              >
                Бесплатная услуга
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight"
              >
                Хотите узнать реальную стоимость вашего объекта?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-gray-600 mb-10 text-lg font-medium leading-relaxed"
              >
                Оставьте заявку, и я бесплатно подготовлю предварительную оценку рыночной стоимости помещения с учетом текущих цен конкурентов в вашем районе.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-5 group">
                  <div className="bg-emerald-50 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-emerald-100/50 shadow-sm"><Clock className="w-6 h-6 text-emerald-600" /></div>
                  <span className="text-gray-800 font-bold text-lg">Расчет займет 1 рабочий день</span>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="bg-blue-50 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-blue-100/50 shadow-sm"><BarChart3 className="w-6 h-6 text-blue-600" /></div>
                  <span className="text-gray-800 font-bold text-lg">Пришлю PDF-отчет в мессенджер</span>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gray-50/80 p-8 md:p-10 rounded-[2.5rem] border border-gray-200/60 shadow-inner backdrop-blur-sm"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-emerald-200/50">
                    <CheckCircle2 size={56} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">Заявка отправлена!</h3>
                  <p className="text-gray-600 font-medium text-lg">Я свяжусь с вами в ближайшее время.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Тип объекта</label>
                    <select className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/50 outline-none transition-all font-medium text-gray-700 appearance-none bg-white shadow-sm hover:border-gray-300">
                      <option>Стрит-ритейл (торговое)</option>
                      <option>Офисное помещение</option>
                      <option>Склад / Производство</option>
                      <option>Помещение свободного назначения</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Площадь (м²)</label>
                    <input type="number" placeholder="Например: 150" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/50 outline-none transition-all font-medium text-gray-800 shadow-sm hover:border-gray-300 placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Ваш телефон / Telegram</label>
                    <input type="tel" placeholder="+7 (___) ___-__-__" required className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/50 outline-none transition-all font-medium text-gray-800 shadow-sm hover:border-gray-300 placeholder:text-gray-400" />
                  </div>
                  <button type="submit" className="w-full bg-brand-gold text-brand-navy font-bold py-5 rounded-2xl hover:bg-yellow-500 transition-all duration-300 shadow-xl shadow-brand-gold/20 text-lg mt-6 hover:-translate-y-1">
                    Получить расчет стоимости
                  </button>
                  <p className="text-xs text-gray-500 text-center font-medium leading-relaxed mt-4">
                    Нажимая на кнопку, вы даете согласие на обработку персональных данных.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;
