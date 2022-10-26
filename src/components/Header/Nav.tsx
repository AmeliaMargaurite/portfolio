import { Link } from "gatsby";
import React, { useState } from "react";
import { PagesType, PageType } from "../../types/PagesTypes";
import { MenuButton } from "./MenuButton";
import "./nav.scss";

interface NavProps {
	pages: PagesType;
}

export default function Nav({ pages }: NavProps) {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<nav className={menuOpen ? "open" : ""}>
			<MenuButton toggleMenu={toggleMenu} open={menuOpen} />
			<ul>
				{pages.map((page: PageType) => (
					<li key={page.url}>
						<Link to={page.url} activeClassName="active">
							{page.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
