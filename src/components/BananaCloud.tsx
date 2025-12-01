const BananaCloud = () => {
  return (
    <section className="min-h-[80vh] py-20 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Floating Bananas Background */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className={`absolute opacity-20 animate-float-${i % 2 === 0 ? 'fast' : 'normal'}`}
          style={{ 
            top: `${Math.random() * 80}%`, 
            left: `${Math.random() * 90}%`, 
            transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`,
            animationDelay: `${i * 0.5}s`
          }}
        >
          <span className="text-6xl">🍌</span>
        </div>
      ))}

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 border-2 border-banana">
            <h2 className="text-3xl font-bold mb-2">99% Калия</h2>
            <p className="text-xl text-gray-700">100% Настроения. Доказано британскими учёными (наверное).</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 delay-100 border-2 border-banana">
            <h2 className="text-3xl font-bold mb-2">Жёлтый — новый чёрный</h2>
            <p className="text-xl text-gray-700">Стильно, модно, молодёжно и очень питательно.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-banana rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <svg width="250" height="250" viewBox="0 0 200 200" className="relative transform group-hover:rotate-12 transition-transform duration-300">
               <path d="M150 40C150 40 160 20 140 20C120 20 100 50 80 80C60 110 40 140 40 160C40 180 60 190 80 180C100 170 140 140 160 100C180 60 150 40 150 40Z" fill="#FFE135" stroke="#1A1A1A" strokeWidth="4"/>
               {/* Sunglasses */}
               <rect x="60" y="80" width="30" height="15" rx="5" fill="#1A1A1A" />
               <rect x="100" y="65" width="30" height="15" rx="5" fill="#1A1A1A" />
               <line x1="90" y1="87" x2="100" y2="72" stroke="#1A1A1A" strokeWidth="2" />
            </svg>
            <p className="text-center mt-4 font-bold opacity-0 group-hover:opacity-100 transition-opacity">Yeah, cool banana.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BananaCloud;