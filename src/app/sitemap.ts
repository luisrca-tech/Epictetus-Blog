import type { MetadataRoute } from 'next';

const url = process.env.VERCEL_URL || 'https://default-url.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: url,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		}
	];
}
