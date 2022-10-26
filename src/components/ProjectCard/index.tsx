import { Link } from "gatsby";
import React, { JSXElementConstructor, ReactElement } from "react";
import { LinkType } from "../../types/LinksTypes";
import "./project-card.scss";
import SkillPill from "./SkillPill";

interface ProjectCardProps {
	link: LinkType;
}

export const ProjectCard = ({ link }: ProjectCardProps) => {
	return (
		<li className="project-card">
			<Link to={link.url} >
				<span className="icon-circle__wrapper">
					<span className={`icon large ${link.icon}`}> </span>
				</span>
				<h3 className="title">{link.text}</h3>
				<p className="description">{link.description}</p>
				<span className="skills">
					{link.skills.map((skill, key) => (
						<SkillPill key={key} skill={skill} />
					))}
				</span>
			</Link>
		</li>
	);
};
