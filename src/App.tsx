import Hero from './components/Hero';
import BananaCloud from './components/BananaCloud';
import InteractiveZone from './components/InteractiveZone';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <BananaCloud />
      <InteractiveZone />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;