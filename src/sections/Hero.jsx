import { useEffect } from "react";
import Button from "../components/Button";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { skills } from "../constants";
import { useState } from "react";
import SlidingText from "../components/SlidingText";

// const textVariants = {
// 	initial: {
// 		// x: -500,
// 		opacity: 0,
// 	},
// 	animate: {
// 		x: 0,
// 		opacity: 1,
// 		transition: {
// 			duration: 1,
// 			staggerChildren: 0.1,
// 		},
// 	},
// };

const Hero = () => {
	const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSkillIndex((prevIndex) =>
				prevIndex === skills.length - 1 ? 0 : prevIndex + 1
			);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="home"
			className="flex flex-row justify-start gap-10 max-container overflow-hidden relative overflow:hidden padding-x"
		>
			<div
				className=" pt-[12vh] sm:justify-start -translate-y-12 sm:translate-y-0 gap-4 w-4/6 sm:w-3/5 md:w-3/5 lg:w-4/5 xl:w-3/4 flex  flex-col lg:pt-[180px] xl:relative "
				style={{
					//navbar height is 75px
					height: "calc(100dvh - 75px)",
				}}
			>
				<h1 className="text-[48px] sm:text-[60px] md:text-[80px] sm:leading-none xl:text-8xl  leading-10 font-bold bg-text-gradient bg-clip-text text-transparent relative z-20  text-left align-middle">
					Web Developer & <br /> Content Creator
				</h1>
				<p className="text-sm md:paragraph text-dark-grey mt-6 xl:mt-[86px] md:w-3/5  w-2/3 relative z-20 leading-tight text-left">
					Hi, my name is Greg Sypek. I create and design web pages and projects
					with attention to details and clarity.
				</p>
				<div className="mt-6 xl:mt-12 max-lg:flex-col flex flex-wrap gap-8  justify-start items-start relative z-10">
					<ScrollLink to="Projects" smooth={true} duration={300}>
						<Button type="red" className="rounded-sm">
							See the Latest Works
						</Button>
					</ScrollLink>

					<ScrollLink to="Contact" smooth={true} duration={500}>
						<Button type="empty">Contact Me</Button>
					</ScrollLink>
				</div>
			</div>
			<div
				className=" absolute top-0 lg:top-18 tiny:-translate-y-18 lg:-translate-y-24 tiny:translate-x-48 sm:translate-x-48 sm:scale-90 md:translate-x-48 xl:translate-x-0 translate-x-32 
			   min-h-screen xl: -right-20   "
			>
				<img
					src="/hero.png"
					alt="Grzegorz"
					width={820}
					height={1000}
					className="object-cover relative z-10 md:h-full mask-gradient-30"
					loading="lazy"
				/>
			</div>
			<div
				className="slidingText padding-x "
				// variants={sliderVariants}
				// initial="initial"
				// animate="animate"
			>
				<SlidingText skills={skills} currentSkillIndex={currentSkillIndex} />
			</div>
		</section>
	);
};

export default Hero;
