export interface LinkType {
	url: string;
	text: string;
	description: string;
	color: string;
	icon: string;
	skills: Array<string>;
}

export type LinksType = Array<LinkType>;
