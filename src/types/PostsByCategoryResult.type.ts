import type { ImageAsset } from 'sanity';

export type POSTS_BY_CATEGORY_QUERYResult = Array<{
	featured: boolean | null;
	_id: string;
	description: string | null;
	title: string | null;
	publishedAt: string | null;
	slug: string | null;
	mainImage: {
		asset: ImageAsset;
		alt: string;
	};
	author: {
		image: {
			asset: ImageAsset;
			alt: string;
		};
		name: string | null;
		role: string | null;
	} | null;
	categories: Array<{
		title: string | null;
		slug: null;
	}> | null;
}>;
