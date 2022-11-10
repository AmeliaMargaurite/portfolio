export interface ProjectProps {
	title: string;
	slug: string;
	img_src: string;
	img_alt: string;
	liveURL?: string;
	gitHubURL?: string;
	description: string;
	bulletPoints: Array<string>;
	languages: Array<string>;
	challenge: string;
	goal: string;
	process: string;
	results: string;
	reflection: string;
	icon: string;
	old?: true;
}
export interface ProjectType {
	[index: string]: ProjectProps;
}

export type ProjectsType = ProjectType;

// export interface ProjectDataTypes {
// 	problem: string;
// 	goal: string;
// 	process: string;
// 	results: string;
// 	reflection: string;
// }
