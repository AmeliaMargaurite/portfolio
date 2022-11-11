import { Link } from "gatsby";
import React, { useContext, useEffect } from "react";
import { SkillsContext } from "../../contexts/SkillsContext";
import { LinkType } from "../../types/LinksTypes";
import { ProjectProps, ProjectType } from "../../types/ProjectsTypes";
import { SkillsType, SkillType } from "../../types/SkillsTypes";
import "./project-card.scss";

interface ProjectCardProps {
	project: ProjectProps;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const skills = useContext(SkillsContext);

	console.log({ skills });
	return (
		<span className={`project-card ${project?.old ? "old-code" : ""}`}>
			<Link to={"/projects/" + project.slug}>
				<span className="icon-circle__wrapper">
					<span className={`icon large ${project.icon}`}> </span>
				</span>
				<h3 className="title">{project.title}</h3>
				<p className="description">{project.description}</p>
				<span className="skills">
					{project.languages.map((skill, key) => {
						const highlight =
							skills !== null ? skills.includes(skill.toLowerCase()) : false;
						return <SkillPill key={key} skill={skill} highlight={highlight} />;
					})}
				</span>
			</Link>
		</span>
	);
};

interface SkillPillProps {
	skill: SkillType;
	highlight: boolean;
}

export default function SkillPill({ skill, highlight }: SkillPillProps) {
	return (
		<span className={`pill ${highlight ? "highlight" : ""}`}>{skill}</span>
	);
}