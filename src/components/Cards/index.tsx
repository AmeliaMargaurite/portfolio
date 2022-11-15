import React from "react";
import { useProjects } from "../../helpers/useProjects";
import { ProjectCard } from "../ProjectCard";

export const Cards = () => {
	const projects = useProjects();
	const projectsKeys = projects ? Object.keys(projects) : null;

	return (
		<div className="cards__wrapper">
			{projectsKeys ? (
				projectsKeys.map((id, key) => {
					const project = projects?.[id];
					if (project) {
						return <ProjectCard project={project} key={key} />;
					}
				})
			) : (
				<p>No projects found</p>
			)}
		</div>
	);
};
