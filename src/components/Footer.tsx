import { useState } from 'react';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const triggerConfetti = () => {
    setShowModal(true);
    
    // Simple DOM confetti implementation
    const colors = ['#FFE135', '#FFD700', '#FFF', '#000'];
    for (let i = 0; i < 100; i++) {
      const el = document.createElement('div');
      el.className = 'confetti';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      el.style.animationDuration = (Math.random() * 2 + 2) + 's';
      document.body.appendChild(el);
      
      setTimeout(() => el.remove(), 4000);
    }
  };

  return (
    <footer className="py-20 bg-dark text-cream text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8 text-banana">ХОЧЕШЬ БАНАН?</h2>
        
        <button 
          onClick={triggerConfetti}
          className="px-12 py-6 bg-banana text-dark text-2xl font-black rounded-full hover:bg-white hover:scale-110 transition-all shadow-[0_0_30px_rgba(255,225,53,0.5)] active:scale-95"
        >
          ХОЧУ БАНАН!
        </button>

        <p className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Bananas Go Brrrrr Inc. No monkeys were harmed.
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white text-dark p-8 rounded-3xl max-w-md w-full text-center relative animate-bounce-slow">
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-4 right-4 text-2xl font-bold hover:text-red-500"
            >
              ×
            </button>
            <div className="text-6xl mb-4">🍌🍌🍌</div>
            <h3 className="text-3xl font-bold mb-4">Спасибо за выбор!</h3>
            <p className="text-lg mb-6">Ваш виртуальный банан уже отправлен в ваше воображение.</p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full py-3 bg-banana font-bold rounded-xl hover:brightness-110"
            >
              Отлично!
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;