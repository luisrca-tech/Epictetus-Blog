import type { ImageAsset } from 'sanity';

export type POSTS_BY_AUTHOR_QUERYResult = Array<{
	featured: boolean;
	_id: string;
	description: string;
	title: string;
	publishedAt: string;
	slug: string;
	mainImage: {
		asset: ImageAsset;
		alt: string;
	};
	author: {
		image: {
			asset: ImageAsset;
			alt: string;
		};
		name: string;
		role: string;
		slug: string;
	};
	categories: Array<{
		title: string | null;
		slug: string | null;
	}>;
}>;
