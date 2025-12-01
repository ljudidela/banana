import React, { useState, useRef } from 'react';

const InteractiveZone = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    // Prevent scrolling on mobile while dragging
    if (e.type === 'touchstart') {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    document.body.style.overflow = 'auto';
    setCount(c => c + 1);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = clientX - containerRect.left - 50; // Center offset
    const y = clientY - containerRect.top - 50;

    // Simple bounds check
    const boundedX = Math.max(0, Math.min(x, containerRect.width - 100));
    const boundedY = Math.max(0, Math.min(y, containerRect.height - 100));

    setPosition({ x: boundedX, y: boundedY });
  };

  return (
    <section className="py-20 bg-banana-light overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Потрогай банан</h2>
        <p className="text-xl mb-8">Перетащи его, он любит путешествовать!</p>
        
        <div className="bg-white rounded-2xl p-4 shadow-inner max-w-2xl mx-auto">
          <div className="text-2xl font-bold mb-4 text-banana-dark">
            Бананчиков тронуто: {count}
          </div>
          
          <div 
            ref={containerRef}
            className="h-[400px] bg-cream rounded-xl relative overflow-hidden cursor-crosshair border-2 border-dashed border-banana-dark"
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
          >
            <div
              className={`absolute w-24 h-24 flex items-center justify-center text-6xl cursor-grab active:cursor-grabbing select-none transition-transform ${isDragging ? 'scale-125 rotate-12' : 'scale-100'}`}
              style={{ 
                left: position.x, 
                top: position.y, 
                touchAction: 'none'
              }}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              🍌
            </div>
            
            {!isDragging && count === 0 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                <span className="text-xl">Drag me!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveZone;