import React, {
	useEffect,
	useRef,
	createContext,
	useState,
	useContext,
} from "react";
import "../../scss/main.scss";

import { Header } from "../Header";
import { Footer } from "../Footer";
import "./layout.scss";
import { SkillsContext, SkillsWrapper } from "../../contexts/SkillsContext";

interface LayoutProps {
	children: any;
	className?: string;
}

// const initialState = { skills: null, setSkills: () => {} };

// export const SkillsContext = createContext<{
// 	skills: Array<string> | null;
// 	setSkills: (e: Array<string> | null) => void;
// }>(initialState);

export const Layout = ({ children, className = "" }: LayoutProps) => {
	const { skills, setSkills } = useContext(SkillsContext);
	// console.log({ context });

	useEffect(() => {
		const windowUrl = window.location.search;
		const params = new URLSearchParams(windowUrl);
		const skillsParams = params.getAll("skill");
		const skillsStored = window.sessionStorage.getItem("skills");
		const savedSkills = skillsStored ? JSON.parse(skillsStored) : null;

		console.log(skillsParams);
		// If URL contains skills and skills have already been saved to sessionStorage
		// If they don't match, new URL params should replace old saved skills
		if (
			(!skillsStored && skillsParams.length > 0) ||
			(skillsParams && !savedSkills) ||
			skillsParams !== savedSkills
		) {
			window.sessionStorage.setItem("skills", JSON.stringify(skillsParams));
			setSkills(skillsParams);
		} else if (skillsStored) {
			setSkills(skillsParams);
		}
	}, [setSkills]);

	useEffect(() => {
		setSkills(["here", "now"]);
	}, [skills]);

	console.log(skills, "layout");
	return (
		<SkillsWrapper>
			<div className={`${className} body auto-dark-mode `}>
				<div className="layout__wrapper">
					<Header />
					<main className={className ?? ""}>{children}</main>
					<Footer />
				</div>
			</div>
		</SkillsWrapper>
	);
};
