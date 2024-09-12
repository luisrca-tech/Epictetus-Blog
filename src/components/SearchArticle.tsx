'use client';

import { useAtom } from 'jotai';
import { searchTerm } from '~/atom/searchTerm';

export function SearchArticle() {
	const [searchValue, setSearchValue] = useAtom(searchTerm);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Search"
				className="rounded-[6.25rem] bg-base-200 p-[0.5625rem] pl-9 text-base text-white"
				value={searchValue}
				onChange={handleSearch}
			/>
		</div>
	);
}
