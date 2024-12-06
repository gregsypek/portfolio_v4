import { Link as ScrollLink } from "react-scroll";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { aboutInfo } from "../constants";

const textVariants = {
	initial: {
		x: -200,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const About = () => {
	return (
		<div className="max-container before:-translate-x-[15%] before:-translate-y-[30%] lg:before:-translate-x-[40%] relative about-gradient">
			<div className="inline-block border-2 border-white rounded-md aspect-square md:hidden">
				<h1 className="relative z-20 p-4 text-left align-middle section-header ">
					About <br /> Me
				</h1>
			</div>
			<div className="flex  flex-col my-auto max-md:my-2 max-md:space-y-5  md:grid gap-[3vw] md:gap-[1.5vw] lg:gap-[2vw] ">
				{/* SQUARE 1  */}
				<div className="about-square1">
					<h1 className="text-[36px] sm:text-[48px] md:text-[68px] sm:leading-none xl:text-8xl leading-10 font-bold bg-text-gradient bg-clip-text text-transparent relative z-20 text-left align-middle p-4 translate-x-10  ">
						About <br /> Me
					</h1>
				</div>
				{/* SQUARE 2  */}
				<div className="about-square2 "></div>

				{aboutInfo.map((info) => (
					<motion.p
						variants={textVariants}
						initial="initial"
						animate="animate"
						key={info.id}
						className={`${info.className} text-dark-grey`}
					>
						{info.content}
					</motion.p>
				))}

				<div className="relative z-20 flex justify-end col-span-5 col-start-6 row-start-6 mt-12 ">
					<ScrollLink to="Projects" smooth={true} duration={500}>
						<Button type="blue" className="rounded-sm ">
							See the Latest Works
						</Button>
					</ScrollLink>
				</div>
			</div>
		</div>
	);
};

export default About;
