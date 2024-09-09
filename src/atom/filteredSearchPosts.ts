import { atom } from 'jotai';
import type { SEARCH_POSTS_QUERYResult } from '~/types/SearchPostsQueryResult.type';

export const filteredSearchPosts = atom<SEARCH_POSTS_QUERYResult>([]);
