import React, { useEffect, useState } from 'react';

const BananaCloud = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background elements with parallax speed
  const backgroundElements = [
    { emoji: '🍌', top: '10%', left: '5%', speed: 0.2 },
    { emoji: '🥥', top: '15%', left: '85%', speed: 0.3 },
    { emoji: '🍌', top: '40%', left: '15%', speed: 0.1 },
    { emoji: '🥥', top: '60%', left: '75%', speed: 0.4 },
    { emoji: '🍌', top: '80%', left: '10%', speed: 0.2 },
    { emoji: '🍌', top: '25%', left: '60%', speed: 0.15 },
    { emoji: '🥥', top: '70%', left: '40%', speed: 0.25 },
    { emoji: '🍌', top: '50%', left: '90%', speed: 0.1 },
  ];

  return (
    <section id="banana-cloud" className="relative py-24 bg-yellow-50 overflow-hidden">
      {/* Background Parallax Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {backgroundElements.map((item, index) => (
          <div
            key={index}
            className="absolute text-4xl opacity-20 transition-transform duration-75 ease-out"
            style={{
              top: item.top,
              left: item.left,
              transform: `translateY(${offset * item.speed}px) rotate(${offset * 0.1}deg)`,
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
          The Banana Cloud
        </h2>
        <p className="text-xl text-yellow-800 max-w-2xl mx-auto mb-8">
          Experience the future of fruit-based storage. Our decentralized banana network ensures high availability and potassium-rich data integrity.
        </p>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
          Connect to Cloud
        </button>
      </div>
    </section>
  );
};

export default BananaCloud;