import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../../components/Layout";
import { Hobbies } from "../../components/Hobbies";
import { WorkHistory } from "../../components/WorkHistory";
import { SideProjects } from "../../components/SideProjects";
import "./resume.scss";

export default function Resume() {
	return (
		<Layout className="resume paper">
			<WorkHistory />
			<span className="divider" />
			<SideProjects />
			<span className="divider" />
			<Hobbies />
		</Layout>
	);
}

// export index;

export const Head: HeadFC = () => <title>Resume</title>;
