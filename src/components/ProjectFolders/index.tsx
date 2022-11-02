import React from "react";
import { useProjects } from "../../helpers/useProjects";
import { ProjectFolder } from "../ProjectFolder";
import "./project-folders.scss";

export const ProjectFolders = () => {
	const projects = useProjects();
	const projectsKeys = projects ? Object.keys(projects) : null;
	return (
		<div className="project-folders__wrapper">
			{projectsKeys ? (
				projectsKeys.map((id, key) => {
					const project = projects?.[id] ?? null;
					return project ? <ProjectFolder key={key} {...project} /> : <></>;
				})
			) : (
				<p>No projects found</p>
			)}
		</div>
	);
};
