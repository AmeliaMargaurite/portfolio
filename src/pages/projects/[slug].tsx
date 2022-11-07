import { HeadFC } from "gatsby";
import React from "react";
import { Layout } from "../../components/Layout";
import Picture from "../../components/Picture";
import { Text } from "../../components/Typography";
import { useProjects } from "../../helpers/useProjects";
import NotFoundPage from "../404";
import "./index.scss";

export default function ProjectTemplate({ params }: any) {
	const projects = useProjects();
	const project = projects?.[params?.slug] ?? null;
	console.log({ project });
	if (project) {
		return (
			<Layout className="project__page paper">
				<span className="title__wrapper">
					<Picture name="t" alt="t" className="hero" />
					<Text type="h1">{project?.title}</Text>
				</span>

				<span className="links__wrapper">
					<a href={project?.liveURL} target="_blank">
						<span className="icon live large" />
						Link to live website
					</a>

					<a href={project?.gitHubURL} target="_blank">
						<span className="icon github large" />
						Link to GitHub Repo
					</a>
				</span>

				{project?.languages ? (
					<div className="languages">
						<p>Languages used:</p>
						<ul className="withPadding">
							{project.languages.map((language, key) => (
								<li key={key}>{language}</li>
							))}
						</ul>
					</div>
				) : (
					<></>
				)}

				<span className="content__wrapper">
					<p>
						<strong>Problem:</strong>{" "}
						<span dangerouslySetInnerHTML={{ __html: project?.problem }} />
					</p>
					<p>
						<strong>Goal:</strong>{" "}
						<span dangerouslySetInnerHTML={{ __html: project?.goal }} />
					</p>
					<p>
						<strong>Process:</strong>{" "}
						<span dangerouslySetInnerHTML={{ __html: project?.process }} />
					</p>
					<p>
						<strong>Reflection:</strong>{" "}
						<span dangerouslySetInnerHTML={{ __html: project?.reflection }} />
					</p>
				</span>
			</Layout>
		);
	} else return <NotFoundPage />;
}

export const Head: HeadFC = ({ params }) => {
	const projects = useProjects();
	const project = projects?.[params?.slug] ?? null;
	return <title>{project?.title ?? "Project"}</title>;
};
