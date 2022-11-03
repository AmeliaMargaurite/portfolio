import React, { RefObject, useRef, useState } from "react";
import { GatsbyLinkProps, Link } from "gatsby";
import { ProjectProps, ProjectType } from "../../types/ProjectsTypes";
import "./project-folder.scss";

export const ProjectFolder = ({
	title,
	slug,
	liveURL,
	gitHubURL,
	description,
	bulletPoints,
	languages,
}: ProjectProps) => {
	const [folderOpen, setFolderOpen] = useState<boolean>(false);

	const linkRef = useRef<any>(null);

	const handleClick = () => {
		if (!folderOpen) {
			setFolderOpen(!folderOpen);
			setTimeout(() => {
				if (linkRef && linkRef.current) {
					linkRef.current.click();
				}
			}, 500);
		}
	};
	return (
		<div
			className={`project-folder__wrapper ${folderOpen ? "open" : ""}`}
			onClick={handleClick}
		>
			<Link ref={linkRef} to={"/projects/" + slug} className="hidden-link" />

			<span className="project-folder back">
				{languages && languages.length > 0 && (
					<span className="languages">
						{languages.map((language, key) => (
							<span key={key} className="leaflet">
								{language}
							</span>
						))}
					</span>
				)}
			</span>
			<span className="project-folder front">{title}</span>

			{/* </Link> */}
		</div>
	);
};
