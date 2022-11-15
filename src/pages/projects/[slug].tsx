import { HeadFC, Link } from "gatsby";
import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../../components/Layout";
import Picture from "../../components/Picture";
import { Text } from "../../components/Typography";
import { SkillsContext } from "../../contexts/SkillsContext";
import { useProjects } from "../../helpers/useProjects";
import { ProjectProps, ProjectType } from "../../types/ProjectsTypes";

export default function ProjectTemplate({ params }: any) {
	const [loading, setLoading] = useState(true);
	const [project, setProject] = useState<ProjectProps | null | "not_found">(
		null
	);
	const projects = useProjects();
	const projectKeys = projects ? Object.keys(projects) : null;
	useEffect(() => {
		if (projects) {
			const project = projects?.[params?.slug] ?? null;
			if (project) {
				setLoading(false);
				setProject(project);
			} else {
				setLoading(false);
				setProject("not_found");
			}
		}
	}, [projects, params]);

	if (loading)
		return (
			<Layout>
				<div>Loading</div>
			</Layout>
		);

	if (project === "not_found")
		return (
			<Layout>
				<div>Project not found</div>
			</Layout>
		);

	if (project !== null && !loading) {
		return (
			<Layout className="project__page paper">
				<span className="title__wrapper">
					<Picture
						name={project?.img_src}
						alt={project?.img_alt}
						className="hero"
						width="auto"
					/>
					<Text type="h1">{project?.title}</Text>
				</span>

				<span className="links__wrapper">
					{project?.liveURL ? (
						<a href={project?.liveURL} target="_blank">
							<span className="icon live large" />
							Link to live website
						</a>
					) : (
						<></>
					)}
					{project?.gitHubURL ? (
						<a href={project?.gitHubURL} target="_blank">
							<span className="icon github large" />
							Link to GitHub Repo
						</a>
					) : (
						<></>
					)}
				</span>

				<SkillsComponent project={project} />

				{projects && (
					<div className="projects-list">
						<h3>Other projects</h3>
						<ul className="withPadding">
							{projectKeys &&
								projectKeys.map((id, key) => {
									const otherProject = projects[id] ?? null;
									if (otherProject?.slug !== project?.slug)
										return (
											<li key={key}>
												<Link to={"/projects/" + otherProject?.slug}>
													{otherProject?.title}
												</Link>
											</li>
										);
								})}
						</ul>
					</div>
				)}

				<span className="content__wrapper">
					{project?.challenge && (
						<p>
							<strong>Challenge:</strong>{" "}
							<span dangerouslySetInnerHTML={{ __html: project?.challenge }} />
						</p>
					)}
					{project?.goal && (
						<p>
							<strong>Goals:</strong>{" "}
							<span dangerouslySetInnerHTML={{ __html: project?.goal }} />
						</p>
					)}
					{project?.process && (
						<p>
							<strong>Process:</strong>{" "}
							<span dangerouslySetInnerHTML={{ __html: project?.process }} />
						</p>
					)}
					{project?.results && (
						<p>
							<strong>Results:</strong>{" "}
							<span dangerouslySetInnerHTML={{ __html: project?.results }} />
						</p>
					)}
					{project?.reflection && (
						<p>
							<strong>Reflection:</strong>{" "}
							<span dangerouslySetInnerHTML={{ __html: project?.reflection }} />
						</p>
					)}
				</span>
			</Layout>
		);
	}
}

interface SkillsComponentProps {
	project: ProjectProps;
}

const SkillsComponent = ({ project }: SkillsComponentProps) => {
	const skills = useContext(SkillsContext);
	console.log({ skills });

	if (project?.skills) {
		return (
			<div className="languages">
				<p>Skills used:</p>
				<ul className="withPadding">
					{project.skills.map((skill, key) => {
						const highlight =
							skills !== null ? skills.includes(skill.toLowerCase()) : false;
						return (
							<li className={highlight ? "highlight" : ""} key={key}>
								{skill}
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else return <></>;
};

export const Head: HeadFC = ({ params }) => {
	const projects = useProjects();
	const project = projects?.[params?.slug] ?? null;
	return <title>{project?.title ?? "Project"}</title>;
};
