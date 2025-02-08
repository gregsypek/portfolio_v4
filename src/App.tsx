import Nav from "./components/Nav";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
	return (
		<div className="relative text-white bg-primary-dark">
			<section id="Home" className="pb-16 md:pb-20 lg:pb-24 ">
				<div className="relative max-h-screen hero-gradient">
					<Nav />
					<main className="relative z-20">
						<Hero />
						{/* Gradient effect to "skills"  for better visibility */}
						<div className="absolute -bottom-20 right-20 w-[50vw] h-[200px] bg-[#080B13] blur-[40px] "></div>
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
			<section className="relative min-h-screen py-8  section" id="Contact">
				<Contact />
			</section>
			<footer className="relative section about-gradient" id="Footer">
				<Footer />
			</footer>
		</div>
	);
}

export default App;
