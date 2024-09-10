import type { ImageAsset } from 'sanity';
import type { Slug } from 'sanity.types';

export type POST_QUERYResult = {
	_id: string;
	title: string;
	slug: Slug;
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
	};
	body: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: 'span';
			_key: string;
		}>;
		style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
		listItem?: 'bullet';
		markDefs?: Array<{
			href?: string;
			_type: 'link';
			_key: string;
		}>;
		level?: number;
		_type: 'block';
		_key: string;
	}>;
	publishedAt: string;
	categories: Array<{
		title: string;
	}>;
};
