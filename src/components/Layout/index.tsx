import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./layout.scss";
import "../../scss/main.scss";
import { SkillsWrapper } from "../../contexts/SkillsContext";

interface LayoutProps {
	children: any;
	className?: string;
	hideLogo?: boolean;
}

export const Layout = ({
	children,
	className = "",
	hideLogo = false,
}: LayoutProps) => {
	return (
		<SkillsWrapper>
			<div className={`${className} body auto-dark-mode `}>
				<div className="layout__wrapper">
					<Header hideLogo={hideLogo} />
					<main className={className ?? ""}>{children}</main>
					<Footer />
				</div>
			</div>
		</SkillsWrapper>
	);
};
