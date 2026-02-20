
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/5 border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-slate-900 p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
              
              <h2 className="text-4xl font-bold mb-8 relative z-10">Готовы обсудить ваш объект?</h2>
              <p className="text-slate-400 mb-12 text-lg relative z-10">
                Напишите мне в удобный мессенджер или оставьте заявку. Я на связи ежедневно с 9:00 до 21:00.
              </p>

              <div className="space-y-6 relative z-10">
                <a href="https://t.me/username" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center">
                    <Send size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-medium">Telegram</p>
                    <p className="text-lg font-bold">@realtor_spb</p>
                  </div>
                </a>
                <a href="https://wa.me/79000000000" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-medium">WhatsApp</p>
                    <p className="text-lg font-bold">+7 (900) 123-45-67</p>
                  </div>
                </a>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <p className="text-slate-300">Санкт-Петербург, Невский пр., 1</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <p className="text-slate-300">info@realtor-spb.ru</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-12 lg:p-16">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка отправлена!</h3>
                  <p className="text-slate-500">Я свяжусь с вами в ближайшее время.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-indigo-600 font-bold hover:underline">Отправить еще одну</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Ваше имя</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Иван" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Телефон</label>
                      <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Тип объекта</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                      <option>Торговое помещение</option>
                      <option>Офис</option>
                      <option>Склад / ПСН</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Сообщение</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Кратко опишите вашу задачу..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-200">
                    Отправить заявку <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
