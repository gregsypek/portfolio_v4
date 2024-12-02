import Nav from "./components/Nav";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
	return (
		<div className="bg-primary-dark text-white relative">
			<section className="pb-16 md:pb-20 lg:pb-24">
				<div className="relative hero-gradient max-h-screen ">
					<Nav className="absolute z-20" />
					<main className="relative z-20">
						<Hero />
						{/* Gradient effect to "skills"  for better visibility */}
						<div className="absolute -bottom-20 right-0 w-[50vw] h-[200px] bg-[#080B13] blur-[40px] "></div>
					</main>
				</div>
			</section>
			<section className="section" id="About">
				<About />
			</section>
			<section className="section" id="Projects">
				<Projects />
			</section>
			<section className="section" id="Experience">
				<Experience />
			</section>
			<section className="section relative" id="Contact">
				<Contact />
			</section>
			<footer className="section relative about-gradient" id="Footer">
				<Footer />
			</footer>
		</div>
	);
}

export default App;
