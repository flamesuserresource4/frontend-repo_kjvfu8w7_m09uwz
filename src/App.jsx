import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-bold tracking-wide">Your Name</a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#projects" className="hover:text-gray-900">Work</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
