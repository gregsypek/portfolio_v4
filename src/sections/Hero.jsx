import Button from "../components/Button";

const Hero = () => {
	return (
		<section
			id="home"
			className="w-full bc-backgroundGradient flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border border-red-200"
		>
			<div className="relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 border border-green-200">
				<h1 className="text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold bg-text-gradient bg-clip-text text-transparent">
					Gradient Text Example
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni
					dolor ut consequatur voluptas facilis eos repellendus architecto
					reiciendis molestiae!
				</p>
				<Button label="See the Latest Works" />
				<Button label="Contact Me" />
			</div>
			<div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 ">
				<img
					src="/hero.png"
					alt="Grzegorz"
					width={820}
					height={1000}
					className="object-contain relative z-10"
				/>
			</div>
		</section>
	);
};

export default Hero;
