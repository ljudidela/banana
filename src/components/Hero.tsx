import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden banana-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className={`z-10 flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative animate-float">
          {/* 3D-ish Banana SVG */}
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
            <path d="M150 40C150 40 160 20 140 20C120 20 100 50 80 80C60 110 40 140 40 160C40 180 60 190 80 180C100 170 140 140 160 100C180 60 150 40 150 40Z" fill="#FFD700" stroke="#1A1A1A" strokeWidth="4"/>
            <path d="M150 40C150 40 145 45 155 50" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round"/>
            <path d="M40 160C40 160 45 165 35 170" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round"/>
            <path d="M60 100C70 90 90 70 110 60" stroke="#FFF" strokeWidth="8" strokeLinecap="round" opacity="0.4"/>
          </svg>
          <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-30 -z-10 animate-pulse"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-dark mt-8 text-center leading-tight text-shadow">
          Готов к жёлтому<br/>приключению?
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-dark/80 mt-4 text-center max-w-lg">
          Сайт, после которого бананы будут сниться
        </p>

        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="mt-12 px-8 py-4 bg-dark text-banana font-bold rounded-full hover:scale-105 transition-transform shadow-lg animate-bounce-slow"
        >
          Скролль ↓
        </button>
      </div>
    </section>
  );
};

export default Hero;