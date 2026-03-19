import { Search, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter italic text-stone-900 uppercase"
        >
          Urban Flow
        </Link>

        <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">
          <Link
            to="/collections"
            className="hover:text-terracotta transition-colors"
          >
            Колекції
          </Link>
          <Link to="/men" className="hover:text-terracotta transition-colors">
            Чоловікам
          </Link>
          <Link to="/women" className="hover:text-terracotta transition-colors">
            Жінкам
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <Search
            size={20}
            className="cursor-pointer hover:text-terracotta text-stone-700"
          />
          <Heart
            size={20}
            className="cursor-pointer hover:text-terracotta text-stone-700"
          />
          <div className="relative cursor-pointer group">
            <ShoppingBag
              size={20}
              className="group-hover:text-terracotta transition-colors"
            />
            <span className="absolute -top-2 -right-2 bg-terracotta text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
