import React, { useState, useEffect } from "react";
import { ProjectsType } from "../types/ProjectsTypes";
import data from "../../static/projects.json";

export function useProjects() {
	const [projects, setProjects] = useState<ProjectsType | null>(null);
	useEffect(() => {
		const loadData = async () => {
			data ? setProjects(data?.projects) : setProjects(null);
		};

		loadData();
	}, []);

	return projects;
}
