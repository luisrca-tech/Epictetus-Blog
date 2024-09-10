import { ArticleCard } from '~/components/ui/ArticleCard';
import { Container } from '~/components/ui/Container';
import { cn } from '~/lib/utils';
import { client } from '~/sanity/lib/client';
import {
	CATEGORIES_SLUG_QUERY,
	POSTS_BY_CATEGORY_QUERY
} from '~/sanity/lib/queries';
import type { POSTS_BY_CATEGORY_QUERYResult } from '~/types/PostsByCategoryResult.type';

export async function generateStaticParams() {
	const categories = await client.fetch(CATEGORIES_SLUG_QUERY);
	return categories.map((category: { slug: { current: string } }) => ({
		slug: category.slug.current
	}));
}

type Props = {
	params: {
		slug: string;
	};
};

export default async function ArticleByCategory({ params }: Props) {
	const { slug } = params;

	const PostsByCategory = await client.fetch<POSTS_BY_CATEGORY_QUERYResult>(
		POSTS_BY_CATEGORY_QUERY,
		{
			category: slug
		},
		{ next: { tags: ['blog'] } }
	);

	const featuredPost = PostsByCategory.find((post) => post.featured);

	return (
		<Container>
			<div className="flex flex-col md:grid md:grid-cols-3 md:gap-[1.875rem] lg:grid lg:grid-cols-3 lg:gap-[1.875rem]">
				{featuredPost && (
					<div className="mb-[3.75rem] md:col-span-full">
						<ArticleCard post={featuredPost} />
					</div>
				)}
				{PostsByCategory.map(
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
		</Container>
	);
}
