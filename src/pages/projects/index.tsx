import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../../components/Layout";
import { Text } from "../../components/Typography";
import { ProjectFolders } from "../../components/ProjectFolders";

const IndexPage = () => {
	return (
		<Layout className="projects">
			<Text type="h1">Projects</Text>
			<ProjectFolders />
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Projects</title>;
