'use client';

import { useState } from 'react';
import { useSearchPosts } from '~/hooks/useSearchPosts';

export function SearchArticle() {
	const [searchTerm, setSearchTerm] = useState('');

	useSearchPosts(searchTerm);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<input
			type="text"
			placeholder="Search"
			className="rounded-[6.25rem] bg-base-200 p-[0.5625rem] pl-9 text-base text-white"
			value={searchTerm}
			onChange={handleSearch}
		/>
	);
}
