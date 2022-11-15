import * as React from "react";
import { Link, HeadFC } from "gatsby";
import { Layout } from "../../components/Layout";

const NotFoundPage = () => {
	return (
		<Layout className="error-page">
			Whoops, not sure what happene there.
			<Link to="/">Click here to go home</Link>
		</Layout>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
