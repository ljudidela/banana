import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const InteractiveZone = () => {
  const [count, setCount] = useState(0);
  const constraintsRef = useRef(null);

  return (
    <section className="min-h-screen py-20 bg-banana flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-black text-banana-text mb-4">Потрогай банан</h2>
        <p className="text-2xl font-bold bg-white/50 px-6 py-2 rounded-full inline-block">
          Бананчиков тронуто: {count}
        </p>
      </div>

      <motion.div 
        ref={constraintsRef} 
        className="w-full max-w-4xl h-[60vh] bg-white/30 rounded-[3rem] border-4 border-white/50 relative overflow-hidden shadow-inner"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <span className="text-2xl font-bold">Drag & Drop Zone</span>
        </div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
            whileHover={{ scale: 1.1, cursor: 'grab' }}
            onDragStart={() => setCount(c => c + 1)}
            className="absolute text-8xl select-none touch-none"
            style={{ 
              top: `${20 + Math.random() * 60}%`, 
              left: `${20 + Math.random() * 60}%` 
            }}
          >
            🍌
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};