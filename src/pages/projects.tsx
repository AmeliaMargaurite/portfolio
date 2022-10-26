import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/Layout";

const IndexPage = () => {
	return <Layout className="projects">Projects</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Projects</title>;
