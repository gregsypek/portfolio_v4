import Nav from "./components/Nav";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

function App() {
	return (
		<main className="relative bg-black text-white">
			<Nav />
			<section className="xl:padding-1 wide:padding-r padding-b">
				<Hero />
			</section>
			<section className="padding">
				<About />
			</section>
			<section className="padding">
				<Experience />
			</section>
			<section className="padding">
				<Contact />
			</section>
			<section className="padding">
				<Footer />
			</section>
		</main>
	);
}

export default App;
