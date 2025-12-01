import { useEffect, useState } from "react";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden banana-gradient">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="z-10 text-center px-4">
        <div
          className="text-9xl mb-8 filter drop-shadow-xl animate-float cursor-pointer transition-transform hover:scale-110"
          style={{
            transform: `translateY(${offset * 0.5}px) rotate(${
              offset * 0.1
            }deg)`,
          }}
        >
          🍌
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-dark text-shadow animate-fade-in-up">
          Готов к жёлтому приключению?
        </h1>

        <p className="text-xl md:text-2xl text-dark/80 mb-12 font-medium">
          Сайт, после которого бананы будут сниться
        </p>

        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="animate-bounce bg-white text-dark px-8 py-3 rounded-full font-bold shadow-lg hover:bg-cream transition-colors"
        >
          Скролль ↓
        </button>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-spin-slow">
        🍌
      </div>
      <div className="absolute bottom-20 right-10 text-8xl opacity-20 animate-float-delayed">
        🍌
      </div>
    </section>
  );
};

export default Hero;
