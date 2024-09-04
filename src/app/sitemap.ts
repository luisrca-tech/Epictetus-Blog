import type { MetadataRoute } from 'next';
import { client } from '~/sanity/lib/client';
import { routeQuery } from '~/sanity/lib/queries';

const url = process.env.VERCEL_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const routes = await client.fetch(routeQuery);

	const sitemapEntries = routes.map(
		(post: { slug: string; _updatedAt: string }) => ({
			url: `${url}/post/${post.slug}`,
			lastModified: new Date(post._updatedAt),
			changeFrequency: 'monthly',
			priority: 0.8
		})
	);

	return [
		{
			url: url ?? '',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		...sitemapEntries
	];
}
