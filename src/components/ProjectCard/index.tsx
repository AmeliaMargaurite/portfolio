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
	const { skills, setSkills }: { skills: SkillsType | null; setSkills: any } =
		useContext(SkillsContext);
	useEffect(() => {}, [skills, setSkills]);
	console.log({ skills });
	return (
		<li className="project-card">
			<Link to={project.slug}>
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
		</li>
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
