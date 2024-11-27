import Nav from "./components/Nav";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Projects";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
	return (
		<div className="bg-background-gradient  text-white relative">
			<div className="relative hero-gradient  max-h-screen">
				<Nav className="absolute z-20" />
				<main className="xl:padding-l wide:padding-r padding-b relative z-20">
					<Hero />
					{/* Gradient effect to "skills"  for better visibility */}
					<div className="absolute bottom-0 left-0 w-[80vw] h-[250px] bg-[#0F0E24] blur-[81px]"></div>
				</main>
			</div>
			<section className="padding-x  relative" id="About">
				<About />
			</section>
			<section className="padding" id="Projects">
				<Projects />
			</section>
			{/* <section className="padding" id="Experience">
				<Experience />
			</section> */}
			<section className="padding" id="Contact">
				<Contact />
			</section>
			<footer className="padding" id="Footer">
				<Footer />
			</footer>
		</div>
	);
}

export default App;
