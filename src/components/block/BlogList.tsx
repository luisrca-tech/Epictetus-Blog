'use client';

import type { POSTS_QUERYResult } from 'sanity.types';
import { cn } from '~/lib/utils';
import { client } from '~/sanity/lib/client';
import { POSTS_QUERY } from '~/sanity/lib/queries';
import { ArticleCard } from '../ui/ArticleCard';

export async function BlogList() {
	const posts = await client.fetch<POSTS_QUERYResult>(POSTS_QUERY);
	const featuredPost = posts.find((post) => post.featured);

	return (
		<div className="flex flex-col md:grid md:grid-cols-3 md:gap-[1.875rem] lg:grid lg:grid-cols-3 lg:gap-[1.875rem]">
			{featuredPost && (
				<div className="mb-[3.75rem] md:col-span-full">
					<ArticleCard post={featuredPost} />
				</div>
			)}
			{posts.map(
				(post) =>
					!post.featured && (
						<div
							key={post._id}
							className={cn(
								`${post.featured && 'md:col-span-full'} mb-[3.75rem]`
							)}
						>
							<ArticleCard post={post} />
						</div>
					)
			)}
		</div>
	);
}
