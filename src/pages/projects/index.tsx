import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../../components/Layout";
import { Text } from "../../components/Typography";
import { Cards } from "../../components/Cards";

const IndexPage = () => {
	return (
		<Layout className="projects">
			<Text type="h1">Projects</Text>
			<Cards />
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Projects</title>;
