import { useState, useRef, MouseEvent, TouchEvent } from 'react';

const InteractiveZone = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setIsDragging(true);
    setCount(c => c + 1);
  };

  const handleEnd = () => {
    setIsDragging(false);
    setPosition({ x: 0, y: 0 }); // Reset to center
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    setPosition({ x, y });
  };

  const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
  const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX, e.touches[0].clientY);

  return (
    <section className="py-20 bg-white/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-black mb-4">Потрогай банан</h2>
        <p className="text-xl mb-8">Бананчиков тронуто: <span className="font-mono font-bold text-3xl text-orange-500">{count}</span></p>

        <div 
          ref={containerRef}
          className="h-96 w-full max-w-2xl mx-auto bg-cream border-4 border-dashed border-banana rounded-3xl flex items-center justify-center relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseMove={onMouseMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchMove={onTouchMove}
          onTouchEnd={handleEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <span className="text-2xl font-bold">Перетащи меня!</span>
          </div>

          <div 
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            style={{ transform: `translate(${position.x}px, ${position.y}px) rotate(${position.x * 0.1}deg)` }}
            className="transition-transform duration-75 ease-linear z-10"
          >
            <div className={`text-9xl filter drop-shadow-xl ${isDragging ? 'scale-110' : 'animate-wiggle'}`}>
              🍌
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveZone;