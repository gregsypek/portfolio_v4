import "./about.scss";
import { Link as ScrollLink } from "react-scroll";
import Button from "../components/Button";
import { aboutInfo } from "../constants";

const About = () => {
	return (
		<>
			<div className="max-container py-10 ">
				<div className="aspect-square inline-block border border-white rounded-md">
					<h1 className="text-[36px] sm:text-[48px] md:text-[68px] sm:leading-none xl:text-8xl  leading-10  font-bold bg-text-gradient bg-clip-text text-transparent relative z-20  text-left  align-middle  p-4 translate-x-10 ">
						About <br /> Me
					</h1>
				</div>
				<div className="flex flex-col my-10 space-y-10">
					{aboutInfo.map((info) => (
						<p key={info.id}>{info.content}</p>
					))}
				</div>
				<button className="">
					<ScrollLink to="Contact" smooth={true} duration={500}>
						<Button type="red" className="rounded-sm">
							See the Latest Works
						</Button>
					</ScrollLink>
				</button>
			</div>
		</>
	);
};

export default About;
