
import React from 'react';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { Property } from '../types';

const properties: Property[] = [
  {
    id: '1',
    title: 'Современная вилла с бассейном',
    price: '45,000,000 ₽',
    location: 'Сочи, Красная Поляна',
    beds: 4,
    baths: 3,
    sqft: 280,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    tag: 'Sale'
  },
  {
    id: '2',
    title: 'Пентхаус в Москва-Сити',
    price: '120,000,000 ₽',
    location: 'Москва, Пресненская наб.',
    beds: 3,
    baths: 2,
    sqft: 150,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    tag: 'New'
  },
  {
    id: '3',
    title: 'Уютная квартира в центре',
    price: '15,500,000 ₽',
    location: 'Санкт-Петербург, Невский пр.',
    beds: 2,
    baths: 1,
    sqft: 75,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
    tag: 'Sale'
  },
  {
    id: '4',
    title: 'Загородный дом в лесу',
    price: '28,000,000 ₽',
    location: 'Ленинградская обл., Репино',
    beds: 5,
    baths: 4,
    sqft: 320,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
    tag: 'Sale'
  },
  {
    id: '5',
    title: 'Лофт в индустриальном стиле',
    price: '18,200,000 ₽',
    location: 'Екатеринбург, ул. Ленина',
    beds: 1,
    baths: 1,
    sqft: 60,
    image: 'https://images.unsplash.com/photo-1536376074432-af424420afe1?auto=format&fit=crop&q=80&w=800',
    tag: 'Rent'
  },
  {
    id: '6',
    title: 'Апартаменты с видом на море',
    price: '32,000,000 ₽',
    location: 'Геленджик, Набережная',
    beds: 2,
    baths: 2,
    sqft: 95,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
    tag: 'New'
  }
];

const Listings: React.FC = () => {
  return (
    <section id="listings" class="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Актуальные предложения</h2>
            <p className="text-slate-500 max-w-xl">
              Тщательно отобранные объекты недвижимости, прошедшие полную юридическую проверку.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-2 rounded-full bg-indigo-600 text-white font-medium">Все</button>
            <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 transition-colors">Продажа</button>
            <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 transition-colors">Аренда</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div key={prop.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    prop.tag === 'New' ? 'bg-emerald-500 text-white' : 
                    prop.tag === 'Rent' ? 'bg-amber-500 text-white' : 'bg-indigo-600 text-white'
                  }`}>
                    {prop.tag === 'New' ? 'Новинка' : prop.tag === 'Rent' ? 'Аренда' : 'Продажа'}
                  </span>
                </div>
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-rose-500 transition-all">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-1 text-indigo-600 mb-2">
                  <MapPin size={14} />
                  <span className="text-xs font-semibold uppercase tracking-wide">{prop.location}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{prop.title}</h3>
                <p className="text-2xl font-black text-indigo-600 mb-6">{prop.price}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Bed size={18} />
                    <span className="text-sm font-medium">{prop.beds} Сп</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Bath size={18} />
                    <span className="text-sm font-medium">{prop.baths} Ван</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Square size={18} />
                    <span className="text-sm font-medium">{prop.sqft} м²</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all">
            Посмотреть все объекты <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default Listings;
