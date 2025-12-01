import { useEffect, useState } from 'react';

const BananaCloud = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const el = document.getElementById('banana-cloud');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="banana-cloud" className="min-h-[80vh] bg-cream relative overflow-hidden py-20 flex items-center justify-center">
      {/* Floating Bananas Background */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-4xl opacity-30 select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          🍌
        </div>
      ))}

      <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl transform hover:-rotate-2 transition-transform duration-300 border-4 border-banana">
              <h2 className="text-3xl font-bold mb-2">99% Калия</h2>
              <p className="text-xl text-gray-600">И 100% отличного настроения. Доказано британскими учёными (наверное).</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl transform hover:rotate-2 transition-transform duration-300 border-4 border-banana ml-8">
              <h2 className="text-3xl font-bold mb-2">Жёлтый — новый чёрный</h2>
              <p className="text-xl text-gray-600">Стильно, модно, молодёжно. Будь как банан.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group cursor-pointer">
              <div className="text-[150px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                🍌
              </div>
              <div className="absolute top-1/3 left-1/4 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-bold">Cool Banana!</span>
              </div>
              {/* Sunglasses overlay simulation */}
              <div className="absolute top-[40%] left-[20%] text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                🕶️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BananaCloud;