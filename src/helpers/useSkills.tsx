import React, { useState, useEffect } from "react";

export const useSkills = () => {
	const [skills, setSkills] = useState<Array<string> | null>(null);
	const isBrowser = typeof window !== "undefined";

	useEffect(() => {
		if (isBrowser) {
			const windowUrl = window.location.search;
			const params = new URLSearchParams(windowUrl);
			const skillsParams = params.getAll("skill");
			const skillsStored = window.sessionStorage.getItem("skills");
      
			if (skillsStored) {
				setSkills(JSON.parse(skillsStored));
			}

			console.log(skills, "useEffect");

			if (!skillsStored && skillsParams.length > 0) {
				window.sessionStorage.setItem("skills", JSON.stringify(skillsParams));
				console.log(skillsParams, "start");
			}
		}
	}, []);

	return skills;
};
