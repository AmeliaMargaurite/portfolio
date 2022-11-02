import React from "react";

interface ResumeSectionProps {
	className: string;
	children: any;
	last?: true;
}

export function ResumeSection({
	className,
	children,
	last,
}: ResumeSectionProps) {
	return (
		<section className={`resume__section ${className} ${last ? "last" : ""}`}>
			{children}
		</section>
	);
}
