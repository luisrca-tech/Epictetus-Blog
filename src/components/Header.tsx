'use client';

import { client } from '~/sanity/lib/client';
import { CATEGORIES_FEATURED_QUERY } from '~/sanity/lib/queries';
import type { CATEGORIES_FEATURED_QUERYResult } from '~/types/CategoriesFeaturedResult.type';
import { HeaderOptions } from './HeaderOptions';

export async function Header() {
	const categories = await client.fetch<CATEGORIES_FEATURED_QUERYResult>(
		CATEGORIES_FEATURED_QUERY
	);

	return (
		<header>
			<HeaderOptions categories={categories} />
		</header>
	);
}
