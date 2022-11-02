import { Link } from "gatsby";
import React from "react";
import { LinkType } from "../../types/LinksTypes";
import { SkillType } from "../../types/SkillsTypes";
import "./project-card.scss";

interface ProjectCardProps {
	link: LinkType;
	skills: Array<string> | null;
}

export const ProjectCard = ({ link, skills }: ProjectCardProps) => {
	return (
		<li className="project-card">
			<Link to={link.url}>
				<span className="icon-circle__wrapper">
					<span className={`icon large ${link.icon}`}> </span>
				</span>
				<h3 className="title">{link.text}</h3>
				<p className="description">{link.description}</p>
				<span className="skills">
					{link.skills.map((skill, key) => {
						const highlight = skills
							? skills?.includes(skill.toLowerCase())
							: false;
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
