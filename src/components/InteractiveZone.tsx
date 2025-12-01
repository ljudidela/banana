import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveZone: React.FC = () => {
  const [count, setCount] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Потрогай банан</h2>
          
          <div className="mb-8">
            <p className="text-xl text-gray-600 mb-2">
              Таскай банан мышкой или пальцем
            </p>
            <p className="text-2xl font-bold text-yellow-500">
              ты потрогал банан {count} раз
            </p>
          </div>

          <div 
            ref={constraintsRef}
            className="relative h-96 bg-yellow-50 rounded-3xl border-4 border-yellow-100 overflow-hidden flex items-center justify-center shadow-inner"
          >
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              whileHover={{ scale: 1.1, cursor: 'grab' }}
              whileTap={{ scale: 0.9, cursor: 'grabbing' }}
              onClick={() => setCount((prev) => prev + 1)}
              className="text-9xl select-none touch-none z-10"
            >
              🍌
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveZone;