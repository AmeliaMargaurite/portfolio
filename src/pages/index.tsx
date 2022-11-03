import React, { useEffect, useContext } from "react";
import { HeadFC, Link } from "gatsby";
import { Layout } from "../components/Layout";
import { ProjectCard } from "../components/ProjectCard";
import { LinkType, LinksType } from "../types/LinksTypes";
// import icon180 from "../images/apple-touch-icon.png";
// import icon32 from "../images/favicon-32x32.png";
// import icon16 from "../images/favicon-16x16.png";
// import iconManifest from "../images/site.webmanifest";
import { Text } from "../components/Typography";
import "./index.scss";
import { SkillsContext } from "../contexts/SkillsContext";

const links: LinksType = [
	{
		text: "Task Manager with Calendar",
		url: "/projects/task-manager",
		description:
			"Decluttered but powerful task manager to actually get work done.",
		color: "--mix-colors-cyan",
		icon: "tasks",
		skills: [
			"html",
			"javascript",
			"web components",
			"MySql",
			"phpmyadmin",
			"php",
			"scss",
		],
	},
	{
		text: "IND Appointment Checker",
		url: "/projects/ind-appointment-checker",
		description:
			"An easy to use tool to see an overview of available appointments at IND desks",
		color: "--mix-colors-aqua",
		icon: "appointment",
		skills: [
			"html",
			"javascript",
			"web components",
			"expressjs",
			"node",
			"scss",
		],
	},
	{
		text: "Retail store with Laravel backend",
		url: "/projects/walkers-creek",
		description:
			"Custom built retail store for Australian camping goods, with Laravel backend added at the end of the project",
		color: "--mix-colors-green",
		icon: "shop",
		skills: [
			"html",
			"javascript",
			"web components",
			"Laravel",
			"php",
			"phpmyadmin",
			"sql",
			"cpanel",
			"scss",
		],
	},
];

const IndexPage = () => {
	const { skills, setSkills } = useContext(SkillsContext);
	useEffect(() => {}, [skills, setSkills]);
	// setSkills(["boop"]);
	// const skills = [""];
	console.log({ skills });

	return (
		<Layout className="home">
			<section>
				<Text type="h1">About me</Text>
				<span className="wrapper">
					<ul className="withPadding">
						<li>Continual learning, continual improvement</li>
						<li>Passion for clean and accessible UI/UX </li>
						<li>Coffee is everything</li>
					</ul>
				</span>
			</section>
			<section>
				<Text type="h3">My work in action</Text>{" "}
				<ul className="project-card__wrapper">
					{links.map((link: LinkType) => {
						return <ProjectCard link={link} key={link.url} skills={skills} />;
					})}
				</ul>
				<Link to="/projects">
					View more of my projects <span className="icon thin-arrow right" />
				</Link>
			</section>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<>
		<title>Home Page</title>
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href={`../apple-touch-icon.png`}
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href={`../favicon-32x32.png`}
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href={`../favicon-16x16.png`}
		/>
		<link rel="manifest" href={`../site.webmanifest`} />
	</>
);
