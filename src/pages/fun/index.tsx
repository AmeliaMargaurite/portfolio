import { HeadFC } from "gatsby";
import React from "react";
import { Layout } from "../../components/Layout";

export default function Fun() {
	return <Layout className="fun">Fun</Layout>;
}
export const Head: HeadFC = () => <title>Fun</title>;
