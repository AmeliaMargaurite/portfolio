import React, { createContext, useState, useEffect, useContext } from "react";
import { SkillsType, SkillType } from "../types/SkillsTypes";

export const SkillsContext = createContext<SkillsType | null>(null);

export const SkillsWrapper = ({ children }: any) => {
	const [skills, setSkills] = useState<SkillsType | null>(null);
	useEffect(() => {
		const windowUrl = window.location.search;
		const params = new URLSearchParams(windowUrl);
		const skillsParams = params
			.getAll("skill")
			.map((skill) => skill.toLowerCase().split("-").join(" "));
		const skillsStored = window.localStorage.getItem("skills");
		const savedSkills = skillsStored ? JSON.parse(skillsStored) : null;

		// If URL contains skills and skills have already been saved to sessionStorage
		// If they don't match, new URL params should replace old saved skills
		if (skillsParams.length > 0 && !savedSkills) {
			window.localStorage.setItem("skills", JSON.stringify(skillsParams));
			setSkills(skillsParams);
		} else if (
			skillsParams.length > 0 &&
			savedSkills &&
			skillsParams.join() !== savedSkills.join()
		) {
			window.localStorage.setItem("skills", JSON.stringify(skillsParams));
			setSkills(skillsParams);
		} else if (skillsParams.length <= 0) {
			setSkills(savedSkills);
		}
	}, []);

	return (
		<SkillsContext.Provider value={skills}>{children}</SkillsContext.Provider>
	);
};
