import React from "react";

interface MenuButtonProps {
	toggleMenu: () => void;
	open: boolean;
}

export function MenuButton({ toggleMenu, open }: MenuButtonProps) {
	return (
		<div
			className={`menu__button ${open ? "open" : ""}`}
			id="hamburger"
			onClick={toggleMenu}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}
