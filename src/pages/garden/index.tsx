import { HeadFC, Link } from "gatsby";
import React from "react";
import { Layout } from "../../components/Layout";

export default function Garden() {
	return (
		<Layout className="garden">
			<section>
				<h1>Digital Garden</h1>
				<p>
					My first, very small step into the world of Digital Gardens and
					learning in public.
				</p>
				<Link to="/garden/debounce-and-throttle">Debounce and Throttle</Link>
				<Link to="/garden/threeJS">ThreeJS</Link>
			</section>
		</Layout>
	);
}
export const Head: HeadFC = () => <title>Garden</title>;
