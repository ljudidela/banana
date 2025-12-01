import { useState, useEffect } from 'react';

const reviews = [
  { text: "Наконец-то нормальный сайт!", author: "Бабушка", role: "Эксперт по выпечке" },
  { text: "Жёлтый — мой любимый цвет", author: "Аноним", role: "Любитель цвета" },
  { text: "10/10, бананово!", author: "Сосед", role: "Критик" },
  { text: "Где здесь кнопка купить?", author: "Илон", role: "Бизнесмен" },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-12">Что говорят люди</h2>
        
        <div className="relative max-w-3xl mx-auto h-64">
          {reviews.map((review, index) => {
            const isActive = index === activeIndex;
            let className = "absolute inset-0 transition-all duration-500 ease-in-out transform ";
            
            if (isActive) className += "opacity-100 translate-x-0 scale-100 z-10";
            else if (index === (activeIndex - 1 + reviews.length) % reviews.length) className += "opacity-0 -translate-x-full scale-90 z-0";
            else className += "opacity-0 translate-x-full scale-90 z-0";

            return (
              <div key={index} className={className}>
                <div className="bg-white p-8 rounded-3xl shadow-2xl border-b-8 border-banana h-full flex flex-col justify-center items-center text-center mx-4">
                  <p className="text-2xl md:text-3xl font-bold mb-6 italic">«{review.text}»</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-banana rounded-full flex items-center justify-center font-bold">
                      {review.author[0]}
                    </div>
                    <div className="text-left">
                      <p className="font-bold">{review.author}</p>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${idx === activeIndex ? 'bg-dark' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;