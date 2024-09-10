'use client';

import { useAtom } from 'jotai';
import { filteredSearchPosts } from '~/atom/filteredSearchPosts';
import { cn } from '~/lib/utils';
import type { POSTS_QUERYResult } from '~/types/PostsQueryResult.type';
import { ArticleCard } from '../ui/ArticleCard';

type Props = {
	posts: POSTS_QUERYResult;
};

export function BlogList({ posts }: Props) {
	const [filteredPosts] = useAtom(filteredSearchPosts);
	const finalData = filteredPosts.length > 0 ? filteredPosts : posts;

	const featuredPost = finalData.find((post) => post.featured);

	return (
		<div className="flex flex-col md:grid md:grid-cols-3 md:gap-[1.875rem] lg:grid lg:grid-cols-3 lg:gap-[1.875rem]">
			{featuredPost && (
				<div className="mb-[3.75rem] md:col-span-full">
					<ArticleCard post={featuredPost} />
				</div>
			)}
			{finalData.map(
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
