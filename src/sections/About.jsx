import { Link as ScrollLink } from "react-scroll";
import Button from "../components/Button";
import { aboutInfo } from "../constants";

const About = () => {
	return (
		<div className="max-container before:-translate-x-[15%] before:-translate-y-[30%] lg:before:-translate-x-[40%] relative about-gradient">
			<div className="aspect-square inline-block border-2 border-white rounded-md md:hidden">
				<h1 className="section-header relative z-20 text-left align-middle p-4 ">
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
				<div className="about-square2  "></div>

				{aboutInfo.map((info) => (
					<p key={info.id} className={`${info.className} text-dark-grey`}>
						{info.content}
					</p>
				))}
				<div className=" col-start-6 row-start-6 col-span-5 flex justify-end mt-12 z-20 relative ">
					<ScrollLink to="Contact" smooth={true} duration={500} className="">
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
