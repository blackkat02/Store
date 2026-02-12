import { Outlet, Scripts, ScrollRestoration, Meta, Links } from "react-router";
import { Search, ShoppingBag, Heart } from "lucide-react";
import "./app.css";

export default function App() {
  return (
    <html lang="uk">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-pastel-beige text-stone-900 antialiased">
        {/* Глобальний Header */}
        <header className="fixed top-0 w-full bg-white/40 backdrop-blur-xl z-50 px-8 py-6 flex justify-between items-center border-b border-stone-100">
          <div className="text-xl font-bold tracking-tight uppercase italic">
            Urban Flow
          </div>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-bold text-stone-500">
            <a href="/" className="hover:text-terracotta transition-colors">
              Магазин
            </a>
            <a
              href="/collections"
              className="hover:text-terracotta transition-colors"
            >
              Колекції
            </a>
          </nav>
          <div className="flex gap-6 items-center">
            <Search
              size={20}
              className="cursor-pointer hover:text-terracotta"
            />
            <Heart size={20} className="cursor-pointer hover:text-terracotta" />
            <ShoppingBag
              size={20}
              className="cursor-pointer hover:text-terracotta"
            />
          </div>
        </header>

        <Outlet />

        {/* Глобальний Footer */}
        <footer className="bg-stone-900 text-stone-400 py-20 px-8 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white text-lg font-bold mb-6 italic italic">
                Urban Flow
              </h4>
              <p className="text-sm leading-relaxed">
                Одяг, що дарує відчуття свободи в кожному русі міста.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm uppercase tracking-widest">
              <span className="text-white font-bold mb-2">Контакти</span>
              <a href="#">Instagram</a>
              <a href="#">Telegram</a>
            </div>
            <div className="text-sm">
              <span className="text-white font-bold mb-6 block uppercase tracking-widest">
                Підписка
              </span>
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-stone-700 w-full py-2 focus:outline-none focus:border-terracotta transition-colors"
              />
            </div>
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
