import * as React from "react";
import { Link, HeadFC } from "gatsby";
import { Layout } from "../../components/Layout";

const NotFoundPage = () => {
	return (
		<Layout className="error-page">
			Whoops <Link to="/">Go home</Link>
		</Layout>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
