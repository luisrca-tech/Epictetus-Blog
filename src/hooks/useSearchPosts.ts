import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { filteredSearchPosts } from '~/atom/filteredSearchPosts';
import { client } from '~/sanity/lib/client';
import { POSTS_QUERY, SEARCH_POSTS_QUERY } from '~/sanity/lib/queries';
import type { POSTS_QUERYResult } from '~/types/PostsQueryResult.type';
import type { SEARCH_POSTS_QUERYResult } from '~/types/SearchPostsQueryResult.type';

export function useSearchPosts(searchTerm: string) {
	const [, setFilteredSearchPosts] = useAtom(filteredSearchPosts);

	useEffect(() => {
		const fetchPosts = async () => {
			if (searchTerm) {
				const filteredPosts = await client.fetch<SEARCH_POSTS_QUERYResult>(
					SEARCH_POSTS_QUERY,
					{
						title: `*${searchTerm}*`
					}
				);
				setFilteredSearchPosts(filteredPosts);
			} else {
				const allPosts = await client.fetch<POSTS_QUERYResult>(POSTS_QUERY);
				setFilteredSearchPosts(allPosts);
			}
		};

		fetchPosts();
	}, [searchTerm, setFilteredSearchPosts]);
}
