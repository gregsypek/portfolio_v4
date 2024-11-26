import { BsTwitterX } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";

export const navSocialLinks = [
	{
		href: "https://twitter.com/gregsypek",
		label: "twitter",
		icon: BsTwitterX,
	},
	{
		href: "https://www.linkedin.com/in/grzegorz-sypek-47472a194/",
		label: "linkedin",
		icon: LuLinkedin,
	},
	{
		href: "https://github.com/gregsypek",
		label: "github",
		icon: LuGithub,
	},
];

export const navLinks = [
	"Homepage",
	"About",
	"Projects",
	"Experience",
	"Contact",
];

export const skills = ["React", "React Native", "Node", "Next", "Typescript"];

export const aboutInfo = [
	{
		id: 1,
		content:
			"I am a frontend developer with five years of programming experience.	I specialize in React, React Native, and Vue.js. Recently, I have			been working as an application programmer, utilizing React Native, React, and TypeScript to develop applications for engineers.					Additionally, I worked as a junior developer in Rzeszów on a large e-commerce application.",
		className:
			"md:col-start-5 md:col-span-6 md:row-start-1 md:row-span-1 about-paragraph",
	},
	{
		id: 2,
		content:
			"I live in Mielec in Poland. I am a self-taught learner who is passionate about computers and coding. In my spare time, I enjoy listening to progressive rock, reading books, and	hiking in the mountains.",
		className:
			"md:col-start-6 md:col-span-5 md:row-start-3 md:row-span-1 about-paragraph ",
	},
	{
		id: 3,
		content:
			"Currently I am looking for a job as a web developer. I am confident that my skills and dedication make me an asset to any team. I am			willing to cooperate and continue my adventure with IT and develop further in this direction.",
		className:
			"md:col-start-6 md:col-span-5 md:row-start-5 md:row-span-1 about-paragraph",
	},
];
