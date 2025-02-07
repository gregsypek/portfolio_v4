import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { LuArrowLeftCircle, LuGithub } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";
import { motion, useInView } from "framer-motion";

const tagVariants = {
	initial: {
		x: 0,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.2,
		},
	},
};

const tagItemVariants = {
	initial: {
		x: 20,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

function Project({ project }) {
	const ref = useRef();

	const isInView = useInView(ref, { threshold: 0.5 });

	const { title, images, desc, tags, live, github } = project;
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleNext = useCallback(() => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	}, [images.length]);

	const handlePrev = useCallback(() => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	}, [images.length]);

	const isSingleImage = images.length <= 1;

	// const handleKeyDown = useCallback(
	// 	(event) => {
	// 		if (event.key === "ArrowLeft") {
	// 			handlePrev();
	// 		} else if (event.key === "ArrowRight") {
	// 			handleNext();
	// 		}
	// 	},
	// 	[handleNext, handlePrev]
	// );

	// useEffect(() => {
	// 	window.addEventListener("keydown", handleKeyDown);

	// 	return () => {
	// 		window.removeEventListener("keydown", handleKeyDown);
	// 	};
	// }, [handleKeyDown]);

	return (
		<div className="hero-gradient relative before:rotate-180 before:translate-y-[20%] sm:before:scale-125 before:opacity-35">
			<div className="relative z-20 flex flex-col lg:flex-row lg:justify-between margin-y">
				<div className="flex justify-between my-2 lg:hidden">
					<h4 className="font-bold uppercase section-title text-blue-grey lg:mx-0">
						{title}
					</h4>
					<a href={`${github}`} target="_blank" rel="noreferrer">
						<span className="group">
							<LuGithub
								size={24}
								stroke="#e8cbcb"
								strokeWidth="1"
								className="group-hover:stroke-primary-red"
							/>
						</span>
					</a>
				</div>
				<motion.ul
					className="flex flex-wrap gap-2 my-2 text-xs font-bold uppercase md:my-5 lg:my-10 lg:gap-3 md:text-base lg:text-lg text-dark-grey lg:mx-0"
					variants={tagVariants}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					whileInView="animate"
					ref={ref}
				>
					{tags.length > 0
						? tags.map((tag) => (
								<motion.li key={tag} variants={tagItemVariants}>
									{tag}
								</motion.li>
							))
						: null}
				</motion.ul>
				<div className="hidden gap-5 mx-auto my-auto lg:flex lg:mx-0 ">
					<Button onClick={handleNext}>
						<div className="group">
							<LuArrowLeftCircle
								size={32}
								stroke="#AEAEAE"
								strokeWidth={1}
								className="group-hover:stroke-[#e7e4e4]"
							/>
						</div>
					</Button>
					<Button onClick={handlePrev} disabled={isSingleImage}>
						<div className="group">
							<LuArrowRightCircle
								size={32}
								stroke="#AEAEAE"
								strokeWidth={1}
								className="group-hover:stroke-[#e7e4e4]"
							/>
						</div>
					</Button>
				</div>
			</div>
			<div className=" flex flex-col lg:grid flex-1 lg:grid-cols-[1fr_2fr] gap-5 relative z-20">
				<div className="flex flex-col items-center justify-between order-2 gap-4 px-2 rounded-lg lg:items-start md:gap-5 lg:gap-10 md:py-5 lg:py-10 lg:px-8 border-tertiary-blue lg:order-none">
					<div className="relative flex flex-col flex-1 gap-3 lg:gap-10">
						<div className="justify-between hidden lg:flex">
							<h4 className="mx-auto font-bold uppercase section-title text-light-grey lg:mx-0">
								{title}
							</h4>
							<a href={`${github}`} target="_blank" rel="noreferrer">
								<span className="group">
									<LuGithub
										size={32}
										stroke="#e8cbcb"
										strokeWidth="1"
										className="group-hover:stroke-white"
									/>
								</span>
							</a>
						</div>
						<div className="flex gap-5 mx-auto my-auto lg:mx-0 lg:hidden">
							<Button onClick={handleNext}>
								<div className="group">
									<LuArrowLeftCircle
										size={32}
										stroke="#AEAEAE"
										strokeWidth={1}
										className="group-hover:stroke-[#e7e4e4]"
									/>
								</div>
							</Button>
							<Button onClick={handlePrev} disabled={isSingleImage}>
								<div className="group">
									<LuArrowRightCircle
										size={32}
										stroke="#AEAEAE"
										strokeWidth={1}
										className="group-hover:stroke-[#e7e4e4]"
									/>
								</div>
							</Button>
						</div>
						<p className="text-gray paragraph">{desc}</p>
					</div>
					<div>
						<Button type="red" to={live}>
							See Demo
						</Button>
					</div>
				</div>
				<div className="border-[2px] border-pink-grey rounded-xl p-1 md:p-5 order-1 lg:order-none h-[350px] sm:h-[450px] lg:h-[550px] transition-all ">
					<img
						className="object-cover w-full h-full rounded-xl hover:rounded-xl duration-50"
						src={images[currentImageIndex]}
						alt="project screen "
					/>
				</div>
			</div>
		</div>
	);
}

export default Project;
