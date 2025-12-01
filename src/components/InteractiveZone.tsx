import React, { useState, useRef, useEffect } from 'react';

const InteractiveZone = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const bananaRef = useRef<HTMLDivElement>(null);

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
    
    const rect = bananaRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
    setCount(c => c + 1);
    
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current || !bananaRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const bananaRect = bananaRef.current.getBoundingClientRect();

    let newX = e.clientX - containerRect.left - dragOffset.x;
    let newY = e.clientY - containerRect.top - dragOffset.y;

    const maxX = containerRect.width - bananaRect.width;
    const maxY = containerRect.height - bananaRect.height;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Интерактивная зона</h2>
          
          <p className="text-xl text-gray-600 mb-2">
            Таскай банан мышкой или пальцем
          </p>
          
          <p className="text-2xl font-bold text-yellow-500 mb-8">
            ты потрогал банан {count} раз
          </p>

          <div 
            ref={containerRef}
            className="relative h-[500px] bg-slate-50 rounded-3xl border-4 border-dashed border-slate-200 overflow-hidden touch-none select-none"
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div
              ref={bananaRef}
              onPointerDown={handlePointerDown}
              style={{ 
                transform: `translate(${position.x}px, ${position.y}px)`,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              className="absolute inline-block transition-transform duration-75 ease-out hover:scale-110 active:scale-95"
            >
              <div className="text-9xl drop-shadow-2xl">
                🍌
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveZone;