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
		<div className="relative z-10 flex flex-col items-start gap-5 p-6 sm:px-6 md:px-8 ">
			{/* bg-background-card */}
			<div className="absolute h-auto md:w-[80%] lg:w-[85%] left-0 bottom-0 top-0 rounded-xl p z-10"></div>
			<div className="flex w-full ">
				<div className="relative z-20 flex flex-row justify-between flex-1 font-bold sm:mr-8 md:mr-12 lg:mr-6 ">
					<p className="self-start text-3xl uppercase caption-top">{name}</p>

					<div className="relative flex items-center justify-center w-12 h-12 text-sm font-bold text-black rounded-full shadow-md lg:w-16 lg:h-16 bg-light-grey lg:text-lg">
						{year}
						{/* First ring */}
						<div className="absolute inset-0 rounded-full opacity-50 animate-pulse bg-gradient-to-r from-white to-blue-grey blur-md"></div>
						{/* Second ring */}
						<div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-r from-blue-400 to-blue-grey opacity-30 blur-lg"></div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-2 text-base sm:flex-row md:gap-20 ">
				<div className="relative z-20 flex-1 order-2 sm:order-1 paragraph text-gray">
					{desc}
				</div>
				<div
					className="lg:grid flex sm:flex-col flex-wrap sm:flex-nowrap  order-1 sm:order-2 gap-0 grid-cols-[120px_120px_120px] grid-rows-[50px_50px] relative z-20 "
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
								 m-2 text-xs md:text-base flex justify-center rounded-md items-center  md:w-[120px] md:h-[50px] w-[100px] h-[30px] hover:cursor-pointer`}
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
