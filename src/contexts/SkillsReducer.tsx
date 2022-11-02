import React from "react";
import { SkillsType } from "../types/SkillsTypes";

export type StateTypes = { skills: SkillsType | null } | null;

export type ActionTypes =
	| {
			type: "init_stored";
			value: { skills: SkillsType };
	  }
	| { type: "update_skills"; value: null };

export const initialSkillsState = { skills: null };

export const SkillsReducer = (
	state: StateTypes,
	action: ActionTypes
): StateTypes => {
	switch (action.type) {
		case "init_stored": {
			console.log(action, "hereeeee");
			return action.value;
		}
		case "update_skills": {
			console.log(state, action, "update_skills");
			return state;
		}
		default: {
			return null;
		}
	}
};
