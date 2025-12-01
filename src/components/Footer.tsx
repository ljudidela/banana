import { useState } from 'react';

const Footer = () => {
  const [confetti, setConfetti] = useState<{id: number, left: number, color: string}[]>([]);
  const [showModal, setShowModal] = useState(false);

  const triggerConfetti = () => {
    const colors = ['#FFE135', '#FFD700', '#FFF8DC', '#FFFFFF'];
    const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setConfetti(prev => [...prev, ...newConfetti]);
    setShowModal(true);

    // Cleanup confetti after animation
    setTimeout(() => {
      setConfetti([]);
    }, 3000);
  };

  return (
    <footer className="py-20 bg-dark text-cream text-center relative overflow-hidden">
      {confetti.map((c) => (
        <div
          key={c.id}
          className="confetti"
          style={{
            left: `${c.left}%`,
            top: '-20px',
            backgroundColor: c.color,
            animationDuration: `${Math.random() * 2 + 1}s`
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-8 text-banana">ХОЧУ БАНАН!</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-80">
          Нажми на кнопку, чтобы получить дозу виртуального калия прямо сейчас.
        </p>
        
        <button
          onClick={triggerConfetti}
          className="bg-banana text-dark text-2xl font-bold px-12 py-6 rounded-full shadow-[0_0_30px_rgba(255,225,53,0.5)] hover:scale-105 hover:shadow-[0_0_50px_rgba(255,225,53,0.8)] transition-all duration-300 active:scale-95"
        >
          ДАЙТЕ ДВА! 🍌
        </button>

        <div className="mt-20 text-sm opacity-50">
          © {new Date().getFullYear()} Bananas Go Brrrrr Inc. No bananas were harmed.
        </div>
      </div>

      {/* Simple Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="bg-white text-dark p-8 rounded-3xl shadow-2xl relative z-10 max-w-md w-full animate-bounce-slow">
            <h3 className="text-3xl font-bold mb-4 text-center">Спасибо! 🍌</h3>
            <p className="text-center text-lg mb-6">
              Ваш виртуальный банан уже в пути. Ожидайте доставку силой мысли.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-banana py-3 rounded-xl font-bold hover:bg-gold transition-colors"
            >
              Понял, жду!
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;