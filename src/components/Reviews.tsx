import { motion } from 'framer-motion';

const reviews = [
  { text: "Наконец-то нормальный сайт!", author: "Бабушка", color: "bg-red-100" },
  { text: "Жёлтый — мой любимый цвет", author: "Аноним", color: "bg-blue-100" },
  { text: "10/10, бананово!", author: "Сосед", color: "bg-green-100" },
  { text: "Где купить такие бананы?", author: "Илон М.", color: "bg-purple-100" }
];

export const Reviews = () => {
  return (
    <section className="py-20 bg-banana-bg overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-banana-text">
        Что говорят люди
      </h2>
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-80 p-8 rounded-2xl shadow-lg border-2 border-black/5 ${review.color} transform rotate-${index % 2 === 0 ? '1' : '-1'}`}
            >
              <p className="text-xl font-bold mb-4">«{review.text}»</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg">👤</div>
                <span className="font-medium text-gray-600">{review.author}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};