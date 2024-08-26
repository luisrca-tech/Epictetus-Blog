/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

export declare const internalGroqTypeReferenceTo: unique symbol;

// Source: schema.json
export type SanityImagePaletteSwatch = {
	_type: 'sanity.imagePaletteSwatch';
	background?: string;
	foreground?: string;
	population?: number;
	title?: string;
};

export type SanityImagePalette = {
	_type: 'sanity.imagePalette';
	darkMuted?: SanityImagePaletteSwatch;
	lightVibrant?: SanityImagePaletteSwatch;
	darkVibrant?: SanityImagePaletteSwatch;
	vibrant?: SanityImagePaletteSwatch;
	dominant?: SanityImagePaletteSwatch;
	lightMuted?: SanityImagePaletteSwatch;
	muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
	_type: 'sanity.imageDimensions';
	height?: number;
	width?: number;
	aspectRatio?: number;
};

export type SanityFileAsset = {
	_id: string;
	_type: 'sanity.fileAsset';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	source?: SanityAssetSourceData;
};

export type Geopoint = {
	_type: 'geopoint';
	lat?: number;
	lng?: number;
	alt?: number;
};

export type Post = {
	_id: string;
	_type: 'post';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	author?: {
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		[internalGroqTypeReferenceTo]?: 'author';
	};
	mainImage?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		alt?: string;
		_type: 'image';
	};
	categories?: Array<{
		_ref: string;
		_type: 'reference';
		_weak?: boolean;
		_key: string;
		[internalGroqTypeReferenceTo]?: 'category';
	}>;
	publishedAt?: string;
	body?: Array<
		| {
				children?: Array<{
					marks?: Array<string>;
					text?: string;
					_type: 'span';
					_key: string;
				}>;
				style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
				listItem?: 'bullet';
				markDefs?: Array<{
					href?: string;
					_type: 'link';
					_key: string;
				}>;
				level?: number;
				_type: 'block';
				_key: string;
		  }
		| {
				asset?: {
					_ref: string;
					_type: 'reference';
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
				};
				hotspot?: SanityImageHotspot;
				crop?: SanityImageCrop;
				alt?: string;
				_type: 'image';
				_key: string;
		  }
	>;
	description?: string;
	featured?: boolean;
};

export type Author = {
	_id: string;
	_type: 'author';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	name?: string;
	slug?: Slug;
	image?: {
		asset?: {
			_ref: string;
			_type: 'reference';
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		alt?: string;
		_type: 'image';
	};
	bio?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: 'span';
			_key: string;
		}>;
		style?: 'normal';
		listItem?: never;
		markDefs?: Array<{
			href?: string;
			_type: 'link';
			_key: string;
		}>;
		level?: number;
		_type: 'block';
		_key: string;
	}>;
	role?: string;
};

export type Slug = {
	_type: 'slug';
	current?: string;
	source?: string;
};

export type Category = {
	_id: string;
	_type: 'category';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	description?: string;
};

export type BlockContent = Array<
	| {
			children?: Array<{
				marks?: Array<string>;
				text?: string;
				_type: 'span';
				_key: string;
			}>;
			style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
			listItem?: 'bullet';
			markDefs?: Array<{
				href?: string;
				_type: 'link';
				_key: string;
			}>;
			level?: number;
			_type: 'block';
			_key: string;
	  }
	| {
			asset?: {
				_ref: string;
				_type: 'reference';
				_weak?: boolean;
				[internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			alt?: string;
			_type: 'image';
			_key: string;
	  }
>;

export type SanityImageCrop = {
	_type: 'sanity.imageCrop';
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
};

export type SanityImageHotspot = {
	_type: 'sanity.imageHotspot';
	x?: number;
	y?: number;
	height?: number;
	width?: number;
};

export type SanityImageAsset = {
	_id: string;
	_type: 'sanity.imageAsset';
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	metadata?: SanityImageMetadata;
	source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
	_type: 'sanity.assetSourceData';
	name?: string;
	id?: string;
	url?: string;
};

export type SanityImageMetadata = {
	_type: 'sanity.imageMetadata';
	location?: Geopoint;
	dimensions?: SanityImageDimensions;
	palette?: SanityImagePalette;
	lqip?: string;
	blurHash?: string;
	hasAlpha?: boolean;
	isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
	| SanityImagePaletteSwatch
	| SanityImagePalette
	| SanityImageDimensions
	| SanityFileAsset
	| Geopoint
	| Post
	| Author
	| Slug
	| Category
	| BlockContent
	| SanityImageCrop
	| SanityImageHotspot
	| SanityImageAsset
	| SanityAssetSourceData
	| SanityImageMetadata;
// Source: ./src/sanity/lib/queries.ts
// Variable: POSTS_QUERY
// Query: *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {    featured,    _id,    description,    title,    publishedAt,    "slug": slug.current,    mainImage { ..., asset -> {..., metadata}},    author -> {image { ..., asset -> {..., metadata}}, name, role},    categories[]->{      title    },}
export type POSTS_QUERYResult = Array<{
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
	}> | null;
}>;
// Variable: POST_QUERY
// Query: *[_type == "post" && slug.current == $slug][0]{  _id,  title,  slug,  image,}
export type POST_QUERYResult = {
	_id: string;
	title: string;
	slug: Slug;
	image: null;
};

// Query TypeMap
import '@sanity/client';
import type { ImageAsset } from 'sanity';
declare module '@sanity/client' {
	interface SanityQueries {
		'*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {\n    featured,\n    _id,\n    description,\n    title,\n    publishedAt,\n    "slug": slug.current,\n    mainImage { ..., asset -> {..., metadata}},\n    author -> {image { ..., asset -> {..., metadata}}, name, role},\n    categories[]->{\n      title\n    },\n}': POSTS_QUERYResult;
		'*[_type == "post" && slug.current == $slug][0]{\n  _id,\n  title,\n  slug,\n  image,\n}': POST_QUERYResult;
	}
}
