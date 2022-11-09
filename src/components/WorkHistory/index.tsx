import React, { useContext } from "react";
import { SkillsContext } from "../../contexts/SkillsContext";
import { JobsType, JobType } from "../../types/JobsTypes";
import { ResumeSection } from "../ResumeSection";
import { Text } from "../Typography";
import "./work-history.scss";

const jobs: JobsType = [
	{
		company: "Compare the Market Australia",
		jobTitle: "Junior Web Developer",
		timeRange: "Jan 2021 -- Mar 2022",
		skills: [
			"AGILE",
			"GITHUB",
			"REACT",
			"TYPESCRIPT",
			"STYLED COMPONENT",
			"FIGMA",
		],
		responsibilities: [
			"Following Figma UI designs, built with teammate reusable React pages and components including flow management and data structuring on large questionnaire form",
			"Built new, and refactored existing, reusable React user input and typography components ",
			"Improved usability and form completability by correcting user inputs used and removed arbitrary dropdown value limits",
			"Transitioned to fully remote and moved overseas",
		],
	},
	{
		company: "Small Business Owner",
		jobTitle: "Artist & Web developer",
		timeRange: "Dec 2014 -- Jan 2021",
		skills: [
			"PHP",
			"WORDPRESS",
			"JAVASCRIPT",
			"FIGMA",
			"ADOBE PHOTOSHOP",
			"ILLUSTRATOR",
			"PREMIERE PRO",
			"SCSS",
		],
		responsibilities: [
			"Worked with customer to design and build WordPress website with WooCommerce store",
			"Improved business reach following SEO best practises, ensuring customer site shown on first page of Google searches regarding their products and services in Australia",
			"Created digital and physical portrait artworks based on customer supplied data",
			"Designed and conducted classes art classes for adults and children, online and in person",
		],
	},
	{
		company: "Defence Bank Australia",
		jobTitle: "Bank Manager",
		timeRange: "Jul 2013 -- Dec 2014",
		responsibilities: [
			"Improved staff knowledge about legal requirements, quality assurance, and product knowledge through group and one-on-one training",
			"Improved quality of data recording, correct identification collection, and providing of correct products through research and implementing structured procedures",
			"Reduced time wastage on reoccurring processes by creating simple, reusable document templates",
			"Involved in hiring and training new staff member",
		],
	},
];

export function WorkHistory() {
	const skills = useContext(SkillsContext);
	return (
		<ResumeSection className="work-history">
			<Text type="h3">Work History</Text>
			<span className="content__wrapper">
				{jobs.map((job, key) => (
					<JobSection key={key} job={job} skillsToHighlight={skills} />
				))}
			</span>
		</ResumeSection>
	);
}

interface JobSectionProps {
	job: JobType;
	skillsToHighlight?: Array<string> | null;
}

const JobSection = ({ job, skillsToHighlight }: JobSectionProps) => {
	return (
		<div className="jobs-section">
			<span className="title__wrapper">
				<Text type="h4" className="company">
					{job.company}
				</Text>
				|
				<Text type="p" bold className="job-title">
					{job.jobTitle}
				</Text>
				|<p className="time-range">{job.timeRange}</p>
			</span>
			{job?.skills && (
				<ul className="skills">
					{job?.skills.map((skill, key) => {
						const highlight = skillsToHighlight
							? skillsToHighlight?.includes(skill.toLowerCase())
							: false;

						return (
							<li key={key} className={highlight ? "highlight" : ""}>
								{skill}
								{job?.skills && key < job?.skills.length - 1 ? "," : ""}
							</li>
						);
					})}
				</ul>
			)}
			<ul className="responsibilities withPadding">
				{job.responsibilities.map((point, key) => (
					<li key={key}>{point}</li>
				))}
			</ul>
		</div>
	);
};
