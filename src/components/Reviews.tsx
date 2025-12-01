import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Алексей П.",
    role: "Любитель калия",
    text: "Никогда не думал, что облака могут быть такими вкусными. Банановое облако изменило мою жизнь!",
    rating: 5
  },
  {
    id: 2,
    name: "Мария С.",
    role: "Фруктовый критик",
    text: "Идеальный баланс желтого и мягкого. Это не просто сервис, это стиль жизни.",
    rating: 5
  },
  {
    id: 3,
    name: "Иван Д.",
    role: "Скептик",
    text: "Сначала я сомневался, но потом увидел банан в небе. 10/10, рекомендую.",
    rating: 4
  }
];

const Reviews: React.FC = () => {
  // Функция для отображения рейтинга бананчиками
  const renderRating = (rating: number) => {
    return "🍌".repeat(rating);
  };

  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-800">Что говорят люди</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-2xl shadow-xl border border-yellow-100 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-xl font-bold text-yellow-700 mr-4">
                  {review.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <div className="mb-4 text-2xl tracking-widest" aria-label={`Рейтинг: ${review.rating} из 5`}>
                {renderRating(review.rating)}
              </div>
              <p className="text-gray-600 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;