import React, { useEffect } from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/Layout";
import { ProjectCard } from "../components/ProjectCard";
import { LinkType, LinksType } from "../types/LinksTypes";

const links: LinksType = [
	{
		text: "Task Manager with Calendar",
		url: "/task-manager",
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
		url: "/ind-appointment-checker",
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
		url: "/walkers-creek",
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
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		console.log({ prefersDark });
		if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
			// set_themeMode(savedTheme);
			document.body.className = savedTheme + "Mode";
		} else if (prefersDark) {
			// set_themeMode("dark");
			document.body.className = "darkMode";
		}
	});
	return (
		<Layout className="home">
			{/* <Introduction /> */}
			<ul className="project-card__wrapper">
				{links.map((link: LinkType) => {
					return <ProjectCard link={link} key={link.url} />;
				})}
			</ul>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
