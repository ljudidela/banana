import React, { useState, useRef, useEffect } from 'react';

const InteractiveZone: React.FC = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const bananaRef = useRef<HTMLDivElement>(null);

  // Центрируем банан при загрузке
  useEffect(() => {
    if (containerRef.current && bananaRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const banana = bananaRef.current.getBoundingClientRect();
      setPosition({
        x: (container.width - banana.width) / 2,
        y: (container.height - banana.height) / 2
      });
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!bananaRef.current) return;
    e.preventDefault();
    const rect = bananaRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
    setHasMoved(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current || !bananaRef.current) return;
    e.preventDefault();

    const containerRect = containerRef.current.getBoundingClientRect();
    const bananaRect = bananaRef.current.getBoundingClientRect();

    let newX = e.clientX - containerRect.left - dragOffset.x;
    let newY = e.clientY - containerRect.top - dragOffset.y;

    // Ограничение области (boundaries)
    const maxX = containerRect.width - bananaRect.width;
    const maxY = containerRect.height - bananaRect.height;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
    setHasMoved(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (!hasMoved) {
      setCount((prev) => prev + 1);
      // Визуальный эффект клика (опционально можно добавить анимацию)
      console.log('Banana clicked! Count:', count + 1);
    }
  };

  return (
    <section className="py-20 bg-white select-none">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Потрогай Банан
        </h2>

        <div 
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto h-[500px] bg-yellow-50 rounded-3xl border-4 border-dashed border-yellow-300 overflow-hidden cursor-default touch-none"
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* Фоновая надпись */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <span className="text-6xl font-bold text-yellow-900 uppercase">Drag Area</span>
          </div>

          {/* Банан */}
          <div
            ref={bananaRef}
            style={{ 
              transform: `translate(${position.x}px, ${position.y}px)`,
              touchAction: 'none'
            }}
            className={`absolute cursor-grab active:cursor-grabbing transition-transform duration-75 ease-out ${isDragging ? 'scale-110' : 'scale-100'} active:scale-95`}
            onPointerDown={handlePointerDown}
            onClick={handleClick}
          >
            <div className="text-[80px] md:text-[120px] leading-none filter drop-shadow-xl hover:drop-shadow-2xl transition-all">
              🍌
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-6">
          Таскай банан мышкой или пальцем. Кликай, чтобы увеличить невидимый счетчик.
        </p>
      </div>
    </section>
  );
};

export default InteractiveZone;