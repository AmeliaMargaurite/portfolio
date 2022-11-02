import React, { createContext, useState, useEffect, useContext } from "react";

const initialState = { skills: null, setSkills: () => {} };

export const SkillsContext = createContext<any>(initialState);

export const SkillsWrapper = ({ children }: any) => {
	const [skills, setSkills] = useState<any>(initialState);

	return (
		<SkillsContext.Provider value={{ skills, setSkills }}>
			{children}
		</SkillsContext.Provider>
	);
};
