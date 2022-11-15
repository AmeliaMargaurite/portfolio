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
// import "./index.scss";
import { SkillsContext } from "../contexts/SkillsContext";
import { useProjects } from "../helpers/useProjects";

const IndexPage = () => {
	const projects = useProjects();
	const projectsKeys = projects ? Object.keys(projects) : null;
	const skills = useContext(SkillsContext);

	return (
		<Layout className="home" hideLogo>
			<section className="spinning-info__wrapper">
				<div className="spinning-info">
					<span className="front">Web Developer</span>
					<span className="back">Enthusiastic learner</span>
					<span className="top">Creative</span>
					<span className="bottom">Determined</span>
				</div>
			</section>
			<section className="grid three second">
				<Text type="h3">My work in action</Text>{" "}
				<ul className="project-card__wrapper">
					{projectsKeys &&
						projectsKeys.map((id, key) => {
							const project = projects?.[id];
							if (project && key < 3) {
								return (
									<ProjectCard
										project={project}
										key={key}
										className={key === 2 ? "stretch" : ""}
									/>
								);
							}
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
			href={`./apple-touch-icon.png`}
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href={`./favicon-32x32.png`}
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href={`./favicon-16x16.png`}
		/>
		<link rel="manifest" href={`./site.webmanifest`} />
	</>
);
