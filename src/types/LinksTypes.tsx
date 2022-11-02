import { SkillsType } from "./SkillsTypes";

export interface LinkType {
	url: string;
	text: string;
	description: string;
	color: string;
	icon: string;
	skills: SkillsType;
}

export type LinksType = Array<LinkType>;
