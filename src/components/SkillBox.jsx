import { useRef } from "react";
import { motion } from "framer-motion";

const skillsVariants = {
	initial: {
		opacity: 0,
		scale: 0,
	},
	animate: {
		y: 0,
		scale: 1,

		opacity: 1,
		transition: {
			duration: 0.6,
			staggerChildren: 0.2,
		},
	},
};

function SkillBox({ box, onClick }) {
	const { year, name, languages, desc } = box;
	const handleSkillBoxClick = () => {
		// Dodaj tutaj dodatkową logikę lub przekazanie informacji związanej z kliknięciem
		onClick(box);
	};
	const rightContainerRef = useRef(null);
	return (
		<div className="flex flex-col gap-5 items-start relative p-6 md:p-14 z-10 ">
			<div className="absolute h-auto md:w-[80%] lg:w-[85%] left-0 bottom-0 top-0 bg-background-card rounded-xl p z-10"></div>
			<div className="flex w-full  ">
				<div className="flex flex-col gap-12 justify-start flex-1 font-bold relative z-20">
					<p className="text-4xl self-start caption-top uppercase">{name}</p>

					<div className="relative flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-light-grey text-black rounded-full text-sm lg:text-lg font-bold shadow-md">
						{year}
						{/* First ring */}
						<div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-white to-blue-grey opacity-50 blur-md"></div>
						{/* Second ring */}
						<div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-blue-400 to-blue-grey opacity-30 blur-lg"></div>
					</div>
				</div>
			</div>
			<div className="flex text-base gap-2 md:gap-20 ">
				<div className="flex-1 text-sm md:text-lg text-gray leading-normal relative z-20">
					{desc}
				</div>
				<div
					className="  lg:grid gap-0 grid-cols-[120px_120px_120px] grid-rows-[50px_50px] relative z-20 "
					ref={rightContainerRef}
				>
					{languages.map((lang) => {
						const { background, color, border } = lang.colors;

						return (
							<motion.div
								variants={skillsVariants}
								initial="initial"
								whileInView="animate"
								key={lang.name}
								className={`border && "border-${border} border-x" }
								 m-2 flex justify-center rounded-md items-center  md:w-[120px] md:h-[50px] w-[120px] h-[50px]`}
								style={{
									backgroundColor: background,
									color: color,
									gridColumn: lang.column,
									gridRow: lang.row,
									borderWidth: "0.5px",
									display: "flex",
									flexDirection: "column",
									paddingBlock: "5px",
									transition: "all 0.6s ease-in-out",
									hover: "pointer",
								}}
								onClick={handleSkillBoxClick}
							>
								{lang.name}
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default SkillBox;
