import Nav from './components/Nav';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="relative bg-primary-dark text-white">
      <section id="Home" className="pb-16 md:pb-20 lg:pb-24">
        <div className="hero-gradient relative max-h-screen">
          <Nav />
          <main className="relative z-20">
            <Hero />
            {/* Gradient effect to "skills"  for better visibility */}
            <div className="absolute -bottom-20 right-20 h-[200px] w-[50vw] bg-[#080B13] blur-[40px]"></div>
          </main>
        </div>
      </section>
      <section className="section" id="About">
        <About />
      </section>
      <section className="section" id="Projects">
        <Projects />
      </section>
      <section className="section-half-y section-x" id="Experience">
        <Experience />
      </section>
      <section className="section relative min-h-screen py-8" id="Contact">
        <Contact />
      </section>
      <footer className="section about-gradient relative" id="Footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
