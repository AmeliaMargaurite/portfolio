import React from "react";
import { PagesType } from "../../types/PagesTypes";
import "./header.scss";
import Nav from "./Nav";

const pages: PagesType = [
	{ name: "home", url: "/" },
	{ name: "projects", url: "/projects" },
	{ name: "resume", url: "/resume" },
];

export const Header = () => {
	return (
		<header>
			<span className="header__info">
				<h1>Amelia</h1>
				<p>Aussie with working rights in the Netherlands</p>
			</span>
			<Nav pages={pages} />
		</header>
	);
};
