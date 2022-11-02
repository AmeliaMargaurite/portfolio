import React from "react";
import { TypographyEmphasisType } from "../../types/TypographyTypes";

interface ConditionalWrapperProps {
	children: any;
}

export const ConditionalWrapper = ({
	children,
	...props
}: ConditionalWrapperProps & TypographyEmphasisType) => {
	const conditions = () => [
		{
			condition: props?.bold,
			wrapper: (e: boolean | undefined) => <strong>{e}</strong>,
		},
		{
			condition: props?.italic,
			wrapper: (e: boolean | undefined) => <em>{e}</em>,
		},
		{
			condition: props?.underlined,
			wrapper: (e: boolean | undefined) => <u>{e}</u>,
		},
	];

	let response = children;
	conditions().forEach(({ condition, wrapper }, key) =>
		condition ? (response = wrapper(response)) : response
	);

	return response;
};
