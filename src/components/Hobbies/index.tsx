import React from "react";
import { ResumeSection } from "../ResumeSection";
import { Text } from "../Typography";

export function Hobbies() {
	return (
		<ResumeSection className="hobbies">
			<Text type="h3">Hobbies</Text>
			<span className="content__wrapper">
				<ul className="withPadding">
					<li>Making things -- eg knitting, crochet, programming</li>
					<li>Reading -- science fiction, horror</li>
					<li>Gaming -- PC, Switch, board games, jigsaws, cards</li>
				</ul>
			</span>
		</ResumeSection>
	);
}
