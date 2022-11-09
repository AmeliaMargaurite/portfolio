import React, {
	useEffect,
	useRef,
	createContext,
	useState,
	useContext,
	useMemo,
} from "react";
import "../../scss/main.scss";

import { Header } from "../Header";
import { Footer } from "../Footer";
import "./layout.scss";
import { SkillsContext, SkillsWrapper } from "../../contexts/SkillsContext";
import { SkillsType } from "../../types/SkillsTypes";

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
