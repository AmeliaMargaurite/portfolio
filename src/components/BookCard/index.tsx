import React from "react";

type WorksType = {
	work: {
		subtitle?: string;
		description?: { type: string; value: string };
		title?: string;
		covers?: string[];
		first_publish_date?: string;
		authors?: { type: { key: string }; author: { key: string } }[];
		dewey_number: string[];
		subjects: string[];
		created: { type: string; value: string };
	};
};

export const BookCard = ({ work }: WorksType) => {
	const covers = work.covers ?? null;
	return (
		<div className="book__card">
			<p>
				Title: <span>{work?.title ?? "Unknown"}</span>
			</p>
			<p>
				First published: <span>{work?.first_publish_date ?? "Unknown"} </span>
			</p>
			{/* <p>
				Description: <span>{work?.description?.value ?? "Unknown"}</span>
			</p> */}
			{covers ? (
				<img
					className="image"
					src={`https://covers.openlibrary.org/b/id/${covers[0]}-M.jpg`}
				/>
			) : (
				<p className="image">No image available</p>
			)}
		</div>
	);
};
