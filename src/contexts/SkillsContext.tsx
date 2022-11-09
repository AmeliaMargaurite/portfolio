import React, { createContext, useState, useEffect, useContext } from "react";
import { SkillsType, SkillType } from "../types/SkillsTypes";

const initialState = { skills: null, setSkills: () => {} };

export const SkillsContext = createContext<any>(initialState);

export const SkillsWrapper = ({ children }: any) => {
	const [skills, setSkills] = useState<SkillsType | null>(null);

	return (
		<SkillsContext.Provider value={{ skills, setSkills }}>
			{children}
		</SkillsContext.Provider>
	);
};
