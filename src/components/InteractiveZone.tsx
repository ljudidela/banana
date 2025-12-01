import React, { useState, useRef, useEffect } from 'react';

const InteractiveZone: React.FC = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  // Center the banana initially
  useEffect(() => {
    if (containerRef.current && dragRef.current) {
      const parent = containerRef.current.getBoundingClientRect();
      const child = dragRef.current.getBoundingClientRect();
      setPosition({
        x: (parent.width - child.width) / 2,
        y: (parent.height - child.height) / 2
      });
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      offsetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
    e.preventDefault();
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging || !dragRef.current || !containerRef.current) return;
    
    const parentRect = containerRef.current.getBoundingClientRect();
    
    let newX = e.clientX - parentRect.left - offsetRef.current.x;
    let newY = e.clientY - parentRect.top - offsetRef.current.y;

    const maxX = parentRect.width - dragRef.current.offsetWidth;
    const maxY = parentRect.height - dragRef.current.offsetHeight;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    } else {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  return (
    <section className="py-16 bg-yellow-50 select-none">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Потрогай банан</h2>
        <p className="text-gray-600 mb-6">Таскай банан мышкой или пальцем</p>
        
        <div className="text-2xl font-bold text-yellow-600 mb-8">
          ты потрогал банан {count} раз
        </div>

        <div 
          ref={containerRef}
          className="relative w-full max-w-3xl mx-auto h-96 bg-white rounded-2xl shadow-inner border-4 border-yellow-100 overflow-hidden touch-none"
        >
          <div
            ref={dragRef}
            onPointerDown={handlePointerDown}
            onClick={() => setCount(c => c + 1)}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              cursor: isDragging ? 'grabbing' : 'grab',
              touchAction: 'none'
            }}
            className="absolute top-0 left-0 w-24 h-24 flex items-center justify-center text-6xl transition-transform duration-75 hover:scale-110 active:scale-95"
          >
            🍌
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveZone;