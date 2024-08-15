import type { StaticImageData } from 'next/image';

export type PostContent = {
	slug: string;
	id: number;
	image: StaticImageData;
	category: string;
	publishedAt: string;
	title: string;
	description: string;
	avatar: StaticImageData;
	author: string;
	authorRole: string;
	featured: boolean;
};
