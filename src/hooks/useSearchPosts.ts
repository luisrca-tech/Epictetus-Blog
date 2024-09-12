import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { filteredSearchPosts } from '~/atom/filteredSearchPosts';
import { searchTerm } from '~/atom/searchTerm';
import { client } from '~/sanity/lib/client';
import { POSTS_QUERY, SEARCH_POSTS_QUERY } from '~/sanity/lib/queries';
import type { POSTS_QUERYResult } from '~/types/PostsQueryResult.type';
import type { SEARCH_POSTS_QUERYResult } from '~/types/SearchPostsQueryResult.type';

export function useSearchPosts() {
	const [, setFilteredSearchPosts] = useAtom(filteredSearchPosts);
	const [searchValue] = useAtom(searchTerm);
	const [hasResults, setHasResults] = useState(true);

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;
		const fetchPosts = async () => {
			if (searchValue) {
				const filteredPosts = await client.fetch<SEARCH_POSTS_QUERYResult>(
					SEARCH_POSTS_QUERY,
					{
						title: `*${searchValue}*`
					},
					{ signal, next: { tags: ['blog'] } }
				);
				setFilteredSearchPosts(filteredPosts);
				setHasResults(filteredPosts.length > 0);
			} else {
				const allPosts = await client.fetch<POSTS_QUERYResult>(
					POSTS_QUERY,
					{},
					{ next: { tags: ['blog'] } }
				);
				setFilteredSearchPosts(allPosts);
				setHasResults(allPosts.length > 0);
			}
		};

		fetchPosts();

		return () => {
			abortController.abort();
		};
	}, [searchValue, setFilteredSearchPosts]);

	return hasResults;
}
