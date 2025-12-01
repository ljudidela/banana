import { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBananaClick = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFE135', '#FFD700', '#FFFFFF']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFE135', '#FFD700', '#FFFFFF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
    setShowModal(true);
  };

  return (
    <footer className="py-32 bg-banana-text text-banana-bg text-center relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBananaClick}
        className="text-4xl md:text-6xl font-black bg-banana text-banana-text py-8 px-16 rounded-full shadow-[0_0_50px_rgba(255,225,53,0.5)] hover:shadow-[0_0_80px_rgba(255,225,53,0.8)] transition-shadow"
      >
        ХОЧУ БАНАН!
      </motion.button>

      <p className="mt-12 opacity-50">© 2024 Bananas Go Brrrrr. No bananas were harmed.</p>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
              className="bg-banana p-10 rounded-3xl max-w-md w-full text-center text-banana-text"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-8xl mb-6">🍌💛</div>
              <h3 className="text-3xl font-black mb-4">Спасибо за выбор!</h3>
              <p className="text-xl mb-8">Ваша доза калия уже в пути (ментально).</p>
              <button 
                onClick={() => setShowModal(false)}
                className="bg-banana-text text-white font-bold py-3 px-8 rounded-xl hover:bg-black transition-colors"
              >
                Круто, спасибо
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};