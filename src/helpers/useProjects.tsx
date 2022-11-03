import React, { useState, useEffect } from "react";
import { ProjectsType } from "../types/ProjectsTypes";
import data from "../../static/projects.json";

export function useProjects() {
	const [projects, setProjects] = useState<ProjectsType | null>(null);
	console.log(data);
	useEffect(() => {
		const loadData = async () => {
			// const data = await import("../../projects.json");
			// const tempProjects = data?.projects;
			data ? setProjects(data?.projects) : setProjects(null);
		};

		loadData();
	}, []);

	return projects;
}
