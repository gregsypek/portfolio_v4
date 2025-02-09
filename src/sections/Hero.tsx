import Button from "../components/Button";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { skills } from "../constants";
import SlidingText from "../components/SlidingText";
import { useEffect, useState } from "react";

const textVariants = {
	initial: { opacity: 0, y: -20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.2, // Each child shows after 0.2 seconds
		},
	},
};

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
			className="relative flex flex-row justify-start gap-10 overflow-hidden max-container overflow:hidden padding-x"
		>
			<motion.div
				className=" flex w-4/6 -translate-y-12 flex-col gap-4 pt-[12vh] sm:w-3/5 sm:translate-y-0 sm:justify-start md:w-3/5 lg:w-4/5  lg:pt-[180px] xl:relative xl:w-3/4 "
				variants={textVariants}
				initial="initial"
				animate="animate"
				style={{
					// navbar height is 75px
					height: "calc(100dvh - 75px)",
				}}
			>
				<motion.h1 className="relative z-20 bg-text-gradient bg-clip-text text-left  align-middle text-[48px] font-bold leading-10 text-transparent sm:text-[60px] sm:leading-none  md:text-[80px] xl:text-8xl">
					Web Developer & <br /> Content Creator
				</motion.h1>
				<motion.p className="md:paragraph relative z-20 mt-6 w-2/3 text-left text-sm leading-tight text-dark-grey md:w-3/5 xl:mt-[86px]">
					Hi, my name is Grzegorz Sypek, I design, create web pages and projects
					with attention to details and clarity.
				</motion.p>
				<motion.div className="relative z-20 flex flex-wrap items-start justify-start gap-8 mt-6 max-lg:flex-col xl:mt-12">
					<ScrollLink
						to="Projects"
						smooth={true}
						duration={300}
						className="relative z-10"
					>
						<Button type="red">See the Latest Works</Button>
					</ScrollLink>

					<ScrollLink to="Contact" smooth={true} duration={500}>
						<Button type="empty">Contact Me</Button>
					</ScrollLink>
				</motion.div>
			</motion.div>
			{/* eslint-disable-next-line tailwindcss/no-custom-classname */}
			<div className="absolute top-0 min-h-screen translate-x-32 lg:top-18 tiny:-translate-y-18 xl: -right-20 tiny:translate-x-48 sm:translate-x-48 sm:scale-90 md:translate-x-48 lg:-translate-y-24 xl:translate-x-0">
				<img
					src="/hero.png"
					alt="Grzegorz"
					width={820}
					height={1000}
					className="relative z-10 object-cover mask-gradient-30 md:h-full"
					loading="lazy"
				/>
			</div>
			<div
				className="z-10 slidingText padding-x"
				style={{ pointerEvents: "none" }} // no interactions needed -  hide behind buttons/
			>
				<SlidingText skills={skills} currentSkillIndex={currentSkillIndex} />
			</div>
		</section>
	);
};

export default Hero;
