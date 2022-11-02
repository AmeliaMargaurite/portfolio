import React from "react";
import { Link } from "gatsby";
import { ProjectProps, ProjectType } from "../../types/ProjectsTypes";
import "./project-folder.scss";

export const ProjectFolder = ({
	title,
	slug,
	liveURL,
	gitHubURL,
	description,
	bulletPoints,
	languages,
}: ProjectProps) => {
	return (
		<Link to={"/projects/" + slug} className="project-folder__wrapper">
			<span className="project-folder back">
				{languages && languages.length > 0 && (
					<span className="languages">
						{languages.map((language, key) => (
							<span key={key} className="leaflet">
								{language}
							</span>
						))}
					</span>
				)}
			</span>
			<span className="project-folder front">{title}</span>
		</Link>
	);
};
