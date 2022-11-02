export interface JobType {
	company: string;
	jobTitle: string;
	timeRange: string;
	skills?: Array<string>;
	responsibilities: Array<string>;
}

export type JobsType = Array<JobType>;
