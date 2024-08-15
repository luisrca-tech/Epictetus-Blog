import { cn } from '~/lib/utils';
import { PostContentMock } from '~/mock/PostContentMock';
import { ArticleCard } from '../ui/ArticleCard';

export function PostsBlog() {
	return (
		<div className="flex flex-col md:grid md:grid-cols-3 md:gap-[1.875rem] lg:grid lg:grid-cols-3 lg:gap-[1.875rem]">
			{PostContentMock.map((post) => (
				<div
					key={post.id}
					className={cn(`${post.featured && 'md:col-span-full'} mb-[3.75rem]`)}
				>
					<ArticleCard post={post} />
				</div>
			))}
		</div>
	);
}
