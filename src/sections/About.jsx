import "./about.scss";
import { Link as ScrollLink } from "react-scroll";
import Button from "../components/Button";
// import { aboutInfo } from "../constants";

const About = () => {
	return (
		<>
			<div className="max-container py-10  h-screen ">
				<div className="aspect-square inline-block border border-white rounded-md md:hidden">
					<h1 className="text-[36px] sm:text-[48px] md:text-[68px] sm:leading-none xl:text-8xl leading-10 font-bold bg-text-gradient bg-clip-text text-transparent relative z-20  text-left align-middle p-4 translate-x-10 ">
						About <br /> Me
					</h1>
				</div>
				<div className="flex pt-10 flex-col max-md:my-10 max-md:space-y-10  md:grid gap-[1vw] lg:gap-[2vw]">
					{/* SQUARE 1  */}
					<div className=" relative aspect-square border border-white rounded-md hidden md:inline-block md:row-start-0 md:row-span-3 md:col-start-0 md:col-span-3">
						<h1 className="text-[36px] sm:text-[48px] md:text-[68px] sm:leading-none xl:text-8xl leading-10 font-bold bg-text-gradient bg-clip-text text-transparent relative z-20  text-left align-middle p-4 translate-x-10 ">
							About <br /> Me
						</h1>
					</div>
					{/* SQUARE 2  */}
					<div className="hidden relative aspect-square md:block border border-white md:col-start-2 md:col-span-3 md:row-start-4 md:row-span-3 bg-no-repeat bg-contain bg-[url('/about.png')] -translate-y-[100px] rounded-md"></div>
					<p className="md:col-start-5 md:col-span-6 md:row-start-1 md:row-span-1  text-base lg:text-xl xl:text-2xl leading-tight text-gray xl:leading-normal">
						I am a frontend developer with five years of programming experience.
						I specialize in React, React Native, and Vue.js. Recently, I have
						been working as an application programmer, utilizing React Native,
						React, and TypeScript to develop applications for engineers.
						Additionally, I worked as a junior developer in Rzeszów on a large
						e-commerce application.
					</p>
					<p className="md:col-start-6 md:col-span-5 md:row-start-3 md:row-span-1  text-base leading-tight text-gray lg:text-xl xl:text-2xl xl:leading-normal">
						I live in Mielec in Poland. I am a self-taught learner who is
						passionate about computers and coding. In my spare time, I enjoy
						listening to progressive rock, reading books, and hiking in the
						mountains
					</p>
					<p className="md:col-start-6 md:col-span-5 md:row-start-5 md:row-span-1   text-base lg:text-xl xl:text-2xl leading-tight text-gray xl:leading-normal">
						Currently I am looking for a job as a web developer. I am confident
						that my skills and dedication make me an asset to any team. I am
						willing to cooperate and continue my adventure with IT and develop
						further in this
					</p>
					{/* { {aboutInfo.map((info) => (
						<p key={info.id}>{info.content}</p>
					))} } */}
					<div className=" col-start-6 row-start-6 col-span-5 flex justify-end mt-12">
						<ScrollLink to="Contact" smooth={true} duration={500}>
							<Button type="red" className="rounded-sm">
								See the Latest Works
							</Button>
						</ScrollLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
