import Button from "../components/Button";
import { LuArrowLeftCircle } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";

function Project({ project }) {
	const { title, images, desc, tags, live, github } = project;
	console.log("🚀 ~ Project ~ project:", project);
	console.log("🚀 ~ Project ~ title:", title);
	return (
		<>
			<div className="flex flex-col  lg:flex-row lg:justify-between ">
				<ul className="my-5 md:my-10 lg:my-20 flex gap-2 md:gap-3 text-xs md:text-lg font-bold  text-gray uppercase flex-wrap mx-auto lg:mx-0">
					{tags.length > 0 ? tags.map((tag) => <li key={tag}>{tag}</li>) : null}
				</ul>
				<div className="flex gap-5 my-auto mx-auto lg:mx-0">
					<LuArrowLeftCircle size={32} stroke="#18457C" />
					<LuArrowRightCircle size={32} stroke="#18457C" />
				</div>
			</div>
			<div className=" mt-3 md:mt-10 lg:mt-0 flex  flex-col lg:grid flex-1 lg:grid-cols-[1fr_2fr]  gap-5 md:gap-10  ">
				<div className="flex flex-col items-center lg:items-start gap-4 md:gap-10 py-2 md:py-10 px-2 md:px-8  border-tertiary-blue rounded-lg justify-between order-2 lg:order-none">
					<div className="flex-1 flex flex-col gap-3 md:gap-10 ">
						<h4 className="text-base md:text-xl text-white uppercase mx-auto lg:mx-0">
							{title}
						</h4>
						<p className="text-gray text-xs md:text-base leading-normal">
							{desc}
						</p>
					</div>
					<div>
						<Button type="red" to={live}>
							See Demo
						</Button>
					</div>
				</div>
				<div className="border border-pink-gray rounded-xl p-5 md:p-10 order-1 lg:order-none ">
					<img
						className="w-full h-full object-contain"
						src={images[0]}
						alt="project screen"
					/>
				</div>
			</div>
		</>
	);
}

export default Project;
