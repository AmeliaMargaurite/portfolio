import React from "react";
import { Skill } from "../../types/SkillsTypes";

interface SkillPillProps {
	skill: Skill;
}

export default function SkillPill({ skill }: SkillPillProps) {
	return <span className="pill">{skill}</span>;
}
