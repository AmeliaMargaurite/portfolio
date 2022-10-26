import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/Layout";

const IndexPage = () => {
	return (
		<Layout className="resume">
			<h1>Amelia</h1>
			{/* <WorkExperience />
			<SideProjects />
			<Hobbies /> */}
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resume</title>;
