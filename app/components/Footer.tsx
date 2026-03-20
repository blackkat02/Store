export const Footer = () => {
  return (
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
  );
};
