import React from 'react';

const BananaCloud = () => {
  const items = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${10 + Math.random() * 20}s`,
    delay: `${Math.random() * 5}s`,
    emoji: Math.random() > 0.5 ? '🍌' : '🥥'
  }));

  return (
    <section id="banana-cloud" className="relative overflow-hidden bg-yellow-50 py-24">
      <div className="absolute inset-0 pointer-events-none">
        {items.map((item) => (
          <div
            key={item.id}
            className="absolute text-4xl opacity-20 animate-pulse"
            style={{
              left: item.left,
              top: item.top,
              animationDuration: item.animationDuration,
              animationDelay: item.delay,
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-yellow-900 mb-6">Банановое Облако</h2>
        <p className="text-xl text-yellow-800 max-w-2xl mx-auto">
          Инновационная технология распределенного хранения. Ваши бананы всегда с вами, где бы вы ни находились.
        </p>
      </div>
    </section>
  );
};

export default BananaCloud;