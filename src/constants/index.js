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
		href: "https://www.linkedin.com/in/grzegorz-sypek/",
		label: "linkedin",
		icon: LuLinkedin,
	},
	{
		href: "https://github.com/gregsypek",
		label: "github",
		icon: LuGithub,
	},
];

export const navLinks = ["Home", "About", "Projects", "Experience", "Contact"];

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

export const projects = [
	{
		id: 1,
		title: "Bakery",
		images: [
			"./projects/bakery1.png",
			"./projects/bakery2.png",
			"./projects/bakery3.png",
			"./projects/bakery4.png",
			"./projects/bakery5.png",
			"./projects/bakery6.png",
		],
		desc: "Intuitive and modern web-based bakery management system. Technologies: React, Styled Components, React Router, React icons, React Query, React Hot Toast, React Hook Form, reCharts, React Error Boundary. The app gives a bakery owner the ability to manage all aspects of orders and maintaining products plus app settings. The dashboard provides the user an overview of orders using charts including sales, category, progress rate, and orders activities for the current day.",
		tags: ["React", "React Router", "Styled Components", "React Query", "2023"],
		live: "https://bakery-corp.netlify.app/",
		github: "https://github.com/gregsypek/bakery",
	},
	{
		id: 2,
		title: "Pizzarella",
		images: [
			"./projects/pizzarella1.png",
			"./projects/pizzarella2.png",
			"./projects/pizzarella3.png",
			"./projects/pizzarella4.png",
			"./projects/pizzarella5.png",
			"./projects/pizzarella6.png",
		],
		fullView: "./projects/pizzarella_full.png",
		desc: "React Application with React Router, Tailwind CSS and Redux. Menu load from an API. State is manage with Redux Toolkit. I use Redux Thunks, useFetcher, loaders and actions",
		tags: ["React", "React Router", "Tailwind", "Redux", "2023"],
		live: "https://pizzarella.netlify.app/",
		github: "https://github.com/gregsypek/pizzarella",
	},
	{
		id: 3,
		title: "Miodek_v4",
		images: [
			"./projects/miodek1.png",
			"./projects/miodek2.png",
			"./projects/miodek3.png",
		],
		fullView: "./projects/miodek_full.png",

		desc: "Full-stack React E-commerce application with integrated Stripe payment processing. Boasting a modern design and comprehensive functionality, it was built using Next.js and Sanity technologies. The Stripe integration facilitates online payments, and the entire application is styled using the Tailwind CSS library.",
		tags: ["React", "Next", "Tailwind", "Stripe", "Sanity", "2023"],
		live: "https://miodek4.vercel.app/",
		github: "https://github.com/gregsypek/miodek4",
	},
	{
		id: 4,
		title: "Schody Zaliński",
		images: [
			"./projects/schody1.png",
			"./projects/schody2.png",
			"./projects/schody3.png",
			"./projects/schody4.png",
			"./projects/schody5.png",
		],
		fullView: "./projects/schody_full.png",
		desc: "I designed and developed the website for Schody Zaliński using WordPress. This project involved creating a custom logo, crafting the content, and designing the entire layout. The site showcases a range of wooden staircases, highlighting both modern and classic designs. Key features include detailed product descriptions, high-quality images, and a user-friendly interface that ensures a seamless browsing experience. The focus was on blending aesthetic appeal with functionality to enhance user engagement and satisfaction.",
		tags: ["Wordpress", "PHP", "MySQL", "Scss", "2024"],
		live: "https://schodyzalinski.pl",
	},
	{
		id: 5,
		title: "MJurkowska",
		images: [
			"./projects/mjurkowska1.png",
			"./projects/mjurkowska2.png",
			"./projects/mjurkowska3.png",
			"./projects/mjurkowska4.png",
			"./projects/mjurkowska5.png",
		],
		fullView: "./projects/mjurkowska_full.png",
		desc: "Website made for fictional company. Fully responsive with an easy to manage CSS variables structure. Languages: HTML, Vanilia Js, CSS",
		tags: ["JavaScript", "HTML", "CSS", "2022"],
		live: "https://gregsypek.github.io/MJurkowska/",
		github: "https://github.com/gregsypek/MJurkowska",
	},
	{
		id: 6,
		title: "Ursus",
		images: [
			"./projects/ursus1.png",
			"./projects/ursus2.png",
			"./projects/ursus3.png",
			"./projects/ursus4.png",
			"./projects/ursus5.png",
			"./projects/ursus6.png",
			"./projects/ursus7.png",
			"./projects/ursus8.png",
			"./projects/ursus9.png",
		],
		desc: "Full Stack App with a login and register option created only for learning purposes and of course for fun. All pictures and information I copied from the original URSUS website. For authentication, I use JSON Web Tokens. The backend is built in Node.js with express and mongoose. Data is sent to my MongoDB account. I handle errors and display them by vuetify template v-error. App includes three roles: admin editor and user with different privilege. Languages: Vue, Node Express, MongoDB, Vuex, Bootstrap, Vuetify",
		tags: ["Vue", "Node", "Express", "MongoDB", "Bootstrap", "Vuex", "2022"],
		live: "https://ursus-api.onrender.com/",
		github: "https://github.com/gregsypek/ursus2",
	},
];

export const experience = [
	{
		id: 0,
		year: "2023",
		title: "React Native Developer",
		name: "SOLVE-NET",
		desc: "I have experience working with technologies such as React, React Native, TypeScript, and Node.js. I enhanced an existing mobile app for the construction industry by adding features, optimizing functionality, and developing a Node.js program for language translation. My experience at SOLVE-NET enriched my skills in project development using tools like Redmine.",
		languages: ["React", "React Native", "Typescript", "Node"],
	},
	{
		id: 1,
		year: "2022",
		title: "Junior Application Developer",
		name: "ZETO",
		desc: "I enjoyed working on an extensive marketplace application using Vue.js and Next.js. I utilized project management tools like Azure DevOps and Redmine, collaborating in a team environment with both frontend and backend developers. Our primary focus was implementing fixes, optimizing, and expanding platform functionalities, significantly contributing to product improvement.",
		languages: ["React", "Vue", "Nuxt", "Bootstrap", "Scss"],
	},
	{
		id: 2,
		year: "2021",
		title: "Fronted Developer",
		name: "FREELANCE",
		desc: "At the start of my freelance journey, I developed websites for my first clients, building the foundation for my web development skills.",
		languages: ["JavaScript", "Scss", "Php"],
	},
];

export const skillColors = [
	{ background: "transparent", color: "#e7e4e4", border: "#e7e4e4" },
	{ background: "#18457C", color: "#D2D2D2", border: "transparent" },
	{ background: "#58324a", color: "#D2D2D2", border: "transparent" },
	{ background: "transparent", color: "#e7e4e4", border: "transparent" },
	{ background: "#5b6067", color: "black", border: "transparent" },
	{ background: "#9b8595", color: "#0A0C10", border: "transparent" },
];
