import { useState } from 'react';

export default function InteractiveZone() {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleBananaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Останавливаем всплытие, чтобы клик не считался, если бы обработчик был выше
    e.stopPropagation();
    setCount((c) => c + 1);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
  };

  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Потрогай банан
        </h2>
        
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative">
            {/* Обработчик клика теперь только на самом банане */}
            <div 
              onClick={handleBananaClick}
              className={`
                text-9xl cursor-pointer select-none transition-transform duration-100
                ${isClicked ? 'scale-95' : 'hover:scale-110'}
              `}
              role="button"
              aria-label="Click the banana"
            >
              🍌
            </div>
            
            {/* Анимация +1 */}
            {isClicked && (
              <div className="absolute -top-4 -right-4 text-2xl font-bold text-yellow-600 animate-bounce pointer-events-none">
                +1
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-yellow-100 min-w-[200px]">
            <p className="text-gray-500 mb-2 font-medium">Бананометр</p>
            <div className="text-5xl font-black text-yellow-500">
              {count}
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            (Кликай прямо по банану, чтобы увеличить счетчик)
          </p>
        </div>
      </div>
    </section>
  );
}