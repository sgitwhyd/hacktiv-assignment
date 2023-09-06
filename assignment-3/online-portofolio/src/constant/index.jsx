import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Interest from "../pages/Interest";
import Awards from "../pages/Awards";

import {
	SiCss3,
	SiFramer,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiJest,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiReactquery,
	SiRedux,
	SiSass,
	SiTailwindcss,
	SiTypescript,
	SiVuedotjs,
	SiNpm,
	SiYarn,
} from "react-icons/si";

import { MdDeveloperMode, MdWeb } from "react-icons/md";

export const routeList = [
	{
		name: "Home",
		url: "/",
		component: <Home />,
	},
	{
		name: "About",
		url: "/about",
		component: <About />,
	},
	{
		name: "Experience",
		url: "/experience",
		component: <Experience />,
	},
	{
		name: "Skills",
		url: "/skills",
		component: <Skills />,
	},
	{
		name: "Interest",
		url: "/interest",
		component: <Interest />,
	},
	{
		name: "Awards",
		url: "/awards",
		component: <Awards />,
	},
];

export const socials = {
	github: "https://github.com/sgitwhyd",
	telegram: "https://t.me/sgitwhyd",
	instagram: "https://instagram.com/sigtwhyu",
	linkedin: "https://www.linkedin.com/in/sigit-wahyudi/",
};

export const skills = [
	{ name: "React.Js", level: "Intermediate" },
	{ name: "Next.Js", level: "Intermediate" },
	{ name: "HTML", level: "Intermediate" },
	{ name: "CSS", level: "Intermediate" },
	{ name: "Javascript", level: "Intermediate" },
	{ name: "Typescript", level: "Intermediate" },
	{ name: "React Query", level: "Intermediate" },
	{ name: "Vue.Js", level: "Beginner" },
	{ name: "Tailwindcss", level: "Intermediate" },
	{ name: "Redux", level: "Intermediate" },
	{ name: "Node", level: "Intermediate" },
	{ name: "Jest", level: "Beginner" },
	{ name: "Github", level: "Intermediate" },
	{ name: "Sass", level: "Intermediate" },
	{ name: "Framer", level: "Beginner" },
	{ name: "Npm", level: "Intermediate" },
	{ name: "Yarn", level: "Intermediate" },
];

const iconSize = "100%";

export const Stacks = {
	"React.Js": <SiReact size={iconSize} />,
	"Next.Js": <SiNextdotjs size={iconSize} />,
	HTML: <SiHtml5 size={iconSize} />,
	CSS: <SiCss3 size={iconSize} />,
	Javascript: <SiJavascript size={iconSize} />,
	Typescript: <SiTypescript size={iconSize} />,
	"React Query": <SiReactquery size={iconSize} />,
	"Vue.Js": <SiVuedotjs size={iconSize} />,
	Tailwindcss: <SiTailwindcss size={iconSize} />,
	Redux: <SiRedux size={iconSize} />,
	Node: <SiNodedotjs size={iconSize} />,
	Github: <SiGithub size={iconSize} />,
	Jest: <SiJest size={iconSize} />,
	Sass: <SiSass size={iconSize} />,
	Framer: <SiFramer size={iconSize} />,
	Npm: <SiNpm size={iconSize} />,
	Yarn: <SiYarn size={iconSize} />,
};

export const experiences = [
	{
		title: "Freelance Front End Developer | Fastwork",
		date: "Nov 2020 - Present",
		type: "Part-time",
		summary:
			"As a freelance UI engineer, I have technical skills and knowledge of HTML and CSS in creating attractive and functional interfaces based on design. I have experience in working with various clients and always try to meet their needs and expectations with care so that now I have 10 clients who have used my services.",
	},
	{
		title: "Fullstack Developer Intern | SOC Media Group",
		date: "April 2023 - May 2023",
		type: "Internship",
		summary:
			"As a full stack web developer apprentice at SOC I get to experience working in a real and learning environment a lot about the technologies used by companies like laravel and livewire. on this occasion I and a group of interns made a web application called Mejeng and in development I was in charge of overseeing projects as well as assisting in the implementation of api to the front end as well as helping to create features on the backend this experience has given me a better understanding of how to work in a team as well as development flow from the start until it goes into production.",
	},
];

export const awards = [
	{
		title:
			"2nd place in the UI/UX competition at the 2022 BEM FKI Communication and Informatics Festival | Univesitas Muhammadiyah Surakarta",
	},
];

export const interests = [
	{
		name: "Web Development",
		icon: <MdWeb size={iconSize} className="text-3xl" />,
	},
	{
		name: "Mobile Development",
		icon: <MdDeveloperMode size={iconSize} className="text-3xl" />,
	},
];
