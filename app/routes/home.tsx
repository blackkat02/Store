import type { Route } from "./+types/home";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* text-[10px] - приклад атомного класу для точного розміру тексту */}
          <span className="text-terracotta font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">
            Spring / Summer 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-light leading-[0.9] tracking-tighter mb-8 text-stone-900">
            Твій ритм.
            <br />
            Твій <span className="italic font-semibold italic">стиль.</span>
          </h1>
          <p className="text-stone-500 text-lg max-w-md mb-10 leading-relaxed">
            Urban Flow — це маніфест свободи для тих, хто відчуває пульс міста і
            не боїться бути собою.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* flex-wrap - щоб кнопки красиво переносились на маленьких екранах */}
            <button className="bg-stone-900 text-white px-10 py-5 rounded-full uppercase text-[10px] tracking-widest hover:bg-terracotta transition-all shadow-lg shadow-stone-200 active:scale-95">
              Магазин
            </button>
            <button className="group flex items-center gap-2 border border-stone-300 px-10 py-5 rounded-full uppercase text-[10px] tracking-widest hover:border-stone-900 transition-all active:scale-95">
              Лукбук{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-[400px] md:h-[550px] bg-stone-200 rounded-[4rem] relative overflow-hidden border border-white shadow-2xl"
        >
          {/* Змінено висоту h-[400px] для мобілок, щоб не займало весь екран */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-[2rem] flex items-center gap-4 shadow-xl hidden sm:flex">
            {/* hidden sm:flex - приховуємо цей віджет на зовсім маленьких екранах, щоб не захаращувати фото */}
            <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center text-white font-bold">
              <ArrowUpRight size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest">
                Premium
              </p>
              <p className="text-sm font-medium">Urban Trench Coat</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <h2 className="text-xs uppercase tracking-[0.4em] font-bold mb-10 text-stone-400 text-center">
        Категорії
      </h2>

      {/* КЛЮЧОВА ЗМІНА ДЛЯ MOBILE-FIRST:
          grid-cols-1 - базово одна колонка (мобілка)
          sm:grid-cols-2 - дві колонки (планшет)
          lg:grid-cols-4 - чотири колонки (десктоп)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[320px] md:auto-rows-[280px]">
        {/* Головна картка: займає всю ширину на мобілці, але 2x2 на великих екранах */}
        <div className="sm:col-span-2 sm:row-span-2 rounded-[3.5rem] bg-stone-300 relative overflow-hidden group border border-white/50">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute bottom-12 left-12 z-10">
            <h3 className="text-4xl font-light text-white leading-tight mb-4 uppercase tracking-tighter">
              Одяг, що <br />
              <span className="italic font-semibold">надихає</span>
            </h3>
            <Link
              to="/shop"
              className="inline-block bg-white text-black px-8 py-3 rounded-full text-[10px] uppercase tracking-widest hover:bg-terracotta hover:text-white transition-colors"
            >
              Переглянути
            </Link>
          </div>
        </div>

        {/* Картка: Dresses - на планшеті займає 2 колонки, щоб не бути надто вузькою */}
        <div className="sm:col-span-2 lg:col-span-2 bg-sage rounded-[3.5rem] p-10 md:p-12 flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <span className="text-white/80 uppercase tracking-widest text-[10px] font-bold font-sans">
              New Season
            </span>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-sage transition-all">
              <ArrowUpRight size={18} />
            </div>
          </div>
          <h3 className="text-4xl text-white font-serif italic leading-tight">
            Сукні / Dresses
          </h3>
        </div>

        {/* Картка: Denim - стабільна 1 колонка на всіх екранах від планшета */}
        <div className="col-span-1 bg-white border border-stone-100 rounded-[3.5rem] p-8 flex flex-col justify-center items-center text-center group cursor-pointer hover:shadow-xl transition-all">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-bold font-sans">
            Denim
          </p>
          <h3 className="text-2xl font-bold italic tracking-tighter text-stone-800">
            Джинси
          </h3>
          {/* Декоративна лінія, що росте при наведенні */}
          <div className="mt-4 w-8 h-[1px] bg-terracotta group-hover:w-16 transition-all" />
        </div>

        {/* Картка: Accessories - додаємо плавний перехід кольору */}
        <div className="col-span-1 bg-terracotta rounded-[3.5rem] p-8 flex items-center justify-center text-white relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          <h3 className="relative z-10 text-xs font-bold tracking-[0.2em] uppercase italic">
            Аксесуари
          </h3>
        </div>
      </div>
    </main>
  );
}
