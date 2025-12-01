import { motion } from 'framer-motion';

const features = [
  { title: "99% Калия", desc: "Зарядись энергией" },
  { title: "100% Настроения", desc: "Улыбка гарантирована" },
  { title: "Жёлтый — новый чёрный", desc: "Стиль в каждом пикселе" }
];

export const BananaCloud = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden bg-banana-bg">
      {/* Floating Bananas Background */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-30 select-none pointer-events-none"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{ 
            y: [0, -100, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          🍌
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-20 text-banana-text"
        >
          Банановый кайф
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-banana text-center"
            >
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.div
            className="relative cursor-pointer group"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <div className="text-9xl filter drop-shadow-xl">🍌</div>
            <div className="absolute top-1/4 left-1/4 text-4xl opacity-0 group-hover:opacity-100 transition-opacity">🕶️</div>
            <p className="text-center mt-4 font-bold text-banana-text opacity-50 group-hover:opacity-100">Я крутой банан</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};