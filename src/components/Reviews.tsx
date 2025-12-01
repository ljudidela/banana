const reviews = [
  {
    text: "Наконец-то нормальный сайт! Внук показал, теперь сижу тут весь день.",
    author: "Бабушка",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    text: "Жёлтый — мой любимый цвет. А бананы — моя любимая еда. Совпадение?",
    author: "Аноним",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    text: "10/10, бананово! Лучше, чем работать.",
    author: "Сосед",
    rating: "🍌🍌🍌🍌🍌"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Что говорят люди</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-cream p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-banana"
            >
              <div className="text-4xl mb-4">❝</div>
              <p className="text-lg mb-6 italic">{review.text}</p>
              <div className="flex justify-between items-end">
                <span className="font-bold text-xl">— {review.author}</span>
                <span className="text-sm">{review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;