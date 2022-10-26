import React from "react";
import "../../scss/main.scss";

import { Header } from "../Header";
import { Footer } from "../Footer";
import "./layout.scss";

interface LayoutProps {
	children: any;
	className: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
	return (
		<div className={`${className} body`}>
			<div className="layout__wrapper">
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	);
};
