import React, { useEffect, useState, useRef, useCallback } from "react";
import { HeadFC } from "gatsby";
import { Layout } from "../../components/Layout";
import { throttleFunction } from "../../helpers/throttleFunction";
import { BookCard } from "../../components/BookCard";

const tempUrl = "https://openlibrary.org/search/authors.json?q=twain";
const limit = "&limit=50";
const authorSearchURL = (term: string) =>
	`https://openlibrary.org/search/authors.json?q=${term}${limit}`;
const authorsBooksSearchURL = (key: string) =>
	`https://openlibrary.org/authors/${key}/works.json`;
const delay = 1500;

const debounceAndThrottle = () => {
	const [authors, setAuthors] = useState<any>(null);
	const [works, setWorks] = useState<any>(null);
	const [countCalls, setCountCalls] = useState(0);
	const searchRef = useRef<any>(null);

	const ref = { countCalls };
	const _ref = useRef(ref);
	_ref.current = ref;

	const handleOnChange = useCallback(
		throttleFunction(() => {
			if (searchRef && searchRef.current && searchRef.current?.value) {
				const { countCalls } = _ref.current;
				setCountCalls(countCalls + 1);

				const searchTerm = searchRef.current?.value;
				const url = authorSearchURL(searchTerm);
				fetchAllAuthors(url);
			}
		}, delay),
		[]
	);

	const fetchAllAuthors = async (url: string) => {
		fetch(url)
			.then((resp) => resp.json())
			.then((json) => mutateAuthors(json))
			.then((mutatedauthors) => setAuthors(mutatedauthors));
	};

	const fetchAuthorsBooks = async (url: string) => {
		fetch(url)
			.then((resp) => resp.json())
			.then((json) => setWorks(json));
	};

	const handleAuthorClick = (keys: string[]) => {
		for (let i = 0, n = keys.length; i < n; i++) {
			fetchAuthorsBooks(authorsBooksSearchURL(keys[i]));
		}
		setAuthors(null);
	};

	return (
		<Layout className="garden__page debounce-throttle">
			<p></p>
			<h3>API Call Count: {countCalls}</h3>
			<p className="debounce-throttle__description">
				Whilst knowing the need and use of debounce and throttle, I haven't
				found myself needing to implement either in the past. So I decided to
				start looking into it myself and create this search. This uses
				throttling on the input below so that calls are only sent per {delay}{" "}
				milliseconds.
				<br />
				<br />
				Of course in the making of this I must have hit this API a good number
				of times...
				<br />
				<br />
				This is incomplete at the moment, however in the theme of 'learning in
				public', posting online now seems like the way to go.
				<br />
				<br />
				All API calls are thanks to{" "}
				<a href="https://openlibrary.org/developers/api">Open Library</a>. They
				have simple documentation, easy to use, and truly great a resource.
			</p>
			<div className="search__panel">
				<p>
					Enter author name <em>(exact matches only)</em>
				</p>
				<input
					type="text"
					ref={searchRef}
					onChange={handleOnChange}
					className={`input search ${authors ? "results" : ""}`}
					onClick={handleOnChange}
					onBlur={() => setTimeout(() => setAuthors(null), 100)}
				/>
				{authors && (
					<ul className="search__result">
						{Object.keys(authors).map((name: string, key: number) => {
							const keys = authors[name];
							return (
								<li key={key} onClick={() => handleAuthorClick(keys)}>
									{name}
								</li>
							);
						})}
					</ul>
				)}
			</div>
			{works && (
				<ul className="works__results">
					{works?.entries &&
						works.entries.map((work: any, key: number) => {
							return <BookCard key={key} work={work}></BookCard>;
						})}
				</ul>
			)}
		</Layout>
	);
};

export default debounceAndThrottle;

export const Head: HeadFC = () => <title>Debounce and Throttle</title>;

// Helpers

const mutateAuthors = (authors: any) => {
	const docs = authors?.docs ?? null;

	if (!docs) return;

	type AuthorObj = string[];
	type UniqueAuthorsObj = { [key: string]: AuthorObj };

	const uniqueAuthors: UniqueAuthorsObj = {};
	for (let i = 0, n = docs.length; i < n; i++) {
		const doc: { key: string; type: string; name: string } = docs[i];
		const name = doc?.name ?? null;
		if (name && uniqueAuthors && uniqueAuthors[name]) {
			uniqueAuthors[doc.name].push(doc.key);
		} else {
			uniqueAuthors[doc.name] = [doc.key];
		}
	}

	return uniqueAuthors;
};
