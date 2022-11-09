import { Link } from "gatsby";
import React from "react";
import { PagesType } from "../../types/PagesTypes";
import "./header.scss";
import Nav from "./Nav";

const pages: PagesType = [
	{ name: "home", url: "/" },
	{ name: "projects", url: "/projects" },
	{ name: "resume", url: "/resume" },
	// { name: "fun", url: "/fun" },
];

export const Header = () => {
	return (
		<header>
			<Link to="/" className="header__info">
				<span>
					<h1>Amelia</h1>
					<p>Australian with working rights in the Netherlands</p>
					<p>
						<em>Ik ben Nederlands aan het leren</em>
					</p>
				</span>
			</Link>
			<Nav pages={pages} />
		</header>
	);
};
