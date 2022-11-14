import React, { useContext } from "react";
import { ResumeSection } from "../ResumeSection";
import { Link } from "gatsby";
import { useProjects } from "../../helpers/useProjects";
import { Text } from "../Typography";
import { ProjectProps } from "../../types/ProjectsTypes";
import "./side-projects.scss";
import { SkillsContext } from "../../contexts/SkillsContext";
import { SkillsType } from "../../types/SkillsTypes";

export function SideProjects() {
	const projects = useProjects();
	const projectsKeys = projects ? Object.keys(projects) : null;
	const skills = useContext(SkillsContext);

	return (
		<ResumeSection className="side-projects">
			<Text type="h3">
				Side Projects{" "}
				<Link to="/projects" className="side-projects__link">
					View all
				</Link>
			</Text>
			<span className="content__wrapper">
				{projectsKeys ? (
					projectsKeys.map((id, key) => {
						const project: ProjectProps | null = projects?.[id] ?? null;
						return project && key < 3 ? (
							<Project key={key} {...project} skillsToHighlight={skills} />
						) : (
							<React.Fragment key={key} />
						);
					})
				) : (
					<p>No projects found</p>
				)}
			</span>
		</ResumeSection>
	);
}

const Project = ({
	title,
	slug,
	liveURL,
	gitHubURL,
	description,
	bulletPoints,
	skills,
	skillsToHighlight,
}: ProjectProps & { skillsToHighlight: SkillsType | null }) => {
	return (
		<div className="project">
			<Text type="h6" className="project__name">
				{title}
			</Text>
			<span className="links__wrapper">
				<p className="project__link">
					<a href={liveURL} target="_blank">
						<span className="icon live " />
						Live site
					</a>
				</p>

				<p className="project__link">
					<a href={gitHubURL} target="_blank">
						<span className="icon github " />
						GitHub Repo
					</a>
				</p>
			</span>
			<ul className="skills">
				{skills.map((skill, key) => {
					const highlight = skillsToHighlight
						? skillsToHighlight?.includes(skill.toLowerCase())
						: false;

					return (
						<li key={key} className={highlight ? "highlight" : ""}>
							{skill}
							{skills && key < skills.length - 1 ? "," : ""}
						</li>
					);
				})}
			</ul>
			<ul className="withPadding">
				{bulletPoints &&
					bulletPoints.map((point, key) => <li key={key}>{point}</li>)}
			</ul>
		</div>
	);
};
