import { Link } from "gatsby";
import React from "react";
import { Text } from "../Typography";
import Nav from "./Nav";

interface HeaderProps {
	hideLogo: boolean;
}

export const Header = ({ hideLogo }: HeaderProps) => {
	return (
		<header>
			{!hideLogo ? (
				<Link to="/" className="header__info">
					<span>
						<h1>Amelia</h1>
						<p>Australian with working rights in the Netherlands</p>
						<p>
							<em>Ik ben Nederlands aan het leren</em>
						</p>
					</span>
				</Link>
			) : (
				<Text type="h1" className="intro__wrapper">
					Hoi,
					<br /> ik ben <span className="highlight">Amelia</span>
				</Text>
			)}
			<Nav />
		</header>
	);
};
