import { useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import { LuArrowLeftCircle, LuGithub } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";

function Project({ project }) {
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

	const handleKeyDown = useCallback(
		(event) => {
			if (event.key === "ArrowLeft") {
				handlePrev();
			} else if (event.key === "ArrowRight") {
				handleNext();
			}
		},
		[handleNext, handlePrev]
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<div className="hero-gradient relative before:rotate-180 before:translate-y-[20%] sm:before:scale-125 before:opacity-35">
			<div className="flex flex-col lg:flex-row lg:justify-between margin-y relative z-20">
				<div className="flex justify-between lg:hidden my-2">
					<h4 className="section-title text-blue-grey uppercase lg:mx-0 font-bold">
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
				<ul className="my-2 md:my-5 lg:my-10 flex gap-2 lg:gap-3 text-xs md:text-base lg:text-lg font-bold  text-dark-grey  flex-wrap  lg:mx-0 uppercase">
					{tags.length > 0 ? tags.map((tag) => <li key={tag}>{tag}</li>) : null}
				</ul>
				<div className="lg:flex gap-5 my-auto mx-auto lg:mx-0 hidden ">
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
				<div className="flex flex-col items-center lg:items-start gap-4 md:gap-5 lg:gap-10 md:py-5 lg:py-10 px-2 lg:px-8  border-tertiary-blue rounded-lg justify-between order-2 lg:order-none">
					<div className="flex-1 flex flex-col gap-3 lg:gap-10 relative">
						<div className="lg:flex justify-between hidden">
							<h4 className="section-title text-light-grey uppercase mx-auto lg:mx-0 font-bold">
								{title}
							</h4>
							<a href={`${github}`} target="_blank" rel="noreferrer">
								<span className="group">
									<LuGithub
										size={32}
										stroke="#e8cbcb"
										strokeWidth="1"
										className="group-hover:stroke-primary-red"
									/>
								</span>
							</a>
						</div>
						<div className="flex gap-5 my-auto mx-auto lg:mx-0 lg:hidden">
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
						<p className="text-gray paragraph ">{desc}</p>
					</div>
					<div>
						<Button type="red" to={live}>
							See Demo
						</Button>
					</div>
				</div>
				<div className="border-[2px]  border-pink-grey rounded-xl p-1 md:p-5 order-1 lg:order-none h-[350px] sm:h-[450px] lg:h-[550px] ">
					<img
						className="w-full hover:cursor-pointer h-full object-contain hover:scale-y-105 hover:scale-x-105 rounded-xl hover:rounded-xl transition-all  duration-350"
						src={images[currentImageIndex]}
						alt="project screen "
					/>
				</div>
			</div>
		</div>
	);
}

export default Project;
