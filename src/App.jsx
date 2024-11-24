import Nav from "./components/Nav";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

function App() {
	return (
		<>
			<div className="relative bg-background-gradient text-white before:absolute before:inset-0 before:bg-gradient before:w-full before:h-full  before:bg-no-repeat before:bg-center before:bg-cover before:pointer-events-none before:z-10  max-h-screen">
				<Nav className="absolute z-20" />
				<main className="xl:padding-l wide:padding-r padding-b relative z-20">
					<Hero />
				</main>
			</div>
			<section className="padding" id="About">
				<About />
			</section>
			<section className="padding" id="Experience">
				<Experience />
			</section>
			<section className="padding" id="Contact">
				<Contact />
			</section>
			<footer className="padding" id="Footer">
				<Footer />
			</footer>
		</>
	);
}

export default App;
