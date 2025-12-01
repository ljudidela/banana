import { Hero } from './components/Hero';
import { BananaCloud } from './components/BananaCloud';
import { InteractiveZone } from './components/InteractiveZone';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Hero />
      <BananaCloud />
      <InteractiveZone />
      <Reviews />
      <Footer />
    </main>
  );
}

export default App;