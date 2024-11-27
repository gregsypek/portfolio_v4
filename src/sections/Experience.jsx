import Button from "../components/Button";
import { LuArrowLeftCircle } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";
import bakery1 from "../assets/images/projects/bakery1.png";
const Experience = () => {
	return (
		<div className="max-container h-full flex flex-col relative z-20">
			<h1 className="section-header mx-auto lg:mx-0">My Websites & Apps</h1>
			<div className="flex flex-col  lg:flex-row lg:justify-between ">
				<ul className="my-5 md:my-10 lg:my-20 flex gap-2 md:gap-3 text-xs md:text-lg font-bold  text-gray uppercase flex-wrap mx-auto lg:mx-0">
					<li>React</li>
					<li>React Router</li>
					<li>Styled Component</li>
					<li>2023</li>
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
							Bakery
						</h4>
						<p className="text-gray text-xs md:text-base leading-normal">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
							eligendi consequatur. Maxime rem recusandae doloribus distinctio.
							Praesentium debitis expedita adipisci perspiciatis iusto ipsa quis
							ut saepe sunt magnam enim exercitationem vel cupiditate,
							voluptatem quidem reiciendis odio libero aliquid veritatis non.
						</p>
					</div>
					<div>
						<Button type="red">See Demo </Button>
					</div>
				</div>
				<div className="border border-pink-gray rounded-xl p-5 md:p-10 order-1 lg:order-none ">
					<img
						className="w-full h-full object-contain"
						src={bakery1}
						alt="project screen"
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
