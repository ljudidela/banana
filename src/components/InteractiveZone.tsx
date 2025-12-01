import React, { useState, useRef, useEffect } from 'react';

export const InteractiveZone = () => {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!containerRef.current) return;
    
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const bananaSize = 64; // Примерный размер банана (text-6xl)

    let newX = e.clientX - containerRect.left - dragOffset.x;
    let newY = e.clientY - containerRect.top - dragOffset.y;

    // Ограничение области
    const maxX = containerRect.width - bananaSize;
    const maxY = containerRect.height - bananaSize;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    // Вычисляем, был ли это клик или перетаскивание
    const dist = Math.hypot(e.clientX - dragStartPos.current.x, e.clientY - dragStartPos.current.y);
    
    if (dist < 5) {
      // Это клик
      setScore(prev => prev + 1);
      // Визуальный эффект клика можно добавить здесь, если нужно
      console.log('Banana clicked! Score:', score + 1);
    }
    
    setIsDragging(false);
  };

  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Потрогай банан</h2>
        
        <div 
          ref={containerRef}
          className="relative w-full max-w-3xl mx-auto h-96 bg-white rounded-2xl shadow-inner border-4 border-yellow-200 overflow-hidden select-none"
          onMouseMove={handleMouseMove}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <span className="text-9xl">🍌</span>
          </div>

          <div
            style={{ 
              left: `${position.x}px`, 
              top: `${position.y}px`, 
              cursor: isDragging ? 'grabbing' : 'grab',
              transform: isDragging ? 'scale(1.1)' : 'scale(1)'
            }}
            className="absolute text-6xl transition-transform duration-75 hover:scale-105 active:scale-95"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            🍌
          </div>
          
          <div className="absolute bottom-4 right-4 text-gray-400 text-sm pointer-events-none">
            Drag & Drop Area
          </div>
        </div>
      </div>
    </section>
  );
};
