import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-banana via-banana-bg to-banana-bg">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'] 
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{ 
          backgroundImage: 'radial-gradient(circle, #FFD700 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1.5 }}
          className="mb-8"
        >
          <div className="text-[150px] md:text-[200px] leading-none filter drop-shadow-2xl animate-float cursor-pointer hover:scale-110 transition-transform">
            🍌
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-7xl font-black mb-4 text-banana-text text-shadow-glow"
        >
          Готов к жёлтому приключению?
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl md:text-2xl font-medium text-gray-700 mb-12"
        >
          Сайт, после которого бананы будут сниться
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-banana-text text-banana font-bold py-4 px-8 rounded-full flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Скролль <ArrowDown className="animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};